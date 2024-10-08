// Core

import { Component } from '@angular/core';
import { Router } from '@angular/router';

// Material 

import { MatSnackBar } from '@angular/material/snack-bar';

// Local

import { Staff } from 'src/API';
import { StaffService } from 'src/app/services/staff.service';

@Component({
  selector: 'app-staff',
  templateUrl: './manage-staff.component.html',
  styleUrls: ['./manage-staff.component.scss']
})
export class ManageStaffComponent {

  staff: Staff[];

  constructor(private _snackBar: MatSnackBar,
    private _staffService: StaffService,
    private router: Router) {
  }

  async ngOnInit() {
    await this._getStaff();
  }

  async _getStaff() {
    this.staff = await this._staffService.getStaff();
  }

  onAddStaffPressed() {
    this.router.navigate(['main/add-staff']);
  }

  onEditStaffPressed(staff: Staff) {
    this.router.navigate(['main/edit-staff', staff.id]);
  }

  async onDeleteStaffPressed(staff: Staff) {
    await this._staffService.deleteStaff(staff);
    this._snackBar.open(`Deleted ${staff.name}`, 'OK', {duration: 3000});
    this._getStaff();
  }
}