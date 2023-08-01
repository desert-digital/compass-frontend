// Core

import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, FormGroupDirective, Validators } from '@angular/forms';

// Material

import { MatSnackBar } from '@angular/material/snack-bar';

// Amplify 

import { ActionModel } from 'src/app/API.service';

// Local

import { ActionModelsService } from 'src/app/services/action-models.service';

@Component({
  selector: 'app-edit-action',
  templateUrl: './edit-action.component.html',
  styleUrls: ['./edit-action.component.scss']
})
export class EditActionComponent {

  actionName: String = '';
  actionCompany: String = '';
  actionDuration: Number = 0;
  actionNotes: String = '';

  actionForm: FormGroup;
  constructor(private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private _actionModelService: ActionModelsService,
    private _snackBar: MatSnackBar) {
    this.actionForm = this.formBuilder.group({
      id: ['', Validators.required],
      company: ['', Validators.required],
      name: ['', Validators.required],
      duration: ['', Validators.required],
      notes: ['',]
    });
  }

  async ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    const actionModel = await this._actionModelService.getActionModelFromId(id);

    this.actionForm.setValue({
      id: actionModel.id,
      name: actionModel.name,
      company: actionModel.company,
      duration: actionModel.duration,
      notes: actionModel.notes,
    }); 
  }

  async onUpdateActionPressed(actionModel: ActionModel, formDirective: FormGroupDirective) {
    try {
      await this._actionModelService.updateModel(actionModel).then(() => {
        this._snackBar.open(`Updated ${actionModel.name}`, 'OK', {duration: 3000})
        this.actionForm.reset();
        formDirective.resetForm();
      })
    } catch (error) {
      console.log(error.errors);
      this._snackBar.open('An error occured when updating the action', 'OK', {duration: 3000})
    }
  }
}
