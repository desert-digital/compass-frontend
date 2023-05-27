// Core

import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

// Amplify 

import { APIService, Event, ModelEventFilterInput } from '../API.service';

@Injectable({
  providedIn: 'root'
})
export class PendingService {
  constructor(private api: APIService) { }

  public numberOfPendingEvents$ = new Subject();

  async getPendingItems(): Promise<Event[]> {
    const today = new Date().toISOString();

    const variables: ModelEventFilterInput = {
      start: {ge: today}
    };

    const events = await this.api.ListEvents(variables);
    this.numberOfPendingEvents$.next(events.items.length);
    return events.items as Event[];
  }

  async getPendingItem(id: string): Promise<Event> {
    const today = new Date().toISOString();

    const variables: ModelEventFilterInput = {
      start: {ge: today}
    };

    const events = await this.api.ListEvents(variables);
    return events.items[0] as Event;
  }

  async deleteItem(item: Event) {
    await this.api.DeleteEvent({ id: item.id });
    this.getPendingItems();
  }

  createSubscription() {
    const sub = this.api.OnCreateEventListener().subscribe({
      next: (value  => console.log(value))
    });
  }

  async deleteSubscription() {
    const sub = this.api.OnDeleteEventListener().subscribe({
      next: (value  => {
        console.log(value); this.getPendingItems();
      })
    });
  }
}
