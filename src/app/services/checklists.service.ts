// Core

import { Injectable } from '@angular/core';

// Amplify

import { generateClient } from '@aws-amplify/api';
import { createChecklist } from '../../graphql/mutations';
import { getStaff, listChecklists } from '../../graphql/queries';

// Local

import { Checklist, ChecklistModel, Action } from '../API.service';
import { ChecklistModelsService } from './checklist-models.service';
import { ActionsService } from './actions.service';
import { StaffService } from './staff.service';


@Injectable({
  providedIn: 'root'
})
export class ChecklistsService {

  client = generateClient();

  constructor(private _checklistModelService: ChecklistModelsService,
    private _actionsService: ActionsService,
    private _staffService: StaffService) { }

  async getChecklists(): Promise<Checklist[]> {
    const checklists = await this.client.graphql({ query: listChecklists });
    return checklists.data.listChecklists.items as Checklist[];
  }

  async createChecklistFromModel(checklistModel: ChecklistModel, assigneeId: any, mustEnd: string): Promise<Checklist> {
    const now = new Date().toISOString();
    const mustEndTime = new Date(mustEnd);
    const mustStartTime = new Date(mustEndTime.getTime() - (checklistModel.duration * 60 * 1000));

    console.log('Staff ID:', assigneeId, 'Type:', typeof assigneeId);

    const newChecklistMutationResult = await this.client.graphql({
      query: createChecklist,
      variables: {
        input: {
          company: 'compass',
          name: checklistModel.name,
          actualStart: now,
          checklistOwnerId: assigneeId.assignee,
          mustStart: mustStartTime.toISOString(),
          mustEnd: mustEndTime.toISOString()
        }
      }
    }
    );
    const newChecklist: Checklist = newChecklistMutationResult.data.createChecklist as Checklist;

    // Safely access the action models with null checking
    const checklistActionModels = checklistModel?.actionModels?.items || [];
    const actions: Action[] = [];

    // Create actions for each action model
    if (checklistActionModels.length > 0) {
      for (const checklistActionModel of checklistActionModels) {
        if (checklistActionModel?.actionModel) {
          try {
            const newAction = await this._actionsService.createActionFromModel(
              newChecklist,
              checklistActionModel.actionModel
            );
            actions.push(newAction);
          } catch (error) {
            console.error('Error creating action:', error);
            // You might want to handle this error according to your needs
          }
        }
      }
    }

    // Update the checklist with the created actions
    const updatedChecklist = {
      ...newChecklist,
      actions: actions
    };

    console.log('Created checklist with actions:', updatedChecklist);
    return updatedChecklist;

  } catch(error) {
    console.error('Error creating checklist:', error);
    throw new Error('Failed to create checklist: ' + error.message);
  }
}


