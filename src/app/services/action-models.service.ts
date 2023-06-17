// Core

import { Injectable } from '@angular/core';

// Local

import { APIService, ActionModel } from '../API.service';

@Injectable({
  providedIn: 'root'
})
export class ActionModelsService {

  constructor(private api: APIService) { }

  async getActionModels(): Promise<ActionModel[]> {
    const events = await this.api.ListActionModels();
    return events.items as ActionModel[];
  }

  async createActionModel(action: ActionModel) {
    await this.api.CreateActionModel(action);
  }

  async deleteModel(action: ActionModel) {
    await this.api.DeleteActionModel({id: action.id});

    // Should also delete the _actions_ that use this model, and then the checklist models
    // that use the _action_
  }
}
