// Core

import { Component } from '@angular/core';

// Material

import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

// Amplify

import { APIService, Action, Checklist } from '../../API.service';

// Local

import { ActionsService } from 'src/app/services/actions.service';

@Component({
  selector: 'app-add-checklist',
  templateUrl: './add-checklist.component.html',
  styleUrls: ['./add-checklist.component.scss'],
})
export class AddChecklistComponent {
  checklist = [];

  actions: Action[] = [];

  constructor(private _actionsService: ActionsService) {}

  async ngOnInit() {
    this.actions = await this._actionsService.getActions();
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

  onAddChecklistPressed() {
    alert('New Checklist to Add');
  }
}
