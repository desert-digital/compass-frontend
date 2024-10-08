// Core

import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

// Material

import { MatSnackBar } from '@angular/material/snack-bar';

// Amplify

import { generateClient } from '@aws-amplify/api';

// Local

import { PendingService } from 'src/app/services/pending.service';
import { FleetService } from 'src/app/services/fleet.service';
import { StaffService } from 'src/app/services/staff.service';
import { WorkflowModelsService } from 'src/app/services/workflow-models.service';
import { WorkflowService } from 'src/app/services/workflow.service';

import { startWorkflow } from 'src/graphql/mutations';
import { PendingEvent, Vessel, Staff, WorkflowModel } from 'src/API';


@Component({
  selector: 'app-workflow',
  templateUrl: './assign-workflow.component.html',
  styleUrls: ['./assign-workflow.component.scss']
})

export class AssignWorkflowComponent {

  workflowModel: WorkflowModel;
  staff: Staff[];
  event: PendingEvent;
  vesselList: Vessel[];

  boatSelected: boolean = false;
  workflowForm: FormGroup;

  isLinear = true;

  client = generateClient();

  constructor(private activatedRoute: ActivatedRoute,
    private _pendingService: PendingService,
    private _fleetService: FleetService,
    private _staffService: StaffService,
    private _workflowModelService: WorkflowModelsService,
    private _workflowService: WorkflowService,
    private _snackBar: MatSnackBar,
    private _formBuilder: FormBuilder) {
    this.workflowForm = this._formBuilder.group({
      vessels: new FormControl(['', Validators.required]),
      steps: this._formBuilder.array([])
    })
  }

  async ngOnInit() {
    this.vesselList = await this._fleetService.getVessels();
    this.staff = await this._staffService.getStaff();
    this.activatedRoute.paramMap.subscribe(async (params) => {
      const eventId = params.get('eventId');
      if (eventId) {
        this.event = await this._pendingService.getPendingItem(eventId);
      }
    });
    this.vessels.setValue({
      vessels: this.vesselList
    });
  }

  get vessels() {
    return this.workflowForm.controls['vessels'] as FormControl;
  }

  get steps() {
    return this.workflowForm.controls['steps'] as FormArray;
  }

  async onVesselChanged(event: any) {
    const vessel = await this._fleetService.getVesselById(event.source.value);
    this.workflowModel = await this._workflowModelService.getWorkflowModelById(vessel.vesselDefaultWorkflowId);

    for (let i=0; i < this.workflowModel.checklistModels.items.length; i++) {
      const stepForm: FormGroup = this._formBuilder.group({
        assignee: new FormControl(['', Validators.required])
      });
      stepForm.setValue({ assignee: this.staff });
      this.steps.push(stepForm);
    }
    this.boatSelected = true;
  }

  async onStartWorkflowPressed() {

    // create the Workflow
    const workflow = await this._workflowService.createWorkflowFromModel(
      this.event,
      this.workflowModel,
      this.steps
    );

    try {
      await this.client.graphql({
        query: startWorkflow,
        variables: {
          workflowId: workflow.id

        }
      });
      this._snackBar.open('Created the Workflow', 'OK', { duration: 3000 });
    }
    catch {
      this._snackBar.open('An Error Occured', 'OK', { duration: 3000 });
    }
  }
}
