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
  onCreateEvent: OnCreateEventSubscription;
  onUpdateEvent: OnUpdateEventSubscription;
  onDeleteEvent: OnDeleteEventSubscription;
  onCreateVessel: OnCreateVesselSubscription;
  onUpdateVessel: OnUpdateVesselSubscription;
  onDeleteVessel: OnDeleteVesselSubscription;
  onCreateContact: OnCreateContactSubscription;
  onUpdateContact: OnUpdateContactSubscription;
  onDeleteContact: OnDeleteContactSubscription;
  onCreateAction: OnCreateActionSubscription;
  onUpdateAction: OnUpdateActionSubscription;
  onDeleteAction: OnDeleteActionSubscription;
  onCreateStep: OnCreateStepSubscription;
  onUpdateStep: OnUpdateStepSubscription;
  onDeleteStep: OnDeleteStepSubscription;
  onCreateCheckList: OnCreateCheckListSubscription;
  onUpdateCheckList: OnUpdateCheckListSubscription;
  onDeleteCheckList: OnDeleteCheckListSubscription;
  onCreateWorkflow: OnCreateWorkflowSubscription;
  onUpdateWorkflow: OnUpdateWorkflowSubscription;
  onDeleteWorkflow: OnDeleteWorkflowSubscription;
};

export type CreateEventInput = {
  id?: string | null;
  company?: string | null;
  body?: string | null;
  start?: string | null;
  end?: string | null;
  item?: string | null;
  item_id?: string | null;
  status?: string | null;
};

