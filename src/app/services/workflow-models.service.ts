// Core

import { Injectable } from '@angular/core';

// Amplify 

import { generateClient } from '@aws-amplify/api';
import {
  listWorkflowModels, 
  getWorkflowModel, 
  workflowChecklistsByWorkflowModelId,
} from '../../graphql/queries';
import {
  createWorkflowModel,
  createWorkflowChecklists,
  deleteWorkflowModel,
  deleteWorkflowChecklists
} from '../../graphql/mutations';

// Local

import { ChecklistModel, WorkflowModel } from '../API.service';

@Injectable({
  providedIn: 'root'
})
export class WorkflowModelsService {

  client = generateClient();

  constructor() { }

  async getWorkflowModels(): Promise<WorkflowModel[]> {
    const workflowModels = await this.client.graphql({ query: listWorkflowModels });
    return workflowModels.data.listWorkflowModels.items as WorkflowModel[];
  }


  async getWorkflowModelById(id: string): Promise<WorkflowModel> {
    const workflowModel = await this.client.graphql({ query: getWorkflowModel, variables: { id: id } })
    return workflowModel.data.getWorkflowModel as WorkflowModel;
  }

  async createWorkflowModel(workflowModel: WorkflowModel, checklistModels: ChecklistModel[]) {
    const workflowMutationResult = await this.client.graphql({
      query: createWorkflowModel, variables: {
        input: {
          company: 'compass',
          name: workflowModel.name,
          duration: workflowModel.duration,
          notes: workflowModel.notes
        }
      }
    })
    const workflow = workflowMutationResult.data.createWorkflowModel;

    for (const checklist of checklistModels) {
      await this.client.graphql({
        query: createWorkflowChecklists,
        variables: {
          input: {
            checklistModelId: checklist.id,
            workflowModelId: workflow.id
          }
        }
      });
    }
  }

  async updateWorkflowModel(workflowModel: WorkflowModel, checklistModels: ChecklistModel[]) {
    const workflowChecklistResult = await this.client.graphql({
      query: workflowChecklistsByWorkflowModelId,
      variables: {
        workflowModelId: workflowModel.id
      }
    });

    const workflowChecklists = workflowChecklistResult.data.workflowChecklistsByWorkflowModelId.items;

    for (const workflowChecklist of workflowChecklists) {
      await this.client.graphql({
        query: deleteWorkflowChecklists,
        variables: {
          input: {
            id: workflowChecklist.id
          }
        }
      });
    }

    for (const checklist of checklistModels) {
      await this.client.graphql({
        query: createWorkflowChecklists,
        variables: {
          input: {
            checklistModelId: checklist.id,
            workflowModelId: workflowModel.id
          }
        }
      });

    }
  }

  async deleteModel(workflowModel: WorkflowModel) {

    const workflowChecklistResult = await this.client.graphql({
      query: workflowChecklistsByWorkflowModelId,
      variables: { workflowModelId: workflowModel.id }
    });

    const workflowChecklists = workflowChecklistResult.data.workflowChecklistsByWorkflowModelId.items;

    for (const workflowChecklist of workflowChecklists) {
      await this.client.graphql({
        query: deleteWorkflowChecklists,
        variables: {
          input: {
            id: workflowChecklist.id
          }
        }
      })
    }

    await this.client.graphql({
      query: deleteWorkflowModel,
      variables: {
        input: {
          id: workflowModel.id
        }
      }
    });
  }
}
