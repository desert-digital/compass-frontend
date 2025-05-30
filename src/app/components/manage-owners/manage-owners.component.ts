// Core

import { Component } from '@angular/core';
import { Router } from '@angular/router';

// Material

import { MatSnackBar } from '@angular/material/snack-bar';
import { MatButtonToggleChange } from '@angular/material/button-toggle';
// Local

import { Owner, Vessel } from 'src/API';
import { OwnersService } from 'src/app/services/owners.service';

@Component({
  selector: 'app-manage-owners',
  templateUrl: './manage-owners.component.html',
  styleUrls: ['./manage-owners.component.scss']
})
export class ManageOwnersComponent {

  selectedStatus: string = 'Active';

  owners: Owner[] = [];
  boats: Map<string, Vessel[]> = new Map();

  selectedOwner: Owner;

  constructor(private _ownerService: OwnersService,
    private _snackBar: MatSnackBar,
    private router: Router) { }

  async ngOnInit() {
    await this._getOwners('Active');
  }

  async _getOwners(status?: string) {
    if (typeof status === 'undefined') {
      this.owners = await this._ownerService.getOwners();
      for (const owner of this.owners) {
        const ownersBoats = await this._ownerService.getVesselsForOwner(owner.id);
        this.boats.set(owner.id, ownersBoats);
      }
    }
    else {
      this.owners = await this._ownerService.getOwners(status);
      for (const owner of this.owners) {
        const ownersBoats = await this._ownerService.getVesselsForOwner(owner.id);
        this.boats.set(owner.id, ownersBoats);
      }
    }
  }

  onAddOwnerPressed() {
    this.router.navigate(['main/add-owner']);
  }

  onEditOwnerPressed(owner: Owner) {
    this.router.navigate(['main/edit-owner', owner.id]);
  }

  async onDeleteOwnerPressed(owner: Owner) {
    await this._ownerService.deleteOwner(owner);
    this._snackBar.open(`Deleted ${owner.name}`, 'OK', { duration: 3000 });
    this._getOwners();
  }

  async toggleActivate(owner: Owner) {
    await this._ownerService.deactivateOwner(owner);
    this._snackBar.open(`Deactivated ${owner.name}`, 'OK', { duration: 3000 });
    this._getOwners(this.selectedStatus);
  }

  async onStatusChanged(status: MatButtonToggleChange) {
    this.selectedStatus = status.value
    if (this.selectedStatus === 'All') {
      await this._getOwners();
    }
    else {
      await this._getOwners(this.selectedStatus);
    }
  }
}
