// Core

import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, FormGroupDirective, Validators } from '@angular/forms';

// Material

import { MatSnackBar } from '@angular/material/snack-bar';
import { MatCheckbox } from '@angular/material/checkbox';

// Local

import { Vessel, Owner, WorkflowModel } from '../../API.service';
import { WorkflowModelsService } from 'src/app/services/workflow-models.service';
import { OwnersService } from 'src/app/services/owners.service';
import { FleetService } from 'src/app/services/fleet.service';

@Component({
  selector: 'app-edit-vessel',
  templateUrl: './edit-vessel.component.html',
  styleUrls: ['./edit-vessel.component.scss']
})
export class EditVesselComponent {

  vesselForm: FormGroup;

  workflows: WorkflowModel[] = [];
  selectedWorkflowId: string;

  owners: Owner[] = [];
  selectedOwner: string = '';

  vesselTypes: string[] = ['Sail', 'Power', 'Paddle'];

  ownerType: string = 'new';
  
  constructor(private formBuilder: FormBuilder,
    private route: ActivatedRoute, 
    private router: Router,
    private _workflowModelService: WorkflowModelsService,
    private _ownersService: OwnersService, 
    private _fleetService: FleetService, 
    private _snackBar: MatSnackBar) {
    this.vesselForm = this.formBuilder.group({
      id: ['', Validators.required],
      name: ['', Validators.required],
      documentNumber: ['', Validators.required],
      vesselType: ['', Validators.required],
      vesselDefaultWorkflowId: ['', Validators.required],
      ownerBoatsId: ['', Validators.required]
    });
  }
  
  async ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    const vessel = await this._fleetService.getVesselById(id); 

    this.selectedOwner = vessel.ownerBoatsId;
    this.selectedWorkflowId = vessel.defaultWorkflow.id;

    this.workflows = await this._workflowModelService.getWorkflowModels();
    this.owners = await this._ownersService.getOwners();

    this.vesselForm.setValue({
      id: vessel.id,
      name: vessel.name,
      documentNumber: vessel.documentNumber,
      vesselType: vessel.vesselType,
      vesselDefaultWorkflowId: vessel.defaultWorkflow.id,
      ownerBoatsId: this.selectedOwner
    }); 
  }
 
  onVesselTypeChanged(event: MatCheckbox) {
    this.vesselForm.patchValue({ vesselForm: { vesselType: event.value }} );
  }

  onWorkflowChanged(event: MatCheckbox) {
    this.vesselForm.patchValue({ vesselForm: { defaultVesselWorkflow: event.value }} );
  }

  onOwnerChanged(event: MatCheckbox) {
    this.vesselForm.patchValue({ vesselForm: { ownerBoatsId: event.value }} );
  }

  async onUpdateVesselPressed(vessel: Vessel, formDirective: FormGroupDirective) {
    try {
      await this._fleetService.updateVessel(vessel).then(() => {
        this._snackBar.open(`Updated ${vessel.name}`, 'OK', {duration: 3000})
        this.vesselForm.reset();
        formDirective.resetForm();
      })
    } catch (error) {
      console.log(JSON.stringify(error.errors));
      this._snackBar.open('An error occured when updating the action', 'OK', {duration: 3000})
    }
  }

  onCancelPressed() {
    this.router.navigate(['main/fleet']);
  }
}
