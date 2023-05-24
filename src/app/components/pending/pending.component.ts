// Core

import { Component, EventEmitter, Output } from '@angular/core';

// Local

import { PendingService } from 'src/app/services/pending.service';

@Component({
  selector: 'app-pending',
  templateUrl: './pending.component.html',
  styleUrls: ['./pending.component.scss']
})
export class PendingComponent {

  @Output() selectedEvent = new EventEmitter<String>();
  @Output() pendingItems: number = 0;

  items: any[] = [];

  constructor(private _pendingService: PendingService) { }

  async ngOnInit() {
    await this._pendingService.getPendingItems().then(items => this.items = items);
    this.pendingItems = this.items.length;
  }

  async onPendingItemSelected(evt: any) {
    this.selectedEvent.emit(evt);
  }
}

