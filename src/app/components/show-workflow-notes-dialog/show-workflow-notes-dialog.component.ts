// Core

import { Component, Inject } from '@angular/core';

// Material

import { MAT_DIALOG_DATA } from '@angular/material/dialog';

// Local

import { WorkflowModel } from 'src/API';


@Component({
  selector: 'app-show-workflow-notes-dialog',
  templateUrl: './show-workflow-notes-dialog.component.html',
  styleUrls: ['./show-workflow-notes-dialog.component.scss']
})
export class ShowWorkflowNotesDialogComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: WorkflowModel) { }

}
