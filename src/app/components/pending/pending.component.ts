// Core

import { Component, EventEmitter, Output } from '@angular/core';
import { Observable } from 'rxjs';

// Amplify 

// Core

import { Amplify, API, graphqlOperation } from 'aws-amplify';

// Local

import { PendingService } from 'src/app/services/pending.service';

@Component({
  selector: 'app-pending',
  templateUrl: './pending.component.html',
  styleUrls: ['./pending.component.scss']
})
export class PendingComponent {

  @Output() selectedEvent = new EventEmitter<String>();

  items: any[] = [];

  constructor(private _pendingService: PendingService) { }

  async ngOnInit() {
    this._getPendingItems();
    this._createSubscription();
    this._deleteSubscription();
  }

  async onPendingItemSelected(item: any) {
    this.selectedEvent.emit(item);
  }

  async onDeleteItemSelected(item: any) {
    this._pendingService.deleteItem(item);
    this._getPendingItems();
  }

  async _getPendingItems() {
    await this._pendingService.getPendingItems().then(items => this.items = items);
  }

  _createSubscription() {
    this._pendingService.createSubscription();
  }

  _deleteSubscription() {
    this._pendingService.deleteSubscription();
  }
}

