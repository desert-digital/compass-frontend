// Core

import { Injectable } from '@angular/core';

// Amplify

import { API, graphqlOperation } from 'aws-amplify';
import * as queries from '../../graphql/queries';
import * as mutations from '../../graphql/mutations';
import { GraphQLQuery } from '@aws-amplify/api';
import { GetActionQuery, ListActionsQuery, CreateActionMutation } from '../API.service';

// Local

import { Action, ActionModel, Checklist } from '../API.service';


@Injectable({
  providedIn: 'root'
})
export class ActionsService {

  constructor() { }

  async getActions(): Promise<Action[]> {
    const actions = await API.graphql<GraphQLQuery<ListActionsQuery>>(
      graphqlOperation(queries.listActions)
    );
    return actions as Action[];
  }

  async getActionById(id: string): Promise<Action> {
    const action = await API.graphql<GraphQLQuery<GetActionQuery>>(
      graphqlOperation(queries.getAction, { id: id })
    );
    return action as Action;
  }

  async createActionFromModel(checklist: Checklist, actionModel: ActionModel): Promise<Action> {
    const actionDetail = {
      input: {
        status: false,
        company: actionModel.company,
        name: actionModel.name,
        duration: actionModel.duration,
        actualStart: 0,
        actualEnd: 0,
        checklistStepsId: checklist.id
      }
    }

    const action = await API.graphql<GraphQLQuery<CreateActionMutation>>(
      graphqlOperation(mutations.createAction, actionDetail)
    );

    return action.data.createAction as Action;
  }
}
