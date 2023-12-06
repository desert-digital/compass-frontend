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
  DeleteChecklistActionsMutation,
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

  async getChecklistModelActionsFromId(id: string): Promise<any> {
    const checklistResult = await API.graphql<GraphQLQuery<GetChecklistModelQuery>>(
      graphqlOperation(queries.getChecklistModel, { id: id })
    );
    return checklistResult.data.getChecklistModel.actions.items;  
  }

  async createChecklistModel(checklistModel: ChecklistModel, actions: ActionModel[]) {
    const checklistModelDetails = {
      input: {
        company: 'seaforth',
        name: checklistModel.name,
        duration: checklistModel.duration,
        notes: checklistModel.notes,
        precharter: checklistModel.preCharter,
      }
    }

    const checklistMutationResult = await API.graphql<GraphQLQuery<CreateChecklistModelMutation>>(
      graphqlOperation(mutations.createChecklistModel, checklistModelDetails)
    );
    const checklist = checklistMutationResult.data.createChecklistModel;

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
    const checklistModelId = {
      checklistModelId: checklistModel.id
    }

    const checklistActionsResult = await API.graphql<GraphQLQuery<any>>(
      graphqlOperation(queries.checklistActionsByChecklistModelId, { checklistModelId: checklistModel.id })
    )

    const checklistActions = checklistActionsResult.data.checklistActionsByChecklistModelId.items;

    for (let checkListAction of checklistActions) {
      const checklistActionId = {
        input: {
          id: checkListAction.id
        }
      }
      await API.graphql<GraphQLQuery<DeleteChecklistActionsMutation>>(
        graphqlOperation(mutations.deleteChecklistActions, checklistActionId)
      );
    }

    for (let action of actions) {
      const checklistActionsDetails = {
        input: {
          actionModelId: action.id,
          checklistModelId: checklistModel.id
        },
      }

      await API.graphql(graphqlOperation(mutations.createChecklistActions, checklistActionsDetails));
    }
  }

  async deleteModel(checklistModel: ChecklistModel) {
    const checklistModelId = {
      checklistModelId: checklistModel.id
    }

    const checklistActionsResult = await API.graphql<GraphQLQuery<any>>(
      graphqlOperation(queries.checklistActionsByChecklistModelId, { checklistModelId: checklistModel.id })
    )

    const checklistActions = checklistActionsResult.data.checklistActionsByChecklistModelId.items;

    for (let checkListAction of checklistActions) {
      const checklistActionId = {
        input: {
          id: checkListAction.id
        }
      }
      await API.graphql<GraphQLQuery<DeleteChecklistActionsMutation>>(
        graphqlOperation(mutations.deleteChecklistActions, checklistActionId)
      );
    }

    await API.graphql<GraphQLQuery<DeleteChecklistModelMutation>>(
      graphqlOperation(mutations.deleteChecklistModel, { input: { id: checklistModel.id } })
    );

    // TO DO: should also delete the _checklists_ that use this model, and 
    // then the workflow models that use the _checklist_
  }
}
