// Core

import { Injectable } from '@angular/core';

// Amplify

import { API, graphqlOperation } from 'aws-amplify';
import * as queries from '../../graphql/queries';
import { GraphQLQuery } from '@aws-amplify/api';
import { ListChecklistsQuery } from '../API.service';

// Local

import { Checklist, ChecklistModel } from '../API.service';
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

  async createChecklistFromModel(checklistModel: any, mustEnd: any): Promise<string> {
    const now = new Date().toISOString();

    const mustEndTime = new Date(mustEnd);
    const mustStartTime = new Date(mustEndTime.getTime() - (checklistModel.duration * 60 * 1000));

    const checklistDetails = {
      company: checklistModel.company,
      name: checklistModel.name,
      actualStart: now,
      mustStart: mustStartTime.toISOString(),
      mustEnd: mustEndTime.toISOString()
    }

    const actionModels = await this._checklistModelService.getChecklistModelActionsFromId(checklistModel.id);

    // For each Action Model in the Cheklist create an Action
    // Push the checklist into an array and add all the Checklists to 
    // the Workflow

    for (let actionModel of actionModels) {
      this._actionsService.createActionFromModel(actionModel);
    }

    return (mustStartTime.toISOString());
  }
}


