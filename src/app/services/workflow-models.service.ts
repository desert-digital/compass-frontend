// Core

import { Injectable } from '@angular/core';

// Local

import { APIService, Workflow, WorkflowModel } from '../API.service';

@Injectable({
  providedIn: 'root'
})
export class WorkflowModelsService {

  constructor(private api: APIService) { }

  async getWorkflowModels(): Promise<WorkflowModel[]> {
    const models = await this.api.ListWorkflowModels();
    return models.items as WorkflowModel[];
  };


  async getWorkflowModelFromId(id: string): Promise<WorkflowModel> {
    const workflow = await this.api.GetWorkflowModel(id);
    return workflow as WorkflowModel;
  }

  async createWorkflowModel(model: WorkflowModel, checklists: any[]) {
    const result = await this.api.CreateWorkflowModel(model);

    for (let index = 0; index < checklists.length; index++) {
      await this.api.CreateWorkflowChecklists({ workflowModelId: result.id, checklistModelId: checklists[index].id })
    } 
  }

  async updateWorkflowModel(model: WorkflowModel, checklists: any[]) {
    await this.deleteModel(model);
    delete model.id;
    await this.createWorkflowModel(model, checklists);
  }


  async deleteModel(workflow: WorkflowModel) {
    const result = await this.api.DeleteWorkflowModel({id: workflow.id});
  }
}
