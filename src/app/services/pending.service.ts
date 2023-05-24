// Core

import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

// Amplify 

import { APIService, DeleteEventInput, Event } from '../API.service';


@Injectable({
  providedIn: 'root'
})
export class PendingService {
  constructor(private api: APIService) { }

  async getPendingItems(): Promise<Event[]> {
    const events = await this.api.ListEvents()
    return events.items as Event[];
  }

  async getPendingItemsSize(): Promise<Observable<number>> {
    const events = await this.api.ListEvents()
    return of(events.items.length);    
  }

  async deleteItem(item: Event) {
    await this.api.DeleteEvent({id: item.id});
  }

  createSubscription() {
    const sub = this.api.OnCreateEventListener();
  } 
  
  deleteSubscription() {
    const sub = this.api.OnDeleteEventListener();
  }
}
