import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StaffService {

  constructor() { }
  ITEMS: any = [
    "OUPV. Power boats, sail boats, and PWC qualified", 
    "Power boats, sail boats, and PWC qualified",
    "PWC qualified."
  ];

  getStaff(): Observable<any[]> {
    return of(this.ITEMS);
  }
}
