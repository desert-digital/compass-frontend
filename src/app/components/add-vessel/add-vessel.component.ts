// Core

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, FormGroupDirective, Validators } from '@angular/forms';

// Material

import { MatSnackBar } from '@angular/material/snack-bar';

// Local

import { Vessel, Owner, WorkflowModel } from '../../API.service';
import { WorkflowModelsService } from 'src/app/services/workflow-models.service';
import { OwnersService } from 'src/app/services/owners.service';
import { FleetService } from 'src/app/services/fleet.service'

@Component({
  selector: 'app-add-vessel',
  templateUrl: './add-vessel.component.html',
  styleUrls: ['./add-vessel.component.scss']
})
export class AddVesselComponent {

  vesselName: String = '';
  vesselDocumentNumber: String = '';

  vesselForm: FormGroup;

  owner: Owner;
  owners: Owner[] = [];

  workflows: WorkflowModel[] = [];
  defaultWorkflow: WorkflowModel;

  vesselTypes: string[] = ['Sail', 'Power', 'Paddle'];

  ownerType: string = 'new';

  constructor(private router: Router, 
    private formBuilder: FormBuilder,
    private _workflowModelService: WorkflowModelsService,
    private _ownersService: OwnersService,
    private _fleetService: FleetService,
    private _snackBar: MatSnackBar) {
    this.vesselForm = this.formBuilder.group({
      name: ['', Validators.required],
      documentNumber: ['', Validators.required],
      vesselType: ['', Validators.required]
    });
  }

  async ngOnInit() {
    this.workflows = await this._workflowModelService.getWorkflowModels(); 
    this.owners = await this._ownersService.getOwners(); 
  }

  ngAfterViewInit() {
  }

  onWorkflowChanged(event: any){
    this.defaultWorkflow = event.value;
  }

  onOwnerChanged(event: any){
    this.owner = event.value;
  }

  onOwnerTypeChanged(event: any) {
    this.ownerType = event.value;
    console.log(this.ownerType);
    console.log(event.value);
  }

  async onAddNewVesselPressed(item: Vessel, formDirective: FormGroupDirective) {
    await this._fleetService.createVessel(item, this.defaultWorkflow, this.owner).then(() => {
      this._snackBar.open('Created a new vessel', 'OK', { duration: 3000 });
      this.vesselForm.reset();
      formDirective.resetForm();
    });
  } catch(error) {
    this._snackBar.open('Error creating the vessel', 'OK', { duration: 3000 });
  }

  onCancelPressed() {
    this.router.navigate(['main/fleet']);
  }
}
