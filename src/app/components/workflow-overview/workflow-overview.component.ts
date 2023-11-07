import { Component } from '@angular/core';

@Component({
  selector: 'app-workflow-list',
  templateUrl: './workflow-overview.component.html',
  styleUrls: ['./workflow-overview.component.scss']
})
export class WorkflowOverviewComponent {
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

  checkLateStatus(item: string): boolean {
    if (item === 'Late') {
      return true;
    }
    else {
      return false;
    }
  }
}
