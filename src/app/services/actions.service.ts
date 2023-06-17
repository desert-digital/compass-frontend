// Core

import { Injectable } from '@angular/core';

// Local

import { APIService, Action, ModelActionFilterInput } from '../API.service';


@Injectable({
  providedIn: 'root'
})
export class ActionsService {

  constructor(private api: APIService) { }

  async getActions(): Promise<Action[]> {
    const events = await this.api.ListActions();
    return events.items as Action[];
  }

  async getActionById(id: string): Promise<Action> {
    const variables: ModelActionFilterInput = {
      id: { eq: id }
    };

    const events = await this.api.ListActions(variables);
    return events.items[0] as Action;
  }
}
