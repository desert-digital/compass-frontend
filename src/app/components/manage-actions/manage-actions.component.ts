// Core

import { Component, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

// Amplify

import { APIService, Action } from '../../API.service';

// Local

import { ActionsService } from 'src/app/services/actions.service';

@Component({
  selector: 'app-manage-actions',
  templateUrl: './manage-actions.component.html',
  styleUrls: ['./manage-actions.component.scss']
})
export class ManageActionsComponent {
  manageActions: boolean = false;
  
  actions: Action[] = [];
  selectedAction: any;

  constructor(private router: Router, 
    private route: ActivatedRoute,
    private _actionService: ActionsService,
    private api: APIService) { }

  async ngOnInit() {
    this.manageActions = Boolean(this.route.snapshot.paramMap.get('manage'))
    await this._actionService.getActions().then(actions =>
      this.actions = actions as Action[]);
    this.actions.sort((a: Action, b: Action) => {
      return a.name!.localeCompare(b.name!);
    });
  }

  onAddNewActionPressed() {
    this.router.navigate(['main/add-new-action']);
  }

  onItemSelected(item: Action) {
    this.selectedAction = item;
  }

  onNotesPressed() {
  }

  onEditActionPressed() {
  }

  onDeleteActionPressed() {
  }
}
