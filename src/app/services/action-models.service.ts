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

  async getActionModelFromId(id: string): Promise<ActionModel> {
    const action = await this.api.GetActionModel(id);
    return action as ActionModel;
  }

  async createActionModel(action: ActionModel) {
    await this.api.CreateActionModel(action);
  }

  async updateModel(action: ActionModel) {
    await this.api.UpdateActionModel(action); 
  }

  async deleteModel(action: ActionModel) {
    await this.api.DeleteActionModel({id: action.id});

    // Should also delete the _actions_ that use this model, and then the checklist models
    // that use the _action_
  }
}
