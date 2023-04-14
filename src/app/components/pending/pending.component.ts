import { Component } from '@angular/core';

// Local

import { PendingService } from 'src/app/services/pending.service';

@Component({
  selector: 'app-pending',
  templateUrl: './pending.component.html',
  styleUrls: ['./pending.component.scss']
})
export class PendingComponent {

    constructor(private pending: PendingService) {}

    items = this.pending.getPendingItems();

    onItemSelected(item: any) {
      console.log(item);
    }
  
    async onListItemPressed() {
      console.log('Select Pressed');
    }
}

