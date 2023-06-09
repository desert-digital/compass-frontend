/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from "@angular/core";
import API, { graphqlOperation, GraphQLResult } from "@aws-amplify/api-graphql";
import { Observable } from "zen-observable-ts";

export interface SubscriptionResponse<T> {
  value: GraphQLResult<T>;
}

export type __SubscriptionContainer = {
  onCreatePendingEvent: OnCreatePendingEventSubscription;
  onUpdatePendingEvent: OnUpdatePendingEventSubscription;
  onDeletePendingEvent: OnDeletePendingEventSubscription;
  onCreateVessel: OnCreateVesselSubscription;
  onUpdateVessel: OnUpdateVesselSubscription;
  onDeleteVessel: OnDeleteVesselSubscription;
  onCreateStaff: OnCreateStaffSubscription;
  onUpdateStaff: OnUpdateStaffSubscription;
  onDeleteStaff: OnDeleteStaffSubscription;
  onCreateAction: OnCreateActionSubscription;
  onUpdateAction: OnUpdateActionSubscription;
  onDeleteAction: OnDeleteActionSubscription;
  onCreateActionStep: OnCreateActionStepSubscription;
  onUpdateActionStep: OnUpdateActionStepSubscription;
  onDeleteActionStep: OnDeleteActionStepSubscription;
  onCreateChecklistSteps: OnCreateChecklistStepsSubscription;
  onUpdateChecklistSteps: OnUpdateChecklistStepsSubscription;
  onDeleteChecklistSteps: OnDeleteChecklistStepsSubscription;
  onCreateChecklist: OnCreateChecklistSubscription;
  onUpdateChecklist: OnUpdateChecklistSubscription;
  onDeleteChecklist: OnDeleteChecklistSubscription;
  onCreateWorkflowSteps: OnCreateWorkflowStepsSubscription;
  onUpdateWorkflowSteps: OnUpdateWorkflowStepsSubscription;
  onDeleteWorkflowSteps: OnDeleteWorkflowStepsSubscription;
  onCreateWorkflow: OnCreateWorkflowSubscription;
  onUpdateWorkflow: OnUpdateWorkflowSubscription;
  onDeleteWorkflow: OnDeleteWorkflowSubscription;
};

export type CreatePendingEventInput = {
  id?: string | null;
  company?: string | null;
  body?: string | null;
  start?: string | null;
  end?: string | null;
  item?: string | null;
  item_id?: string | null;
  status?: string | null;
};

export type ModelPendingEventConditionInput = {
  company?: ModelIDInput | null;
  body?: ModelStringInput | null;
  start?: ModelStringInput | null;
  end?: ModelStringInput | null;
  item?: ModelStringInput | null;
  item_id?: ModelStringInput | null;
  status?: ModelStringInput | null;
  and?: Array<ModelPendingEventConditionInput | null> | null;
  or?: Array<ModelPendingEventConditionInput | null> | null;
  not?: ModelPendingEventConditionInput | null;
};

export type ModelIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null"
}

export type ModelSizeInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
};

export type ModelStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export type PendingEvent = {
  __typename: "PendingEvent";
  id: string;
  company?: string | null;
  body?: string | null;
  start?: string | null;
  end?: string | null;
  item?: string | null;
  item_id?: string | null;
  status?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdatePendingEventInput = {
  id: string;
  company?: string | null;
  body?: string | null;
  start?: string | null;
  end?: string | null;
  item?: string | null;
  item_id?: string | null;
  status?: string | null;
};

export type DeletePendingEventInput = {
  id: string;
};

export type CreateVesselInput = {
  id?: string | null;
  company?: string | null;
  name?: string | null;
  type?: string | null;
  vesselDefaultWorkflowId?: string | null;
};

export type ModelVesselConditionInput = {
  company?: ModelIDInput | null;
  name?: ModelStringInput | null;
  type?: ModelStringInput | null;
  and?: Array<ModelVesselConditionInput | null> | null;
  or?: Array<ModelVesselConditionInput | null> | null;
  not?: ModelVesselConditionInput | null;
  vesselDefaultWorkflowId?: ModelIDInput | null;
};

export type Vessel = {
  __typename: "Vessel";
  id: string;
  company?: string | null;
  name?: string | null;
  type?: string | null;
  defaultWorkflow?: WorkflowSteps | null;
  createdAt: string;
  updatedAt: string;
  vesselDefaultWorkflowId?: string | null;
};

export type WorkflowSteps = {
  __typename: "WorkflowSteps";
  id: string;
  name?: string | null;
  actions?: ModelChecklistStepsConnection | null;
  createdAt: string;
  updatedAt: string;
};

export type ModelChecklistStepsConnection = {
  __typename: "ModelChecklistStepsConnection";
  items: Array<ChecklistSteps | null>;
  nextToken?: string | null;
};

export type ChecklistSteps = {
  __typename: "ChecklistSteps";
  id: string;
  name?: string | null;
  actions?: ModelActionStepConnection | null;
  createdAt: string;
  updatedAt: string;
  workflowStepsActionsId?: string | null;
};

export type ModelActionStepConnection = {
  __typename: "ModelActionStepConnection";
  items: Array<ActionStep | null>;
  nextToken?: string | null;
};

export type ActionStep = {
  __typename: "ActionStep";
  stepNumber?: number | null;
  action?: Action | null;
  actualStart?: string | null;
  actualEnd?: string | null;
  id: string;
  createdAt: string;
  updatedAt: string;
  checklistStepsActionsId?: string | null;
  actionStepActionId?: string | null;
};

export type Action = {
  __typename: "Action";
  id: string;
  company?: string | null;
  name?: string | null;
  status?: string | null;
  notes?: string | null;
  duration?: number | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateVesselInput = {
  id: string;
  company?: string | null;
  name?: string | null;
  type?: string | null;
  vesselDefaultWorkflowId?: string | null;
};

export type DeleteVesselInput = {
  id: string;
};

export type CreateStaffInput = {
  id?: string | null;
  company?: string | null;
  name?: string | null;
  email?: string | null;
};

export type ModelStaffConditionInput = {
  company?: ModelIDInput | null;
  name?: ModelStringInput | null;
  email?: ModelStringInput | null;
  and?: Array<ModelStaffConditionInput | null> | null;
  or?: Array<ModelStaffConditionInput | null> | null;
  not?: ModelStaffConditionInput | null;
};

export type Staff = {
  __typename: "Staff";
  id: string;
  company?: string | null;
  name?: string | null;
  email?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateStaffInput = {
  id: string;
  company?: string | null;
  name?: string | null;
  email?: string | null;
};

export type DeleteStaffInput = {
  id: string;
};

export type CreateActionInput = {
  id?: string | null;
  company?: string | null;
  name?: string | null;
  status?: string | null;
  notes?: string | null;
  duration?: number | null;
};

export type ModelActionConditionInput = {
  company?: ModelIDInput | null;
  name?: ModelStringInput | null;
  status?: ModelStringInput | null;
  notes?: ModelStringInput | null;
  duration?: ModelIntInput | null;
  and?: Array<ModelActionConditionInput | null> | null;
  or?: Array<ModelActionConditionInput | null> | null;
  not?: ModelActionConditionInput | null;
};

export type ModelIntInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
};

export type UpdateActionInput = {
  id: string;
  company?: string | null;
  name?: string | null;
  status?: string | null;
  notes?: string | null;
  duration?: number | null;
};

export type DeleteActionInput = {
  id: string;
};

export type CreateActionStepInput = {
  stepNumber?: number | null;
  actualStart?: string | null;
  actualEnd?: string | null;
  id?: string | null;
  checklistStepsActionsId?: string | null;
  actionStepActionId?: string | null;
};

export type ModelActionStepConditionInput = {
  stepNumber?: ModelIntInput | null;
  actualStart?: ModelStringInput | null;
  actualEnd?: ModelStringInput | null;
  and?: Array<ModelActionStepConditionInput | null> | null;
  or?: Array<ModelActionStepConditionInput | null> | null;
  not?: ModelActionStepConditionInput | null;
  checklistStepsActionsId?: ModelIDInput | null;
  actionStepActionId?: ModelIDInput | null;
};

export type UpdateActionStepInput = {
  stepNumber?: number | null;
  actualStart?: string | null;
  actualEnd?: string | null;
  id: string;
  checklistStepsActionsId?: string | null;
  actionStepActionId?: string | null;
};

export type DeleteActionStepInput = {
  id: string;
};

export type CreateChecklistStepsInput = {
  id?: string | null;
  name?: string | null;
  workflowStepsActionsId?: string | null;
};

export type ModelChecklistStepsConditionInput = {
  name?: ModelStringInput | null;
  and?: Array<ModelChecklistStepsConditionInput | null> | null;
  or?: Array<ModelChecklistStepsConditionInput | null> | null;
  not?: ModelChecklistStepsConditionInput | null;
  workflowStepsActionsId?: ModelIDInput | null;
};

export type UpdateChecklistStepsInput = {
  id: string;
  name?: string | null;
  workflowStepsActionsId?: string | null;
};

export type DeleteChecklistStepsInput = {
  id: string;
};

export type CreateChecklistInput = {
  id?: string | null;
  company?: string | null;
  start?: string | null;
  end?: string | null;
  checklistOwnerId?: string | null;
  checklistStepsId?: string | null;
};

export type ModelChecklistConditionInput = {
  company?: ModelIDInput | null;
  start?: ModelStringInput | null;
  end?: ModelStringInput | null;
  and?: Array<ModelChecklistConditionInput | null> | null;
  or?: Array<ModelChecklistConditionInput | null> | null;
  not?: ModelChecklistConditionInput | null;
  checklistOwnerId?: ModelIDInput | null;
  checklistStepsId?: ModelIDInput | null;
};

export type Checklist = {
  __typename: "Checklist";
  id: string;
  company?: string | null;
  owner?: Staff | null;
  steps?: ChecklistSteps | null;
  start?: string | null;
  end?: string | null;
  createdAt: string;
  updatedAt: string;
  checklistOwnerId?: string | null;
  checklistStepsId?: string | null;
};

export type UpdateChecklistInput = {
  id: string;
  company?: string | null;
  start?: string | null;
  end?: string | null;
  checklistOwnerId?: string | null;
  checklistStepsId?: string | null;
};

export type DeleteChecklistInput = {
  id: string;
};

export type CreateWorkflowStepsInput = {
  id?: string | null;
  name?: string | null;
};

export type ModelWorkflowStepsConditionInput = {
  name?: ModelStringInput | null;
  and?: Array<ModelWorkflowStepsConditionInput | null> | null;
  or?: Array<ModelWorkflowStepsConditionInput | null> | null;
  not?: ModelWorkflowStepsConditionInput | null;
};

export type UpdateWorkflowStepsInput = {
  id: string;
  name?: string | null;
};

export type DeleteWorkflowStepsInput = {
  id: string;
};

export type CreateWorkflowInput = {
  id?: string | null;
  company: string;
  start?: string | null;
  end?: string | null;
  workflowOwnerId?: string | null;
  workflowStepsId?: string | null;
};

export type ModelWorkflowConditionInput = {
  company?: ModelIDInput | null;
  start?: ModelStringInput | null;
  end?: ModelStringInput | null;
  and?: Array<ModelWorkflowConditionInput | null> | null;
  or?: Array<ModelWorkflowConditionInput | null> | null;
  not?: ModelWorkflowConditionInput | null;
  workflowOwnerId?: ModelIDInput | null;
  workflowStepsId?: ModelIDInput | null;
};

export type Workflow = {
  __typename: "Workflow";
  id: string;
  company: string;
  owner?: Staff | null;
  steps?: WorkflowSteps | null;
  start?: string | null;
  end?: string | null;
  createdAt: string;
  updatedAt: string;
  workflowOwnerId?: string | null;
  workflowStepsId?: string | null;
};

export type UpdateWorkflowInput = {
  id: string;
  company?: string | null;
  start?: string | null;
  end?: string | null;
  workflowOwnerId?: string | null;
  workflowStepsId?: string | null;
};

export type DeleteWorkflowInput = {
  id: string;
};

export type ModelPendingEventFilterInput = {
  id?: ModelIDInput | null;
  company?: ModelIDInput | null;
  body?: ModelStringInput | null;
  start?: ModelStringInput | null;
  end?: ModelStringInput | null;
  item?: ModelStringInput | null;
  item_id?: ModelStringInput | null;
  status?: ModelStringInput | null;
  and?: Array<ModelPendingEventFilterInput | null> | null;
  or?: Array<ModelPendingEventFilterInput | null> | null;
  not?: ModelPendingEventFilterInput | null;
};

export type ModelPendingEventConnection = {
  __typename: "ModelPendingEventConnection";
  items: Array<PendingEvent | null>;
  nextToken?: string | null;
};

export type ModelVesselFilterInput = {
  id?: ModelIDInput | null;
  company?: ModelIDInput | null;
  name?: ModelStringInput | null;
  type?: ModelStringInput | null;
  and?: Array<ModelVesselFilterInput | null> | null;
  or?: Array<ModelVesselFilterInput | null> | null;
  not?: ModelVesselFilterInput | null;
  vesselDefaultWorkflowId?: ModelIDInput | null;
};

export type ModelVesselConnection = {
  __typename: "ModelVesselConnection";
  items: Array<Vessel | null>;
  nextToken?: string | null;
};

export type ModelStaffFilterInput = {
  id?: ModelIDInput | null;
  company?: ModelIDInput | null;
  name?: ModelStringInput | null;
  email?: ModelStringInput | null;
  and?: Array<ModelStaffFilterInput | null> | null;
  or?: Array<ModelStaffFilterInput | null> | null;
  not?: ModelStaffFilterInput | null;
};

export type ModelStaffConnection = {
  __typename: "ModelStaffConnection";
  items: Array<Staff | null>;
  nextToken?: string | null;
};

export type ModelActionFilterInput = {
  id?: ModelIDInput | null;
  company?: ModelIDInput | null;
  name?: ModelStringInput | null;
  status?: ModelStringInput | null;
  notes?: ModelStringInput | null;
  duration?: ModelIntInput | null;
  and?: Array<ModelActionFilterInput | null> | null;
  or?: Array<ModelActionFilterInput | null> | null;
  not?: ModelActionFilterInput | null;
};

export type ModelActionConnection = {
  __typename: "ModelActionConnection";
  items: Array<Action | null>;
  nextToken?: string | null;
};

export type ModelActionStepFilterInput = {
  stepNumber?: ModelIntInput | null;
  actualStart?: ModelStringInput | null;
  actualEnd?: ModelStringInput | null;
  and?: Array<ModelActionStepFilterInput | null> | null;
  or?: Array<ModelActionStepFilterInput | null> | null;
  not?: ModelActionStepFilterInput | null;
  checklistStepsActionsId?: ModelIDInput | null;
  actionStepActionId?: ModelIDInput | null;
};

export type ModelChecklistStepsFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  and?: Array<ModelChecklistStepsFilterInput | null> | null;
  or?: Array<ModelChecklistStepsFilterInput | null> | null;
  not?: ModelChecklistStepsFilterInput | null;
  workflowStepsActionsId?: ModelIDInput | null;
};

export type ModelChecklistFilterInput = {
  id?: ModelIDInput | null;
  company?: ModelIDInput | null;
  start?: ModelStringInput | null;
  end?: ModelStringInput | null;
  and?: Array<ModelChecklistFilterInput | null> | null;
  or?: Array<ModelChecklistFilterInput | null> | null;
  not?: ModelChecklistFilterInput | null;
  checklistOwnerId?: ModelIDInput | null;
  checklistStepsId?: ModelIDInput | null;
};

export type ModelChecklistConnection = {
  __typename: "ModelChecklistConnection";
  items: Array<Checklist | null>;
  nextToken?: string | null;
};

export type ModelWorkflowStepsFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  and?: Array<ModelWorkflowStepsFilterInput | null> | null;
  or?: Array<ModelWorkflowStepsFilterInput | null> | null;
  not?: ModelWorkflowStepsFilterInput | null;
};

