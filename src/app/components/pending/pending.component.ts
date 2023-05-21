import { Component } from '@angular/core';

// Local

import { PendingService } from 'src/app/services/pending.service';

@Component({
  selector: 'app-pending',
  templateUrl: './pending.component.html',
  styleUrls: ['./pending.component.scss']
})
export class PendingComponent {

  items: any[] = [];

  constructor(private _pendingService: PendingService) { }

  async ngOnInit() {
    await this._pendingService.getPendingItems().then(items => this.items = items);
  }

  onItemSelected(item: any) {
    console.log(item);
  }

  async onListItemPressed() {
    console.log('Select Pressed');
  }
}

