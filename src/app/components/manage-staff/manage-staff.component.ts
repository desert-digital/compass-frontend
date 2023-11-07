import { Component } from '@angular/core';

import { StaffService } from 'src/app/services/staff.service';

@Component({
  selector: 'app-staff',
  templateUrl: './manage-staff.component.html',
  styleUrls: ['./manage-staff.component.scss']
})
export class ManageStaffComponent {

  items: any[] = [];

  constructor(private _staffService: StaffService) {

  }

  ngOnInit() {
    this._staffService.getStaff().then(items => {
      this.items = items;
    });
  }
}