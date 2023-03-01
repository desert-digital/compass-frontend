import { Component } from '@angular/core';

@Component({
  selector: 'app-pending',
  templateUrl: './pending.component.html',
  styleUrls: ['./pending.component.scss']
})
export class PendingComponent {
    items: any = [{
      name: 'Charter 1',
      status: 'On time'
    },
    {
      name: 'Charter 2',
      status: 'On time'
    },
    {
      name: 'Charter 3',
      status: 'Late'
    }];
}

