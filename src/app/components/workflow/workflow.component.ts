// Core

import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

// Local

import { PendingService } from 'src/app/services/pending.service';
import { FleetService } from 'src/app/services/fleet.service';
import { WorkflowModelsService } from 'src/app/services/workflow-models.service';

import { WorkflowModel } from 'src/app/API.service';

@Component({
  selector: 'app-workflow',
  templateUrl: './workflow.component.html',
  styleUrls: ['./workflow.component.scss']
})

export class WorkflowComponent {

  workflow: WorkflowModel;
  event: any;
  vessels: any;

  boatSelected: boolean = false;
  workflowForm: FormGroup;

  isLinear = true;

  constructor(private activatedRoute: ActivatedRoute,
    private _pendingService: PendingService,
    private _fleetService: FleetService,
    private _workflowModelService: WorkflowModelsService,
    private _formBuilder: FormBuilder) {
    this.workflowForm = this._formBuilder.group({
      vessels: ['', Validators.required]
    });
  }

  async ngOnInit() {
    this.vessels = await this._fleetService.getVessels();
    this.activatedRoute.paramMap.subscribe(async (params) => {
      const eventId = params.get('eventId');
      if (eventId) {
        console.log(JSON.stringify(eventId));
        this.event = await this._pendingService.getPendingItem(eventId);
      }
    });
    console.log(JSON.stringify(this.event));
    this.workflowForm.setValue({
      vessels: this.vessels
    });
  }


  async onVesselChanged(event: any) {
    const vessel = await this._fleetService.getVesselById(event.source.value);

    this.workflow = await this._workflowModelService.getWorkflowModelById(vessel.vesselDefaultWorkflowId);
    console.log(JSON.stringify(this.workflow.checklists.items));

    this.boatSelected = true;
  }

  onStartWorkflowPressed() {
  }
}
