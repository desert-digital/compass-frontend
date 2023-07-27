// Core

import { Component } from '@angular/core';
import { Router } from '@angular/router';

// Local

import { Owner } from 'src/app/API.service';
import { OwnersService } from 'src/app/services/owners.service';

@Component({
  selector: 'app-manage-owners',
  templateUrl: './manage-owners.component.html',
  styleUrls: ['./manage-owners.component.scss']
})
export class ManageOwnersComponent {

  owners: any[] = [];

  selectedOwner: Owner;

  constructor(private _ownerService: OwnersService,
    private router: Router) {}

  async ngOnInit() {
    this.owners = await this._ownerService.getOwners();
  }

  onAddOwnerPressed() {
    this.router.navigate(['main/add-owner']);
  }

  onEditOwnerPressed(owner: Owner) {
    this.router.navigate(['main/edit-owner', owner.id]);
  }
}
