// Core

import { Component } from '@angular/core';
import { ServiceOrder } from 'src/API';

// Local


@Component({
  selector: 'app-manage-service-orders',
  templateUrl: './manage-service-orders.component.html',
  styleUrls: ['./manage-service-orders.component.scss']
})
export class ManageServiceOrdersComponent {

  orders: ServiceOrder[];

  onAddNewServiceOrderPressed() {}

  onDeletePressed() {}

  onEditPressed() {}
}
