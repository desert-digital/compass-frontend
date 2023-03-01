import { Component } from '@angular/core';

@Component({
  selector: 'app-fleet',
  templateUrl: './fleet.component.html',
  styleUrls: ['./fleet.component.scss']
})
export class FleetComponent {
  longText: String[] = [
    `37 foot monohull sloop-rigged sailboat. Max crew of 10`, 
    `37 foot powerboat with twin outboard engines. Max crew of 8`,
    `30 foot monohull sloop-rigged sailboat. Max crew of 10`
    ];
}
