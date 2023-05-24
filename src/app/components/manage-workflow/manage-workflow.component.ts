import { Component } from '@angular/core';

@Component({
  selector: 'app-manage-workflow',
  templateUrl: './manage-workflow.component.html',
  styleUrls: ['./manage-workflow.component.scss']
})
export class ManageWorkflowComponent {

  selectedItem: any;
  itemSelected: boolean = false;

  onPendingItemSelect(evt: any) {
    this.selectedItem = evt;
    this.itemSelected = true;
  }
}
