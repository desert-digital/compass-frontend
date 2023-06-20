// Core

import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, FormGroupDirective, Validators } from '@angular/forms';

// Material

import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { MatSnackBar } from '@angular/material/snack-bar';

// Amplify

import { ChecklistModel, Checklist, Action } from '../../API.service';

// Local

import { ChecklistModelsService } from 'src/app/services/checklist-models.service';
import { ActionsService } from 'src/app/services/actions.service';

@Component({
  selector: 'app-edit-checklist',
  templateUrl: './edit-checklist.component.html',
  styleUrls: ['./edit-checklist.component.scss']
})
export class EditChecklistComponent {
  checklistForm: FormGroup;

  checklist: Action[] = [];
  actions: Action[] = [];

  constructor(private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private _snackBar: MatSnackBar,
    private _checklistModelsService: ChecklistModelsService) {
    this.checklistForm = this.formBuilder.group({
      id: ['', Validators.required],
      name: ['', Validators.required],
      notes: ['']
    });
  }

  async ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    const checklistModel = await this._checklistModelsService.getChecklistModelFromId(id);

    this.checklistForm.setValue({
      id: checklistModel.id,
      name: checklistModel.name,
      notes: checklistModel.notes
    });
    console.log(JSON.stringify(checklistModel.steps.items));
    this.checklist = checklistModel.steps.items;
  }

  drop(e: CdkDragDrop<Action[]>) {
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
  }

  onUpdateChecklistPressed(checklist: ChecklistModel, formDirective: FormGroupDirective) {
    console.log(JSON.stringify(checklist));
  }
}
