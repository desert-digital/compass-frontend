// Core

import { Component } from '@angular/core';
import { Router } from '@angular/router';

// Material 

import { MatSnackBar } from '@angular/material/snack-bar';
import { MatButtonToggleChange } from '@angular/material/button-toggle';

// Local

import { Staff } from 'src/API';
import { StaffService } from 'src/app/services/staff.service';

@Component({
  selector: 'app-staff',
  templateUrl: './manage-staff.component.html',
  styleUrls: ['./manage-staff.component.scss']
})
export class ManageStaffComponent {

  selectedStatus: string = 'Active';
  staff: Staff[];

  constructor(private _snackBar: MatSnackBar,
    private _staffService: StaffService,
    private router: Router) {
  }

  async ngOnInit() {
    await this._getStaff(this.selectedStatus);
  }

  async _getStaff(status?: string) {
    if (typeof status === 'undefined') {
      this.staff = await this._staffService.getStaff();
    } else {
      this.staff = await this._staffService.getStaff(status);
    }
  }

  onAddStaffPressed() {
    this.router.navigate(['main/add-staff']);
  }

  onEditStaffPressed(staff: Staff) {
    this.router.navigate(['main/edit-staff', staff.id]);
  }

  async onDeleteStaffPressed(staff: Staff) {
    await this._staffService.deleteStaff(staff);
    this._snackBar.open(`Deleted ${staff.name}`, 'OK', { duration: 3000 });
    this._getStaff(this.selectedStatus);
  }

  async toggleActivate(staff: Staff) {
    await this._staffService.deactivateStaff(staff);
    this._snackBar.open(`Deactivated ${staff.name}`, 'OK', { duration: 3000 });
    this._getStaff(this.selectedStatus);
  }

  async onStatusChanged(status: MatButtonToggleChange) {
    this.selectedStatus = status.value
    if (this.selectedStatus === 'All') {
      await this._getStaff();
    }
    else {
      await this._getStaff(this.selectedStatus);
    }
    console.log(status.value);
  }
}