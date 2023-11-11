// Core

import { Injectable } from '@angular/core';

// Amplify

import { API, graphqlOperation } from 'aws-amplify';
import * as queries from '../../graphql/queries';
import * as mutations from '../../graphql/mutations';

import { GraphQLQuery } from '@aws-amplify/api';
import {
  ListActionModelsQuery,
  GetActionModelQuery,
  DeleteActionModelMutation,
  CreateActionModelMutation,
  UpdateActionModelMutation
} from '../API.service';

// Local

import { ActionModel } from '../API.service';

@Injectable({
  providedIn: 'root'
})
export class ActionModelsService {

  constructor() { }

  async getActionModels(): Promise<ActionModel[]> {
    const actionModels = await API.graphql<GraphQLQuery<ListActionModelsQuery>>(
      graphqlOperation(queries.listActionModels)
    );
    return actionModels.data.listActionModels.items as ActionModel[];
  }

  async getActionModelFromId(id: string): Promise<ActionModel> {
    const actionModel = await API.graphql<GraphQLQuery<GetActionModelQuery>>(
      graphqlOperation(queries.getActionModel, { id: id })
    );
    return actionModel.data.getActionModel;
  }

  async createActionModel(model: ActionModel) {
    const actionModelDetails = {
      input: {
        company: 'seaforth', // eventually this will be provided as part of the account information
        name: model.name,
        duration: model.duration,
        notes: model.notes
      }
    }

    await API.graphql<GraphQLQuery<CreateActionModelMutation>>(
      graphqlOperation(mutations.createActionModel, actionModelDetails)
    );
  }

  async updateModel(actionModel: ActionModel) {
    const actionModelDetails = {
      input: {
        id: actionModel.id,
        company: actionModel.company,
        name: actionModel.name,
        duration: actionModel.duration,
        notes: actionModel.notes
      }
    }

    await API.graphql<GraphQLQuery<UpdateActionModelMutation>>(
      graphqlOperation(mutations.updateActionModel, actionModelDetails)
    );
  }

  async deleteModel(action: ActionModel) {
    const actionModelDetails = {
      input: {
        id: action.id
      }
    }

    await API.graphql<GraphQLQuery<DeleteActionModelMutation>>(
      graphqlOperation(mutations.deleteActionModel, actionModelDetails)
    );

    // TO DO: should also delete the _actions_ that use this model, and 
    // then the checklist models that use the _action_
  }
}
