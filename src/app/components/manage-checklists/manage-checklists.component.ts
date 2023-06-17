// Core

import { Component } from '@angular/core';
import { Router } from '@angular/router';

// Local

import { ChecklistModel } from '../../API.service';
import { ChecklistModelsService } from 'src/app/services/checklist-models.service';


@Component({
  selector: 'app-manage-checklists',
  templateUrl: './manage-checklists.component.html',
  styleUrls: ['./manage-checklists.component.scss']
})
export class ManageChecklistsComponent {

  checklists: ChecklistModel[] = [];
  selectedAction: any;

  constructor(private router: Router, 
    private _checklistModelsService: ChecklistModelsService) {}

  async ngOnInit() {
    this.checklists = await this._checklistModelsService.getChecklistModels();
    console.log(JSON.stringify(this.checklists));
  }

  onAddNewChecklistPressed() {
    this.router.navigate(['/main/add-checklist']);
  }

  onItemSelected(item: ChecklistModel) {
    this.selectedAction = item;
  }

  onNotesPressed() {
  }

  onEditActionPressed() {
  }

  onDeleteActionPressed() {
  }
}
