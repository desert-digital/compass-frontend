// Core

import { Injectable } from '@angular/core';

// Amplify

import { listActions, getAction } from '../../graphql/queries';
import { createAction } from '../../graphql/mutations';
import { generateClient } from '@aws-amplify/api';

// Local

import { Action, ActionModel, Checklist } from '../API.service';

@Injectable({
  providedIn: 'root'
})
export class ActionsService {

  client = generateClient();

  constructor() { }

  async getActions(): Promise<Action[]> {
    const actions = await this.client.graphql({ query: listActions })
    return actions.data.listActions.items as Action[];
  }

  async getActionById(id: string): Promise<Action> {
    const action = await this.client.graphql({
      query: getAction,
      variables: {
        id: id
      }
    });
    return action.data.getAction as Action;
  }

  async createActionFromModel(checklist: Checklist, actionModel: ActionModel): Promise<Action> {
    const action = await this.client.graphql({
      query: createAction,
      variables: {
        input: {
          status: false,
          company: actionModel.company,
          name: actionModel.name,
          duration: actionModel.duration,
          actualStart: '0',
          actualEnd: '0',
          checklistStepsId: checklist.id
        }
      }
    });

    return action.data.createAction as Action;
    }
}
