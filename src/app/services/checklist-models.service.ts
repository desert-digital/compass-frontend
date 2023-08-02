// Core

import { Injectable } from '@angular/core';

// Amplify

import { API, graphqlOperation } from 'aws-amplify';
import * as queries from '../../graphql/queries';
import * as mutations from '../../graphql/mutations';

import { GraphQLQuery } from '@aws-amplify/api';
import {
  ListChecklistModelsQuery,
  GetChecklistModelQuery,
  DeleteChecklistModelMutation,
  CreateChecklistModelMutation,
  ListChecklistActionsQuery,
} from '../API.service';

// Local

import { ChecklistModel, ActionModel } from '../API.service';
import { ActionsService } from './actions.service';

@Injectable({
  providedIn: 'root'
})
export class ChecklistModelsService {

  constructor(
    private _actionsService: ActionsService) { }

  async getChecklistModels(): Promise<ChecklistModel[]> {
    const checklistResult = await API.graphql<GraphQLQuery<ListChecklistModelsQuery>>(
      graphqlOperation(queries.listChecklistModels)
    );
    return checklistResult.data.listChecklistModels.items as ChecklistModel[];
  };

  async getChecklistModelFromId(id: string): Promise<ChecklistModel> {
    const checklistResult = await API.graphql<GraphQLQuery<GetChecklistModelQuery>>(
      graphqlOperation(queries.getChecklistModel, { id: id })
    );
    return checklistResult.data.getChecklistModel as ChecklistModel;
  }

  async createChecklistModel(checklistModel: ChecklistModel, actions: ActionModel[]) {
    const checklistModelDetails = {
      input: {
        company: '0',
        name: checklistModel.name,
        duration: checklistModel.duration,
        notes: checklistModel.notes,
        precharter: checklistModel.preCharter,
      }
    }

    const checklistResult = await API.graphql<GraphQLQuery<CreateChecklistModelMutation>>(
      graphqlOperation(mutations.createChecklistModel, checklistModelDetails)
    );
    const checklist = checklistResult.data.createChecklistModel;

    for (let action of actions) {
      const checklistActionsDetails = {
        input: {
            actionModelId: action.id,
            checklistModelId: checklist.id
        },
      }
    
      await API.graphql(graphqlOperation(mutations.createChecklistActions, checklistActionsDetails));
    }
  }

  async updateChecklistModel(checklistModel: ChecklistModel, actions: ActionModel[]) {
    this.deleteModel(checklistModel);
    this.createChecklistModel(checklistModel, actions);
  }

  async deleteModel(checklistModel: ChecklistModel) {
    const checklistModelId = {
      input: {
        checklistModelId: checklistModel.id
      }
    }

    const checklistActions = await API.graphql<GraphQLQuery<ListChecklistActionsQuery>>(
      graphqlOperation(queries.checklistActionsByChecklistModelId, checklistModelId)
    )

    console.log(JSON.stringify(checklistActions));
    // await API.graphql<GraphQLQuery<DeleteChecklistModelMutation>>(
    //   graphqlOperation(mutations.deleteChecklistModel, checklistModelId)
    // );

    // TO DO: should also delete the _checklists_ that use this model, and 
    // then the workflow models that use the _checklist_
  }
}
