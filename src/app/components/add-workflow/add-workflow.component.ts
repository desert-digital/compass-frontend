import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// Material

import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { MatSnackBar } from '@angular/material/snack-bar';

// Amplify

import { APIService, ActionModel, Action, ChecklistModel } from '../../API.service';

// Local

import { ChecklistModelsService } from 'src/app/services/checklist-models.service';
import { WorkflowModelsService } from 'src/app/services/workflow-models.service';
import { ChecklistsService } from 'src/app/services/checklists.service';

@Component({
  selector: 'app-add-workflow',
  templateUrl: './add-workflow.component.html',
  styleUrls: ['./add-workflow.component.scss']
})
export class AddWorkflowComponent {

  workflowForm: FormGroup;

  workflow: ChecklistModel[] = [];
  checklists: ChecklistModel[] = [];

  constructor(private formBuilder: FormBuilder,
    private _snackBar: MatSnackBar,
    private _checklistsService: ChecklistsService,
    private _checklistModelsService: ChecklistModelsService,
    private _workflowModelsService: WorkflowModelsService) {
    this.workflowForm = this.formBuilder.group({
      name: ['', Validators.required],
    });
  }

  async ngOnInit() {
    this.checklists = await this._checklistModelsService.getChecklistModels();
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }

  onAddWorkflowPressed(model: any) {
    this._workflowModelsService.createWorkflowModel(model, this.workflow).then(_ => {
      this._snackBar.open('Created a new workflow', 'OK', { duration: 3000 });
    });
  }
}
