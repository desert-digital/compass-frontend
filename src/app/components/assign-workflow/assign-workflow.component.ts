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
    this.staff = await this._staffService.listStaffByStatus();
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
    return this.workflowForm.get('vessels') as FormControl;
  }

  // Getter for the steps FormArray
  get steps() {
    return this.workflowForm.get('steps') as FormArray;
  }

  getAssignee(index: number) {
    return this.steps.at(index).get('assignee');;
  }

  async onVesselChanged(event: any) {
    const vessel = await this._fleetService.getVesselById(event.source.value);
    this.workflowModel = await this._workflowModelService.getWorkflowModelById(vessel.vesselDefaultWorkflowId);

    this.initializeSteps();
    this.boatSelected = true;
  }

  // Initialize the form with steps based on your workflow model
  initializeSteps() {
    // Clear existing steps first
    while (this.steps.length) {
      this.steps.removeAt(0);
    }

    // Add a form group for each checklist item
    this.workflowModel.checklistModels.items.forEach(() => {
      this.addStep();
    });
  }

  // Method to add a step to the form
  addStep() {
    const stepForm = this._formBuilder.group({
      assignee: ['', Validators.required]
    });
    this.steps.push(stepForm);
  }

  async onStartWorkflowPressed() {
    if (this.workflowForm.valid) {
      try {
        // create the Workflow
        const workflow = await this._workflowService.createWorkflowFromModel(
          this.event,
          this.workflowModel,
          this.steps
        );

        // start the workflow
        await this.client.graphql({
          query: startWorkflow,
          variables: {
            workflowId: workflow.id
          }
        });

        this._snackBar.open('Created the Workflow', 'OK', { duration: 3000 });
      } catch (error) {
        console.error('Error creating workflow:', error);
        this._snackBar.open('An Error Occurred', 'OK', { duration: 3000 });
      }
    } else {
      // Mark all fields as touched to trigger validation messages
      Object.keys(this.workflowForm.controls).forEach(key => {
        const control = this.workflowForm.get(key);
        control?.markAsTouched();
      });
    }
  }
}
