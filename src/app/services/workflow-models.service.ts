// Core

import { Injectable } from '@angular/core';

// Amplify 

import { API, graphqlOperation } from 'aws-amplify';
import * as queries from '../../graphql/queries';
import { GraphQLQuery } from '@aws-amplify/api';
import { ListWorkflowModelsQuery } from '../API.service';

// Local

import { Workflow, WorkflowModel } from '../API.service';

@Injectable({
  providedIn: 'root'
})
export class WorkflowModelsService {

  constructor() { }

  async getWorkflowModels(): Promise<any> {
    const workflowModels = await API.graphql<GraphQLQuery<ListWorkflowModelsQuery>>(
      graphqlOperation(queries.listVessels)
    );
    console.log(workflowModels);

    return workflowModels;
  };


  async getWorkflowModelFromId(id: string): Promise<any> {
    // const workflow = await this.api.GetWorkflowModel(id);
    // return workflow as WorkflowModel;
  }

  async createWorkflowModel(model: WorkflowModel, checklists: any[]) {
    // const result = await this.api.CreateWorkflowModel(model);

    // for (let index = 0; index < checklists.length; index++) {
    //   await this.api.CreateWorkflowChecklists({ workflowModelId: result.id, checklistModelId: checklists[index].id })
    // } 
  }

  async updateWorkflowModel(model: WorkflowModel, checklists: any[]) {
    // await this.deleteModel(model);
    // delete model.id;
    // await this.createWorkflowModel(model, checklists);
  }


  async deleteModel(workflow: WorkflowModel) {
    // const result = await this.api.DeleteWorkflowModel({id: workflow.id});
  }
}
