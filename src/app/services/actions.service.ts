// Core

import { Injectable } from '@angular/core';

// Local

import { APIService, Action } from '../API.service';


@Injectable({
  providedIn: 'root'
})
export class ActionsService {

  constructor(private api: APIService) { }

  async getActions(): Promise<Action[]> {
    const events = await this.api.ListActions();
    return events.items as Action[];
  }
}
