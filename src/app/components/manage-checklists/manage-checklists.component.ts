// Core

import { Component } from '@angular/core';
import { Router } from '@angular/router';

// Material

import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

// Local

import { ChecklistModel } from '../../API.service';
import { ChecklistModelsService } from 'src/app/services/checklist-models.service';
import { DeleteChecklistDialogComponent } from '../delete-checklist-dialog/delete-checklist-dialog.component';
import { ShowChecklistNotesDialogComponent } from '../show-checklist-notes-dialog/show-checklist-notes-dialog.component';

@Component({
  selector: 'app-manage-checklists',
  templateUrl: './manage-checklists.component.html',
  styleUrls: ['./manage-checklists.component.scss']
})
export class ManageChecklistsComponent {

  checklists: ChecklistModel[] = [];
  selectedChecklist: ChecklistModel;

  constructor(private router: Router,
    private _dialog: MatDialog,
    private _snackBar: MatSnackBar,
    private _checklistModelsService: ChecklistModelsService) { }

  async ngOnInit() {
    await this._loadChecklists();
  }

  async _loadChecklists() {
    this.checklists = await this._checklistModelsService.getChecklistModels();
  }

  onAddNewChecklistPressed() {
    this.router.navigate(['/main/add-checklist']);
  }

  onItemSelected(item: ChecklistModel) {
    this.selectedChecklist = item;
  }

  onNotesPressed() {
    this._dialog.open(ShowChecklistNotesDialogComponent,
      { data: this.selectedChecklist });
  }

  onEditActionPressed() {
    this.router.navigate(['main/edit-checklist', this.selectedChecklist.id])
  }

  onDeleteActionPressed() {
    const dialogRef = this._dialog.open(DeleteChecklistDialogComponent);

    dialogRef.afterClosed().subscribe(async result => {
      if (result) {
        const nameOfDeletedChecklistModel = this.selectedChecklist.name;
        await this._checklistModelsService.deleteModel(this.selectedChecklist).then(() => {
          this._snackBar.open(`Deleted "${nameOfDeletedChecklistModel}"`, 'OK', { duration: 3000 });
        });
        this._loadChecklists();
      }
    });
  }
}
