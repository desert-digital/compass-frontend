// Core

import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

// Local

import { APIService, Staff } from '../API.service';

@Injectable({
  providedIn: 'root'
})
export class StaffService {

  ITEMS: any = [
    "OUPV. Power boats, sail boats, and PWC qualified", 
    "Power boats, sail boats, and PWC qualified",
    "PWC qualified."
  ];

  constructor(private api: APIService) { }

  async getStaff(): Promise<Staff[]> {
    const events = await this.api.ListStaff();
    return events.items as Staff[];
  }
}
