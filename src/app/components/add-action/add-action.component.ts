// Core

import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// Amplify 

import { APIService, Action } from '../../API.service';
import { MatSnackBar } from '@angular/material/snack-bar';


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
    private api: APIService,
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

  async onAddNewActionPressed(action: Action) {
    await this.api.CreateAction(action);
    this._snackBar.open('Created a new action', 'OK', { duration: 3000 });
  }
}


