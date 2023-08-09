// Core

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormGroupDirective, Validators } from '@angular/forms';

// Material

import { MatSnackBar } from '@angular/material/snack-bar';

// Amplify 

import { ActionModel } from '../../API.service';
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

  constructor(private router: Router,
    private formBuilder: FormBuilder,
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

  async onAddNewActionPressed(action: ActionModel, formDirective: FormGroupDirective) {
    try {
      await this._actionModelService.createActionModel(action).then(() => {
        this._snackBar.open('Created a new action', 'OK', { duration: 3000 });
        this.actionForm.reset();
        formDirective.resetForm();
      });
    } catch (error) {
      console.log(JSON.stringify(error.errors));
      this._snackBar.open('Error creating the action', 'OK', { duration: 3000 });
    }
  }

  onCancelPressed() {
    this.router.navigate(['main/actions']);
  }
}


