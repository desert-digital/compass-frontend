// Core

import { Component } from '@angular/core';
import { Router } from '@angular/router';

// Material

import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';

// Local

import { WorkflowModel } from 'src/API';
import { WorkflowModelsService } from 'src/app/services/workflow-models.service';
import { ShowWorkflowNotesDialogComponent } from '../show-workflow-notes-dialog/show-workflow-notes-dialog.component';

@Component({
  selector: 'app-manage-workflows',
  templateUrl: './manage-workflows.component.html',
  styleUrls: ['./manage-workflows.component.scss']
})
export class ManageWorkflowsComponent {

  workflows: WorkflowModel[] = [];
  selectedWorkflow: WorkflowModel;

  constructor(private router: Router,
    private _dialog: MatDialog,
    private _snackBar: MatSnackBar,
    private _workflowModelsService: WorkflowModelsService) { }

  async ngOnInit() {
    this._loadWorkflows();
  }

  async _loadWorkflows() {
    this.workflows = await this._workflowModelsService.getWorkflowModels();
  }

  onAddNewWorkflowPressed() {
    this.router.navigate(['/main/add-workflow']);
  }

  onAddNewChecklistPressed() {
    this.router.navigate(['/main/add-checklist']);
  }

  onItemSelected(item: WorkflowModel) {
    this.selectedWorkflow = item;
  }

  onNotesPressed() {
    this._dialog.open(ShowWorkflowNotesDialogComponent,
      { data: this.selectedWorkflow });
  }

  onEditActionPressed() {
    this.router.navigate(['main/edit-workflow', this.selectedWorkflow.id])
  }

  async onDeleteActionPressed() {
    const nameOfDeletedChecklistModel = this.selectedWorkflow.name;
    await this._workflowModelsService.deleteModel(this.selectedWorkflow).then(() => {
      this._snackBar.open(`Deleted "${nameOfDeletedChecklistModel}"`, 'OK', { duration: 3000 });
    });
    this._loadWorkflows();
  }
}
