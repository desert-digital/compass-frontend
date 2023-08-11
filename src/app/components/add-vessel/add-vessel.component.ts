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

  compositeForm: FormGroup;
  vesselForm: FormGroup;
  ownerForm: FormGroup;

  owner: String;
  owners: Owner[] = [];

  workflows: WorkflowModel[] = [];
  defaultWorkflow: String;

  vesselType: string; 
  vesselTypes: string[] = ['Sail', 'Power', 'Paddle'];

  ownerType: string = 'new';

  constructor(private router: Router,
    private formBuilder: FormBuilder,
    private _workflowModelService: WorkflowModelsService,
    private _ownersService: OwnersService,
    private _fleetService: FleetService,
    private _snackBar: MatSnackBar) {
    this.compositeForm = this.formBuilder.group({
      vesselForm: this.formBuilder.group({
        name: ['', Validators.required],
        documentNumber: ['', Validators.required],
        vesselType: ['', Validators.required]
      }), ownerForm: this.formBuilder.group({
        ownerName: [''],
        ownerEmail: [''],
        ownerPhone: ['']
      })
    });
  }

  async ngOnInit() {
    this.workflows = await this._workflowModelService.getWorkflowModels();
    this.owners = await this._ownersService.getOwners();
  }

  ngAfterViewInit() {
  }

  onVesselTypeChanged(event: any) {
    this.compositeForm.patchValue({ vesselForm: { vesselType: event.value }} );
  }

  onWorkflowChanged(event: any) {
    this.defaultWorkflow = event.value;
  }

  onOwnerChanged(event: any) {
    this.owner = event.value;
  }

  onOwnerTypeChanged(event: any) {
    this.ownerType = event.value;
  }

  async onAddNewVesselPressed(formDirective: FormGroupDirective) {
    if (this.ownerType === 'new') {
      try {
        const newOwner = await this._ownersService.createOwner(this.compositeForm.value.ownerForm);

        await this._fleetService.createVessel(
          this.compositeForm.value.vesselForm,
          newOwner.id,
          this.defaultWorkflow).then(() => {
            this._snackBar.open('Created a new vessel', 'OK', { duration: 3000 });
            this.compositeForm.reset();
            formDirective.resetForm();
          });
      } catch (error) {
        console.log(JSON.stringify(error));
        this._snackBar.open('Error creating the vessel', 'OK', { duration: 3000 });
      }
    }
    else {
      try {
        await this._fleetService.createVessel(
          this.compositeForm.value.vesselForm,
          this.owner,
          this.defaultWorkflow,).then(() => {
            this._snackBar.open('Created a new vessel', 'OK', { duration: 3000 });
            this.compositeForm.reset();
            formDirective.resetForm();
          });
      } catch (error) {
        console.log(JSON.stringify(error));
        this._snackBar.open('Error creating the vessel', 'OK', { duration: 3000 });
      }
    }
  }

  onCancelPressed() {
    this.router.navigate(['main/fleet']);
  }
}
