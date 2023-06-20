// Core

import { Component, Inject } from '@angular/core';

// Material

import { MAT_DIALOG_DATA } from '@angular/material/dialog';

// Local

import { ActionModel } from 'src/app/API.service';

@Component({
  selector: 'app-show-action-notes-dialog',
  templateUrl: './show-action-notes-dialog.component.html',
  styleUrls: ['./show-action-notes-dialog.component.scss']
})
export class ShowActionNotesDialogComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: ActionModel) {}
}
