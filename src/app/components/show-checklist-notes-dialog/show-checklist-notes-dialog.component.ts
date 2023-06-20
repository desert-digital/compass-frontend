// Core

import { Component, Inject } from '@angular/core';

// Material

import { MAT_DIALOG_DATA } from '@angular/material/dialog';

// Local

import { ChecklistModel } from 'src/app/API.service';

@Component({
  selector: 'app-show-checklist-notes-dialog',
  templateUrl: './show-checklist-notes-dialog.component.html',
  styleUrls: ['./show-checklist-notes-dialog.component.scss']
})
export class ShowChecklistNotesDialogComponent {

    constructor(@Inject(MAT_DIALOG_DATA) public data: ChecklistModel) {}
}
