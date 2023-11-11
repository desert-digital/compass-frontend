// Core

import { Injectable } from '@angular/core';

// Amplify 

import { API, graphqlOperation } from 'aws-amplify';
import * as queries from '../../graphql/queries';
import * as mutations from '../../graphql/mutations';
import { GraphQLQuery } from '@aws-amplify/api';
import { CreateWorkflowModelMutation, DeleteWorkflowChecklistsInput, GetWorkflowModelQuery, ListWorkflowModelsQuery } from '../API.service';

// Local

import { ChecklistModel, WorkflowModel } from '../API.service';

@Injectable({
  providedIn: 'root'
})
export class WorkflowModelsService {

  constructor() { }

  async getWorkflowModels(): Promise<WorkflowModel[]> {
    const workflowModels = await API.graphql<GraphQLQuery<ListWorkflowModelsQuery>>(
      graphqlOperation(queries.listWorkflowModels)
    );

    return workflowModels.data.listWorkflowModels.items as WorkflowModel[];
  };


  async getWorkflowModelById(id: string): Promise<WorkflowModel> {
    const workflowModel = await API.graphql<GraphQLQuery<GetWorkflowModelQuery>>(
      graphqlOperation(queries.getWorkflowModel, { id: id })
    );    
    
    return workflowModel.data.getWorkflowModel as WorkflowModel;
  }

  async createWorkflowModel(workflowModel: WorkflowModel, checklistModels: ChecklistModel[]) {
    const workflowModelDetails = {
      input: {
        company: 'seaforth',
        name: workflowModel.name,
        duration: workflowModel.duration,
        notes: workflowModel.notes
      }
    }

    const workflowMutationResult = await API.graphql<GraphQLQuery<CreateWorkflowModelMutation>>(
      graphqlOperation(mutations.createWorkflowModel, workflowModelDetails)
    )
    const workflow = workflowMutationResult.data.createWorkflowModel;

    for (let checklist of checklistModels) {
      const workflowChecklistDetails = {
        input: {
          checklistModelId: checklist.id,
          workflowModelId: workflow.id
        }
      }
      await API.graphql(graphqlOperation(mutations.createWorkflowChecklists, workflowChecklistDetails))

    }
  }

  async updateWorkflowModel(workflowModel: WorkflowModel, checklistModels: any[]) {
    const workflowModelId = {
      workflowModelId: workflowModel.id
    }

    const workflowChecklistResult = await API.graphql<GraphQLQuery<any>>(
      graphqlOperation(queries.workflowChecklistsByWorkflowModelId, {workflowModelId: workflowModel.id})
    )

    const workflowChecklists = workflowChecklistResult.data.workflowChecklistsByWorkflowModelId.items;
  
    for (let workflowChecklist of workflowChecklists) {
      const workflowChecklistId = {
        input: {
          id: workflowChecklist.id
        }
      }
      await API.graphql<GraphQLQuery<DeleteWorkflowChecklistsInput>>(
        graphqlOperation(mutations.deleteWorkflowChecklists, workflowChecklistId)
      );
    }
    
    for (let checklist of checklistModels) {
      const workflowChecklistDetails = {
        input: {
          checklistModelId: checklist.id,
          workflowModelId: workflowModel.id
        }
      }
      await API.graphql(graphqlOperation(mutations.createWorkflowChecklists, workflowChecklistDetails))

    }
  }

  async deleteModel(workflowModel: WorkflowModel) {
    const workflowModelId = {
      workflowModelId: workflowModel.id
    }

    const workflowChecklistResult = await API.graphql<GraphQLQuery<any>>(
      graphqlOperation(queries.workflowChecklistsByWorkflowModelId, {workflowModelId: workflowModel.id})
    )

    const workflowChecklists = workflowChecklistResult.data.workflowChecklistsByWorkflowModelId.items;
  
    for (let workflowChecklist of workflowChecklists) {
      const workflowChecklistId = {
        input: {
          id: workflowChecklist.id
        }
      }
      await API.graphql<GraphQLQuery<DeleteWorkflowChecklistsInput>>(
        graphqlOperation(mutations.deleteWorkflowChecklists, workflowChecklistId)
      );
    }

    await API.graphql<GraphQLQuery<DeleteWorkflowChecklistsInput>>(
      graphqlOperation(mutations.deleteWorkflowModel, {input: {id: workflowModel.id}})
    );
  }
}
