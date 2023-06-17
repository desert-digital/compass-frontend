// Core

import { Injectable } from '@angular/core';

// Local

import { APIService, WorkflowModel } from '../API.service';

@Injectable({
  providedIn: 'root'
})
export class WorkflowModelsService {

  constructor(private api: APIService) { }

   async getWorkflowModels(): Promise<WorkflowModel[]> {
    const models = await this.api.ListWorkflowModels();
    return models.items as WorkflowModel[];
  };

  async createWorkflowModel(model: WorkflowModel, steps: any[]) {
    const result = await this.api.CreateWorkflowModel(model);
    
    for (let index = 0; index < steps.length; index++) {
      await this.api.CreateChecklist({workflowModelChecklistsId: result.id, checklistModelId: steps[index].id})
    }
  }
}