export type ModelWorkflowStepsConnection = {
  __typename: "ModelWorkflowStepsConnection";
  items: Array<WorkflowSteps | null>;
  nextToken?: string | null;
};

export type ModelWorkflowFilterInput = {
  id?: ModelIDInput | null;
  company?: ModelIDInput | null;
  start?: ModelStringInput | null;
  end?: ModelStringInput | null;
  and?: Array<ModelWorkflowFilterInput | null> | null;
  or?: Array<ModelWorkflowFilterInput | null> | null;
  not?: ModelWorkflowFilterInput | null;
  workflowOwnerId?: ModelIDInput | null;
  workflowStepsId?: ModelIDInput | null;
};

export type ModelWorkflowConnection = {
  __typename: "ModelWorkflowConnection";
  items: Array<Workflow | null>;
  nextToken?: string | null;
};

export type ModelSubscriptionPendingEventFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  company?: ModelSubscriptionIDInput | null;
  body?: ModelSubscriptionStringInput | null;
  start?: ModelSubscriptionStringInput | null;
  end?: ModelSubscriptionStringInput | null;
  item?: ModelSubscriptionStringInput | null;
  item_id?: ModelSubscriptionStringInput | null;
  status?: ModelSubscriptionStringInput | null;
  and?: Array<ModelSubscriptionPendingEventFilterInput | null> | null;
  or?: Array<ModelSubscriptionPendingEventFilterInput | null> | null;
};

export type ModelSubscriptionIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  in?: Array<string | null> | null;
  notIn?: Array<string | null> | null;
};

export type ModelSubscriptionStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  in?: Array<string | null> | null;
  notIn?: Array<string | null> | null;
};

export type ModelSubscriptionVesselFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  company?: ModelSubscriptionIDInput | null;
  name?: ModelSubscriptionStringInput | null;
  type?: ModelSubscriptionStringInput | null;
  and?: Array<ModelSubscriptionVesselFilterInput | null> | null;
  or?: Array<ModelSubscriptionVesselFilterInput | null> | null;
};

export type ModelSubscriptionStaffFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  company?: ModelSubscriptionIDInput | null;
  name?: ModelSubscriptionStringInput | null;
  email?: ModelSubscriptionStringInput | null;
  and?: Array<ModelSubscriptionStaffFilterInput | null> | null;
  or?: Array<ModelSubscriptionStaffFilterInput | null> | null;
};

export type ModelSubscriptionActionFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  company?: ModelSubscriptionIDInput | null;
  name?: ModelSubscriptionStringInput | null;
  status?: ModelSubscriptionStringInput | null;
  notes?: ModelSubscriptionStringInput | null;
  duration?: ModelSubscriptionIntInput | null;
  and?: Array<ModelSubscriptionActionFilterInput | null> | null;
  or?: Array<ModelSubscriptionActionFilterInput | null> | null;
};

export type ModelSubscriptionIntInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
  in?: Array<number | null> | null;
  notIn?: Array<number | null> | null;
};

export type ModelSubscriptionActionStepFilterInput = {
  stepNumber?: ModelSubscriptionIntInput | null;
  actualStart?: ModelSubscriptionStringInput | null;
  actualEnd?: ModelSubscriptionStringInput | null;
  and?: Array<ModelSubscriptionActionStepFilterInput | null> | null;
  or?: Array<ModelSubscriptionActionStepFilterInput | null> | null;
};

export type ModelSubscriptionChecklistStepsFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  name?: ModelSubscriptionStringInput | null;
  and?: Array<ModelSubscriptionChecklistStepsFilterInput | null> | null;
  or?: Array<ModelSubscriptionChecklistStepsFilterInput | null> | null;
};

export type ModelSubscriptionChecklistFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  company?: ModelSubscriptionIDInput | null;
  start?: ModelSubscriptionStringInput | null;
  end?: ModelSubscriptionStringInput | null;
  and?: Array<ModelSubscriptionChecklistFilterInput | null> | null;
  or?: Array<ModelSubscriptionChecklistFilterInput | null> | null;
};

export type ModelSubscriptionWorkflowStepsFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  name?: ModelSubscriptionStringInput | null;
  and?: Array<ModelSubscriptionWorkflowStepsFilterInput | null> | null;
  or?: Array<ModelSubscriptionWorkflowStepsFilterInput | null> | null;
};

export type ModelSubscriptionWorkflowFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  company?: ModelSubscriptionIDInput | null;
  start?: ModelSubscriptionStringInput | null;
  end?: ModelSubscriptionStringInput | null;
  and?: Array<ModelSubscriptionWorkflowFilterInput | null> | null;
  or?: Array<ModelSubscriptionWorkflowFilterInput | null> | null;
};

