// Core

import { Injectable } from '@angular/core';
import { FormArray } from '@angular/forms';

// Amplify

import { generateClient } from '@aws-amplify/api';
import { listWorkflows, getWorkflow } from '../../graphql/queries';
import { createWorkflow } from '../../graphql/mutations';

import { PendingEvent, Workflow, WorkflowModel } from '../API.service';

// Local

import { WorkflowModelsService } from 'src/app/services/workflow-models.service';
import { ChecklistModelsService } from './checklist-models.service';
import { ChecklistsService } from './checklists.service';

@Injectable({
  providedIn: 'root'
})
export class WorkflowService {

  client = generateClient();

  constructor(private _workflowModelsService: WorkflowModelsService,
    private _checklistService: ChecklistsService,
    private _checklistModelsService: ChecklistModelsService) { }

  async getWorkflows(): Promise<Workflow[]> {
    const workflows = await this.client.graphql({ query: listWorkflows })
    return workflows.data.listWorkflows.items as Workflow[];
  }

  async createWorkflowFromModel(event: PendingEvent, workflowModel: WorkflowModel, assignees: FormArray): Promise<Workflow> {
    const now = new Date().toISOString();

    const mustEndTime = new Date(event.end);
    const mustStartTime = new Date(mustEndTime.getTime() - (workflowModel.duration * 60 * 1000));

    const newWorkflow = await this.client.graphql({
      query: createWorkflow,
      variables: {
        input: {
          company: workflowModel.company,
          name: workflowModel.name,
          actualStart: now,
          mustStart: mustStartTime.toISOString(),
          mustEnd: mustEndTime.toISOString()
        }
      }
    });


    // For each Checklist Model in the Workflow, create a Checklist
    // Push the checklist into an array and add all the Checklists to 
    // the Workflow
    //
    // Use the Must Start time from the next Checklist in the sequence
    // as the Must End time

    let endTime = event.end;

    for (let index = workflowModel.checklistModels.items.length - 1; index >= 0; index -= 1) {
      const checklist = await this._checklistService.createChecklistFromModel(
        workflowModel.checklistModels.items[index].checklistModel,
        assignees.controls[index].value,
        endTime
      );
      endTime = checklist.mustStart;
    }

    return newWorkflow.data.createWorkflow as Workflow;
  }

  async getWorkflowById(workflowId: string): Promise<Workflow> {
    if (!workflowId) {
      throw new Error('Workflow ID is required');
    }

    try {
      const response = await this.client.graphql({
        query: getWorkflow,
        variables: {
          id: workflowId
        }
      });

      if (!response.data?.getWorkflow) {
        throw new Error(`Workflow with ID ${workflowId} not found`);
      }

      return response.data.getWorkflow as Workflow;
    } catch (error) {
      console.error(`Error fetching workflow ${workflowId}:`, error);
      throw new Error(`Failed to fetch workflow: ${error.message}`);
    }
  }
}
