// Core

import { Injectable } from '@angular/core';

// Amplify

import { generateClient } from '@aws-amplify/api';
import {
  listChecklistModels,
  getChecklistModel,
  checklistActionsByChecklistModelId
} from '../../graphql/queries';
import {
  createChecklistModel,
  deleteChecklistModel,
  createChecklistActions,
  deleteChecklistActions
} from '../../graphql/mutations';

// Local

import { ChecklistModel, ActionModel, ChecklistActions } from '../API.service';
import { ActionsService } from './actions.service';

@Injectable({
  providedIn: 'root'
})
export class ChecklistModelsService {

  client = generateClient()

  constructor(
    private _actionsService: ActionsService) { }

  async getChecklistModels(): Promise<ChecklistModel[]> {
    const checklistResult = await this.client.graphql({ query: listChecklistModels })
    return checklistResult.data.listChecklistModels.items as ChecklistModel[];
  }

  async getChecklistModelFromId(id: string): Promise<ChecklistModel> {
    const checklistResult = await this.client.graphql({
      query: getChecklistModel,
      variables: { id: id }
    })
    return checklistResult.data.getChecklistModel as ChecklistModel;
  }

  async getChecklistModelActionsFromId(id: string): Promise<ChecklistActions[]> {
    const checklistResult = await this.client.graphql({
      query: getChecklistModel,
      variables: {
        id: id
      }
    })
    return checklistResult.data.getChecklistModel.actionModels.items as ChecklistActions[];
  }

  async createChecklistModel(checklistModel: ChecklistModel, actions: ActionModel[]) {
    const checklistMutationResult = await this.client.graphql({
      query: createChecklistModel,
      variables: {
        input: {
          company: 'seaforth',
          name: checklistModel.name,
          duration: checklistModel.duration,
          notes: checklistModel.notes,
          preCharter: checklistModel.preCharter,
        }
      }
    });

    const checklist = checklistMutationResult.data.createChecklistModel;

    for (const action of actions) {
      await this.client.graphql({
        query: createChecklistActions,
        variables: {
          input: {
            actionModelId: action.id,
            checklistModelId: checklist.id
          },
        }
      });
    }
  }

  async updateChecklistModel(checklistModel: ChecklistModel, actions: ActionModel[]) {
    const checklistActionsResult = await this.client.graphql({
      query: checklistActionsByChecklistModelId,
      variables: {
        checklistModelId: checklistModel.id
      }
    });

    const checklistActions = checklistActionsResult.data.checklistActionsByChecklistModelId.items;

    for (const checkListAction of checklistActions) {
      await this.client.graphql({
        query: deleteChecklistActions,
        variables: {
          input: {
            id: checkListAction.id
          }
        }
      })
    }

    for (const action of actions) {
      await this.client.graphql({
        query: createChecklistActions,
        variables: {
          input: {
            actionModelId: action.id,
            checklistModelId: checklistModel.id
          },
        }
      });
    }
  }

  async deleteModel(checklistModel: ChecklistModel) {
    const checklistActionsResult = await this.client.graphql({
      query: deleteChecklistModel,
      variables: {
        input: {
          id: checklistModel.id
        }
      }
    })

    const checklistActions = checklistActionsResult.data.deleteChecklistModel.actionModels.items;

    for (const checkListAction of checklistActions) {
      await this.client.graphql({
        query: deleteChecklistActions,
        variables: {
          input: {
            id: checkListAction.id
          }
        }
      })
    }

    await this.client.graphql({
      query: deleteChecklistModel,
      variables: {
        input: { id: checklistModel.id }
      }
    });

    // TO DO: should also delete the _checklists_ that use this model, and 
    // then the workflow models that use the _checklist_
  }
}
