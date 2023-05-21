import { Component } from '@angular/core';

import { StaffService } from 'src/app/services/staff.service';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.scss']
})
export class StaffComponent {

  items: any[] = [];

  constructor(private _staffService: StaffService) {

  }

  ngOnInit() {
    this._staffService.getStaff()
      .subscribe(items => this.items = items);
  }
}