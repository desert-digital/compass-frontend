// Core

import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, FormGroupDirective, Validators } from '@angular/forms';

// Material

import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { MatSnackBar } from '@angular/material/snack-bar';

// Amplify

import { WorkflowModel, ChecklistModel } from '../../API.service';

// Local

import { ChecklistModelsService } from 'src/app/services/checklist-models.service';
import { WorkflowModelsService } from 'src/app/services/workflow-models.service';

@Component({
  selector: 'app-edit-workflow',
  templateUrl: './edit-workflow.component.html',
  styleUrls: ['./edit-workflow.component.scss']
})
export class EditWorkflowComponent {
  workflowForm: FormGroup;

  workflow: ChecklistModel[] = [];
  checklists: ChecklistModel[] = [];
  duration: number = 0;

  constructor(private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private _snackBar: MatSnackBar,
    private _checklistModelsService: ChecklistModelsService,
    private _workflowModelsService: WorkflowModelsService) {
    this.workflowForm = this.formBuilder.group({
      id: ['', Validators.required],
      name: ['', Validators.required],
      duration: [''],
      notes: ['']
    });
  }

  async ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    const workflowModel = await this._workflowModelsService.getWorkflowModelById(id);

    this.workflowForm.setValue({
      id: workflowModel.id,
      name: workflowModel.name,
      duration: workflowModel.duration,
      notes: workflowModel.notes
    });
    for (let item of workflowModel.checklists.items) {
      const checklist = await this._checklistModelsService.getChecklistModelFromId(item.checklistModelId);
      this.workflow.push(checklist);
    }
    this.checklists = await this._checklistModelsService.getChecklistModels();
  }

  async _getChecklists() {
    this.checklists = await this._checklistModelsService.getChecklistModels();
  }

  drop(e: CdkDragDrop<ChecklistModel[]>) {
    if (e.previousContainer === e.container) {
      moveItemInArray(e.container.data, e.previousIndex, e.currentIndex);
    } else {
      transferArrayItem(
        e.previousContainer.data,
        e.container.data,
        e.previousIndex,
        e.currentIndex,
      );
    }
    this.duration = this.workflow.reduce(function (totalDuration, item) {
      return totalDuration + item.duration;
    }, 0);
    this.workflowForm.patchValue({
      duration: this.duration
    });
  }

  async onUpdateWorkflowPressed(model: WorkflowModel, formDirective: FormGroupDirective) {
    try {
      this._workflowModelsService.updateWorkflowModel(model, this.workflow).then(() => {
        this._snackBar.open(`Updated ${model.name}`, 'OK', { duration: 3000 });
      });
    } catch (error) {
      this._snackBar.open(`Unable to update ${model.name}`, 'OK', {duration: 3000});
    }
  }

  _updateDuration() {
    const newDuration = this.workflow.reduce(function (totalDuration, item) {
      return totalDuration + item.duration;
    }, 0);
    this.workflowForm.patchValue({
      duration: newDuration
    });
  }
}