export type ModelEventConditionInput = {
  company?: ModelIDInput | null;
  body?: ModelStringInput | null;
  start?: ModelStringInput | null;
  end?: ModelStringInput | null;
  item?: ModelStringInput | null;
  item_id?: ModelStringInput | null;
  status?: ModelStringInput | null;
  and?: Array<ModelEventConditionInput | null> | null;
  or?: Array<ModelEventConditionInput | null> | null;
  not?: ModelEventConditionInput | null;
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

export type Event = {
  __typename: "Event";
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

export type UpdateEventInput = {
  id: string;
  company?: string | null;
  body?: string | null;
  start?: string | null;
  end?: string | null;
  item?: string | null;
  item_id?: string | null;
  status?: string | null;
};

export type DeleteEventInput = {
  id: string;
};

export type CreateVesselInput = {
  id?: string | null;
  company: string;
  name?: string | null;
};

export type ModelVesselConditionInput = {
  company?: ModelIDInput | null;
  name?: ModelStringInput | null;
  and?: Array<ModelVesselConditionInput | null> | null;
  or?: Array<ModelVesselConditionInput | null> | null;
  not?: ModelVesselConditionInput | null;
};

export type Vessel = {
  __typename: "Vessel";
  id: string;
  company: string;
  name?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateVesselInput = {
  id: string;
  company?: string | null;
  name?: string | null;
};

export type DeleteVesselInput = {
  id: string;
};

export type CreateContactInput = {
  id?: string | null;
  company: string;
  name?: string | null;
  email?: string | null;
};

export type ModelContactConditionInput = {
  company?: ModelIDInput | null;
  name?: ModelStringInput | null;
  email?: ModelStringInput | null;
  and?: Array<ModelContactConditionInput | null> | null;
  or?: Array<ModelContactConditionInput | null> | null;
  not?: ModelContactConditionInput | null;
};

export type Contact = {
  __typename: "Contact";
  id: string;
  company: string;
  name?: string | null;
  email?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateContactInput = {
  id: string;
  company?: string | null;
  name?: string | null;
  email?: string | null;
};

export type DeleteContactInput = {
  id: string;
};

export type CreateActionInput = {
  id?: string | null;
  company: string;
  status?: boolean | null;
  description?: string | null;
  notes?: string | null;
  duration?: number | null;
};

export type ModelActionConditionInput = {
  company?: ModelIDInput | null;
  status?: ModelBooleanInput | null;
  description?: ModelStringInput | null;
  notes?: ModelStringInput | null;
  duration?: ModelIntInput | null;
  and?: Array<ModelActionConditionInput | null> | null;
  or?: Array<ModelActionConditionInput | null> | null;
  not?: ModelActionConditionInput | null;
};

export type ModelBooleanInput = {
  ne?: boolean | null;
  eq?: boolean | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
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

export type Action = {
  __typename: "Action";
  id: string;
  company: string;
  status?: boolean | null;
  description?: string | null;
  notes?: string | null;
  duration?: number | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateActionInput = {
  id: string;
  company?: string | null;
  status?: boolean | null;
  description?: string | null;
  notes?: string | null;
  duration?: number | null;
};

export type DeleteActionInput = {
  id: string;
};

export type CreateStepInput = {
  id?: string | null;
  company: string;
  checkListStepsId?: string | null;
  stepActivityId?: string | null;
};

export type ModelStepConditionInput = {
  company?: ModelIDInput | null;
  and?: Array<ModelStepConditionInput | null> | null;
  or?: Array<ModelStepConditionInput | null> | null;
  not?: ModelStepConditionInput | null;
  checkListStepsId?: ModelIDInput | null;
  stepActivityId?: ModelIDInput | null;
};

export type Step = {
  __typename: "Step";
  id: string;
  company: string;
  activity?: Action | null;
  createdAt: string;
  updatedAt: string;
  checkListStepsId?: string | null;
  stepActivityId?: string | null;
};

export type UpdateStepInput = {
  id: string;
  company?: string | null;
  checkListStepsId?: string | null;
  stepActivityId?: string | null;
};

export type DeleteStepInput = {
  id: string;
};

export type CreateCheckListInput = {
  id?: string | null;
  company: string;
  start?: string | null;
  end?: string | null;
  workflowStepsId?: string | null;
  checkListOwnerId?: string | null;
};

export type ModelCheckListConditionInput = {
  company?: ModelIDInput | null;
  start?: ModelStringInput | null;
  end?: ModelStringInput | null;
  and?: Array<ModelCheckListConditionInput | null> | null;
  or?: Array<ModelCheckListConditionInput | null> | null;
  not?: ModelCheckListConditionInput | null;
  workflowStepsId?: ModelIDInput | null;
  checkListOwnerId?: ModelIDInput | null;
};

export type CheckList = {
  __typename: "CheckList";
  id: string;
  company: string;
  owner?: Contact | null;
  steps?: ModelStepConnection | null;
  start?: string | null;
  end?: string | null;
  createdAt: string;
  updatedAt: string;
  workflowStepsId?: string | null;
  checkListOwnerId?: string | null;
};

export type ModelStepConnection = {
  __typename: "ModelStepConnection";
  items: Array<Step | null>;
  nextToken?: string | null;
};

export type UpdateCheckListInput = {
  id: string;
  company?: string | null;
  start?: string | null;
  end?: string | null;
  workflowStepsId?: string | null;
  checkListOwnerId?: string | null;
};

export type DeleteCheckListInput = {
  id: string;
};

export type CreateWorkflowInput = {
  id?: string | null;
  company: string;
  start?: string | null;
  end?: string | null;
  workflowOwnerId?: string | null;
};

export type ModelWorkflowConditionInput = {
  company?: ModelIDInput | null;
  start?: ModelStringInput | null;
  end?: ModelStringInput | null;
  and?: Array<ModelWorkflowConditionInput | null> | null;
  or?: Array<ModelWorkflowConditionInput | null> | null;
  not?: ModelWorkflowConditionInput | null;
  workflowOwnerId?: ModelIDInput | null;
};

export type Workflow = {
  __typename: "Workflow";
  id: string;
  company: string;
  owner?: Contact | null;
  steps?: ModelCheckListConnection | null;
  start?: string | null;
  end?: string | null;
  createdAt: string;
  updatedAt: string;
  workflowOwnerId?: string | null;
};

export type ModelCheckListConnection = {
  __typename: "ModelCheckListConnection";
  items: Array<CheckList | null>;
  nextToken?: string | null;
};

export type UpdateWorkflowInput = {
  id: string;
  company?: string | null;
  start?: string | null;
  end?: string | null;
  workflowOwnerId?: string | null;
};

export type DeleteWorkflowInput = {
  id: string;
};

export type ModelEventFilterInput = {
  id?: ModelIDInput | null;
  company?: ModelIDInput | null;
  body?: ModelStringInput | null;
  start?: ModelStringInput | null;
  end?: ModelStringInput | null;
  item?: ModelStringInput | null;
  item_id?: ModelStringInput | null;
  status?: ModelStringInput | null;
  and?: Array<ModelEventFilterInput | null> | null;
  or?: Array<ModelEventFilterInput | null> | null;
  not?: ModelEventFilterInput | null;
};

export type ModelEventConnection = {
  __typename: "ModelEventConnection";
  items: Array<Event | null>;
  nextToken?: string | null;
};

export type ModelVesselFilterInput = {
  id?: ModelIDInput | null;
  company?: ModelIDInput | null;
  name?: ModelStringInput | null;
  and?: Array<ModelVesselFilterInput | null> | null;
  or?: Array<ModelVesselFilterInput | null> | null;
  not?: ModelVesselFilterInput | null;
};

export type ModelVesselConnection = {
  __typename: "ModelVesselConnection";
  items: Array<Vessel | null>;
  nextToken?: string | null;
};

export type ModelContactFilterInput = {
  id?: ModelIDInput | null;
  company?: ModelIDInput | null;
  name?: ModelStringInput | null;
  email?: ModelStringInput | null;
  and?: Array<ModelContactFilterInput | null> | null;
  or?: Array<ModelContactFilterInput | null> | null;
  not?: ModelContactFilterInput | null;
};

export type ModelContactConnection = {
  __typename: "ModelContactConnection";
  items: Array<Contact | null>;
  nextToken?: string | null;
};

export type ModelActionFilterInput = {
  id?: ModelIDInput | null;
  company?: ModelIDInput | null;
  status?: ModelBooleanInput | null;
  description?: ModelStringInput | null;
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

export type ModelStepFilterInput = {
  id?: ModelIDInput | null;
  company?: ModelIDInput | null;
  and?: Array<ModelStepFilterInput | null> | null;
  or?: Array<ModelStepFilterInput | null> | null;
  not?: ModelStepFilterInput | null;
  checkListStepsId?: ModelIDInput | null;
  stepActivityId?: ModelIDInput | null;
};

export type ModelCheckListFilterInput = {
  id?: ModelIDInput | null;
  company?: ModelIDInput | null;
  start?: ModelStringInput | null;
  end?: ModelStringInput | null;
  and?: Array<ModelCheckListFilterInput | null> | null;
  or?: Array<ModelCheckListFilterInput | null> | null;
  not?: ModelCheckListFilterInput | null;
  workflowStepsId?: ModelIDInput | null;
  checkListOwnerId?: ModelIDInput | null;
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
};

export type ModelWorkflowConnection = {
  __typename: "ModelWorkflowConnection";
  items: Array<Workflow | null>;
  nextToken?: string | null;
};

export type ModelSubscriptionEventFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  company?: ModelSubscriptionIDInput | null;
  body?: ModelSubscriptionStringInput | null;
  start?: ModelSubscriptionStringInput | null;
  end?: ModelSubscriptionStringInput | null;
  item?: ModelSubscriptionStringInput | null;
  item_id?: ModelSubscriptionStringInput | null;
  status?: ModelSubscriptionStringInput | null;
  and?: Array<ModelSubscriptionEventFilterInput | null> | null;
  or?: Array<ModelSubscriptionEventFilterInput | null> | null;
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
  and?: Array<ModelSubscriptionVesselFilterInput | null> | null;
  or?: Array<ModelSubscriptionVesselFilterInput | null> | null;
};

export type ModelSubscriptionContactFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  company?: ModelSubscriptionIDInput | null;
  name?: ModelSubscriptionStringInput | null;
  email?: ModelSubscriptionStringInput | null;
  and?: Array<ModelSubscriptionContactFilterInput | null> | null;
  or?: Array<ModelSubscriptionContactFilterInput | null> | null;
};

export type ModelSubscriptionActionFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  company?: ModelSubscriptionIDInput | null;
  status?: ModelSubscriptionBooleanInput | null;
  description?: ModelSubscriptionStringInput | null;
  notes?: ModelSubscriptionStringInput | null;
  duration?: ModelSubscriptionIntInput | null;
  and?: Array<ModelSubscriptionActionFilterInput | null> | null;
  or?: Array<ModelSubscriptionActionFilterInput | null> | null;
};

export type ModelSubscriptionBooleanInput = {
  ne?: boolean | null;
  eq?: boolean | null;
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

export type ModelSubscriptionStepFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  company?: ModelSubscriptionIDInput | null;
  and?: Array<ModelSubscriptionStepFilterInput | null> | null;
  or?: Array<ModelSubscriptionStepFilterInput | null> | null;
};

export type ModelSubscriptionCheckListFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  company?: ModelSubscriptionIDInput | null;
  start?: ModelSubscriptionStringInput | null;
  end?: ModelSubscriptionStringInput | null;
  and?: Array<ModelSubscriptionCheckListFilterInput | null> | null;
  or?: Array<ModelSubscriptionCheckListFilterInput | null> | null;
};

export type ModelSubscriptionWorkflowFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  company?: ModelSubscriptionIDInput | null;
  start?: ModelSubscriptionStringInput | null;
  end?: ModelSubscriptionStringInput | null;
  and?: Array<ModelSubscriptionWorkflowFilterInput | null> | null;
  or?: Array<ModelSubscriptionWorkflowFilterInput | null> | null;
};

export type CreateEventMutation = {
  __typename: "Event";
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

export type UpdateEventMutation = {
  __typename: "Event";
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

export type DeleteEventMutation = {
  __typename: "Event";
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
  company: string;
  name?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateVesselMutation = {
  __typename: "Vessel";
  id: string;
  company: string;
  name?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type DeleteVesselMutation = {
  __typename: "Vessel";
  id: string;
  company: string;
  name?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type CreateContactMutation = {
  __typename: "Contact";
  id: string;
  company: string;
  name?: string | null;
  email?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateContactMutation = {
  __typename: "Contact";
  id: string;
  company: string;
  name?: string | null;
  email?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type DeleteContactMutation = {
  __typename: "Contact";
  id: string;
  company: string;
  name?: string | null;
  email?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type CreateActionMutation = {
  __typename: "Action";
  id: string;
  company: string;
  status?: boolean | null;
  description?: string | null;
  notes?: string | null;
  duration?: number | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateActionMutation = {
  __typename: "Action";
  id: string;
  company: string;
  status?: boolean | null;
  description?: string | null;
  notes?: string | null;
  duration?: number | null;
  createdAt: string;
  updatedAt: string;
};

export type DeleteActionMutation = {
  __typename: "Action";
  id: string;
  company: string;
  status?: boolean | null;
  description?: string | null;
  notes?: string | null;
  duration?: number | null;
  createdAt: string;
  updatedAt: string;
};

export type CreateStepMutation = {
  __typename: "Step";
  id: string;
  company: string;
  activity?: {
    __typename: "Action";
    id: string;
    company: string;
    status?: boolean | null;
    description?: string | null;
    notes?: string | null;
    duration?: number | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
  checkListStepsId?: string | null;
  stepActivityId?: string | null;
};

export type UpdateStepMutation = {
  __typename: "Step";
  id: string;
  company: string;
  activity?: {
    __typename: "Action";
    id: string;
    company: string;
    status?: boolean | null;
    description?: string | null;
    notes?: string | null;
    duration?: number | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
  checkListStepsId?: string | null;
  stepActivityId?: string | null;
};

export type DeleteStepMutation = {
  __typename: "Step";
  id: string;
  company: string;
  activity?: {
    __typename: "Action";
    id: string;
    company: string;
    status?: boolean | null;
    description?: string | null;
    notes?: string | null;
    duration?: number | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
  checkListStepsId?: string | null;
  stepActivityId?: string | null;
};

export type CreateCheckListMutation = {
  __typename: "CheckList";
  id: string;
  company: string;
  owner?: {
    __typename: "Contact";
    id: string;
    company: string;
    name?: string | null;
    email?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  steps?: {
    __typename: "ModelStepConnection";
    items: Array<{
      __typename: "Step";
      id: string;
      company: string;
      createdAt: string;
      updatedAt: string;
      checkListStepsId?: string | null;
      stepActivityId?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
  start?: string | null;
  end?: string | null;
  createdAt: string;
  updatedAt: string;
  workflowStepsId?: string | null;
  checkListOwnerId?: string | null;
};

export type UpdateCheckListMutation = {
  __typename: "CheckList";
  id: string;
  company: string;
  owner?: {
    __typename: "Contact";
    id: string;
    company: string;
    name?: string | null;
    email?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  steps?: {
    __typename: "ModelStepConnection";
    items: Array<{
      __typename: "Step";
      id: string;
      company: string;
      createdAt: string;
      updatedAt: string;
      checkListStepsId?: string | null;
      stepActivityId?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
  start?: string | null;
  end?: string | null;
  createdAt: string;
  updatedAt: string;
  workflowStepsId?: string | null;
  checkListOwnerId?: string | null;
};

export type DeleteCheckListMutation = {
  __typename: "CheckList";
  id: string;
  company: string;
  owner?: {
    __typename: "Contact";
    id: string;
    company: string;
    name?: string | null;
    email?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  steps?: {
    __typename: "ModelStepConnection";
    items: Array<{
      __typename: "Step";
      id: string;
      company: string;
      createdAt: string;
      updatedAt: string;
      checkListStepsId?: string | null;
      stepActivityId?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
  start?: string | null;
  end?: string | null;
  createdAt: string;
  updatedAt: string;
  workflowStepsId?: string | null;
  checkListOwnerId?: string | null;
};

export type CreateWorkflowMutation = {
  __typename: "Workflow";
  id: string;
  company: string;
  owner?: {
    __typename: "Contact";
    id: string;
    company: string;
    name?: string | null;
    email?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  steps?: {
    __typename: "ModelCheckListConnection";
    items: Array<{
      __typename: "CheckList";
      id: string;
      company: string;
      start?: string | null;
      end?: string | null;
      createdAt: string;
      updatedAt: string;
      workflowStepsId?: string | null;
      checkListOwnerId?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
  start?: string | null;
  end?: string | null;
  createdAt: string;
  updatedAt: string;
  workflowOwnerId?: string | null;
};

export type UpdateWorkflowMutation = {
  __typename: "Workflow";
  id: string;
  company: string;
  owner?: {
    __typename: "Contact";
    id: string;
    company: string;
    name?: string | null;
    email?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  steps?: {
    __typename: "ModelCheckListConnection";
    items: Array<{
      __typename: "CheckList";
      id: string;
      company: string;
      start?: string | null;
      end?: string | null;
      createdAt: string;
      updatedAt: string;
      workflowStepsId?: string | null;
      checkListOwnerId?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
  start?: string | null;
  end?: string | null;
  createdAt: string;
  updatedAt: string;
  workflowOwnerId?: string | null;
};

export type DeleteWorkflowMutation = {
  __typename: "Workflow";
  id: string;
  company: string;
  owner?: {
    __typename: "Contact";
    id: string;
    company: string;
    name?: string | null;
    email?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  steps?: {
    __typename: "ModelCheckListConnection";
    items: Array<{
      __typename: "CheckList";
      id: string;
      company: string;
      start?: string | null;
      end?: string | null;
      createdAt: string;
      updatedAt: string;
      workflowStepsId?: string | null;
      checkListOwnerId?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
  start?: string | null;
  end?: string | null;
  createdAt: string;
  updatedAt: string;
  workflowOwnerId?: string | null;
};

export type GetEventQuery = {
  __typename: "Event";
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

export type ListEventsQuery = {
  __typename: "ModelEventConnection";
  items: Array<{
    __typename: "Event";
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
  company: string;
  name?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type ListVesselsQuery = {
  __typename: "ModelVesselConnection";
  items: Array<{
    __typename: "Vessel";
    id: string;
    company: string;
    name?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null>;
  nextToken?: string | null;
};

export type GetContactQuery = {
  __typename: "Contact";
  id: string;
  company: string;
  name?: string | null;
  email?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type ListContactsQuery = {
  __typename: "ModelContactConnection";
  items: Array<{
    __typename: "Contact";
    id: string;
    company: string;
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
  company: string;
  status?: boolean | null;
  description?: string | null;
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
    company: string;
    status?: boolean | null;
    description?: string | null;
    notes?: string | null;
    duration?: number | null;
    createdAt: string;
    updatedAt: string;
  } | null>;
  nextToken?: string | null;
};

export type GetStepQuery = {
  __typename: "Step";
  id: string;
  company: string;
  activity?: {
    __typename: "Action";
    id: string;
    company: string;
    status?: boolean | null;
    description?: string | null;
    notes?: string | null;
    duration?: number | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
  checkListStepsId?: string | null;
  stepActivityId?: string | null;
};

export type ListStepsQuery = {
  __typename: "ModelStepConnection";
  items: Array<{
    __typename: "Step";
    id: string;
    company: string;
    activity?: {
      __typename: "Action";
      id: string;
      company: string;
      status?: boolean | null;
      description?: string | null;
      notes?: string | null;
      duration?: number | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    createdAt: string;
    updatedAt: string;
    checkListStepsId?: string | null;
    stepActivityId?: string | null;
  } | null>;
  nextToken?: string | null;
};

export type GetCheckListQuery = {
  __typename: "CheckList";
  id: string;
  company: string;
  owner?: {
    __typename: "Contact";
    id: string;
    company: string;
    name?: string | null;
    email?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  steps?: {
    __typename: "ModelStepConnection";
    items: Array<{
      __typename: "Step";
      id: string;
      company: string;
      createdAt: string;
      updatedAt: string;
      checkListStepsId?: string | null;
      stepActivityId?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
  start?: string | null;
  end?: string | null;
  createdAt: string;
  updatedAt: string;
  workflowStepsId?: string | null;
  checkListOwnerId?: string | null;
};

export type ListCheckListsQuery = {
  __typename: "ModelCheckListConnection";
  items: Array<{
    __typename: "CheckList";
    id: string;
    company: string;
    owner?: {
      __typename: "Contact";
      id: string;
      company: string;
      name?: string | null;
      email?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    steps?: {
      __typename: "ModelStepConnection";
      nextToken?: string | null;
    } | null;
    start?: string | null;
    end?: string | null;
    createdAt: string;
    updatedAt: string;
    workflowStepsId?: string | null;
    checkListOwnerId?: string | null;
  } | null>;
  nextToken?: string | null;
};

export type GetWorkflowQuery = {
  __typename: "Workflow";
  id: string;
  company: string;
  owner?: {
    __typename: "Contact";
    id: string;
    company: string;
    name?: string | null;
    email?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  steps?: {
    __typename: "ModelCheckListConnection";
    items: Array<{
      __typename: "CheckList";
      id: string;
      company: string;
      start?: string | null;
      end?: string | null;
      createdAt: string;
      updatedAt: string;
      workflowStepsId?: string | null;
      checkListOwnerId?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
  start?: string | null;
  end?: string | null;
  createdAt: string;
  updatedAt: string;
  workflowOwnerId?: string | null;
};

export type ListWorkflowsQuery = {
  __typename: "ModelWorkflowConnection";
  items: Array<{
    __typename: "Workflow";
    id: string;
    company: string;
    owner?: {
      __typename: "Contact";
      id: string;
      company: string;
      name?: string | null;
      email?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    steps?: {
      __typename: "ModelCheckListConnection";
      nextToken?: string | null;
    } | null;
    start?: string | null;
    end?: string | null;
    createdAt: string;
    updatedAt: string;
    workflowOwnerId?: string | null;
  } | null>;
  nextToken?: string | null;
};

export type OnCreateEventSubscription = {
  __typename: "Event";
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

export type OnUpdateEventSubscription = {
  __typename: "Event";
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

export type OnDeleteEventSubscription = {
  __typename: "Event";
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
  company: string;
  name?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateVesselSubscription = {
  __typename: "Vessel";
  id: string;
  company: string;
  name?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteVesselSubscription = {
  __typename: "Vessel";
  id: string;
  company: string;
  name?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateContactSubscription = {
  __typename: "Contact";
  id: string;
  company: string;
  name?: string | null;
  email?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateContactSubscription = {
  __typename: "Contact";
  id: string;
  company: string;
  name?: string | null;
  email?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteContactSubscription = {
  __typename: "Contact";
  id: string;
  company: string;
  name?: string | null;
  email?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateActionSubscription = {
  __typename: "Action";
  id: string;
  company: string;
  status?: boolean | null;
  description?: string | null;
  notes?: string | null;
  duration?: number | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateActionSubscription = {
  __typename: "Action";
  id: string;
  company: string;
  status?: boolean | null;
  description?: string | null;
  notes?: string | null;
  duration?: number | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteActionSubscription = {
  __typename: "Action";
  id: string;
  company: string;
  status?: boolean | null;
  description?: string | null;
  notes?: string | null;
  duration?: number | null;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateStepSubscription = {
  __typename: "Step";
  id: string;
  company: string;
  activity?: {
    __typename: "Action";
    id: string;
    company: string;
    status?: boolean | null;
    description?: string | null;
    notes?: string | null;
    duration?: number | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
  checkListStepsId?: string | null;
  stepActivityId?: string | null;
};

export type OnUpdateStepSubscription = {
  __typename: "Step";
  id: string;
  company: string;
  activity?: {
    __typename: "Action";
    id: string;
    company: string;
    status?: boolean | null;
    description?: string | null;
    notes?: string | null;
    duration?: number | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
  checkListStepsId?: string | null;
  stepActivityId?: string | null;
};

export type OnDeleteStepSubscription = {
  __typename: "Step";
  id: string;
  company: string;
  activity?: {
    __typename: "Action";
    id: string;
    company: string;
    status?: boolean | null;
    description?: string | null;
    notes?: string | null;
    duration?: number | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
  checkListStepsId?: string | null;
  stepActivityId?: string | null;
};

export type OnCreateCheckListSubscription = {
  __typename: "CheckList";
  id: string;
  company: string;
  owner?: {
    __typename: "Contact";
    id: string;
    company: string;
    name?: string | null;
    email?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  steps?: {
    __typename: "ModelStepConnection";
    items: Array<{
      __typename: "Step";
      id: string;
      company: string;
      createdAt: string;
      updatedAt: string;
      checkListStepsId?: string | null;
      stepActivityId?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
  start?: string | null;
  end?: string | null;
  createdAt: string;
  updatedAt: string;
  workflowStepsId?: string | null;
  checkListOwnerId?: string | null;
};

export type OnUpdateCheckListSubscription = {
  __typename: "CheckList";
  id: string;
  company: string;
  owner?: {
    __typename: "Contact";
    id: string;
    company: string;
    name?: string | null;
    email?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  steps?: {
    __typename: "ModelStepConnection";
    items: Array<{
      __typename: "Step";
      id: string;
      company: string;
      createdAt: string;
      updatedAt: string;
      checkListStepsId?: string | null;
      stepActivityId?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
  start?: string | null;
  end?: string | null;
  createdAt: string;
  updatedAt: string;
  workflowStepsId?: string | null;
  checkListOwnerId?: string | null;
};

export type OnDeleteCheckListSubscription = {
  __typename: "CheckList";
  id: string;
  company: string;
  owner?: {
    __typename: "Contact";
    id: string;
    company: string;
    name?: string | null;
    email?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  steps?: {
    __typename: "ModelStepConnection";
    items: Array<{
      __typename: "Step";
      id: string;
      company: string;
      createdAt: string;
      updatedAt: string;
      checkListStepsId?: string | null;
      stepActivityId?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
  start?: string | null;
  end?: string | null;
  createdAt: string;
  updatedAt: string;
  workflowStepsId?: string | null;
  checkListOwnerId?: string | null;
};

export type OnCreateWorkflowSubscription = {
  __typename: "Workflow";
  id: string;
  company: string;
  owner?: {
    __typename: "Contact";
    id: string;
    company: string;
    name?: string | null;
    email?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  steps?: {
    __typename: "ModelCheckListConnection";
    items: Array<{
      __typename: "CheckList";
      id: string;
      company: string;
      start?: string | null;
      end?: string | null;
      createdAt: string;
      updatedAt: string;
      workflowStepsId?: string | null;
      checkListOwnerId?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
  start?: string | null;
  end?: string | null;
  createdAt: string;
  updatedAt: string;
  workflowOwnerId?: string | null;
};

export type OnUpdateWorkflowSubscription = {
  __typename: "Workflow";
  id: string;
  company: string;
  owner?: {
    __typename: "Contact";
    id: string;
    company: string;
    name?: string | null;
    email?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  steps?: {
    __typename: "ModelCheckListConnection";
    items: Array<{
      __typename: "CheckList";
      id: string;
      company: string;
      start?: string | null;
      end?: string | null;
      createdAt: string;
      updatedAt: string;
      workflowStepsId?: string | null;
      checkListOwnerId?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
  start?: string | null;
  end?: string | null;
  createdAt: string;
  updatedAt: string;
  workflowOwnerId?: string | null;
};

export type OnDeleteWorkflowSubscription = {
  __typename: "Workflow";
  id: string;
  company: string;
  owner?: {
    __typename: "Contact";
    id: string;
    company: string;
    name?: string | null;
    email?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  steps?: {
    __typename: "ModelCheckListConnection";
    items: Array<{
      __typename: "CheckList";
      id: string;
      company: string;
      start?: string | null;
      end?: string | null;
      createdAt: string;
      updatedAt: string;
      workflowStepsId?: string | null;
      checkListOwnerId?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
  start?: string | null;
  end?: string | null;
  createdAt: string;
  updatedAt: string;
  workflowOwnerId?: string | null;
};

@Injectable({
  providedIn: "root"
})
export class APIService {
  async CreateEvent(
    input: CreateEventInput,
    condition?: ModelEventConditionInput
  ): Promise<CreateEventMutation> {
    const statement = `mutation CreateEvent($input: CreateEventInput!, $condition: ModelEventConditionInput) {
        createEvent(input: $input, condition: $condition) {
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
    return <CreateEventMutation>response.data.createEvent;
  }
  async UpdateEvent(
    input: UpdateEventInput,
    condition?: ModelEventConditionInput
  ): Promise<UpdateEventMutation> {
    const statement = `mutation UpdateEvent($input: UpdateEventInput!, $condition: ModelEventConditionInput) {
        updateEvent(input: $input, condition: $condition) {
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
    return <UpdateEventMutation>response.data.updateEvent;
  }
  async DeleteEvent(
    input: DeleteEventInput,
    condition?: ModelEventConditionInput
  ): Promise<DeleteEventMutation> {
    const statement = `mutation DeleteEvent($input: DeleteEventInput!, $condition: ModelEventConditionInput) {
        deleteEvent(input: $input, condition: $condition) {
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
    return <DeleteEventMutation>response.data.deleteEvent;
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
    return <DeleteVesselMutation>response.data.deleteVessel;
  }
  async CreateContact(
    input: CreateContactInput,
    condition?: ModelContactConditionInput
  ): Promise<CreateContactMutation> {
    const statement = `mutation CreateContact($input: CreateContactInput!, $condition: ModelContactConditionInput) {
        createContact(input: $input, condition: $condition) {
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
    return <CreateContactMutation>response.data.createContact;
  }
  async UpdateContact(
    input: UpdateContactInput,
    condition?: ModelContactConditionInput
  ): Promise<UpdateContactMutation> {
    const statement = `mutation UpdateContact($input: UpdateContactInput!, $condition: ModelContactConditionInput) {
        updateContact(input: $input, condition: $condition) {
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
    return <UpdateContactMutation>response.data.updateContact;
  }
  async DeleteContact(
    input: DeleteContactInput,
    condition?: ModelContactConditionInput
  ): Promise<DeleteContactMutation> {
    const statement = `mutation DeleteContact($input: DeleteContactInput!, $condition: ModelContactConditionInput) {
        deleteContact(input: $input, condition: $condition) {
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
    return <DeleteContactMutation>response.data.deleteContact;
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
          status
          description
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
          status
          description
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
          status
          description
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
  async CreateStep(
    input: CreateStepInput,
    condition?: ModelStepConditionInput
  ): Promise<CreateStepMutation> {
    const statement = `mutation CreateStep($input: CreateStepInput!, $condition: ModelStepConditionInput) {
        createStep(input: $input, condition: $condition) {
          __typename
          id
          company
          activity {
            __typename
            id
            company
            status
            description
            notes
            duration
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
          checkListStepsId
          stepActivityId
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
    return <CreateStepMutation>response.data.createStep;
  }
  async UpdateStep(
    input: UpdateStepInput,
    condition?: ModelStepConditionInput
  ): Promise<UpdateStepMutation> {
    const statement = `mutation UpdateStep($input: UpdateStepInput!, $condition: ModelStepConditionInput) {
        updateStep(input: $input, condition: $condition) {
          __typename
          id
          company
          activity {
            __typename
            id
            company
            status
            description
            notes
            duration
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
          checkListStepsId
          stepActivityId
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
    return <UpdateStepMutation>response.data.updateStep;
  }
  async DeleteStep(
    input: DeleteStepInput,
    condition?: ModelStepConditionInput
  ): Promise<DeleteStepMutation> {
    const statement = `mutation DeleteStep($input: DeleteStepInput!, $condition: ModelStepConditionInput) {
        deleteStep(input: $input, condition: $condition) {
          __typename
          id
          company
          activity {
            __typename
            id
            company
            status
            description
            notes
            duration
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
          checkListStepsId
          stepActivityId
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
    return <DeleteStepMutation>response.data.deleteStep;
  }
  async CreateCheckList(
    input: CreateCheckListInput,
    condition?: ModelCheckListConditionInput
  ): Promise<CreateCheckListMutation> {
    const statement = `mutation CreateCheckList($input: CreateCheckListInput!, $condition: ModelCheckListConditionInput) {
        createCheckList(input: $input, condition: $condition) {
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
            items {
              __typename
              id
              company
              createdAt
              updatedAt
              checkListStepsId
              stepActivityId
            }
            nextToken
          }
          start
          end
          createdAt
          updatedAt
          workflowStepsId
          checkListOwnerId
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
    return <CreateCheckListMutation>response.data.createCheckList;
  }
  async UpdateCheckList(
    input: UpdateCheckListInput,
    condition?: ModelCheckListConditionInput
  ): Promise<UpdateCheckListMutation> {
    const statement = `mutation UpdateCheckList($input: UpdateCheckListInput!, $condition: ModelCheckListConditionInput) {
        updateCheckList(input: $input, condition: $condition) {
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
            items {
              __typename
              id
              company
              createdAt
              updatedAt
              checkListStepsId
              stepActivityId
            }
            nextToken
          }
          start
          end
          createdAt
          updatedAt
          workflowStepsId
          checkListOwnerId
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
    return <UpdateCheckListMutation>response.data.updateCheckList;
  }
  async DeleteCheckList(
    input: DeleteCheckListInput,
    condition?: ModelCheckListConditionInput
  ): Promise<DeleteCheckListMutation> {
    const statement = `mutation DeleteCheckList($input: DeleteCheckListInput!, $condition: ModelCheckListConditionInput) {
        deleteCheckList(input: $input, condition: $condition) {
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
            items {
              __typename
              id
              company
              createdAt
              updatedAt
              checkListStepsId
              stepActivityId
            }
            nextToken
          }
          start
          end
          createdAt
          updatedAt
          workflowStepsId
          checkListOwnerId
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
    return <DeleteCheckListMutation>response.data.deleteCheckList;
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
            items {
              __typename
              id
              company
              start
              end
              createdAt
              updatedAt
              workflowStepsId
              checkListOwnerId
            }
            nextToken
          }
          start
          end
          createdAt
          updatedAt
          workflowOwnerId
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
            items {
              __typename
              id
              company
              start
              end
              createdAt
              updatedAt
              workflowStepsId
              checkListOwnerId
            }
            nextToken
          }
          start
          end
          createdAt
          updatedAt
          workflowOwnerId
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
            items {
              __typename
              id
              company
              start
              end
              createdAt
              updatedAt
              workflowStepsId
              checkListOwnerId
            }
            nextToken
          }
          start
          end
          createdAt
          updatedAt
          workflowOwnerId
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
  async GetEvent(id: string): Promise<GetEventQuery> {
    const statement = `query GetEvent($id: ID!) {
        getEvent(id: $id) {
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
    return <GetEventQuery>response.data.getEvent;
  }
  async ListEvents(
    filter?: ModelEventFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListEventsQuery> {
    const statement = `query ListEvents($filter: ModelEventFilterInput, $limit: Int, $nextToken: String) {
        listEvents(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
    return <ListEventsQuery>response.data.listEvents;
  }
  async GetVessel(id: string): Promise<GetVesselQuery> {
    const statement = `query GetVessel($id: ID!) {
        getVessel(id: $id) {
          __typename
          id
          company
          name
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
    return <ListVesselsQuery>response.data.listVessels;
  }
  async GetContact(id: string): Promise<GetContactQuery> {
    const statement = `query GetContact($id: ID!) {
        getContact(id: $id) {
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
    return <GetContactQuery>response.data.getContact;
  }
  async ListContacts(
    filter?: ModelContactFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListContactsQuery> {
    const statement = `query ListContacts($filter: ModelContactFilterInput, $limit: Int, $nextToken: String) {
        listContacts(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
    return <ListContactsQuery>response.data.listContacts;
  }
  async GetAction(id: string): Promise<GetActionQuery> {
    const statement = `query GetAction($id: ID!) {
        getAction(id: $id) {
          __typename
          id
          company
          status
          description
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
            status
            description
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
  async GetStep(id: string): Promise<GetStepQuery> {
    const statement = `query GetStep($id: ID!) {
        getStep(id: $id) {
          __typename
          id
          company
          activity {
            __typename
            id
            company
            status
            description
            notes
            duration
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
          checkListStepsId
          stepActivityId
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetStepQuery>response.data.getStep;
  }
  async ListSteps(
    filter?: ModelStepFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListStepsQuery> {
    const statement = `query ListSteps($filter: ModelStepFilterInput, $limit: Int, $nextToken: String) {
        listSteps(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            company
            activity {
              __typename
              id
              company
              status
              description
              notes
              duration
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
            checkListStepsId
            stepActivityId
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
    return <ListStepsQuery>response.data.listSteps;
  }
  async GetCheckList(id: string): Promise<GetCheckListQuery> {
    const statement = `query GetCheckList($id: ID!) {
        getCheckList(id: $id) {
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
            items {
              __typename
              id
              company
              createdAt
              updatedAt
              checkListStepsId
              stepActivityId
            }
            nextToken
          }
          start
          end
          createdAt
          updatedAt
          workflowStepsId
          checkListOwnerId
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetCheckListQuery>response.data.getCheckList;
  }
  async ListCheckLists(
    filter?: ModelCheckListFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListCheckListsQuery> {
    const statement = `query ListCheckLists($filter: ModelCheckListFilterInput, $limit: Int, $nextToken: String) {
        listCheckLists(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
              nextToken
            }
            start
            end
            createdAt
            updatedAt
            workflowStepsId
            checkListOwnerId
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
    return <ListCheckListsQuery>response.data.listCheckLists;
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
            items {
              __typename
              id
              company
              start
              end
              createdAt
              updatedAt
              workflowStepsId
              checkListOwnerId
            }
            nextToken
          }
          start
          end
          createdAt
          updatedAt
          workflowOwnerId
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
              nextToken
            }
            start
            end
            createdAt
            updatedAt
            workflowOwnerId
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
  OnCreateEventListener(
    filter?: ModelSubscriptionEventFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateEvent">>
  > {
    const statement = `subscription OnCreateEvent($filter: ModelSubscriptionEventFilterInput) {
        onCreateEvent(filter: $filter) {
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
      SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateEvent">>
    >;
  }

  OnUpdateEventListener(
    filter?: ModelSubscriptionEventFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateEvent">>
  > {
    const statement = `subscription OnUpdateEvent($filter: ModelSubscriptionEventFilterInput) {
        onUpdateEvent(filter: $filter) {
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
      SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateEvent">>
    >;
  }

  OnDeleteEventListener(
    filter?: ModelSubscriptionEventFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteEvent">>
  > {
    const statement = `subscription OnDeleteEvent($filter: ModelSubscriptionEventFilterInput) {
        onDeleteEvent(filter: $filter) {
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
      SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteEvent">>
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
      SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteVessel">>
    >;
  }

  OnCreateContactListener(
    filter?: ModelSubscriptionContactFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateContact">>
  > {
    const statement = `subscription OnCreateContact($filter: ModelSubscriptionContactFilterInput) {
        onCreateContact(filter: $filter) {
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
      SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateContact">>
    >;
  }

  OnUpdateContactListener(
    filter?: ModelSubscriptionContactFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateContact">>
  > {
    const statement = `subscription OnUpdateContact($filter: ModelSubscriptionContactFilterInput) {
        onUpdateContact(filter: $filter) {
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
      SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateContact">>
    >;
  }

  OnDeleteContactListener(
    filter?: ModelSubscriptionContactFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteContact">>
  > {
    const statement = `subscription OnDeleteContact($filter: ModelSubscriptionContactFilterInput) {
        onDeleteContact(filter: $filter) {
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
      SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteContact">>
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
          status
          description
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
          status
          description
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
          status
          description
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

  OnCreateStepListener(
    filter?: ModelSubscriptionStepFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateStep">>
  > {
    const statement = `subscription OnCreateStep($filter: ModelSubscriptionStepFilterInput) {
        onCreateStep(filter: $filter) {
          __typename
          id
          company
          activity {
            __typename
            id
            company
            status
            description
            notes
            duration
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
          checkListStepsId
          stepActivityId
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateStep">>
    >;
  }

  OnUpdateStepListener(
    filter?: ModelSubscriptionStepFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateStep">>
  > {
    const statement = `subscription OnUpdateStep($filter: ModelSubscriptionStepFilterInput) {
        onUpdateStep(filter: $filter) {
          __typename
          id
          company
          activity {
            __typename
            id
            company
            status
            description
            notes
            duration
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
          checkListStepsId
          stepActivityId
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateStep">>
    >;
  }

  OnDeleteStepListener(
    filter?: ModelSubscriptionStepFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteStep">>
  > {
    const statement = `subscription OnDeleteStep($filter: ModelSubscriptionStepFilterInput) {
        onDeleteStep(filter: $filter) {
          __typename
          id
          company
          activity {
            __typename
            id
            company
            status
            description
            notes
            duration
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
          checkListStepsId
          stepActivityId
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteStep">>
    >;
  }

  OnCreateCheckListListener(
    filter?: ModelSubscriptionCheckListFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateCheckList">>
  > {
    const statement = `subscription OnCreateCheckList($filter: ModelSubscriptionCheckListFilterInput) {
        onCreateCheckList(filter: $filter) {
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
            items {
              __typename
              id
              company
              createdAt
              updatedAt
              checkListStepsId
              stepActivityId
            }
            nextToken
          }
          start
          end
          createdAt
          updatedAt
          workflowStepsId
          checkListOwnerId
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateCheckList">>
    >;
  }

  OnUpdateCheckListListener(
    filter?: ModelSubscriptionCheckListFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateCheckList">>
  > {
    const statement = `subscription OnUpdateCheckList($filter: ModelSubscriptionCheckListFilterInput) {
        onUpdateCheckList(filter: $filter) {
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
            items {
              __typename
              id
              company
              createdAt
              updatedAt
              checkListStepsId
              stepActivityId
            }
            nextToken
          }
          start
          end
          createdAt
          updatedAt
          workflowStepsId
          checkListOwnerId
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateCheckList">>
    >;
  }

  OnDeleteCheckListListener(
    filter?: ModelSubscriptionCheckListFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteCheckList">>
  > {
    const statement = `subscription OnDeleteCheckList($filter: ModelSubscriptionCheckListFilterInput) {
        onDeleteCheckList(filter: $filter) {
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
            items {
              __typename
              id
              company
              createdAt
              updatedAt
              checkListStepsId
              stepActivityId
            }
            nextToken
          }
          start
          end
          createdAt
          updatedAt
          workflowStepsId
          checkListOwnerId
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteCheckList">>
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
            items {
              __typename
              id
              company
              start
              end
              createdAt
              updatedAt
              workflowStepsId
              checkListOwnerId
            }
            nextToken
          }
          start
          end
          createdAt
          updatedAt
          workflowOwnerId
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
            items {
              __typename
              id
              company
              start
              end
              createdAt
              updatedAt
              workflowStepsId
              checkListOwnerId
            }
            nextToken
          }
          start
          end
          createdAt
          updatedAt
          workflowOwnerId
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
            items {
              __typename
              id
              company
              start
              end
              createdAt
              updatedAt
              workflowStepsId
              checkListOwnerId
            }
            nextToken
          }
          start
          end
          createdAt
          updatedAt
          workflowOwnerId
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
