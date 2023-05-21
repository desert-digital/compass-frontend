import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FleetService {
  ITEMS: any = [
      `37 foot monohull sloop-rigged sailboat. Max crew of 10`, 
      `37 foot powerboat with twin outboard engines. Max crew of 8`,
      `30 foot monohull sloop-rigged sailboat. Max crew of 10`
  ];

  constructor() { }

  getFleet(): Observable<any[]> {
    return of(this.ITEMS);
  }
}
