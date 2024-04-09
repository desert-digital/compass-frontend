// Core

import { Component } from '@angular/core';

// Local

import { Checklist } from 'src/app/API.service';
import { ChecklistsService } from 'src/app/services/checklists.service';

@Component({
  selector: 'app-checklist',
  templateUrl: './checklist.component.html',
  styleUrls: ['./checklist.component.scss']
})
export class ChecklistComponent {
  checklistCompleted: boolean = false;
  checklists: Checklist[] = [];
  
  constructor(private _checklistService: ChecklistsService) {
  }

  async ngOnInit() {
    this.checklists = await this._checklistService.getChecklists();
    this.checklistCompleted = false;
  }

  onItemChecked(item: any) {
    item.selected = !item.selected;
    this.checklistCompleted = true;
    // this.steps.forEach( item => {
    //   this.checklistCompleted = this.checklistCompleted && item.selected;
    // })
  }
}
