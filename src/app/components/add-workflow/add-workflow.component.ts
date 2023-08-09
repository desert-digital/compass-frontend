import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormGroupDirective, Validators } from '@angular/forms';

// Material

import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { MatSnackBar } from '@angular/material/snack-bar';

// Amplify

import { ChecklistModel, WorkflowModel } from '../../API.service';

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
  duration: number = 0;

  constructor(private router: Router,
    private formBuilder: FormBuilder,
    private _snackBar: MatSnackBar,
    private _checklistsService: ChecklistsService,
    private _checklistModelsService: ChecklistModelsService,
    private _workflowModelsService: WorkflowModelsService) {
    this.workflowForm = this.formBuilder.group({
      name: ['', Validators.required],
      duration: [''],
      notes: ['']
    });
  }

  async ngOnInit() {
    this._getChecklists();
  }

  async _getChecklists() {
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
    this.duration = this.workflow.reduce(function (totalDuration, item) {
      return totalDuration + item.duration;
    }, 0);
    this.workflowForm.patchValue({
      duration: this.duration
    });
  }

  onAddWorkflowPressed(model: WorkflowModel, formDirective: FormGroupDirective) {
    try {
      this._workflowModelsService.createWorkflowModel(model, this.workflow).then(_ => {
        this._snackBar.open('Created a new workflow', 'OK', { duration: 3000 });
        this.workflowForm.reset();
        formDirective.resetForm();
        
        this.workflow = [];
        this._getChecklists();
      });
    } catch (error) {
      this._snackBar.open('Error creating the checklist', 'OK', { duration: 3000 });

    }
  }

  onCancelPressed() {
    this.router.navigate(['main/workflows']);
  }
}
