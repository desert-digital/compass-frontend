// Core

import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// Amplify 

import { APIService, ActionModel } from '../../API.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActionModelsService } from 'src/app/services/action-models.service';


@Component({
  selector: 'app-add-action',
  templateUrl: './add-action.component.html',
  styleUrls: ['./add-action.component.scss']
})
export class AddActionComponent {

  actionName: String = '';
  actionDuration: Number = 0;
  actionNotes: String = '';
  actionStatus: boolean = false;

  actionForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private _actionModelService: ActionModelsService,
    private _snackBar: MatSnackBar) {
    this.actionForm = this.formBuilder.group({
      name: ['', Validators.required],
      duration: ['', Validators.required],
      notes: ['',],
      status: ['open', Validators.required]
    });
  }

  ngOnInit() {
  }

  async onAddNewActionPressed(action: ActionModel) {
    await this._actionModelService.createActionModel(action);
    this._snackBar.open('Created a new action', 'OK', { duration: 3000 });
  }
}


