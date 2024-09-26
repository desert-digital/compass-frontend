// Core

import { Injectable } from '@angular/core';

// Amplify

import { generateClient } from 'aws-amplify/api';

import { listActionModels, getActionModel } from '../../graphql/queries';
import { createActionModel, updateActionModel, deleteActionModel } from 'src/graphql/mutations';


// Local

import { ActionModel } from '../API.service';

@Injectable({
  providedIn: 'root'
})
export class ActionModelsService {

  client = generateClient();

  constructor() { }

  async getActionModels(): Promise<ActionModel[]> {
    const actionModels = await this.client.graphql({ query: listActionModels })
    return actionModels.data.listActionModels.items as ActionModel[]
  }

  async getActionModelFromId(id: string): Promise<ActionModel> {
    const actionModel = await this.client.graphql({
      query: getActionModel,
      variables: {
        id: id
      }
    })
    return actionModel.data.getActionModel as ActionModel;
  }

  async createActionModel(model: ActionModel) {
    await this.client.graphql({
      query: createActionModel,
      variables: {
        input: {
          company: 'seaforth', // eventually this will be provided as part of the account information
          name: model.name,
          duration: model.duration,
          notes: model.notes
        }
      }
    })
  }

  async updateModel(actionModel: ActionModel) {
    await this.client.graphql({
      query: updateActionModel,
      variables: {
        input: {
          id: actionModel.id,
          company: actionModel.company,
          name: actionModel.name,
          duration: actionModel.duration,
          notes: actionModel.notes
        }
      }
    });
  }

  async deleteModel(action: ActionModel) {
    await this.client.graphql({
      query: deleteActionModel,
      variables: {
        input: {
          id: action.id
        }
      }
    })

    // TO DO: should also delete the _actions_ that use this model, and 
    // then the checklist models that use the _action_
  }

  async createDemoActions() {
    let _action =
      {
        company: 'seaforth',
        name: 'Raise sails and unfurl the jib',
        notes: 'Inspect the sails and hull',
        duration: 10
      } as ActionModel;
    this.createActionModel(_action);
    _action =
      {
        company: 'seaforth',
        name: 'Inventory safety equipment',
        notes: 'Ensure the required safety equipment is on board',
        duration: 10
      } as ActionModel;
    this.createActionModel(_action);
    _action =
    {
      company: 'seaforth',
      name: 'Inspect rigging - standing and running',
      notes: 'Ensure the rigging is not broken and the lines are not worn',
      duration: 10
    } as ActionModel;
  this.createActionModel(_action);
  }
}