export type CreatePendingEventMutation = {
  __typename: "PendingEvent";
  id: string;
  company?: string | null;
  body?: string | null;
  start?: string | null;
  end?: string | null;
  item?: string | null;
  item_id?: string | null;
  status?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdatePendingEventMutation = {
  __typename: "PendingEvent";
  id: string;
  company?: string | null;
  body?: string | null;
  start?: string | null;
  end?: string | null;
  item?: string | null;
  item_id?: string | null;
  status?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type DeletePendingEventMutation = {
  __typename: "PendingEvent";
  id: string;
  company?: string | null;
  body?: string | null;
  start?: string | null;
  end?: string | null;
  item?: string | null;
  item_id?: string | null;
  status?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type CreateVesselMutation = {
  __typename: "Vessel";
  id: string;
  company?: string | null;
  name?: string | null;
  type?: string | null;
  defaultWorkflow?: {
    __typename: "WorkflowSteps";
    id: string;
    name?: string | null;
    actions?: {
      __typename: "ModelChecklistStepsConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
  vesselDefaultWorkflowId?: string | null;
};

export type UpdateVesselMutation = {
  __typename: "Vessel";
  id: string;
  company?: string | null;
  name?: string | null;
  type?: string | null;
  defaultWorkflow?: {
    __typename: "WorkflowSteps";
    id: string;
    name?: string | null;
    actions?: {
      __typename: "ModelChecklistStepsConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
  vesselDefaultWorkflowId?: string | null;
};

export type DeleteVesselMutation = {
  __typename: "Vessel";
  id: string;
  company?: string | null;
  name?: string | null;
  type?: string | null;
  defaultWorkflow?: {
    __typename: "WorkflowSteps";
    id: string;
    name?: string | null;
    actions?: {
      __typename: "ModelChecklistStepsConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
  vesselDefaultWorkflowId?: string | null;
};

export type CreateStaffMutation = {
  __typename: "Staff";
  id: string;
  company?: string | null;
  name?: string | null;
  email?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateStaffMutation = {
  __typename: "Staff";
  id: string;
  company?: string | null;
  name?: string | null;
  email?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type DeleteStaffMutation = {
  __typename: "Staff";
  id: string;
  company?: string | null;
  name?: string | null;
  email?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type CreateActionMutation = {
  __typename: "Action";
  id: string;
  company?: string | null;
  name?: string | null;
  status?: string | null;
  notes?: string | null;
  duration?: number | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateActionMutation = {
  __typename: "Action";
  id: string;
  company?: string | null;
  name?: string | null;
  status?: string | null;
  notes?: string | null;
  duration?: number | null;
  createdAt: string;
  updatedAt: string;
};

export type DeleteActionMutation = {
  __typename: "Action";
  id: string;
  company?: string | null;
  name?: string | null;
  status?: string | null;
  notes?: string | null;
  duration?: number | null;
  createdAt: string;
  updatedAt: string;
};

export type CreateActionStepMutation = {
  __typename: "ActionStep";
  stepNumber?: number | null;
  action?: {
    __typename: "Action";
    id: string;
    company?: string | null;
    name?: string | null;
    status?: string | null;
    notes?: string | null;
    duration?: number | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  actualStart?: string | null;
  actualEnd?: string | null;
  id: string;
  createdAt: string;
  updatedAt: string;
  checklistStepsActionsId?: string | null;
  actionStepActionId?: string | null;
};

export type UpdateActionStepMutation = {
  __typename: "ActionStep";
  stepNumber?: number | null;
  action?: {
    __typename: "Action";
    id: string;
    company?: string | null;
    name?: string | null;
    status?: string | null;
    notes?: string | null;
    duration?: number | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  actualStart?: string | null;
  actualEnd?: string | null;
  id: string;
  createdAt: string;
  updatedAt: string;
  checklistStepsActionsId?: string | null;
  actionStepActionId?: string | null;
};

export type DeleteActionStepMutation = {
  __typename: "ActionStep";
  stepNumber?: number | null;
  action?: {
    __typename: "Action";
    id: string;
    company?: string | null;
    name?: string | null;
    status?: string | null;
    notes?: string | null;
    duration?: number | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  actualStart?: string | null;
  actualEnd?: string | null;
  id: string;
  createdAt: string;
  updatedAt: string;
  checklistStepsActionsId?: string | null;
  actionStepActionId?: string | null;
};

export type CreateChecklistStepsMutation = {
  __typename: "ChecklistSteps";
  id: string;
  name?: string | null;
  actions?: {
    __typename: "ModelActionStepConnection";
    items: Array<{
      __typename: "ActionStep";
      stepNumber?: number | null;
      actualStart?: string | null;
      actualEnd?: string | null;
      id: string;
      createdAt: string;
      updatedAt: string;
      checklistStepsActionsId?: string | null;
      actionStepActionId?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  workflowStepsActionsId?: string | null;
};

export type UpdateChecklistStepsMutation = {
  __typename: "ChecklistSteps";
  id: string;
  name?: string | null;
  actions?: {
    __typename: "ModelActionStepConnection";
    items: Array<{
      __typename: "ActionStep";
      stepNumber?: number | null;
      actualStart?: string | null;
      actualEnd?: string | null;
      id: string;
      createdAt: string;
      updatedAt: string;
      checklistStepsActionsId?: string | null;
      actionStepActionId?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  workflowStepsActionsId?: string | null;
};

export type DeleteChecklistStepsMutation = {
  __typename: "ChecklistSteps";
  id: string;
  name?: string | null;
  actions?: {
    __typename: "ModelActionStepConnection";
    items: Array<{
      __typename: "ActionStep";
      stepNumber?: number | null;
      actualStart?: string | null;
      actualEnd?: string | null;
      id: string;
      createdAt: string;
      updatedAt: string;
      checklistStepsActionsId?: string | null;
      actionStepActionId?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  workflowStepsActionsId?: string | null;
};

export type CreateChecklistMutation = {
  __typename: "Checklist";
  id: string;
  company?: string | null;
  owner?: {
    __typename: "Staff";
    id: string;
    company?: string | null;
    name?: string | null;
    email?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  steps?: {
    __typename: "ChecklistSteps";
    id: string;
    name?: string | null;
    actions?: {
      __typename: "ModelActionStepConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    workflowStepsActionsId?: string | null;
  } | null;
  start?: string | null;
  end?: string | null;
  createdAt: string;
  updatedAt: string;
  checklistOwnerId?: string | null;
  checklistStepsId?: string | null;
};

export type UpdateChecklistMutation = {
  __typename: "Checklist";
  id: string;
  company?: string | null;
  owner?: {
    __typename: "Staff";
    id: string;
    company?: string | null;
    name?: string | null;
    email?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  steps?: {
    __typename: "ChecklistSteps";
    id: string;
    name?: string | null;
    actions?: {
      __typename: "ModelActionStepConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    workflowStepsActionsId?: string | null;
  } | null;
  start?: string | null;
  end?: string | null;
  createdAt: string;
  updatedAt: string;
  checklistOwnerId?: string | null;
  checklistStepsId?: string | null;
};

export type DeleteChecklistMutation = {
  __typename: "Checklist";
  id: string;
  company?: string | null;
  owner?: {
    __typename: "Staff";
    id: string;
    company?: string | null;
    name?: string | null;
    email?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  steps?: {
    __typename: "ChecklistSteps";
    id: string;
    name?: string | null;
    actions?: {
      __typename: "ModelActionStepConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    workflowStepsActionsId?: string | null;
  } | null;
  start?: string | null;
  end?: string | null;
  createdAt: string;
  updatedAt: string;
  checklistOwnerId?: string | null;
  checklistStepsId?: string | null;
};

export type CreateWorkflowStepsMutation = {
  __typename: "WorkflowSteps";
  id: string;
  name?: string | null;
  actions?: {
    __typename: "ModelChecklistStepsConnection";
    items: Array<{
      __typename: "ChecklistSteps";
      id: string;
      name?: string | null;
      createdAt: string;
      updatedAt: string;
      workflowStepsActionsId?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateWorkflowStepsMutation = {
  __typename: "WorkflowSteps";
  id: string;
  name?: string | null;
  actions?: {
    __typename: "ModelChecklistStepsConnection";
    items: Array<{
      __typename: "ChecklistSteps";
      id: string;
      name?: string | null;
      createdAt: string;
      updatedAt: string;
      workflowStepsActionsId?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type DeleteWorkflowStepsMutation = {
  __typename: "WorkflowSteps";
  id: string;
  name?: string | null;
  actions?: {
    __typename: "ModelChecklistStepsConnection";
    items: Array<{
      __typename: "ChecklistSteps";
      id: string;
      name?: string | null;
      createdAt: string;
      updatedAt: string;
      workflowStepsActionsId?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type CreateWorkflowMutation = {
  __typename: "Workflow";
  id: string;
  company: string;
  owner?: {
    __typename: "Staff";
    id: string;
    company?: string | null;
    name?: string | null;
    email?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  steps?: {
    __typename: "WorkflowSteps";
    id: string;
    name?: string | null;
    actions?: {
      __typename: "ModelChecklistStepsConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  start?: string | null;
  end?: string | null;
  createdAt: string;
  updatedAt: string;
  workflowOwnerId?: string | null;
  workflowStepsId?: string | null;
};

export type UpdateWorkflowMutation = {
  __typename: "Workflow";
  id: string;
  company: string;
  owner?: {
    __typename: "Staff";
    id: string;
    company?: string | null;
    name?: string | null;
    email?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  steps?: {
    __typename: "WorkflowSteps";
    id: string;
    name?: string | null;
    actions?: {
      __typename: "ModelChecklistStepsConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  start?: string | null;
  end?: string | null;
  createdAt: string;
  updatedAt: string;
  workflowOwnerId?: string | null;
  workflowStepsId?: string | null;
};

export type DeleteWorkflowMutation = {
  __typename: "Workflow";
  id: string;
  company: string;
  owner?: {
    __typename: "Staff";
    id: string;
    company?: string | null;
    name?: string | null;
    email?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  steps?: {
    __typename: "WorkflowSteps";
    id: string;
    name?: string | null;
    actions?: {
      __typename: "ModelChecklistStepsConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  start?: string | null;
  end?: string | null;
  createdAt: string;
  updatedAt: string;
  workflowOwnerId?: string | null;
  workflowStepsId?: string | null;
};

export type GetPendingEventQuery = {
  __typename: "PendingEvent";
  id: string;
  company?: string | null;
  body?: string | null;
  start?: string | null;
  end?: string | null;
  item?: string | null;
  item_id?: string | null;
  status?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type ListPendingEventsQuery = {
  __typename: "ModelPendingEventConnection";
  items: Array<{
    __typename: "PendingEvent";
    id: string;
    company?: string | null;
    body?: string | null;
    start?: string | null;
    end?: string | null;
    item?: string | null;
    item_id?: string | null;
    status?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null>;
  nextToken?: string | null;
};

export type GetVesselQuery = {
  __typename: "Vessel";
  id: string;
  company?: string | null;
  name?: string | null;
  type?: string | null;
  defaultWorkflow?: {
    __typename: "WorkflowSteps";
    id: string;
    name?: string | null;
    actions?: {
      __typename: "ModelChecklistStepsConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
  vesselDefaultWorkflowId?: string | null;
};

export type ListVesselsQuery = {
  __typename: "ModelVesselConnection";
  items: Array<{
    __typename: "Vessel";
    id: string;
    company?: string | null;
    name?: string | null;
    type?: string | null;
    defaultWorkflow?: {
      __typename: "WorkflowSteps";
      id: string;
      name?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    createdAt: string;
    updatedAt: string;
    vesselDefaultWorkflowId?: string | null;
  } | null>;
  nextToken?: string | null;
};

export type GetStaffQuery = {
  __typename: "Staff";
  id: string;
  company?: string | null;
  name?: string | null;
  email?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type ListStaffQuery = {
  __typename: "ModelStaffConnection";
  items: Array<{
    __typename: "Staff";
    id: string;
    company?: string | null;
    name?: string | null;
    email?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null>;
  nextToken?: string | null;
};

export type GetActionQuery = {
  __typename: "Action";
  id: string;
  company?: string | null;
  name?: string | null;
  status?: string | null;
  notes?: string | null;
  duration?: number | null;
  createdAt: string;
  updatedAt: string;
};

export type ListActionsQuery = {
  __typename: "ModelActionConnection";
  items: Array<{
    __typename: "Action";
    id: string;
    company?: string | null;
    name?: string | null;
    status?: string | null;
    notes?: string | null;
    duration?: number | null;
    createdAt: string;
    updatedAt: string;
  } | null>;
  nextToken?: string | null;
};

export type GetActionStepQuery = {
  __typename: "ActionStep";
  stepNumber?: number | null;
  action?: {
    __typename: "Action";
    id: string;
    company?: string | null;
    name?: string | null;
    status?: string | null;
    notes?: string | null;
    duration?: number | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  actualStart?: string | null;
  actualEnd?: string | null;
  id: string;
  createdAt: string;
  updatedAt: string;
  checklistStepsActionsId?: string | null;
  actionStepActionId?: string | null;
};

export type ListActionStepsQuery = {
  __typename: "ModelActionStepConnection";
  items: Array<{
    __typename: "ActionStep";
    stepNumber?: number | null;
    action?: {
      __typename: "Action";
      id: string;
      company?: string | null;
      name?: string | null;
      status?: string | null;
      notes?: string | null;
      duration?: number | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    actualStart?: string | null;
    actualEnd?: string | null;
    id: string;
    createdAt: string;
    updatedAt: string;
    checklistStepsActionsId?: string | null;
    actionStepActionId?: string | null;
  } | null>;
  nextToken?: string | null;
};

export type GetChecklistStepsQuery = {
  __typename: "ChecklistSteps";
  id: string;
  name?: string | null;
  actions?: {
    __typename: "ModelActionStepConnection";
    items: Array<{
      __typename: "ActionStep";
      stepNumber?: number | null;
      actualStart?: string | null;
      actualEnd?: string | null;
      id: string;
      createdAt: string;
      updatedAt: string;
      checklistStepsActionsId?: string | null;
      actionStepActionId?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  workflowStepsActionsId?: string | null;
};

export type ListChecklistStepsQuery = {
  __typename: "ModelChecklistStepsConnection";
  items: Array<{
    __typename: "ChecklistSteps";
    id: string;
    name?: string | null;
    actions?: {
      __typename: "ModelActionStepConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    workflowStepsActionsId?: string | null;
  } | null>;
  nextToken?: string | null;
};

export type GetChecklistQuery = {
  __typename: "Checklist";
  id: string;
  company?: string | null;
  owner?: {
    __typename: "Staff";
    id: string;
    company?: string | null;
    name?: string | null;
    email?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  steps?: {
    __typename: "ChecklistSteps";
    id: string;
    name?: string | null;
    actions?: {
      __typename: "ModelActionStepConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    workflowStepsActionsId?: string | null;
  } | null;
  start?: string | null;
  end?: string | null;
  createdAt: string;
  updatedAt: string;
  checklistOwnerId?: string | null;
  checklistStepsId?: string | null;
};

export type ListChecklistsQuery = {
  __typename: "ModelChecklistConnection";
  items: Array<{
    __typename: "Checklist";
    id: string;
    company?: string | null;
    owner?: {
      __typename: "Staff";
      id: string;
      company?: string | null;
      name?: string | null;
      email?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    steps?: {
      __typename: "ChecklistSteps";
      id: string;
      name?: string | null;
      createdAt: string;
      updatedAt: string;
      workflowStepsActionsId?: string | null;
    } | null;
    start?: string | null;
    end?: string | null;
    createdAt: string;
    updatedAt: string;
    checklistOwnerId?: string | null;
    checklistStepsId?: string | null;
  } | null>;
  nextToken?: string | null;
};

export type GetWorkflowStepsQuery = {
  __typename: "WorkflowSteps";
  id: string;
  name?: string | null;
  actions?: {
    __typename: "ModelChecklistStepsConnection";
    items: Array<{
      __typename: "ChecklistSteps";
      id: string;
      name?: string | null;
      createdAt: string;
      updatedAt: string;
      workflowStepsActionsId?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type ListWorkflowStepsQuery = {
  __typename: "ModelWorkflowStepsConnection";
  items: Array<{
    __typename: "WorkflowSteps";
    id: string;
    name?: string | null;
    actions?: {
      __typename: "ModelChecklistStepsConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null>;
  nextToken?: string | null;
};

export type GetWorkflowQuery = {
  __typename: "Workflow";
  id: string;
  company: string;
  owner?: {
    __typename: "Staff";
    id: string;
    company?: string | null;
    name?: string | null;
    email?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  steps?: {
    __typename: "WorkflowSteps";
    id: string;
    name?: string | null;
    actions?: {
      __typename: "ModelChecklistStepsConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  start?: string | null;
  end?: string | null;
  createdAt: string;
  updatedAt: string;
  workflowOwnerId?: string | null;
  workflowStepsId?: string | null;
};

export type ListWorkflowsQuery = {
  __typename: "ModelWorkflowConnection";
  items: Array<{
    __typename: "Workflow";
    id: string;
    company: string;
    owner?: {
      __typename: "Staff";
      id: string;
      company?: string | null;
      name?: string | null;
      email?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    steps?: {
      __typename: "WorkflowSteps";
      id: string;
      name?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    start?: string | null;
    end?: string | null;
    createdAt: string;
    updatedAt: string;
    workflowOwnerId?: string | null;
    workflowStepsId?: string | null;
  } | null>;
  nextToken?: string | null;
};

export type OnCreatePendingEventSubscription = {
  __typename: "PendingEvent";
  id: string;
  company?: string | null;
  body?: string | null;
  start?: string | null;
  end?: string | null;
  item?: string | null;
  item_id?: string | null;
  status?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdatePendingEventSubscription = {
  __typename: "PendingEvent";
  id: string;
  company?: string | null;
  body?: string | null;
  start?: string | null;
  end?: string | null;
  item?: string | null;
  item_id?: string | null;
  status?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeletePendingEventSubscription = {
  __typename: "PendingEvent";
  id: string;
  company?: string | null;
  body?: string | null;
  start?: string | null;
  end?: string | null;
  item?: string | null;
  item_id?: string | null;
  status?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateVesselSubscription = {
  __typename: "Vessel";
  id: string;
  company?: string | null;
  name?: string | null;
  type?: string | null;
  defaultWorkflow?: {
    __typename: "WorkflowSteps";
    id: string;
    name?: string | null;
    actions?: {
      __typename: "ModelChecklistStepsConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
  vesselDefaultWorkflowId?: string | null;
};

export type OnUpdateVesselSubscription = {
  __typename: "Vessel";
  id: string;
  company?: string | null;
  name?: string | null;
  type?: string | null;
  defaultWorkflow?: {
    __typename: "WorkflowSteps";
    id: string;
    name?: string | null;
    actions?: {
      __typename: "ModelChecklistStepsConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
  vesselDefaultWorkflowId?: string | null;
};

export type OnDeleteVesselSubscription = {
  __typename: "Vessel";
  id: string;
  company?: string | null;
  name?: string | null;
  type?: string | null;
  defaultWorkflow?: {
    __typename: "WorkflowSteps";
    id: string;
    name?: string | null;
    actions?: {
      __typename: "ModelChecklistStepsConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
  vesselDefaultWorkflowId?: string | null;
};

export type OnCreateStaffSubscription = {
  __typename: "Staff";
  id: string;
  company?: string | null;
  name?: string | null;
  email?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateStaffSubscription = {
  __typename: "Staff";
  id: string;
  company?: string | null;
  name?: string | null;
  email?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteStaffSubscription = {
  __typename: "Staff";
  id: string;
  company?: string | null;
  name?: string | null;
  email?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateActionSubscription = {
  __typename: "Action";
  id: string;
  company?: string | null;
  name?: string | null;
  status?: string | null;
  notes?: string | null;
  duration?: number | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateActionSubscription = {
  __typename: "Action";
  id: string;
  company?: string | null;
  name?: string | null;
  status?: string | null;
  notes?: string | null;
  duration?: number | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteActionSubscription = {
  __typename: "Action";
  id: string;
  company?: string | null;
  name?: string | null;
  status?: string | null;
  notes?: string | null;
  duration?: number | null;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateActionStepSubscription = {
  __typename: "ActionStep";
  stepNumber?: number | null;
  action?: {
    __typename: "Action";
    id: string;
    company?: string | null;
    name?: string | null;
    status?: string | null;
    notes?: string | null;
    duration?: number | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  actualStart?: string | null;
  actualEnd?: string | null;
  id: string;
  createdAt: string;
  updatedAt: string;
  checklistStepsActionsId?: string | null;
  actionStepActionId?: string | null;
};

export type OnUpdateActionStepSubscription = {
  __typename: "ActionStep";
  stepNumber?: number | null;
  action?: {
    __typename: "Action";
    id: string;
    company?: string | null;
    name?: string | null;
    status?: string | null;
    notes?: string | null;
    duration?: number | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  actualStart?: string | null;
  actualEnd?: string | null;
  id: string;
  createdAt: string;
  updatedAt: string;
  checklistStepsActionsId?: string | null;
  actionStepActionId?: string | null;
};

export type OnDeleteActionStepSubscription = {
  __typename: "ActionStep";
  stepNumber?: number | null;
  action?: {
    __typename: "Action";
    id: string;
    company?: string | null;
    name?: string | null;
    status?: string | null;
    notes?: string | null;
    duration?: number | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  actualStart?: string | null;
  actualEnd?: string | null;
  id: string;
  createdAt: string;
  updatedAt: string;
  checklistStepsActionsId?: string | null;
  actionStepActionId?: string | null;
};

export type OnCreateChecklistStepsSubscription = {
  __typename: "ChecklistSteps";
  id: string;
  name?: string | null;
  actions?: {
    __typename: "ModelActionStepConnection";
    items: Array<{
      __typename: "ActionStep";
      stepNumber?: number | null;
      actualStart?: string | null;
      actualEnd?: string | null;
      id: string;
      createdAt: string;
      updatedAt: string;
      checklistStepsActionsId?: string | null;
      actionStepActionId?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  workflowStepsActionsId?: string | null;
};

export type OnUpdateChecklistStepsSubscription = {
  __typename: "ChecklistSteps";
  id: string;
  name?: string | null;
  actions?: {
    __typename: "ModelActionStepConnection";
    items: Array<{
      __typename: "ActionStep";
      stepNumber?: number | null;
      actualStart?: string | null;
      actualEnd?: string | null;
      id: string;
      createdAt: string;
      updatedAt: string;
      checklistStepsActionsId?: string | null;
      actionStepActionId?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  workflowStepsActionsId?: string | null;
};

export type OnDeleteChecklistStepsSubscription = {
  __typename: "ChecklistSteps";
  id: string;
  name?: string | null;
  actions?: {
    __typename: "ModelActionStepConnection";
    items: Array<{
      __typename: "ActionStep";
      stepNumber?: number | null;
      actualStart?: string | null;
      actualEnd?: string | null;
      id: string;
      createdAt: string;
      updatedAt: string;
      checklistStepsActionsId?: string | null;
      actionStepActionId?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  workflowStepsActionsId?: string | null;
};

export type OnCreateChecklistSubscription = {
  __typename: "Checklist";
  id: string;
  company?: string | null;
  owner?: {
    __typename: "Staff";
    id: string;
    company?: string | null;
    name?: string | null;
    email?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  steps?: {
    __typename: "ChecklistSteps";
    id: string;
    name?: string | null;
    actions?: {
      __typename: "ModelActionStepConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    workflowStepsActionsId?: string | null;
  } | null;
  start?: string | null;
  end?: string | null;
  createdAt: string;
  updatedAt: string;
  checklistOwnerId?: string | null;
  checklistStepsId?: string | null;
};

export type OnUpdateChecklistSubscription = {
  __typename: "Checklist";
  id: string;
  company?: string | null;
  owner?: {
    __typename: "Staff";
    id: string;
    company?: string | null;
    name?: string | null;
    email?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  steps?: {
    __typename: "ChecklistSteps";
    id: string;
    name?: string | null;
    actions?: {
      __typename: "ModelActionStepConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    workflowStepsActionsId?: string | null;
  } | null;
  start?: string | null;
  end?: string | null;
  createdAt: string;
  updatedAt: string;
  checklistOwnerId?: string | null;
  checklistStepsId?: string | null;
};

export type OnDeleteChecklistSubscription = {
  __typename: "Checklist";
  id: string;
  company?: string | null;
  owner?: {
    __typename: "Staff";
    id: string;
    company?: string | null;
    name?: string | null;
    email?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  steps?: {
    __typename: "ChecklistSteps";
    id: string;
    name?: string | null;
    actions?: {
      __typename: "ModelActionStepConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    workflowStepsActionsId?: string | null;
  } | null;
  start?: string | null;
  end?: string | null;
  createdAt: string;
  updatedAt: string;
  checklistOwnerId?: string | null;
  checklistStepsId?: string | null;
};

export type OnCreateWorkflowStepsSubscription = {
  __typename: "WorkflowSteps";
  id: string;
  name?: string | null;
  actions?: {
    __typename: "ModelChecklistStepsConnection";
    items: Array<{
      __typename: "ChecklistSteps";
      id: string;
      name?: string | null;
      createdAt: string;
      updatedAt: string;
      workflowStepsActionsId?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateWorkflowStepsSubscription = {
  __typename: "WorkflowSteps";
  id: string;
  name?: string | null;
  actions?: {
    __typename: "ModelChecklistStepsConnection";
    items: Array<{
      __typename: "ChecklistSteps";
      id: string;
      name?: string | null;
      createdAt: string;
      updatedAt: string;
      workflowStepsActionsId?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteWorkflowStepsSubscription = {
  __typename: "WorkflowSteps";
  id: string;
  name?: string | null;
  actions?: {
    __typename: "ModelChecklistStepsConnection";
    items: Array<{
      __typename: "ChecklistSteps";
      id: string;
      name?: string | null;
      createdAt: string;
      updatedAt: string;
      workflowStepsActionsId?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateWorkflowSubscription = {
  __typename: "Workflow";
  id: string;
  company: string;
  owner?: {
    __typename: "Staff";
    id: string;
    company?: string | null;
    name?: string | null;
    email?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  steps?: {
    __typename: "WorkflowSteps";
    id: string;
    name?: string | null;
    actions?: {
      __typename: "ModelChecklistStepsConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  start?: string | null;
  end?: string | null;
  createdAt: string;
  updatedAt: string;
  workflowOwnerId?: string | null;
  workflowStepsId?: string | null;
};

export type OnUpdateWorkflowSubscription = {
  __typename: "Workflow";
  id: string;
  company: string;
  owner?: {
    __typename: "Staff";
    id: string;
    company?: string | null;
    name?: string | null;
    email?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  steps?: {
    __typename: "WorkflowSteps";
    id: string;
    name?: string | null;
    actions?: {
      __typename: "ModelChecklistStepsConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  start?: string | null;
  end?: string | null;
  createdAt: string;
  updatedAt: string;
  workflowOwnerId?: string | null;
  workflowStepsId?: string | null;
};

export type OnDeleteWorkflowSubscription = {
  __typename: "Workflow";
  id: string;
  company: string;
  owner?: {
    __typename: "Staff";
    id: string;
    company?: string | null;
    name?: string | null;
    email?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  steps?: {
    __typename: "WorkflowSteps";
    id: string;
    name?: string | null;
    actions?: {
      __typename: "ModelChecklistStepsConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  start?: string | null;
  end?: string | null;
  createdAt: string;
  updatedAt: string;
  workflowOwnerId?: string | null;
  workflowStepsId?: string | null;
};

@Injectable({
  providedIn: "root"
})
export class APIService {
  async CreatePendingEvent(
    input: CreatePendingEventInput,
    condition?: ModelPendingEventConditionInput
  ): Promise<CreatePendingEventMutation> {
    const statement = `mutation CreatePendingEvent($input: CreatePendingEventInput!, $condition: ModelPendingEventConditionInput) {
        createPendingEvent(input: $input, condition: $condition) {
          __typename
          id
          company
          body
          start
          end
          item
          item_id
          status
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreatePendingEventMutation>response.data.createPendingEvent;
  }
  async UpdatePendingEvent(
    input: UpdatePendingEventInput,
    condition?: ModelPendingEventConditionInput
  ): Promise<UpdatePendingEventMutation> {
    const statement = `mutation UpdatePendingEvent($input: UpdatePendingEventInput!, $condition: ModelPendingEventConditionInput) {
        updatePendingEvent(input: $input, condition: $condition) {
          __typename
          id
          company
          body
          start
          end
          item
          item_id
          status
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdatePendingEventMutation>response.data.updatePendingEvent;
  }
  async DeletePendingEvent(
    input: DeletePendingEventInput,
    condition?: ModelPendingEventConditionInput
  ): Promise<DeletePendingEventMutation> {
    const statement = `mutation DeletePendingEvent($input: DeletePendingEventInput!, $condition: ModelPendingEventConditionInput) {
        deletePendingEvent(input: $input, condition: $condition) {
          __typename
          id
          company
          body
          start
          end
          item
          item_id
          status
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeletePendingEventMutation>response.data.deletePendingEvent;
  }
  async CreateVessel(
    input: CreateVesselInput,
    condition?: ModelVesselConditionInput
  ): Promise<CreateVesselMutation> {
    const statement = `mutation CreateVessel($input: CreateVesselInput!, $condition: ModelVesselConditionInput) {
        createVessel(input: $input, condition: $condition) {
          __typename
          id
          company
          name
          type
          defaultWorkflow {
            __typename
            id
            name
            actions {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
          vesselDefaultWorkflowId
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateVesselMutation>response.data.createVessel;
  }
  async UpdateVessel(
    input: UpdateVesselInput,
    condition?: ModelVesselConditionInput
  ): Promise<UpdateVesselMutation> {
    const statement = `mutation UpdateVessel($input: UpdateVesselInput!, $condition: ModelVesselConditionInput) {
        updateVessel(input: $input, condition: $condition) {
          __typename
          id
          company
          name
          type
          defaultWorkflow {
            __typename
            id
            name
            actions {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
          vesselDefaultWorkflowId
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateVesselMutation>response.data.updateVessel;
  }
  async DeleteVessel(
    input: DeleteVesselInput,
    condition?: ModelVesselConditionInput
  ): Promise<DeleteVesselMutation> {
    const statement = `mutation DeleteVessel($input: DeleteVesselInput!, $condition: ModelVesselConditionInput) {
        deleteVessel(input: $input, condition: $condition) {
          __typename
          id
          company
          name
          type
          defaultWorkflow {
            __typename
            id
            name
            actions {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
          vesselDefaultWorkflowId
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteVesselMutation>response.data.deleteVessel;
  }
  async CreateStaff(
    input: CreateStaffInput,
    condition?: ModelStaffConditionInput
  ): Promise<CreateStaffMutation> {
    const statement = `mutation CreateStaff($input: CreateStaffInput!, $condition: ModelStaffConditionInput) {
        createStaff(input: $input, condition: $condition) {
          __typename
          id
          company
          name
          email
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateStaffMutation>response.data.createStaff;
  }
  async UpdateStaff(
    input: UpdateStaffInput,
    condition?: ModelStaffConditionInput
  ): Promise<UpdateStaffMutation> {
    const statement = `mutation UpdateStaff($input: UpdateStaffInput!, $condition: ModelStaffConditionInput) {
        updateStaff(input: $input, condition: $condition) {
          __typename
          id
          company
          name
          email
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateStaffMutation>response.data.updateStaff;
  }
  async DeleteStaff(
    input: DeleteStaffInput,
    condition?: ModelStaffConditionInput
  ): Promise<DeleteStaffMutation> {
    const statement = `mutation DeleteStaff($input: DeleteStaffInput!, $condition: ModelStaffConditionInput) {
        deleteStaff(input: $input, condition: $condition) {
          __typename
          id
          company
          name
          email
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteStaffMutation>response.data.deleteStaff;
  }
  async CreateAction(
    input: CreateActionInput,
    condition?: ModelActionConditionInput
  ): Promise<CreateActionMutation> {
    const statement = `mutation CreateAction($input: CreateActionInput!, $condition: ModelActionConditionInput) {
        createAction(input: $input, condition: $condition) {
          __typename
          id
          company
          name
          status
          notes
          duration
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateActionMutation>response.data.createAction;
  }
  async UpdateAction(
    input: UpdateActionInput,
    condition?: ModelActionConditionInput
  ): Promise<UpdateActionMutation> {
    const statement = `mutation UpdateAction($input: UpdateActionInput!, $condition: ModelActionConditionInput) {
        updateAction(input: $input, condition: $condition) {
          __typename
          id
          company
          name
          status
          notes
          duration
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateActionMutation>response.data.updateAction;
  }
  async DeleteAction(
    input: DeleteActionInput,
    condition?: ModelActionConditionInput
  ): Promise<DeleteActionMutation> {
    const statement = `mutation DeleteAction($input: DeleteActionInput!, $condition: ModelActionConditionInput) {
        deleteAction(input: $input, condition: $condition) {
          __typename
          id
          company
          name
          status
          notes
          duration
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteActionMutation>response.data.deleteAction;
  }
  async CreateActionStep(
    input: CreateActionStepInput,
    condition?: ModelActionStepConditionInput
  ): Promise<CreateActionStepMutation> {
    const statement = `mutation CreateActionStep($input: CreateActionStepInput!, $condition: ModelActionStepConditionInput) {
        createActionStep(input: $input, condition: $condition) {
          __typename
          stepNumber
          action {
            __typename
            id
            company
            name
            status
            notes
            duration
            createdAt
            updatedAt
          }
          actualStart
          actualEnd
          id
          createdAt
          updatedAt
          checklistStepsActionsId
          actionStepActionId
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateActionStepMutation>response.data.createActionStep;
  }
  async UpdateActionStep(
    input: UpdateActionStepInput,
    condition?: ModelActionStepConditionInput
  ): Promise<UpdateActionStepMutation> {
    const statement = `mutation UpdateActionStep($input: UpdateActionStepInput!, $condition: ModelActionStepConditionInput) {
        updateActionStep(input: $input, condition: $condition) {
          __typename
          stepNumber
          action {
            __typename
            id
            company
            name
            status
            notes
            duration
            createdAt
            updatedAt
          }
          actualStart
          actualEnd
          id
          createdAt
          updatedAt
          checklistStepsActionsId
          actionStepActionId
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateActionStepMutation>response.data.updateActionStep;
  }
  async DeleteActionStep(
    input: DeleteActionStepInput,
    condition?: ModelActionStepConditionInput
  ): Promise<DeleteActionStepMutation> {
    const statement = `mutation DeleteActionStep($input: DeleteActionStepInput!, $condition: ModelActionStepConditionInput) {
        deleteActionStep(input: $input, condition: $condition) {
          __typename
          stepNumber
          action {
            __typename
            id
            company
            name
            status
            notes
            duration
            createdAt
            updatedAt
          }
          actualStart
          actualEnd
          id
          createdAt
          updatedAt
          checklistStepsActionsId
          actionStepActionId
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteActionStepMutation>response.data.deleteActionStep;
  }
  async CreateChecklistSteps(
    input: CreateChecklistStepsInput,
    condition?: ModelChecklistStepsConditionInput
  ): Promise<CreateChecklistStepsMutation> {
    const statement = `mutation CreateChecklistSteps($input: CreateChecklistStepsInput!, $condition: ModelChecklistStepsConditionInput) {
        createChecklistSteps(input: $input, condition: $condition) {
          __typename
          id
          name
          actions {
            __typename
            items {
              __typename
              stepNumber
              actualStart
              actualEnd
              id
              createdAt
              updatedAt
              checklistStepsActionsId
              actionStepActionId
            }
            nextToken
          }
          createdAt
          updatedAt
          workflowStepsActionsId
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateChecklistStepsMutation>response.data.createChecklistSteps;
  }
  async UpdateChecklistSteps(
    input: UpdateChecklistStepsInput,
    condition?: ModelChecklistStepsConditionInput
  ): Promise<UpdateChecklistStepsMutation> {
    const statement = `mutation UpdateChecklistSteps($input: UpdateChecklistStepsInput!, $condition: ModelChecklistStepsConditionInput) {
        updateChecklistSteps(input: $input, condition: $condition) {
          __typename
          id
          name
          actions {
            __typename
            items {
              __typename
              stepNumber
              actualStart
              actualEnd
              id
              createdAt
              updatedAt
              checklistStepsActionsId
              actionStepActionId
            }
            nextToken
          }
          createdAt
          updatedAt
          workflowStepsActionsId
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateChecklistStepsMutation>response.data.updateChecklistSteps;
  }
  async DeleteChecklistSteps(
    input: DeleteChecklistStepsInput,
    condition?: ModelChecklistStepsConditionInput
  ): Promise<DeleteChecklistStepsMutation> {
    const statement = `mutation DeleteChecklistSteps($input: DeleteChecklistStepsInput!, $condition: ModelChecklistStepsConditionInput) {
        deleteChecklistSteps(input: $input, condition: $condition) {
          __typename
          id
          name
          actions {
            __typename
            items {
              __typename
              stepNumber
              actualStart
              actualEnd
              id
              createdAt
              updatedAt
              checklistStepsActionsId
              actionStepActionId
            }
            nextToken
          }
          createdAt
          updatedAt
          workflowStepsActionsId
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteChecklistStepsMutation>response.data.deleteChecklistSteps;
  }
  async CreateChecklist(
    input: CreateChecklistInput,
    condition?: ModelChecklistConditionInput
  ): Promise<CreateChecklistMutation> {
    const statement = `mutation CreateChecklist($input: CreateChecklistInput!, $condition: ModelChecklistConditionInput) {
        createChecklist(input: $input, condition: $condition) {
          __typename
          id
          company
          owner {
            __typename
            id
            company
            name
            email
            createdAt
            updatedAt
          }
          steps {
            __typename
            id
            name
            actions {
              __typename
              nextToken
            }
            createdAt
            updatedAt
            workflowStepsActionsId
          }
          start
          end
          createdAt
          updatedAt
          checklistOwnerId
          checklistStepsId
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateChecklistMutation>response.data.createChecklist;
  }
  async UpdateChecklist(
    input: UpdateChecklistInput,
    condition?: ModelChecklistConditionInput
  ): Promise<UpdateChecklistMutation> {
    const statement = `mutation UpdateChecklist($input: UpdateChecklistInput!, $condition: ModelChecklistConditionInput) {
        updateChecklist(input: $input, condition: $condition) {
          __typename
          id
          company
          owner {
            __typename
            id
            company
            name
            email
            createdAt
            updatedAt
          }
          steps {
            __typename
            id
            name
            actions {
              __typename
              nextToken
            }
            createdAt
            updatedAt
            workflowStepsActionsId
          }
          start
          end
          createdAt
          updatedAt
          checklistOwnerId
          checklistStepsId
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateChecklistMutation>response.data.updateChecklist;
  }
  async DeleteChecklist(
    input: DeleteChecklistInput,
    condition?: ModelChecklistConditionInput
  ): Promise<DeleteChecklistMutation> {
    const statement = `mutation DeleteChecklist($input: DeleteChecklistInput!, $condition: ModelChecklistConditionInput) {
        deleteChecklist(input: $input, condition: $condition) {
          __typename
          id
          company
          owner {
            __typename
            id
            company
            name
            email
            createdAt
            updatedAt
          }
          steps {
            __typename
            id
            name
            actions {
              __typename
              nextToken
            }
            createdAt
            updatedAt
            workflowStepsActionsId
          }
          start
          end
          createdAt
          updatedAt
          checklistOwnerId
          checklistStepsId
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteChecklistMutation>response.data.deleteChecklist;
  }
  async CreateWorkflowSteps(
    input: CreateWorkflowStepsInput,
    condition?: ModelWorkflowStepsConditionInput
  ): Promise<CreateWorkflowStepsMutation> {
    const statement = `mutation CreateWorkflowSteps($input: CreateWorkflowStepsInput!, $condition: ModelWorkflowStepsConditionInput) {
        createWorkflowSteps(input: $input, condition: $condition) {
          __typename
          id
          name
          actions {
            __typename
            items {
              __typename
              id
              name
              createdAt
              updatedAt
              workflowStepsActionsId
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateWorkflowStepsMutation>response.data.createWorkflowSteps;
  }
  async UpdateWorkflowSteps(
    input: UpdateWorkflowStepsInput,
    condition?: ModelWorkflowStepsConditionInput
  ): Promise<UpdateWorkflowStepsMutation> {
    const statement = `mutation UpdateWorkflowSteps($input: UpdateWorkflowStepsInput!, $condition: ModelWorkflowStepsConditionInput) {
        updateWorkflowSteps(input: $input, condition: $condition) {
          __typename
          id
          name
          actions {
            __typename
            items {
              __typename
              id
              name
              createdAt
              updatedAt
              workflowStepsActionsId
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateWorkflowStepsMutation>response.data.updateWorkflowSteps;
  }
  async DeleteWorkflowSteps(
    input: DeleteWorkflowStepsInput,
    condition?: ModelWorkflowStepsConditionInput
  ): Promise<DeleteWorkflowStepsMutation> {
    const statement = `mutation DeleteWorkflowSteps($input: DeleteWorkflowStepsInput!, $condition: ModelWorkflowStepsConditionInput) {
        deleteWorkflowSteps(input: $input, condition: $condition) {
          __typename
          id
          name
          actions {
            __typename
            items {
              __typename
              id
              name
              createdAt
              updatedAt
              workflowStepsActionsId
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteWorkflowStepsMutation>response.data.deleteWorkflowSteps;
  }
  async CreateWorkflow(
    input: CreateWorkflowInput,
    condition?: ModelWorkflowConditionInput
  ): Promise<CreateWorkflowMutation> {
    const statement = `mutation CreateWorkflow($input: CreateWorkflowInput!, $condition: ModelWorkflowConditionInput) {
        createWorkflow(input: $input, condition: $condition) {
          __typename
          id
          company
          owner {
            __typename
            id
            company
            name
            email
            createdAt
            updatedAt
          }
          steps {
            __typename
            id
            name
            actions {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          start
          end
          createdAt
          updatedAt
          workflowOwnerId
          workflowStepsId
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateWorkflowMutation>response.data.createWorkflow;
  }
  async UpdateWorkflow(
    input: UpdateWorkflowInput,
    condition?: ModelWorkflowConditionInput
  ): Promise<UpdateWorkflowMutation> {
    const statement = `mutation UpdateWorkflow($input: UpdateWorkflowInput!, $condition: ModelWorkflowConditionInput) {
        updateWorkflow(input: $input, condition: $condition) {
          __typename
          id
          company
          owner {
            __typename
            id
            company
            name
            email
            createdAt
            updatedAt
          }
          steps {
            __typename
            id
            name
            actions {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          start
          end
          createdAt
          updatedAt
          workflowOwnerId
          workflowStepsId
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateWorkflowMutation>response.data.updateWorkflow;
  }
  async DeleteWorkflow(
    input: DeleteWorkflowInput,
    condition?: ModelWorkflowConditionInput
  ): Promise<DeleteWorkflowMutation> {
    const statement = `mutation DeleteWorkflow($input: DeleteWorkflowInput!, $condition: ModelWorkflowConditionInput) {
        deleteWorkflow(input: $input, condition: $condition) {
          __typename
          id
          company
          owner {
            __typename
            id
            company
            name
            email
            createdAt
            updatedAt
          }
          steps {
            __typename
            id
            name
            actions {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          start
          end
          createdAt
          updatedAt
          workflowOwnerId
          workflowStepsId
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteWorkflowMutation>response.data.deleteWorkflow;
  }
  async GetPendingEvent(id: string): Promise<GetPendingEventQuery> {
    const statement = `query GetPendingEvent($id: ID!) {
        getPendingEvent(id: $id) {
          __typename
          id
          company
          body
          start
          end
          item
          item_id
          status
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetPendingEventQuery>response.data.getPendingEvent;
  }
  async ListPendingEvents(
    filter?: ModelPendingEventFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListPendingEventsQuery> {
    const statement = `query ListPendingEvents($filter: ModelPendingEventFilterInput, $limit: Int, $nextToken: String) {
        listPendingEvents(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            company
            body
            start
            end
            item
            item_id
            status
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListPendingEventsQuery>response.data.listPendingEvents;
  }
  async GetVessel(id: string): Promise<GetVesselQuery> {
    const statement = `query GetVessel($id: ID!) {
        getVessel(id: $id) {
          __typename
          id
          company
          name
          type
          defaultWorkflow {
            __typename
            id
            name
            actions {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
          vesselDefaultWorkflowId
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetVesselQuery>response.data.getVessel;
  }
  async ListVessels(
    filter?: ModelVesselFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListVesselsQuery> {
    const statement = `query ListVessels($filter: ModelVesselFilterInput, $limit: Int, $nextToken: String) {
        listVessels(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            company
            name
            type
            defaultWorkflow {
              __typename
              id
              name
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
            vesselDefaultWorkflowId
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListVesselsQuery>response.data.listVessels;
  }
  async GetStaff(id: string): Promise<GetStaffQuery> {
    const statement = `query GetStaff($id: ID!) {
        getStaff(id: $id) {
          __typename
          id
          company
          name
          email
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetStaffQuery>response.data.getStaff;
  }
  async ListStaff(
    filter?: ModelStaffFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListStaffQuery> {
    const statement = `query ListStaff($filter: ModelStaffFilterInput, $limit: Int, $nextToken: String) {
        listStaff(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            company
            name
            email
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListStaffQuery>response.data.listStaff;
  }
  async GetAction(id: string): Promise<GetActionQuery> {
    const statement = `query GetAction($id: ID!) {
        getAction(id: $id) {
          __typename
          id
          company
          name
          status
          notes
          duration
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetActionQuery>response.data.getAction;
  }
  async ListActions(
    filter?: ModelActionFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListActionsQuery> {
    const statement = `query ListActions($filter: ModelActionFilterInput, $limit: Int, $nextToken: String) {
        listActions(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            company
            name
            status
            notes
            duration
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListActionsQuery>response.data.listActions;
  }
  async GetActionStep(id: string): Promise<GetActionStepQuery> {
    const statement = `query GetActionStep($id: ID!) {
        getActionStep(id: $id) {
          __typename
          stepNumber
          action {
            __typename
            id
            company
            name
            status
            notes
            duration
            createdAt
            updatedAt
          }
          actualStart
          actualEnd
          id
          createdAt
          updatedAt
          checklistStepsActionsId
          actionStepActionId
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetActionStepQuery>response.data.getActionStep;
  }
  async ListActionSteps(
    filter?: ModelActionStepFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListActionStepsQuery> {
    const statement = `query ListActionSteps($filter: ModelActionStepFilterInput, $limit: Int, $nextToken: String) {
        listActionSteps(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            stepNumber
            action {
              __typename
              id
              company
              name
              status
              notes
              duration
              createdAt
              updatedAt
            }
            actualStart
            actualEnd
            id
            createdAt
            updatedAt
            checklistStepsActionsId
            actionStepActionId
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListActionStepsQuery>response.data.listActionSteps;
  }
  async GetChecklistSteps(id: string): Promise<GetChecklistStepsQuery> {
    const statement = `query GetChecklistSteps($id: ID!) {
        getChecklistSteps(id: $id) {
          __typename
          id
          name
          actions {
            __typename
            items {
              __typename
              stepNumber
              actualStart
              actualEnd
              id
              createdAt
              updatedAt
              checklistStepsActionsId
              actionStepActionId
            }
            nextToken
          }
          createdAt
          updatedAt
          workflowStepsActionsId
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetChecklistStepsQuery>response.data.getChecklistSteps;
  }
  async ListChecklistSteps(
    filter?: ModelChecklistStepsFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListChecklistStepsQuery> {
    const statement = `query ListChecklistSteps($filter: ModelChecklistStepsFilterInput, $limit: Int, $nextToken: String) {
        listChecklistSteps(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            name
            actions {
              __typename
              nextToken
            }
            createdAt
            updatedAt
            workflowStepsActionsId
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListChecklistStepsQuery>response.data.listChecklistSteps;
  }
  async GetChecklist(id: string): Promise<GetChecklistQuery> {
    const statement = `query GetChecklist($id: ID!) {
        getChecklist(id: $id) {
          __typename
          id
          company
          owner {
            __typename
            id
            company
            name
            email
            createdAt
            updatedAt
          }
          steps {
            __typename
            id
            name
            actions {
              __typename
              nextToken
            }
            createdAt
            updatedAt
            workflowStepsActionsId
          }
          start
          end
          createdAt
          updatedAt
          checklistOwnerId
          checklistStepsId
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetChecklistQuery>response.data.getChecklist;
  }
  async ListChecklists(
    filter?: ModelChecklistFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListChecklistsQuery> {
    const statement = `query ListChecklists($filter: ModelChecklistFilterInput, $limit: Int, $nextToken: String) {
        listChecklists(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            company
            owner {
              __typename
              id
              company
              name
              email
              createdAt
              updatedAt
            }
            steps {
              __typename
              id
              name
              createdAt
              updatedAt
              workflowStepsActionsId
            }
            start
            end
            createdAt
            updatedAt
            checklistOwnerId
            checklistStepsId
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListChecklistsQuery>response.data.listChecklists;
  }
  async GetWorkflowSteps(id: string): Promise<GetWorkflowStepsQuery> {
    const statement = `query GetWorkflowSteps($id: ID!) {
        getWorkflowSteps(id: $id) {
          __typename
          id
          name
          actions {
            __typename
            items {
              __typename
              id
              name
              createdAt
              updatedAt
              workflowStepsActionsId
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetWorkflowStepsQuery>response.data.getWorkflowSteps;
  }
  async ListWorkflowSteps(
    filter?: ModelWorkflowStepsFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListWorkflowStepsQuery> {
    const statement = `query ListWorkflowSteps($filter: ModelWorkflowStepsFilterInput, $limit: Int, $nextToken: String) {
        listWorkflowSteps(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            name
            actions {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListWorkflowStepsQuery>response.data.listWorkflowSteps;
  }
  async GetWorkflow(id: string): Promise<GetWorkflowQuery> {
    const statement = `query GetWorkflow($id: ID!) {
        getWorkflow(id: $id) {
          __typename
          id
          company
          owner {
            __typename
            id
            company
            name
            email
            createdAt
            updatedAt
          }
          steps {
            __typename
            id
            name
            actions {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          start
          end
          createdAt
          updatedAt
          workflowOwnerId
          workflowStepsId
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetWorkflowQuery>response.data.getWorkflow;
  }
  async ListWorkflows(
    filter?: ModelWorkflowFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListWorkflowsQuery> {
    const statement = `query ListWorkflows($filter: ModelWorkflowFilterInput, $limit: Int, $nextToken: String) {
        listWorkflows(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            company
            owner {
              __typename
              id
              company
              name
              email
              createdAt
              updatedAt
            }
            steps {
              __typename
              id
              name
              createdAt
              updatedAt
            }
            start
            end
            createdAt
            updatedAt
            workflowOwnerId
            workflowStepsId
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListWorkflowsQuery>response.data.listWorkflows;
  }
  OnCreatePendingEventListener(
    filter?: ModelSubscriptionPendingEventFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreatePendingEvent">>
  > {
    const statement = `subscription OnCreatePendingEvent($filter: ModelSubscriptionPendingEventFilterInput) {
        onCreatePendingEvent(filter: $filter) {
          __typename
          id
          company
          body
          start
          end
          item
          item_id
          status
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<
        Pick<__SubscriptionContainer, "onCreatePendingEvent">
      >
    >;
  }

  OnUpdatePendingEventListener(
    filter?: ModelSubscriptionPendingEventFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdatePendingEvent">>
  > {
    const statement = `subscription OnUpdatePendingEvent($filter: ModelSubscriptionPendingEventFilterInput) {
        onUpdatePendingEvent(filter: $filter) {
          __typename
          id
          company
          body
          start
          end
          item
          item_id
          status
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<
        Pick<__SubscriptionContainer, "onUpdatePendingEvent">
      >
    >;
  }

  OnDeletePendingEventListener(
    filter?: ModelSubscriptionPendingEventFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeletePendingEvent">>
  > {
    const statement = `subscription OnDeletePendingEvent($filter: ModelSubscriptionPendingEventFilterInput) {
        onDeletePendingEvent(filter: $filter) {
          __typename
          id
          company
          body
          start
          end
          item
          item_id
          status
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<
        Pick<__SubscriptionContainer, "onDeletePendingEvent">
      >
    >;
  }

  OnCreateVesselListener(
    filter?: ModelSubscriptionVesselFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateVessel">>
  > {
    const statement = `subscription OnCreateVessel($filter: ModelSubscriptionVesselFilterInput) {
        onCreateVessel(filter: $filter) {
          __typename
          id
          company
          name
          type
          defaultWorkflow {
            __typename
            id
            name
            actions {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
          vesselDefaultWorkflowId
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateVessel">>
    >;
  }

  OnUpdateVesselListener(
    filter?: ModelSubscriptionVesselFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateVessel">>
  > {
    const statement = `subscription OnUpdateVessel($filter: ModelSubscriptionVesselFilterInput) {
        onUpdateVessel(filter: $filter) {
          __typename
          id
          company
          name
          type
          defaultWorkflow {
            __typename
            id
            name
            actions {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
          vesselDefaultWorkflowId
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateVessel">>
    >;
  }

  OnDeleteVesselListener(
    filter?: ModelSubscriptionVesselFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteVessel">>
  > {
    const statement = `subscription OnDeleteVessel($filter: ModelSubscriptionVesselFilterInput) {
        onDeleteVessel(filter: $filter) {
          __typename
          id
          company
          name
          type
          defaultWorkflow {
            __typename
            id
            name
            actions {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
          vesselDefaultWorkflowId
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteVessel">>
    >;
  }

  OnCreateStaffListener(
    filter?: ModelSubscriptionStaffFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateStaff">>
  > {
    const statement = `subscription OnCreateStaff($filter: ModelSubscriptionStaffFilterInput) {
        onCreateStaff(filter: $filter) {
          __typename
          id
          company
          name
          email
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateStaff">>
    >;
  }

  OnUpdateStaffListener(
    filter?: ModelSubscriptionStaffFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateStaff">>
  > {
    const statement = `subscription OnUpdateStaff($filter: ModelSubscriptionStaffFilterInput) {
        onUpdateStaff(filter: $filter) {
          __typename
          id
          company
          name
          email
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateStaff">>
    >;
  }

  OnDeleteStaffListener(
    filter?: ModelSubscriptionStaffFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteStaff">>
  > {
    const statement = `subscription OnDeleteStaff($filter: ModelSubscriptionStaffFilterInput) {
        onDeleteStaff(filter: $filter) {
          __typename
          id
          company
          name
          email
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteStaff">>
    >;
  }

  OnCreateActionListener(
    filter?: ModelSubscriptionActionFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateAction">>
  > {
    const statement = `subscription OnCreateAction($filter: ModelSubscriptionActionFilterInput) {
        onCreateAction(filter: $filter) {
          __typename
          id
          company
          name
          status
          notes
          duration
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateAction">>
    >;
  }

  OnUpdateActionListener(
    filter?: ModelSubscriptionActionFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateAction">>
  > {
    const statement = `subscription OnUpdateAction($filter: ModelSubscriptionActionFilterInput) {
        onUpdateAction(filter: $filter) {
          __typename
          id
          company
          name
          status
          notes
          duration
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateAction">>
    >;
  }

  OnDeleteActionListener(
    filter?: ModelSubscriptionActionFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteAction">>
  > {
    const statement = `subscription OnDeleteAction($filter: ModelSubscriptionActionFilterInput) {
        onDeleteAction(filter: $filter) {
          __typename
          id
          company
          name
          status
          notes
          duration
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteAction">>
    >;
  }

  OnCreateActionStepListener(
    filter?: ModelSubscriptionActionStepFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateActionStep">>
  > {
    const statement = `subscription OnCreateActionStep($filter: ModelSubscriptionActionStepFilterInput) {
        onCreateActionStep(filter: $filter) {
          __typename
          stepNumber
          action {
            __typename
            id
            company
            name
            status
            notes
            duration
            createdAt
            updatedAt
          }
          actualStart
          actualEnd
          id
          createdAt
          updatedAt
          checklistStepsActionsId
          actionStepActionId
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateActionStep">>
    >;
  }

  OnUpdateActionStepListener(
    filter?: ModelSubscriptionActionStepFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateActionStep">>
  > {
    const statement = `subscription OnUpdateActionStep($filter: ModelSubscriptionActionStepFilterInput) {
        onUpdateActionStep(filter: $filter) {
          __typename
          stepNumber
          action {
            __typename
            id
            company
            name
            status
            notes
            duration
            createdAt
            updatedAt
          }
          actualStart
          actualEnd
          id
          createdAt
          updatedAt
          checklistStepsActionsId
          actionStepActionId
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateActionStep">>
    >;
  }

  OnDeleteActionStepListener(
    filter?: ModelSubscriptionActionStepFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteActionStep">>
  > {
    const statement = `subscription OnDeleteActionStep($filter: ModelSubscriptionActionStepFilterInput) {
        onDeleteActionStep(filter: $filter) {
          __typename
          stepNumber
          action {
            __typename
            id
            company
            name
            status
            notes
            duration
            createdAt
            updatedAt
          }
          actualStart
          actualEnd
          id
          createdAt
          updatedAt
          checklistStepsActionsId
          actionStepActionId
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteActionStep">>
    >;
  }

  OnCreateChecklistStepsListener(
    filter?: ModelSubscriptionChecklistStepsFilterInput
  ): Observable<
    SubscriptionResponse<
      Pick<__SubscriptionContainer, "onCreateChecklistSteps">
    >
  > {
    const statement = `subscription OnCreateChecklistSteps($filter: ModelSubscriptionChecklistStepsFilterInput) {
        onCreateChecklistSteps(filter: $filter) {
          __typename
          id
          name
          actions {
            __typename
            items {
              __typename
              stepNumber
              actualStart
              actualEnd
              id
              createdAt
              updatedAt
              checklistStepsActionsId
              actionStepActionId
            }
            nextToken
          }
          createdAt
          updatedAt
          workflowStepsActionsId
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<
        Pick<__SubscriptionContainer, "onCreateChecklistSteps">
      >
    >;
  }

  OnUpdateChecklistStepsListener(
    filter?: ModelSubscriptionChecklistStepsFilterInput
  ): Observable<
    SubscriptionResponse<
      Pick<__SubscriptionContainer, "onUpdateChecklistSteps">
    >
  > {
    const statement = `subscription OnUpdateChecklistSteps($filter: ModelSubscriptionChecklistStepsFilterInput) {
        onUpdateChecklistSteps(filter: $filter) {
          __typename
          id
          name
          actions {
            __typename
            items {
              __typename
              stepNumber
              actualStart
              actualEnd
              id
              createdAt
              updatedAt
              checklistStepsActionsId
              actionStepActionId
            }
            nextToken
          }
          createdAt
          updatedAt
          workflowStepsActionsId
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<
        Pick<__SubscriptionContainer, "onUpdateChecklistSteps">
      >
    >;
  }

  OnDeleteChecklistStepsListener(
    filter?: ModelSubscriptionChecklistStepsFilterInput
  ): Observable<
    SubscriptionResponse<
      Pick<__SubscriptionContainer, "onDeleteChecklistSteps">
    >
  > {
    const statement = `subscription OnDeleteChecklistSteps($filter: ModelSubscriptionChecklistStepsFilterInput) {
        onDeleteChecklistSteps(filter: $filter) {
          __typename
          id
          name
          actions {
            __typename
            items {
              __typename
              stepNumber
              actualStart
              actualEnd
              id
              createdAt
              updatedAt
              checklistStepsActionsId
              actionStepActionId
            }
            nextToken
          }
          createdAt
          updatedAt
          workflowStepsActionsId
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<
        Pick<__SubscriptionContainer, "onDeleteChecklistSteps">
      >
    >;
  }

  OnCreateChecklistListener(
    filter?: ModelSubscriptionChecklistFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateChecklist">>
  > {
    const statement = `subscription OnCreateChecklist($filter: ModelSubscriptionChecklistFilterInput) {
        onCreateChecklist(filter: $filter) {
          __typename
          id
          company
          owner {
            __typename
            id
            company
            name
            email
            createdAt
            updatedAt
          }
          steps {
            __typename
            id
            name
            actions {
              __typename
              nextToken
            }
            createdAt
            updatedAt
            workflowStepsActionsId
          }
          start
          end
          createdAt
          updatedAt
          checklistOwnerId
          checklistStepsId
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateChecklist">>
    >;
  }

  OnUpdateChecklistListener(
    filter?: ModelSubscriptionChecklistFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateChecklist">>
  > {
    const statement = `subscription OnUpdateChecklist($filter: ModelSubscriptionChecklistFilterInput) {
        onUpdateChecklist(filter: $filter) {
          __typename
          id
          company
          owner {
            __typename
            id
            company
            name
            email
            createdAt
            updatedAt
          }
          steps {
            __typename
            id
            name
            actions {
              __typename
              nextToken
            }
            createdAt
            updatedAt
            workflowStepsActionsId
          }
          start
          end
          createdAt
          updatedAt
          checklistOwnerId
          checklistStepsId
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateChecklist">>
    >;
  }

  OnDeleteChecklistListener(
    filter?: ModelSubscriptionChecklistFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteChecklist">>
  > {
    const statement = `subscription OnDeleteChecklist($filter: ModelSubscriptionChecklistFilterInput) {
        onDeleteChecklist(filter: $filter) {
          __typename
          id
          company
          owner {
            __typename
            id
            company
            name
            email
            createdAt
            updatedAt
          }
          steps {
            __typename
            id
            name
            actions {
              __typename
              nextToken
            }
            createdAt
            updatedAt
            workflowStepsActionsId
          }
          start
          end
          createdAt
          updatedAt
          checklistOwnerId
          checklistStepsId
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteChecklist">>
    >;
  }

  OnCreateWorkflowStepsListener(
    filter?: ModelSubscriptionWorkflowStepsFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateWorkflowSteps">>
  > {
    const statement = `subscription OnCreateWorkflowSteps($filter: ModelSubscriptionWorkflowStepsFilterInput) {
        onCreateWorkflowSteps(filter: $filter) {
          __typename
          id
          name
          actions {
            __typename
            items {
              __typename
              id
              name
              createdAt
              updatedAt
              workflowStepsActionsId
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<
        Pick<__SubscriptionContainer, "onCreateWorkflowSteps">
      >
    >;
  }

  OnUpdateWorkflowStepsListener(
    filter?: ModelSubscriptionWorkflowStepsFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateWorkflowSteps">>
  > {
    const statement = `subscription OnUpdateWorkflowSteps($filter: ModelSubscriptionWorkflowStepsFilterInput) {
        onUpdateWorkflowSteps(filter: $filter) {
          __typename
          id
          name
          actions {
            __typename
            items {
              __typename
              id
              name
              createdAt
              updatedAt
              workflowStepsActionsId
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<
        Pick<__SubscriptionContainer, "onUpdateWorkflowSteps">
      >
    >;
  }

  OnDeleteWorkflowStepsListener(
    filter?: ModelSubscriptionWorkflowStepsFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteWorkflowSteps">>
  > {
    const statement = `subscription OnDeleteWorkflowSteps($filter: ModelSubscriptionWorkflowStepsFilterInput) {
        onDeleteWorkflowSteps(filter: $filter) {
          __typename
          id
          name
          actions {
            __typename
            items {
              __typename
              id
              name
              createdAt
              updatedAt
              workflowStepsActionsId
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<
        Pick<__SubscriptionContainer, "onDeleteWorkflowSteps">
      >
    >;
  }

  OnCreateWorkflowListener(
    filter?: ModelSubscriptionWorkflowFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateWorkflow">>
  > {
    const statement = `subscription OnCreateWorkflow($filter: ModelSubscriptionWorkflowFilterInput) {
        onCreateWorkflow(filter: $filter) {
          __typename
          id
          company
          owner {
            __typename
            id
            company
            name
            email
            createdAt
            updatedAt
          }
          steps {
            __typename
            id
            name
            actions {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          start
          end
          createdAt
          updatedAt
          workflowOwnerId
          workflowStepsId
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateWorkflow">>
    >;
  }

  OnUpdateWorkflowListener(
    filter?: ModelSubscriptionWorkflowFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateWorkflow">>
  > {
    const statement = `subscription OnUpdateWorkflow($filter: ModelSubscriptionWorkflowFilterInput) {
        onUpdateWorkflow(filter: $filter) {
          __typename
          id
          company
          owner {
            __typename
            id
            company
            name
            email
            createdAt
            updatedAt
          }
          steps {
            __typename
            id
            name
            actions {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          start
          end
          createdAt
          updatedAt
          workflowOwnerId
          workflowStepsId
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateWorkflow">>
    >;
  }

  OnDeleteWorkflowListener(
    filter?: ModelSubscriptionWorkflowFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteWorkflow">>
  > {
    const statement = `subscription OnDeleteWorkflow($filter: ModelSubscriptionWorkflowFilterInput) {
        onDeleteWorkflow(filter: $filter) {
          __typename
          id
          company
          owner {
            __typename
            id
            company
            name
            email
            createdAt
            updatedAt
          }
          steps {
            __typename
            id
            name
            actions {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          start
          end
          createdAt
          updatedAt
          workflowOwnerId
          workflowStepsId
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteWorkflow">>
    >;
  }
}
