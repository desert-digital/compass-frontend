// Core

import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

// Amplify 

import { APIService, PendingEvent, ModelPendingEventFilterInput } from '../API.service';

@Injectable({
  providedIn: 'root'
})
export class PendingService {
  constructor(private api: APIService) { }

  public numberOfPendingEvents$ = new Subject();

  async getPendingItems(): Promise<PendingEvent[]> {
    const today = new Date().toISOString();

    const variables: ModelPendingEventFilterInput = {
      start: {ge: today}
    };

    const events = await this.api.ListPendingEvents(variables);
    this.numberOfPendingEvents$.next(events.items.length);
    return events.items as PendingEvent[];
  }

  async getPendingItem(id: string): Promise<PendingEvent> {
    const today = new Date();
    today.setHours(0,0,0,0);

    const startOfDay = new Date(today).toISOString();

    const variables: ModelPendingEventFilterInput = {
      start: {ge: startOfDay}
    };

    const events = await this.api.ListPendingEvents(variables);
    const eventById = events.items.find(itemToFind => itemToFind!.id = id);
    return eventById as PendingEvent;
  }

  async deleteItem(item: PendingEvent) {
    await this.api.DeletePendingEvent({ id: item.id });
    this.getPendingItems();
  }

  createSubscription() {
    const sub = this.api.OnCreatePendingEventListener().subscribe({
      next: (value  => console.log(value))
    });
  }

  async deleteSubscription() {
    const sub = this.api.OnDeletePendingEventListener().subscribe({
      next: (value  => {
        console.log(value); this.getPendingItems();
      })
    });
  }
}
