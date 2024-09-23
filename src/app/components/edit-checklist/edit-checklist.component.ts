// Core

import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// Material

import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { MatSnackBar } from '@angular/material/snack-bar';

// Amplify

import { ChecklistModel, ActionModel } from '../../API.service';

// Local

import { ChecklistModelsService } from 'src/app/services/checklist-models.service';
import { ActionModelsService } from 'src/app/services/action-models.service';

@Component({
  selector: 'app-edit-checklist',
  templateUrl: './edit-checklist.component.html',
  styleUrls: ['./edit-checklist.component.scss']
})
export class EditChecklistComponent {
  checklistForm: FormGroup;

  checklist: ActionModel[] = [];
  actions: ActionModel[] = [];

  constructor(private router: Router, 
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private _snackBar: MatSnackBar,
    private _actionModelsService: ActionModelsService,
    private _checklistModelsService: ChecklistModelsService) {
    this.checklistForm = this.formBuilder.group({
      id: ['', Validators.required],
      name: ['', Validators.required],
      duration: [''],
      notes: ['']
    });
  }

  async ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    const checklistModel = await this._checklistModelsService.getChecklistModelFromId(id);

    this.checklistForm.setValue({
      id: checklistModel.id,
      name: checklistModel.name,
      duration: checklistModel.duration,
      notes: checklistModel.notes
    });
    for (const item of checklistModel.actionModels.items) {
      const action = await this._actionModelsService.getActionModelFromId(item.actionModelId);
      this.checklist.push(action);
    }
    this.actions = await this._actionModelsService.getActionModels();
  }

  onCancelPressed() {
    this.router.navigate(['main/manage-checklists']);
  }

  drop(e: CdkDragDrop<ActionModel[]>) {
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
    this._updateDuration();
  }

  onDeleteAction(item: any) {
    const itemToRemove = this.checklist.findIndex(element => element.id === item.id);
    this.checklist.splice(itemToRemove, 1);
    this._updateDuration();
  }

  onUpdateChecklistPressed(model: ChecklistModel) {
    try {
      this._checklistModelsService.updateChecklistModel(model, this.checklist); 
      this._snackBar.open(`Updated ${model.name}`, 'OK', {duration: 3000});
    } catch (error) {
      this._snackBar.open(`Unable to update ${model.name}`, 'OK', {duration: 3000});
    }
  }

  _updateDuration() {
    const newDuration = this.checklist.reduce(function (totalDuration, item) {
      return totalDuration + item.duration;
    }, 0);
    this.checklistForm.patchValue({
      duration: newDuration
    });
  }
}
