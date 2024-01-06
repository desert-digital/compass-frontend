// Core

import { Component } from '@angular/core';

// Local


@Component({
  selector: 'app-manage-service-orders',
  templateUrl: './manage-service-orders.component.html',
  styleUrls: ['./manage-service-orders.component.scss']
})
export class ManageServiceOrdersComponent {

  orders: any[] = [];

  onAddNewServiceOrderPressed() {}

  onDeletePressed() {}

  onEditPressed() {}
}
