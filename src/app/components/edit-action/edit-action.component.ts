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
  actionDuration: Number = 0;
  actionNotes: String = '';
  actionStatus: boolean = false;

  actionForm: FormGroup;
  constructor(private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private _actionModelService: ActionModelsService,
    private _snackBar: MatSnackBar) {
    this.actionForm = this.formBuilder.group({
      id: ['', Validators.required],
      name: ['', Validators.required],
      duration: ['', Validators.required],
      notes: ['',],
      status: ['open', Validators.required]
    });
  }

  async ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    const actionModel = await this._actionModelService.getActionModelFromId(id);

    this.actionForm.setValue({
      id: actionModel.id,
      name: actionModel.name,
      duration: actionModel.duration,
      notes: actionModel.notes,
      status: actionModel.status
    }); 
  }

  async onUpdateActionPressed(action: ActionModel, formDirective: FormGroupDirective) {
    try {
      await this._actionModelService.updateModel(action).then(() => {
        this._snackBar.open(`Update ${action.name}`, 'OK', {duration: 3000})
        this.actionForm.reset();
        formDirective.resetForm();
      })
    } catch (error) {
      this._snackBar.open('An error occured when updating the action', 'OK', {duration: 3000})
      console.log(JSON.stringify(error));
    }
  }
}
