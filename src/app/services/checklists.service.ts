// Core

import { Injectable } from '@angular/core';

// Amplify

import { API, graphqlOperation } from 'aws-amplify';
import * as mutations from '../../graphql/mutations';
import * as queries from '../../graphql/queries';
import { GraphQLQuery } from '@aws-amplify/api';
import { ListChecklistsQuery, CreateChecklistMutation } from '../API.service';

// Local

import { Action, Checklist } from '../API.service';
import { ChecklistModelsService } from './checklist-models.service';
import { ActionsService } from './actions.service';


@Injectable({
  providedIn: 'root'
})
export class ChecklistsService {

  constructor(private _checklistModelService: ChecklistModelsService,
    private _actionsService: ActionsService) { }

  async getChecklists(): Promise<any> {
    const checklists = await API.graphql<GraphQLQuery<ListChecklistsQuery>>(
      graphqlOperation(queries.listVessels)
    );

    return checklists;
  };

  async createChecklist() {
    // await this.api.CreateChecklist(item);
  }

  async createChecklistFromModel(checklistModel: any, assigneeId: string, mustEnd: any): Promise<Checklist> {
    const now = new Date().toISOString();

    const mustEndTime = new Date(mustEnd);
    const mustStartTime = new Date(mustEndTime.getTime() - (checklistModel.duration * 60 * 1000));

    console.log(assigneeId);

    const checklistDetails = {
      input: {
        company: checklistModel.company,
        name: checklistModel.name,
        actualStart: now,
        mustStart: mustStartTime.toISOString(),
        mustEnd: mustEndTime.toISOString()
      }
    }

    const newChecklistMutationResult = await API.graphql<GraphQLQuery<CreateChecklistMutation>>(
      graphqlOperation(mutations.createChecklist, checklistDetails)
    );
    const newChecklist = newChecklistMutationResult.data.createChecklist;
    const checklistActionModels = await this._checklistModelService.getChecklistModelActionsFromId(checklistModel.id);

    // For each Action Model in the Checklist create an Action
    // Push the checklist into an array and add all the Checklists to 
    // the Workflow

    let actions = [];

    for (let checklistActionModel of checklistActionModels) {
      const newAction = await this._actionsService.createActionFromModel(newChecklist, checklistActionModel.actionModel);
      actions.push(newAction);
    }

    newChecklist.steps.items = actions;
    console.log(newChecklist);
    return newChecklist as Checklist;
  }
}


