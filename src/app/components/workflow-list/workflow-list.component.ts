import { Component } from '@angular/core';

@Component({
  selector: 'app-workflow-list',
  templateUrl: './workflow-list.component.html',
  styleUrls: ['./workflow-list.component.scss']
})
export class WorkflowListComponent {
  items = Array.from({length: 10}).map((_, i) => `Charter #${i}`);
}
