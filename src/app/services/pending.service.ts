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

  getPendingItems(): Observable<any[]> {
    this.api.ListEvents().then((events) => {
      return of (events.items);
    });
  }
}
