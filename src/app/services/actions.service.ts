// Core

import { Injectable } from '@angular/core';

// Amplify

import { API, graphqlOperation } from 'aws-amplify';
import * as queries from '../../graphql/queries';
import { GraphQLQuery } from '@aws-amplify/api';
import { GetActionQuery, ListActionsQuery } from '../API.service';

// Local

import { Action, ActionModel } from '../API.service';


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
      graphqlOperation(queries.getAction, {id: id})
    );   
    return action as Action;
  }

  async createActionFromModel(actionModel: ActionModel)
  {
    const actionDetail = {
      status: false,
      model: actionModel,
      actualStart: 0,
      actualEnd: 0
    }
    console.log("Action: " + JSON.stringify(actionDetail));
  }
}
