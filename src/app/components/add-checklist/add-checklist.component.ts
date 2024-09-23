// Core

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormGroupDirective, Validators } from '@angular/forms';

// Material

import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { MatSnackBar } from '@angular/material/snack-bar';

// Amplify

import { ActionModel, ChecklistModel } from '../../API.service';

// Local

import { ActionModelsService } from 'src/app/services/action-models.service';
import { ChecklistModelsService } from 'src/app/services/checklist-models.service';
import { ActionsService } from 'src/app/services/actions.service';

@Component({
  selector: 'app-add-checklist',
  templateUrl: './add-checklist.component.html',
  styleUrls: ['./add-checklist.component.scss'],
})
export class AddChecklistComponent {

  checklistForm: FormGroup;

  checklist: ActionModel[] = [];
  actions: ActionModel[] = [];
  duration: number = 0;

  constructor(private router: Router,
    private formBuilder: FormBuilder,
    private _snackBar: MatSnackBar,
    private _actionsService: ActionsService,
    private _actionModelsService: ActionModelsService,
    private _checklistModelsService: ChecklistModelsService) {
    this.checklistForm = this.formBuilder.group({
      name: ['', Validators.required],
      notes: [''], 
      duration: ['']
    });
  }

  async ngOnInit() {
    await this._getActions();
  }

  async _getActions() {
    this.actions = await this._actionModelsService.getActionModels();
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
    this.duration = this.checklist.reduce(function (totalDuration, item) {
      return totalDuration + item.duration;
    }, 0);
    this.checklistForm.patchValue({
      duration: this.duration
    });
  }

  async onAddChecklistPressed(model: ChecklistModel, formDirective: FormGroupDirective) {
    try {
      this._checklistModelsService.createChecklistModel(model, this.checklist).then(() => {
        this._snackBar.open('Created a new checklist', 'OK', { duration: 3000 });
        this.checklistForm.reset();
        formDirective.resetForm();
        this.checklist = [];
        this._getActions();
      });
    } catch (error) {
      this._snackBar.open('Error creating the checklist', 'OK', { duration: 3000 });
    }
  }

  onCancelPressed() {
    this.router.navigate(['main/manage-checklists']);
  }
}
