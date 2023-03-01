import { Component } from '@angular/core';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.scss']
})
export class StaffComponent {
  longText: String[] = [
    "Qualified in power boats, sail boats, and PWC. OUPV qualified", 
    "Qualified in power boats, sail boats, and PWC",
    "Qualified in PWC.\n"
    ];
}
