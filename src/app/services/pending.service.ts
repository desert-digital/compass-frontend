// Core

import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

// Amplify 

import { APIService, Event } from '../API.service';

@Injectable({
  providedIn: 'root'
})
export class PendingService {
  constructor(private api: APIService) { }

  async getPendingItems(): Promise<Event[]> {
    const events = await this.api.ListEvents()
    return events.items as Event[];
  }
}
