// Core

import { Injectable } from '@angular/core';

// Amplify


import { API, graphqlOperation } from 'aws-amplify';
import * as queries from '../../graphql/queries';
import { GraphQLQuery } from '@aws-amplify/api';
import { ListWorkflowsQuery, Workflow } from '../API.service';

import { PendingEvent, WorkflowModel } from '../API.service';

// Local

import { WorkflowModelsService } from 'src/app/services/workflow-models.service';
import { ChecklistModelsService } from './checklist-models.service';
import { ChecklistsService } from './checklists.service';

@Injectable({
  providedIn: 'root'
})
export class WorkflowService {


  constructor(private _workflowModelsService: WorkflowModelsService,
    private _checklistService: ChecklistsService,
    private _checklistModelsService: ChecklistModelsService) { }

  async getChecklists(): Promise<any> {
    const checklists = await API.graphql<GraphQLQuery<ListWorkflowsQuery>>(
      graphqlOperation(queries.listWorkflows)
    );

    return checklists;
  };

  getWorkflows() {

  }

  async createWorkflowFromModel(event: PendingEvent, workflowModel: WorkflowModel): Promise<string> {
    const now = new Date().toISOString();
  
    const mustEndTime = new Date(event.end);
    const mustStartTime = new Date(mustEndTime.getTime() - (workflowModel.duration * 60 * 1000));

    const workflowDetails = {
      company: workflowModel.company,
      name: workflowModel.name,
      actualStart: now,
      mustStart: mustStartTime.toISOString(),
      mustEnd: mustEndTime.toISOString()
    }
    // For each Checklist Model in the Workflow, create a Checklist
    // Push the checklist into an array and add all the Checklists to 
    // the Workflow
    //
    // Use the Must Start time from the next Checklist in the sequence
    // as the Must End time
    
    let endTime = event.end;

    for (let index = workflowModel.checklists.items.length - 1; index >= 0; index -= 1) {
      let newEndTime = await this._checklistService.createChecklistFromModel(
        workflowModel.checklists.items[index].checklistModel,
        endTime
      );
      endTime = newEndTime;
    }
    
    return '1000000002';
  }
}
