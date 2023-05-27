// Core

import { Component } from '@angular/core';
import { Router } from '@angular/router';

// Local

import { ChecklistStepsService } from 'src/app/services/checklist-steps.service';
import { ChecklistSteps } from '../../API.service';


@Component({
  selector: 'app-manage-checklists',
  templateUrl: './manage-checklists.component.html',
  styleUrls: ['./manage-checklists.component.scss']
})
export class ManageChecklistsComponent {

  checklists: ChecklistSteps[] = [];

  constructor(private router: Router, 
    private _checkListStepsService: ChecklistStepsService) {}

  async ngOnInit() {
    this.checklists = await this._checkListStepsService.getChecklistSteps();
  }

  onAddNewChecklistPressed() {
    this.router.navigate(['/main/add-checklist']);
  }
}
