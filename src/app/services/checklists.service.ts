// Core

import { Injectable } from '@angular/core';

// Amplify

import { generateClient } from '@aws-amplify/api';
import { createChecklist } from '../../graphql/mutations';
import { listChecklists } from '../../graphql/queries';

// Local

import { Checklist, ChecklistModel } from '../API.service';
import { ChecklistModelsService } from './checklist-models.service';
import { ActionsService } from './actions.service';


@Injectable({
  providedIn: 'root'
})
export class ChecklistsService {

  client = generateClient();

  constructor(private _checklistModelService: ChecklistModelsService,
    private _actionsService: ActionsService) { }

  async getChecklists(): Promise<Checklist[]> {
    const checklists = await this.client.graphql({ query: listChecklists });
    return checklists.data.listChecklists.items as Checklist[];
  }

  async createChecklist() {
    // await this.api.CreateChecklist(item);
  }

  async createChecklistFromModel(checklistModel: ChecklistModel, assigneeId: string, mustEnd: string): Promise<Checklist> {
    const now = new Date().toISOString();
    const mustEndTime = new Date(mustEnd);
    const mustStartTime = new Date(mustEndTime.getTime() - (checklistModel.duration * 60 * 1000));
    const newChecklistMutationResult = await this.client.graphql({
      query: createChecklist,
      variables: {
        input: {
          company: 'compass',
          name: checklistModel.name,
          actualStart: now,
          checklistOwnerId: assigneeId,
          mustStart: mustStartTime.toISOString(),
          mustEnd: mustEndTime.toISOString()
        }
      }
    }
    );
    const newChecklist: Checklist = newChecklistMutationResult.data.createChecklist as Checklist;
    const checklistActionModels = checklistModel.actionModels.items;

    // For each Action Model in the Checklist create an Action
    // Push the checklist into an array and add all the Checklists to 
    // the Workflow

    const actions = [];

    for (const checklistActionModel of checklistActionModels) {
      const newAction = await this._actionsService.createActionFromModel(newChecklist, checklistActionModel.actionModel);
      actions.push(newAction);
    }

    // newChecklist.steps = actions;
    console.log(newChecklist);
    return newChecklist as Checklist;
  }
}


