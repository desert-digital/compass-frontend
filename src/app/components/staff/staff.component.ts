import { Component } from '@angular/core';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.scss']
})
export class StaffComponent {
  longText: String[] = [
    "OUPV. Power boats, sail boats, and PWC qualified", 
    "Power boats, sail boats, and PWC qualified",
    "PWC qualified."
    ];
}
