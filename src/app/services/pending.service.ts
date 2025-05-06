// Core

import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

// Amplify 

import { generateClient } from '@aws-amplify/api';
import { listPendingEvents, getPendingEvent } from '../../graphql/queries';
import { deletePendingEvent } from '../../graphql/mutations';

// Local

import { PendingEvent } from '../API.service';

@Injectable({
  providedIn: 'root'
})
export class PendingService {
  constructor() { }

  client = generateClient();
  public numberOfPendingEvents$ = new Subject();

  async getPendingItems(): Promise<PendingEvent[]> {
    const today = new Date().toISOString();
    const events = await this.client.graphql({
      query: listPendingEvents,
      variables: {
        filter: {
          and: [
            { status: { ne: 'cancelled' } },
            { start: { ge: today } }]
        },
      }
    });

    const pendingEvents = events.data.listPendingEvents.items;

    this.numberOfPendingEvents$.next(pendingEvents.length) //events.length);
    return pendingEvents as PendingEvent[];
  }

  async getPendingItem(id: string): Promise<PendingEvent> {
    const events = await this.client.graphql({
      query: getPendingEvent,
      variables: {
        id: id
      }
    }
    );
    const eventById = events.data.getPendingEvent;

    return eventById as PendingEvent;
  }

  async deleteItem(item: PendingEvent) {
    const events = await this.client.graphql({
      query: deletePendingEvent,
      variables: {
        input: { id: item.id }
      }
    });
  }

  createSubscription() {
  }

  async deleteSubscription() {
  }
}
