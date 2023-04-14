// Core

import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PendingService {
  ITEMS: any = [{
    name: 'Charter 1',
    status: 'On time'
  },
  {
    name: 'Charter 2-1',
    status: 'On time'
  },
  {
    name: 'Charter 3A',
    status: 'Late'
  }];

  constructor() { }

  getPendingItems(): Observable<any[]> {
    return of(this.ITEMS);
  }
}
