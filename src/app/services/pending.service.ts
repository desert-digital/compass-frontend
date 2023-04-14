import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PendingService {
  items: any = [{
    name: 'Charter 1',
    status: 'On time'
  },
  {
    name: 'Charter 2',
    status: 'On time'
  },
  {
    name: 'Charter 3',
    status: 'Late'
  }];

  constructor() { }

  getPendingItems() {
    return this.items
  }
}
