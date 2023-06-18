// Core

import { Component, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

// Amplify

import { APIService, ActionModel } from '../../API.service';

// Local

import { ActionModelsService } from 'src/app/services/action-models.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { DeleteActionDialogComponent } from '../delete-action-dialog/delete-action-dialog.component';

@Component({
  selector: 'app-manage-actions',
  templateUrl: './manage-actions.component.html',
  styleUrls: ['./manage-actions.component.scss']
})
export class ManageActionsComponent {
  manageActions: boolean = false;
  
  actions: ActionModel[] = [];
  selectedAction: any;

  constructor(private router: Router, 
    private route: ActivatedRoute,
    private _snackBar: MatSnackBar, 
    private _dialog: MatDialog,
    private _actionModelsService: ActionModelsService,
    private api: APIService) { }

  async ngOnInit() {
    this.manageActions = Boolean(this.route.snapshot.paramMap.get('manage'))
    await this._loadActions();
  }

  async _loadActions() {
    await this._actionModelsService.getActionModels().then(actions =>
      this.actions = actions as ActionModel[]);
    this.actions.sort((a: ActionModel, b: ActionModel) => {
      return a.name!.localeCompare(b.name!);
    });
  }

  onAddNewActionPressed() {
    this.router.navigate(['main/add-new-action']);
  }

  onItemSelected(item: ActionModel) {
    this.selectedAction = item;
  }

  onNotesPressed() {

  }

  onEditActionPressed() {
  }

  async onDeleteActionPressed() {
    const dialogRef = this._dialog.open(DeleteActionDialogComponent);

    dialogRef.afterClosed().subscribe(async result => {
      if (result) {
        const nameOfDeletedActionModel = this.selectedAction.name;
        await this._actionModelsService.deleteModel(this.selectedAction).then(() => {
          this._snackBar.open(`Deleted "${nameOfDeletedActionModel}"`, 'OK', {duration: 3000});
        });
        this._loadActions();
      }
    });
  }
}

