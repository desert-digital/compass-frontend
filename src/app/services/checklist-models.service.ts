// Core

import { Injectable } from '@angular/core';

// Local

import { APIService, ChecklistModel, CreateChecklistModelInput } from '../API.service';
import { ActionsService } from './actions.service';

@Injectable({
  providedIn: 'root'
})
export class ChecklistModelsService {

  constructor(private api: APIService,
    private _actionsService: ActionsService) { }

   async getChecklistModels(): Promise<ChecklistModel[]> {
    const models = await this.api.ListChecklistModels();
    return models.items as ChecklistModel[];
  };
 
  async getChecklistModelFromId(id: string): Promise<ChecklistModel> {
    const checklist = await this.api.GetChecklistModel(id);
    return checklist as ChecklistModel;
  }
 
  async createChecklistModel(model: ChecklistModel, steps: any[]) {
    const result = await this.api.CreateChecklistModel(model);

    for (let index = 0; index < steps.length; index++) {
      await this.api.CreateAction({checklistModelStepsId: result.id, actionModelId: steps[index].id})
    }
  }

  async deleteModel(checklist: ChecklistModel) {
    await this.api.DeleteChecklistModel({id: checklist.id});

    // Should also delete the _checklists_ that use this model, and then the workflow models
    // that use the checklist
  }
}
