import { Component } from '@angular/core';

@Component({
  selector: 'app-workflow-list',
  templateUrl: './workflow-list.component.html',
  styleUrls: ['./workflow-list.component.scss']
})
export class WorkflowListComponent {
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
