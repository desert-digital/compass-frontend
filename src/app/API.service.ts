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
  onCreateActionModel: OnCreateActionModelSubscription;
  onUpdateActionModel: OnUpdateActionModelSubscription;
  onDeleteActionModel: OnDeleteActionModelSubscription;
  onCreateAction: OnCreateActionSubscription;
  onUpdateAction: OnUpdateActionSubscription;
  onDeleteAction: OnDeleteActionSubscription;
  onCreateChecklistModel: OnCreateChecklistModelSubscription;
  onUpdateChecklistModel: OnUpdateChecklistModelSubscription;
  onDeleteChecklistModel: OnDeleteChecklistModelSubscription;
  onCreateChecklist: OnCreateChecklistSubscription;
  onUpdateChecklist: OnUpdateChecklistSubscription;
  onDeleteChecklist: OnDeleteChecklistSubscription;
  onCreateWorkflowModel: OnCreateWorkflowModelSubscription;
  onUpdateWorkflowModel: OnUpdateWorkflowModelSubscription;
  onDeleteWorkflowModel: OnDeleteWorkflowModelSubscription;
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
  defaultWorkflow?: WorkflowModel | null;
  createdAt: string;
  updatedAt: string;
  vesselDefaultWorkflowId?: string | null;
};

export type WorkflowModel = {
  __typename: "WorkflowModel";
  id: string;
  name?: string | null;
  checklists?: ModelChecklistConnection | null;
  actualStart?: string | null;
  actualEnd?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type ModelChecklistConnection = {
  __typename: "ModelChecklistConnection";
  items: Array<Checklist | null>;
  nextToken?: string | null;
};

export type Checklist = {
  __typename: "Checklist";
  id: string;
  company?: string | null;
  owner?: Staff | null;
  model?: ChecklistModel | null;
  start?: string | null;
  end?: string | null;
  createdAt: string;
  updatedAt: string;
  workflowModelChecklistsId?: string | null;
  checklistOwnerId?: string | null;
  checklistModelId?: string | null;
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

export type ChecklistModel = {
  __typename: "ChecklistModel";
  id: string;
  company?: string | null;
  name?: string | null;
  notes?: string | null;
  steps?: ModelActionConnection | null;
  createdAt: string;
  updatedAt: string;
};

export type ModelActionConnection = {
  __typename: "ModelActionConnection";
  items: Array<Action | null>;
  nextToken?: string | null;
};

export type Action = {
  __typename: "Action";
  id: string;
  model?: ActionModel | null;
  checklist?: ChecklistModel | null;
  actualStart?: string | null;
  actualEnd?: string | null;
  createdAt: string;
  updatedAt: string;
  checklistModelStepsId?: string | null;
  actionModelId?: string | null;
};

export type ActionModel = {
  __typename: "ActionModel";
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

export type UpdateStaffInput = {
  id: string;
  company?: string | null;
  name?: string | null;
  email?: string | null;
};

export type DeleteStaffInput = {
  id: string;
};

export type CreateActionModelInput = {
  id?: string | null;
  company?: string | null;
  name?: string | null;
  status?: string | null;
  notes?: string | null;
  duration?: number | null;
};

export type ModelActionModelConditionInput = {
  company?: ModelIDInput | null;
  name?: ModelStringInput | null;
  status?: ModelStringInput | null;
  notes?: ModelStringInput | null;
  duration?: ModelIntInput | null;
  and?: Array<ModelActionModelConditionInput | null> | null;
  or?: Array<ModelActionModelConditionInput | null> | null;
  not?: ModelActionModelConditionInput | null;
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

export type UpdateActionModelInput = {
  id: string;
  company?: string | null;
  name?: string | null;
  status?: string | null;
  notes?: string | null;
  duration?: number | null;
};

export type DeleteActionModelInput = {
  id: string;
};

export type CreateActionInput = {
  id?: string | null;
  actualStart?: string | null;
  actualEnd?: string | null;
  checklistModelStepsId?: string | null;
  actionModelId?: string | null;
};

export type ModelActionConditionInput = {
  actualStart?: ModelStringInput | null;
  actualEnd?: ModelStringInput | null;
  and?: Array<ModelActionConditionInput | null> | null;
  or?: Array<ModelActionConditionInput | null> | null;
  not?: ModelActionConditionInput | null;
  checklistModelStepsId?: ModelIDInput | null;
  actionModelId?: ModelIDInput | null;
};

export type UpdateActionInput = {
  id: string;
  actualStart?: string | null;
  actualEnd?: string | null;
  checklistModelStepsId?: string | null;
  actionModelId?: string | null;
};

export type DeleteActionInput = {
  id: string;
};

export type CreateChecklistModelInput = {
  id?: string | null;
  company?: string | null;
  name?: string | null;
  notes?: string | null;
};

export type ModelChecklistModelConditionInput = {
  company?: ModelIDInput | null;
  name?: ModelStringInput | null;
  notes?: ModelStringInput | null;
  and?: Array<ModelChecklistModelConditionInput | null> | null;
  or?: Array<ModelChecklistModelConditionInput | null> | null;
  not?: ModelChecklistModelConditionInput | null;
};

export type UpdateChecklistModelInput = {
  id: string;
  company?: string | null;
  name?: string | null;
  notes?: string | null;
};

export type DeleteChecklistModelInput = {
  id: string;
};

export type CreateChecklistInput = {
  id?: string | null;
  company?: string | null;
  start?: string | null;
  end?: string | null;
  workflowModelChecklistsId?: string | null;
  checklistOwnerId?: string | null;
  checklistModelId?: string | null;
};

export type ModelChecklistConditionInput = {
  company?: ModelIDInput | null;
  start?: ModelStringInput | null;
  end?: ModelStringInput | null;
  and?: Array<ModelChecklistConditionInput | null> | null;
  or?: Array<ModelChecklistConditionInput | null> | null;
  not?: ModelChecklistConditionInput | null;
  workflowModelChecklistsId?: ModelIDInput | null;
  checklistOwnerId?: ModelIDInput | null;
  checklistModelId?: ModelIDInput | null;
};

export type UpdateChecklistInput = {
  id: string;
  company?: string | null;
  start?: string | null;
  end?: string | null;
  workflowModelChecklistsId?: string | null;
  checklistOwnerId?: string | null;
  checklistModelId?: string | null;
};

export type DeleteChecklistInput = {
  id: string;
};

export type CreateWorkflowModelInput = {
  id?: string | null;
  name?: string | null;
  actualStart?: string | null;
  actualEnd?: string | null;
};

export type ModelWorkflowModelConditionInput = {
  name?: ModelStringInput | null;
  actualStart?: ModelStringInput | null;
  actualEnd?: ModelStringInput | null;
  and?: Array<ModelWorkflowModelConditionInput | null> | null;
  or?: Array<ModelWorkflowModelConditionInput | null> | null;
  not?: ModelWorkflowModelConditionInput | null;
};

export type UpdateWorkflowModelInput = {
  id: string;
  name?: string | null;
  actualStart?: string | null;
  actualEnd?: string | null;
};

export type DeleteWorkflowModelInput = {
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
  steps?: WorkflowModel | null;
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

export type ModelActionModelFilterInput = {
  id?: ModelIDInput | null;
  company?: ModelIDInput | null;
  name?: ModelStringInput | null;
  status?: ModelStringInput | null;
  notes?: ModelStringInput | null;
  duration?: ModelIntInput | null;
  and?: Array<ModelActionModelFilterInput | null> | null;
  or?: Array<ModelActionModelFilterInput | null> | null;
  not?: ModelActionModelFilterInput | null;
};

export type ModelActionModelConnection = {
  __typename: "ModelActionModelConnection";
  items: Array<ActionModel | null>;
  nextToken?: string | null;
};

export type ModelActionFilterInput = {
  id?: ModelIDInput | null;
  actualStart?: ModelStringInput | null;
  actualEnd?: ModelStringInput | null;
  and?: Array<ModelActionFilterInput | null> | null;
  or?: Array<ModelActionFilterInput | null> | null;
  not?: ModelActionFilterInput | null;
  checklistModelStepsId?: ModelIDInput | null;
  actionModelId?: ModelIDInput | null;
};

export type ModelChecklistModelFilterInput = {
  id?: ModelIDInput | null;
  company?: ModelIDInput | null;
  name?: ModelStringInput | null;
  notes?: ModelStringInput | null;
  and?: Array<ModelChecklistModelFilterInput | null> | null;
  or?: Array<ModelChecklistModelFilterInput | null> | null;
  not?: ModelChecklistModelFilterInput | null;
};

export type ModelChecklistModelConnection = {
  __typename: "ModelChecklistModelConnection";
  items: Array<ChecklistModel | null>;
  nextToken?: string | null;
};

export type ModelChecklistFilterInput = {
  id?: ModelIDInput | null;
  company?: ModelIDInput | null;
  start?: ModelStringInput | null;
  end?: ModelStringInput | null;
  and?: Array<ModelChecklistFilterInput | null> | null;
  or?: Array<ModelChecklistFilterInput | null> | null;
  not?: ModelChecklistFilterInput | null;
  workflowModelChecklistsId?: ModelIDInput | null;
  checklistOwnerId?: ModelIDInput | null;
  checklistModelId?: ModelIDInput | null;
};

export type ModelWorkflowModelFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  actualStart?: ModelStringInput | null;
  actualEnd?: ModelStringInput | null;
  and?: Array<ModelWorkflowModelFilterInput | null> | null;
  or?: Array<ModelWorkflowModelFilterInput | null> | null;
  not?: ModelWorkflowModelFilterInput | null;
};

export type ModelWorkflowModelConnection = {
  __typename: "ModelWorkflowModelConnection";
  items: Array<WorkflowModel | null>;
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

export type ModelSubscriptionActionModelFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  company?: ModelSubscriptionIDInput | null;
  name?: ModelSubscriptionStringInput | null;
  status?: ModelSubscriptionStringInput | null;
  notes?: ModelSubscriptionStringInput | null;
  duration?: ModelSubscriptionIntInput | null;
  and?: Array<ModelSubscriptionActionModelFilterInput | null> | null;
  or?: Array<ModelSubscriptionActionModelFilterInput | null> | null;
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

export type ModelSubscriptionActionFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  actualStart?: ModelSubscriptionStringInput | null;
  actualEnd?: ModelSubscriptionStringInput | null;
  and?: Array<ModelSubscriptionActionFilterInput | null> | null;
  or?: Array<ModelSubscriptionActionFilterInput | null> | null;
};

export type ModelSubscriptionChecklistModelFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  company?: ModelSubscriptionIDInput | null;
  name?: ModelSubscriptionStringInput | null;
  notes?: ModelSubscriptionStringInput | null;
  and?: Array<ModelSubscriptionChecklistModelFilterInput | null> | null;
  or?: Array<ModelSubscriptionChecklistModelFilterInput | null> | null;
};

export type ModelSubscriptionChecklistFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  company?: ModelSubscriptionIDInput | null;
  start?: ModelSubscriptionStringInput | null;
  end?: ModelSubscriptionStringInput | null;
  and?: Array<ModelSubscriptionChecklistFilterInput | null> | null;
  or?: Array<ModelSubscriptionChecklistFilterInput | null> | null;
};

export type ModelSubscriptionWorkflowModelFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  name?: ModelSubscriptionStringInput | null;
  actualStart?: ModelSubscriptionStringInput | null;
  actualEnd?: ModelSubscriptionStringInput | null;
  and?: Array<ModelSubscriptionWorkflowModelFilterInput | null> | null;
  or?: Array<ModelSubscriptionWorkflowModelFilterInput | null> | null;
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
    __typename: "WorkflowModel";
    id: string;
    name?: string | null;
    checklists?: {
      __typename: "ModelChecklistConnection";
      nextToken?: string | null;
    } | null;
    actualStart?: string | null;
    actualEnd?: string | null;
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
    __typename: "WorkflowModel";
    id: string;
    name?: string | null;
    checklists?: {
      __typename: "ModelChecklistConnection";
      nextToken?: string | null;
    } | null;
    actualStart?: string | null;
    actualEnd?: string | null;
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
    __typename: "WorkflowModel";
    id: string;
    name?: string | null;
    checklists?: {
      __typename: "ModelChecklistConnection";
      nextToken?: string | null;
    } | null;
    actualStart?: string | null;
    actualEnd?: string | null;
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

export type CreateActionModelMutation = {
  __typename: "ActionModel";
  id: string;
  company?: string | null;
  name?: string | null;
  status?: string | null;
  notes?: string | null;
  duration?: number | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateActionModelMutation = {
  __typename: "ActionModel";
  id: string;
  company?: string | null;
  name?: string | null;
  status?: string | null;
  notes?: string | null;
  duration?: number | null;
  createdAt: string;
  updatedAt: string;
};

export type DeleteActionModelMutation = {
  __typename: "ActionModel";
  id: string;
  company?: string | null;
  name?: string | null;
  status?: string | null;
  notes?: string | null;
  duration?: number | null;
  createdAt: string;
  updatedAt: string;
};

export type CreateActionMutation = {
  __typename: "Action";
  id: string;
  model?: {
    __typename: "ActionModel";
    id: string;
    company?: string | null;
    name?: string | null;
    status?: string | null;
    notes?: string | null;
    duration?: number | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  checklist?: {
    __typename: "ChecklistModel";
    id: string;
    company?: string | null;
    name?: string | null;
    notes?: string | null;
    steps?: {
      __typename: "ModelActionConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  actualStart?: string | null;
  actualEnd?: string | null;
  createdAt: string;
  updatedAt: string;
  checklistModelStepsId?: string | null;
  actionModelId?: string | null;
};

export type UpdateActionMutation = {
  __typename: "Action";
  id: string;
  model?: {
    __typename: "ActionModel";
    id: string;
    company?: string | null;
    name?: string | null;
    status?: string | null;
    notes?: string | null;
    duration?: number | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  checklist?: {
    __typename: "ChecklistModel";
    id: string;
    company?: string | null;
    name?: string | null;
    notes?: string | null;
    steps?: {
      __typename: "ModelActionConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  actualStart?: string | null;
  actualEnd?: string | null;
  createdAt: string;
  updatedAt: string;
  checklistModelStepsId?: string | null;
  actionModelId?: string | null;
};

export type DeleteActionMutation = {
  __typename: "Action";
  id: string;
  model?: {
    __typename: "ActionModel";
    id: string;
    company?: string | null;
    name?: string | null;
    status?: string | null;
    notes?: string | null;
    duration?: number | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  checklist?: {
    __typename: "ChecklistModel";
    id: string;
    company?: string | null;
    name?: string | null;
    notes?: string | null;
    steps?: {
      __typename: "ModelActionConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  actualStart?: string | null;
  actualEnd?: string | null;
  createdAt: string;
  updatedAt: string;
  checklistModelStepsId?: string | null;
  actionModelId?: string | null;
};

export type CreateChecklistModelMutation = {
  __typename: "ChecklistModel";
  id: string;
  company?: string | null;
  name?: string | null;
  notes?: string | null;
  steps?: {
    __typename: "ModelActionConnection";
    items: Array<{
      __typename: "Action";
      id: string;
      actualStart?: string | null;
      actualEnd?: string | null;
      createdAt: string;
      updatedAt: string;
      checklistModelStepsId?: string | null;
      actionModelId?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateChecklistModelMutation = {
  __typename: "ChecklistModel";
  id: string;
  company?: string | null;
  name?: string | null;
  notes?: string | null;
  steps?: {
    __typename: "ModelActionConnection";
    items: Array<{
      __typename: "Action";
      id: string;
      actualStart?: string | null;
      actualEnd?: string | null;
      createdAt: string;
      updatedAt: string;
      checklistModelStepsId?: string | null;
      actionModelId?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type DeleteChecklistModelMutation = {
  __typename: "ChecklistModel";
  id: string;
  company?: string | null;
  name?: string | null;
  notes?: string | null;
  steps?: {
    __typename: "ModelActionConnection";
    items: Array<{
      __typename: "Action";
      id: string;
      actualStart?: string | null;
      actualEnd?: string | null;
      createdAt: string;
      updatedAt: string;
      checklistModelStepsId?: string | null;
      actionModelId?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
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
  model?: {
    __typename: "ChecklistModel";
    id: string;
    company?: string | null;
    name?: string | null;
    notes?: string | null;
    steps?: {
      __typename: "ModelActionConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  start?: string | null;
  end?: string | null;
  createdAt: string;
  updatedAt: string;
  workflowModelChecklistsId?: string | null;
  checklistOwnerId?: string | null;
  checklistModelId?: string | null;
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
  model?: {
    __typename: "ChecklistModel";
    id: string;
    company?: string | null;
    name?: string | null;
    notes?: string | null;
    steps?: {
      __typename: "ModelActionConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  start?: string | null;
  end?: string | null;
  createdAt: string;
  updatedAt: string;
  workflowModelChecklistsId?: string | null;
  checklistOwnerId?: string | null;
  checklistModelId?: string | null;
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
  model?: {
    __typename: "ChecklistModel";
    id: string;
    company?: string | null;
    name?: string | null;
    notes?: string | null;
    steps?: {
      __typename: "ModelActionConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  start?: string | null;
  end?: string | null;
  createdAt: string;
  updatedAt: string;
  workflowModelChecklistsId?: string | null;
  checklistOwnerId?: string | null;
  checklistModelId?: string | null;
};

export type CreateWorkflowModelMutation = {
  __typename: "WorkflowModel";
  id: string;
  name?: string | null;
  checklists?: {
    __typename: "ModelChecklistConnection";
    items: Array<{
      __typename: "Checklist";
      id: string;
      company?: string | null;
      start?: string | null;
      end?: string | null;
      createdAt: string;
      updatedAt: string;
      workflowModelChecklistsId?: string | null;
      checklistOwnerId?: string | null;
      checklistModelId?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
  actualStart?: string | null;
  actualEnd?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateWorkflowModelMutation = {
  __typename: "WorkflowModel";
  id: string;
  name?: string | null;
  checklists?: {
    __typename: "ModelChecklistConnection";
    items: Array<{
      __typename: "Checklist";
      id: string;
      company?: string | null;
      start?: string | null;
      end?: string | null;
      createdAt: string;
      updatedAt: string;
      workflowModelChecklistsId?: string | null;
      checklistOwnerId?: string | null;
      checklistModelId?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
  actualStart?: string | null;
  actualEnd?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type DeleteWorkflowModelMutation = {
  __typename: "WorkflowModel";
  id: string;
  name?: string | null;
  checklists?: {
    __typename: "ModelChecklistConnection";
    items: Array<{
      __typename: "Checklist";
      id: string;
      company?: string | null;
      start?: string | null;
      end?: string | null;
      createdAt: string;
      updatedAt: string;
      workflowModelChecklistsId?: string | null;
      checklistOwnerId?: string | null;
      checklistModelId?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
  actualStart?: string | null;
  actualEnd?: string | null;
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
    __typename: "WorkflowModel";
    id: string;
    name?: string | null;
    checklists?: {
      __typename: "ModelChecklistConnection";
      nextToken?: string | null;
    } | null;
    actualStart?: string | null;
    actualEnd?: string | null;
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
    __typename: "WorkflowModel";
    id: string;
    name?: string | null;
    checklists?: {
      __typename: "ModelChecklistConnection";
      nextToken?: string | null;
    } | null;
    actualStart?: string | null;
    actualEnd?: string | null;
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
    __typename: "WorkflowModel";
    id: string;
    name?: string | null;
    checklists?: {
      __typename: "ModelChecklistConnection";
      nextToken?: string | null;
    } | null;
    actualStart?: string | null;
    actualEnd?: string | null;
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
    __typename: "WorkflowModel";
    id: string;
    name?: string | null;
    checklists?: {
      __typename: "ModelChecklistConnection";
      nextToken?: string | null;
    } | null;
    actualStart?: string | null;
    actualEnd?: string | null;
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
      __typename: "WorkflowModel";
      id: string;
      name?: string | null;
      actualStart?: string | null;
      actualEnd?: string | null;
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

export type GetActionModelQuery = {
  __typename: "ActionModel";
  id: string;
  company?: string | null;
  name?: string | null;
  status?: string | null;
  notes?: string | null;
  duration?: number | null;
  createdAt: string;
  updatedAt: string;
};

export type ListActionModelsQuery = {
  __typename: "ModelActionModelConnection";
  items: Array<{
    __typename: "ActionModel";
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

export type GetActionQuery = {
  __typename: "Action";
  id: string;
  model?: {
    __typename: "ActionModel";
    id: string;
    company?: string | null;
    name?: string | null;
    status?: string | null;
    notes?: string | null;
    duration?: number | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  checklist?: {
    __typename: "ChecklistModel";
    id: string;
    company?: string | null;
    name?: string | null;
    notes?: string | null;
    steps?: {
      __typename: "ModelActionConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  actualStart?: string | null;
  actualEnd?: string | null;
  createdAt: string;
  updatedAt: string;
  checklistModelStepsId?: string | null;
  actionModelId?: string | null;
};

export type ListActionsQuery = {
  __typename: "ModelActionConnection";
  items: Array<{
    __typename: "Action";
    id: string;
    model?: {
      __typename: "ActionModel";
      id: string;
      company?: string | null;
      name?: string | null;
      status?: string | null;
      notes?: string | null;
      duration?: number | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    checklist?: {
      __typename: "ChecklistModel";
      id: string;
      company?: string | null;
      name?: string | null;
      notes?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    actualStart?: string | null;
    actualEnd?: string | null;
    createdAt: string;
    updatedAt: string;
    checklistModelStepsId?: string | null;
    actionModelId?: string | null;
  } | null>;
  nextToken?: string | null;
};

export type GetChecklistModelQuery = {
  __typename: "ChecklistModel";
  id: string;
  company?: string | null;
  name?: string | null;
  notes?: string | null;
  steps?: {
    __typename: "ModelActionConnection";
    items: Array<{
      __typename: "Action";
      id: string;
      actualStart?: string | null;
      actualEnd?: string | null;
      createdAt: string;
      updatedAt: string;
      checklistModelStepsId?: string | null;
      actionModelId?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type ListChecklistModelsQuery = {
  __typename: "ModelChecklistModelConnection";
  items: Array<{
    __typename: "ChecklistModel";
    id: string;
    company?: string | null;
    name?: string | null;
    notes?: string | null;
    steps?: {
      __typename: "ModelActionConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
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
  model?: {
    __typename: "ChecklistModel";
    id: string;
    company?: string | null;
    name?: string | null;
    notes?: string | null;
    steps?: {
      __typename: "ModelActionConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  start?: string | null;
  end?: string | null;
  createdAt: string;
  updatedAt: string;
  workflowModelChecklistsId?: string | null;
  checklistOwnerId?: string | null;
  checklistModelId?: string | null;
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
    model?: {
      __typename: "ChecklistModel";
      id: string;
      company?: string | null;
      name?: string | null;
      notes?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    start?: string | null;
    end?: string | null;
    createdAt: string;
    updatedAt: string;
    workflowModelChecklistsId?: string | null;
    checklistOwnerId?: string | null;
    checklistModelId?: string | null;
  } | null>;
  nextToken?: string | null;
};

export type GetWorkflowModelQuery = {
  __typename: "WorkflowModel";
  id: string;
  name?: string | null;
  checklists?: {
    __typename: "ModelChecklistConnection";
    items: Array<{
      __typename: "Checklist";
      id: string;
      company?: string | null;
      start?: string | null;
      end?: string | null;
      createdAt: string;
      updatedAt: string;
      workflowModelChecklistsId?: string | null;
      checklistOwnerId?: string | null;
      checklistModelId?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
  actualStart?: string | null;
  actualEnd?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type ListWorkflowModelsQuery = {
  __typename: "ModelWorkflowModelConnection";
  items: Array<{
    __typename: "WorkflowModel";
    id: string;
    name?: string | null;
    checklists?: {
      __typename: "ModelChecklistConnection";
      nextToken?: string | null;
    } | null;
    actualStart?: string | null;
    actualEnd?: string | null;
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
    __typename: "WorkflowModel";
    id: string;
    name?: string | null;
    checklists?: {
      __typename: "ModelChecklistConnection";
      nextToken?: string | null;
    } | null;
    actualStart?: string | null;
    actualEnd?: string | null;
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
      __typename: "WorkflowModel";
      id: string;
      name?: string | null;
      actualStart?: string | null;
      actualEnd?: string | null;
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
    __typename: "WorkflowModel";
    id: string;
    name?: string | null;
    checklists?: {
      __typename: "ModelChecklistConnection";
      nextToken?: string | null;
    } | null;
    actualStart?: string | null;
    actualEnd?: string | null;
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
    __typename: "WorkflowModel";
    id: string;
    name?: string | null;
    checklists?: {
      __typename: "ModelChecklistConnection";
      nextToken?: string | null;
    } | null;
    actualStart?: string | null;
    actualEnd?: string | null;
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
    __typename: "WorkflowModel";
    id: string;
    name?: string | null;
    checklists?: {
      __typename: "ModelChecklistConnection";
      nextToken?: string | null;
    } | null;
    actualStart?: string | null;
    actualEnd?: string | null;
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

export type OnCreateActionModelSubscription = {
  __typename: "ActionModel";
  id: string;
  company?: string | null;
  name?: string | null;
  status?: string | null;
  notes?: string | null;
  duration?: number | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateActionModelSubscription = {
  __typename: "ActionModel";
  id: string;
  company?: string | null;
  name?: string | null;
  status?: string | null;
  notes?: string | null;
  duration?: number | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteActionModelSubscription = {
  __typename: "ActionModel";
  id: string;
  company?: string | null;
  name?: string | null;
  status?: string | null;
  notes?: string | null;
  duration?: number | null;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateActionSubscription = {
  __typename: "Action";
  id: string;
  model?: {
    __typename: "ActionModel";
    id: string;
    company?: string | null;
    name?: string | null;
    status?: string | null;
    notes?: string | null;
    duration?: number | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  checklist?: {
    __typename: "ChecklistModel";
    id: string;
    company?: string | null;
    name?: string | null;
    notes?: string | null;
    steps?: {
      __typename: "ModelActionConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  actualStart?: string | null;
  actualEnd?: string | null;
  createdAt: string;
  updatedAt: string;
  checklistModelStepsId?: string | null;
  actionModelId?: string | null;
};

export type OnUpdateActionSubscription = {
  __typename: "Action";
  id: string;
  model?: {
    __typename: "ActionModel";
    id: string;
    company?: string | null;
    name?: string | null;
    status?: string | null;
    notes?: string | null;
    duration?: number | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  checklist?: {
    __typename: "ChecklistModel";
    id: string;
    company?: string | null;
    name?: string | null;
    notes?: string | null;
    steps?: {
      __typename: "ModelActionConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  actualStart?: string | null;
  actualEnd?: string | null;
  createdAt: string;
  updatedAt: string;
  checklistModelStepsId?: string | null;
  actionModelId?: string | null;
};

export type OnDeleteActionSubscription = {
  __typename: "Action";
  id: string;
  model?: {
    __typename: "ActionModel";
    id: string;
    company?: string | null;
    name?: string | null;
    status?: string | null;
    notes?: string | null;
    duration?: number | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  checklist?: {
    __typename: "ChecklistModel";
    id: string;
    company?: string | null;
    name?: string | null;
    notes?: string | null;
    steps?: {
      __typename: "ModelActionConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  actualStart?: string | null;
  actualEnd?: string | null;
  createdAt: string;
  updatedAt: string;
  checklistModelStepsId?: string | null;
  actionModelId?: string | null;
};

export type OnCreateChecklistModelSubscription = {
  __typename: "ChecklistModel";
  id: string;
  company?: string | null;
  name?: string | null;
  notes?: string | null;
  steps?: {
    __typename: "ModelActionConnection";
    items: Array<{
      __typename: "Action";
      id: string;
      actualStart?: string | null;
      actualEnd?: string | null;
      createdAt: string;
      updatedAt: string;
      checklistModelStepsId?: string | null;
      actionModelId?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateChecklistModelSubscription = {
  __typename: "ChecklistModel";
  id: string;
  company?: string | null;
  name?: string | null;
  notes?: string | null;
  steps?: {
    __typename: "ModelActionConnection";
    items: Array<{
      __typename: "Action";
      id: string;
      actualStart?: string | null;
      actualEnd?: string | null;
      createdAt: string;
      updatedAt: string;
      checklistModelStepsId?: string | null;
      actionModelId?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteChecklistModelSubscription = {
  __typename: "ChecklistModel";
  id: string;
  company?: string | null;
  name?: string | null;
  notes?: string | null;
  steps?: {
    __typename: "ModelActionConnection";
    items: Array<{
      __typename: "Action";
      id: string;
      actualStart?: string | null;
      actualEnd?: string | null;
      createdAt: string;
      updatedAt: string;
      checklistModelStepsId?: string | null;
      actionModelId?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
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
  model?: {
    __typename: "ChecklistModel";
    id: string;
    company?: string | null;
    name?: string | null;
    notes?: string | null;
    steps?: {
      __typename: "ModelActionConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  start?: string | null;
  end?: string | null;
  createdAt: string;
  updatedAt: string;
  workflowModelChecklistsId?: string | null;
  checklistOwnerId?: string | null;
  checklistModelId?: string | null;
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
  model?: {
    __typename: "ChecklistModel";
    id: string;
    company?: string | null;
    name?: string | null;
    notes?: string | null;
    steps?: {
      __typename: "ModelActionConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  start?: string | null;
  end?: string | null;
  createdAt: string;
  updatedAt: string;
  workflowModelChecklistsId?: string | null;
  checklistOwnerId?: string | null;
  checklistModelId?: string | null;
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
  model?: {
    __typename: "ChecklistModel";
    id: string;
    company?: string | null;
    name?: string | null;
    notes?: string | null;
    steps?: {
      __typename: "ModelActionConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  start?: string | null;
  end?: string | null;
  createdAt: string;
  updatedAt: string;
  workflowModelChecklistsId?: string | null;
  checklistOwnerId?: string | null;
  checklistModelId?: string | null;
};

export type OnCreateWorkflowModelSubscription = {
  __typename: "WorkflowModel";
  id: string;
  name?: string | null;
  checklists?: {
    __typename: "ModelChecklistConnection";
    items: Array<{
      __typename: "Checklist";
      id: string;
      company?: string | null;
      start?: string | null;
      end?: string | null;
      createdAt: string;
      updatedAt: string;
      workflowModelChecklistsId?: string | null;
      checklistOwnerId?: string | null;
      checklistModelId?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
  actualStart?: string | null;
  actualEnd?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateWorkflowModelSubscription = {
  __typename: "WorkflowModel";
  id: string;
  name?: string | null;
  checklists?: {
    __typename: "ModelChecklistConnection";
    items: Array<{
      __typename: "Checklist";
      id: string;
      company?: string | null;
      start?: string | null;
      end?: string | null;
      createdAt: string;
      updatedAt: string;
      workflowModelChecklistsId?: string | null;
      checklistOwnerId?: string | null;
      checklistModelId?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
  actualStart?: string | null;
  actualEnd?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteWorkflowModelSubscription = {
  __typename: "WorkflowModel";
  id: string;
  name?: string | null;
  checklists?: {
    __typename: "ModelChecklistConnection";
    items: Array<{
      __typename: "Checklist";
      id: string;
      company?: string | null;
      start?: string | null;
      end?: string | null;
      createdAt: string;
      updatedAt: string;
      workflowModelChecklistsId?: string | null;
      checklistOwnerId?: string | null;
      checklistModelId?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
  actualStart?: string | null;
  actualEnd?: string | null;
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
    __typename: "WorkflowModel";
    id: string;
    name?: string | null;
    checklists?: {
      __typename: "ModelChecklistConnection";
      nextToken?: string | null;
    } | null;
    actualStart?: string | null;
    actualEnd?: string | null;
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
    __typename: "WorkflowModel";
    id: string;
    name?: string | null;
    checklists?: {
      __typename: "ModelChecklistConnection";
      nextToken?: string | null;
    } | null;
    actualStart?: string | null;
    actualEnd?: string | null;
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
    __typename: "WorkflowModel";
    id: string;
    name?: string | null;
    checklists?: {
      __typename: "ModelChecklistConnection";
      nextToken?: string | null;
    } | null;
    actualStart?: string | null;
    actualEnd?: string | null;
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
            checklists {
              __typename
              nextToken
            }
            actualStart
            actualEnd
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
            checklists {
              __typename
              nextToken
            }
            actualStart
            actualEnd
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
            checklists {
              __typename
              nextToken
            }
            actualStart
            actualEnd
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
  async CreateActionModel(
    input: CreateActionModelInput,
    condition?: ModelActionModelConditionInput
  ): Promise<CreateActionModelMutation> {
    const statement = `mutation CreateActionModel($input: CreateActionModelInput!, $condition: ModelActionModelConditionInput) {
        createActionModel(input: $input, condition: $condition) {
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
    return <CreateActionModelMutation>response.data.createActionModel;
  }
  async UpdateActionModel(
    input: UpdateActionModelInput,
    condition?: ModelActionModelConditionInput
  ): Promise<UpdateActionModelMutation> {
    const statement = `mutation UpdateActionModel($input: UpdateActionModelInput!, $condition: ModelActionModelConditionInput) {
        updateActionModel(input: $input, condition: $condition) {
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
    return <UpdateActionModelMutation>response.data.updateActionModel;
  }
  async DeleteActionModel(
    input: DeleteActionModelInput,
    condition?: ModelActionModelConditionInput
  ): Promise<DeleteActionModelMutation> {
    const statement = `mutation DeleteActionModel($input: DeleteActionModelInput!, $condition: ModelActionModelConditionInput) {
        deleteActionModel(input: $input, condition: $condition) {
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
    return <DeleteActionModelMutation>response.data.deleteActionModel;
  }
  async CreateAction(
    input: CreateActionInput,
    condition?: ModelActionConditionInput
  ): Promise<CreateActionMutation> {
    const statement = `mutation CreateAction($input: CreateActionInput!, $condition: ModelActionConditionInput) {
        createAction(input: $input, condition: $condition) {
          __typename
          id
          model {
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
          checklist {
            __typename
            id
            company
            name
            notes
            steps {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          actualStart
          actualEnd
          createdAt
          updatedAt
          checklistModelStepsId
          actionModelId
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
          model {
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
          checklist {
            __typename
            id
            company
            name
            notes
            steps {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          actualStart
          actualEnd
          createdAt
          updatedAt
          checklistModelStepsId
          actionModelId
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
          model {
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
          checklist {
            __typename
            id
            company
            name
            notes
            steps {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          actualStart
          actualEnd
          createdAt
          updatedAt
          checklistModelStepsId
          actionModelId
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
  async CreateChecklistModel(
    input: CreateChecklistModelInput,
    condition?: ModelChecklistModelConditionInput
  ): Promise<CreateChecklistModelMutation> {
    const statement = `mutation CreateChecklistModel($input: CreateChecklistModelInput!, $condition: ModelChecklistModelConditionInput) {
        createChecklistModel(input: $input, condition: $condition) {
          __typename
          id
          company
          name
          notes
          steps {
            __typename
            items {
              __typename
              id
              actualStart
              actualEnd
              createdAt
              updatedAt
              checklistModelStepsId
              actionModelId
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
    return <CreateChecklistModelMutation>response.data.createChecklistModel;
  }
  async UpdateChecklistModel(
    input: UpdateChecklistModelInput,
    condition?: ModelChecklistModelConditionInput
  ): Promise<UpdateChecklistModelMutation> {
    const statement = `mutation UpdateChecklistModel($input: UpdateChecklistModelInput!, $condition: ModelChecklistModelConditionInput) {
        updateChecklistModel(input: $input, condition: $condition) {
          __typename
          id
          company
          name
          notes
          steps {
            __typename
            items {
              __typename
              id
              actualStart
              actualEnd
              createdAt
              updatedAt
              checklistModelStepsId
              actionModelId
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
    return <UpdateChecklistModelMutation>response.data.updateChecklistModel;
  }
  async DeleteChecklistModel(
    input: DeleteChecklistModelInput,
    condition?: ModelChecklistModelConditionInput
  ): Promise<DeleteChecklistModelMutation> {
    const statement = `mutation DeleteChecklistModel($input: DeleteChecklistModelInput!, $condition: ModelChecklistModelConditionInput) {
        deleteChecklistModel(input: $input, condition: $condition) {
          __typename
          id
          company
          name
          notes
          steps {
            __typename
            items {
              __typename
              id
              actualStart
              actualEnd
              createdAt
              updatedAt
              checklistModelStepsId
              actionModelId
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
    return <DeleteChecklistModelMutation>response.data.deleteChecklistModel;
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
          model {
            __typename
            id
            company
            name
            notes
            steps {
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
          workflowModelChecklistsId
          checklistOwnerId
          checklistModelId
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
          model {
            __typename
            id
            company
            name
            notes
            steps {
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
          workflowModelChecklistsId
          checklistOwnerId
          checklistModelId
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
          model {
            __typename
            id
            company
            name
            notes
            steps {
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
          workflowModelChecklistsId
          checklistOwnerId
          checklistModelId
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
  async CreateWorkflowModel(
    input: CreateWorkflowModelInput,
    condition?: ModelWorkflowModelConditionInput
  ): Promise<CreateWorkflowModelMutation> {
    const statement = `mutation CreateWorkflowModel($input: CreateWorkflowModelInput!, $condition: ModelWorkflowModelConditionInput) {
        createWorkflowModel(input: $input, condition: $condition) {
          __typename
          id
          name
          checklists {
            __typename
            items {
              __typename
              id
              company
              start
              end
              createdAt
              updatedAt
              workflowModelChecklistsId
              checklistOwnerId
              checklistModelId
            }
            nextToken
          }
          actualStart
          actualEnd
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
    return <CreateWorkflowModelMutation>response.data.createWorkflowModel;
  }
  async UpdateWorkflowModel(
    input: UpdateWorkflowModelInput,
    condition?: ModelWorkflowModelConditionInput
  ): Promise<UpdateWorkflowModelMutation> {
    const statement = `mutation UpdateWorkflowModel($input: UpdateWorkflowModelInput!, $condition: ModelWorkflowModelConditionInput) {
        updateWorkflowModel(input: $input, condition: $condition) {
          __typename
          id
          name
          checklists {
            __typename
            items {
              __typename
              id
              company
              start
              end
              createdAt
              updatedAt
              workflowModelChecklistsId
              checklistOwnerId
              checklistModelId
            }
            nextToken
          }
          actualStart
          actualEnd
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
    return <UpdateWorkflowModelMutation>response.data.updateWorkflowModel;
  }
  async DeleteWorkflowModel(
    input: DeleteWorkflowModelInput,
    condition?: ModelWorkflowModelConditionInput
  ): Promise<DeleteWorkflowModelMutation> {
    const statement = `mutation DeleteWorkflowModel($input: DeleteWorkflowModelInput!, $condition: ModelWorkflowModelConditionInput) {
        deleteWorkflowModel(input: $input, condition: $condition) {
          __typename
          id
          name
          checklists {
            __typename
            items {
              __typename
              id
              company
              start
              end
              createdAt
              updatedAt
              workflowModelChecklistsId
              checklistOwnerId
              checklistModelId
            }
            nextToken
          }
          actualStart
          actualEnd
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
    return <DeleteWorkflowModelMutation>response.data.deleteWorkflowModel;
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
            checklists {
              __typename
              nextToken
            }
            actualStart
            actualEnd
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
            checklists {
              __typename
              nextToken
            }
            actualStart
            actualEnd
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
            checklists {
              __typename
              nextToken
            }
            actualStart
            actualEnd
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
            checklists {
              __typename
              nextToken
            }
            actualStart
            actualEnd
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
              actualStart
              actualEnd
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
  async GetActionModel(id: string): Promise<GetActionModelQuery> {
    const statement = `query GetActionModel($id: ID!) {
        getActionModel(id: $id) {
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
    return <GetActionModelQuery>response.data.getActionModel;
  }
  async ListActionModels(
    filter?: ModelActionModelFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListActionModelsQuery> {
    const statement = `query ListActionModels($filter: ModelActionModelFilterInput, $limit: Int, $nextToken: String) {
        listActionModels(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
    return <ListActionModelsQuery>response.data.listActionModels;
  }
  async GetAction(id: string): Promise<GetActionQuery> {
    const statement = `query GetAction($id: ID!) {
        getAction(id: $id) {
          __typename
          id
          model {
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
          checklist {
            __typename
            id
            company
            name
            notes
            steps {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          actualStart
          actualEnd
          createdAt
          updatedAt
          checklistModelStepsId
          actionModelId
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
            model {
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
            checklist {
              __typename
              id
              company
              name
              notes
              createdAt
              updatedAt
            }
            actualStart
            actualEnd
            createdAt
            updatedAt
            checklistModelStepsId
            actionModelId
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
  async GetChecklistModel(id: string): Promise<GetChecklistModelQuery> {
    const statement = `query GetChecklistModel($id: ID!) {
        getChecklistModel(id: $id) {
          __typename
          id
          company
          name
          notes
          steps {
            __typename
            items {
              __typename
              id
              actualStart
              actualEnd
              createdAt
              updatedAt
              checklistModelStepsId
              actionModelId
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
    return <GetChecklistModelQuery>response.data.getChecklistModel;
  }
  async ListChecklistModels(
    filter?: ModelChecklistModelFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListChecklistModelsQuery> {
    const statement = `query ListChecklistModels($filter: ModelChecklistModelFilterInput, $limit: Int, $nextToken: String) {
        listChecklistModels(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            company
            name
            notes
            steps {
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
    return <ListChecklistModelsQuery>response.data.listChecklistModels;
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
          model {
            __typename
            id
            company
            name
            notes
            steps {
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
          workflowModelChecklistsId
          checklistOwnerId
          checklistModelId
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
            model {
              __typename
              id
              company
              name
              notes
              createdAt
              updatedAt
            }
            start
            end
            createdAt
            updatedAt
            workflowModelChecklistsId
            checklistOwnerId
            checklistModelId
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
  async GetWorkflowModel(id: string): Promise<GetWorkflowModelQuery> {
    const statement = `query GetWorkflowModel($id: ID!) {
        getWorkflowModel(id: $id) {
          __typename
          id
          name
          checklists {
            __typename
            items {
              __typename
              id
              company
              start
              end
              createdAt
              updatedAt
              workflowModelChecklistsId
              checklistOwnerId
              checklistModelId
            }
            nextToken
          }
          actualStart
          actualEnd
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
    return <GetWorkflowModelQuery>response.data.getWorkflowModel;
  }
  async ListWorkflowModels(
    filter?: ModelWorkflowModelFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListWorkflowModelsQuery> {
    const statement = `query ListWorkflowModels($filter: ModelWorkflowModelFilterInput, $limit: Int, $nextToken: String) {
        listWorkflowModels(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            name
            checklists {
              __typename
              nextToken
            }
            actualStart
            actualEnd
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
    return <ListWorkflowModelsQuery>response.data.listWorkflowModels;
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
            checklists {
              __typename
              nextToken
            }
            actualStart
            actualEnd
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
              actualStart
              actualEnd
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
            checklists {
              __typename
              nextToken
            }
            actualStart
            actualEnd
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
            checklists {
              __typename
              nextToken
            }
            actualStart
            actualEnd
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
            checklists {
              __typename
              nextToken
            }
            actualStart
            actualEnd
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

  OnCreateActionModelListener(
    filter?: ModelSubscriptionActionModelFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateActionModel">>
  > {
    const statement = `subscription OnCreateActionModel($filter: ModelSubscriptionActionModelFilterInput) {
        onCreateActionModel(filter: $filter) {
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
      SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateActionModel">>
    >;
  }

  OnUpdateActionModelListener(
    filter?: ModelSubscriptionActionModelFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateActionModel">>
  > {
    const statement = `subscription OnUpdateActionModel($filter: ModelSubscriptionActionModelFilterInput) {
        onUpdateActionModel(filter: $filter) {
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
      SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateActionModel">>
    >;
  }

  OnDeleteActionModelListener(
    filter?: ModelSubscriptionActionModelFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteActionModel">>
  > {
    const statement = `subscription OnDeleteActionModel($filter: ModelSubscriptionActionModelFilterInput) {
        onDeleteActionModel(filter: $filter) {
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
      SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteActionModel">>
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
          model {
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
          checklist {
            __typename
            id
            company
            name
            notes
            steps {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          actualStart
          actualEnd
          createdAt
          updatedAt
          checklistModelStepsId
          actionModelId
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
          model {
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
          checklist {
            __typename
            id
            company
            name
            notes
            steps {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          actualStart
          actualEnd
          createdAt
          updatedAt
          checklistModelStepsId
          actionModelId
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
          model {
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
          checklist {
            __typename
            id
            company
            name
            notes
            steps {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          actualStart
          actualEnd
          createdAt
          updatedAt
          checklistModelStepsId
          actionModelId
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

  OnCreateChecklistModelListener(
    filter?: ModelSubscriptionChecklistModelFilterInput
  ): Observable<
    SubscriptionResponse<
      Pick<__SubscriptionContainer, "onCreateChecklistModel">
    >
  > {
    const statement = `subscription OnCreateChecklistModel($filter: ModelSubscriptionChecklistModelFilterInput) {
        onCreateChecklistModel(filter: $filter) {
          __typename
          id
          company
          name
          notes
          steps {
            __typename
            items {
              __typename
              id
              actualStart
              actualEnd
              createdAt
              updatedAt
              checklistModelStepsId
              actionModelId
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
        Pick<__SubscriptionContainer, "onCreateChecklistModel">
      >
    >;
  }

  OnUpdateChecklistModelListener(
    filter?: ModelSubscriptionChecklistModelFilterInput
  ): Observable<
    SubscriptionResponse<
      Pick<__SubscriptionContainer, "onUpdateChecklistModel">
    >
  > {
    const statement = `subscription OnUpdateChecklistModel($filter: ModelSubscriptionChecklistModelFilterInput) {
        onUpdateChecklistModel(filter: $filter) {
          __typename
          id
          company
          name
          notes
          steps {
            __typename
            items {
              __typename
              id
              actualStart
              actualEnd
              createdAt
              updatedAt
              checklistModelStepsId
              actionModelId
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
        Pick<__SubscriptionContainer, "onUpdateChecklistModel">
      >
    >;
  }

  OnDeleteChecklistModelListener(
    filter?: ModelSubscriptionChecklistModelFilterInput
  ): Observable<
    SubscriptionResponse<
      Pick<__SubscriptionContainer, "onDeleteChecklistModel">
    >
  > {
    const statement = `subscription OnDeleteChecklistModel($filter: ModelSubscriptionChecklistModelFilterInput) {
        onDeleteChecklistModel(filter: $filter) {
          __typename
          id
          company
          name
          notes
          steps {
            __typename
            items {
              __typename
              id
              actualStart
              actualEnd
              createdAt
              updatedAt
              checklistModelStepsId
              actionModelId
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
        Pick<__SubscriptionContainer, "onDeleteChecklistModel">
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
          model {
            __typename
            id
            company
            name
            notes
            steps {
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
          workflowModelChecklistsId
          checklistOwnerId
          checklistModelId
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
          model {
            __typename
            id
            company
            name
            notes
            steps {
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
          workflowModelChecklistsId
          checklistOwnerId
          checklistModelId
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
          model {
            __typename
            id
            company
            name
            notes
            steps {
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
          workflowModelChecklistsId
          checklistOwnerId
          checklistModelId
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

  OnCreateWorkflowModelListener(
    filter?: ModelSubscriptionWorkflowModelFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateWorkflowModel">>
  > {
    const statement = `subscription OnCreateWorkflowModel($filter: ModelSubscriptionWorkflowModelFilterInput) {
        onCreateWorkflowModel(filter: $filter) {
          __typename
          id
          name
          checklists {
            __typename
            items {
              __typename
              id
              company
              start
              end
              createdAt
              updatedAt
              workflowModelChecklistsId
              checklistOwnerId
              checklistModelId
            }
            nextToken
          }
          actualStart
          actualEnd
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
        Pick<__SubscriptionContainer, "onCreateWorkflowModel">
      >
    >;
  }

  OnUpdateWorkflowModelListener(
    filter?: ModelSubscriptionWorkflowModelFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateWorkflowModel">>
  > {
    const statement = `subscription OnUpdateWorkflowModel($filter: ModelSubscriptionWorkflowModelFilterInput) {
        onUpdateWorkflowModel(filter: $filter) {
          __typename
          id
          name
          checklists {
            __typename
            items {
              __typename
              id
              company
              start
              end
              createdAt
              updatedAt
              workflowModelChecklistsId
              checklistOwnerId
              checklistModelId
            }
            nextToken
          }
          actualStart
          actualEnd
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
        Pick<__SubscriptionContainer, "onUpdateWorkflowModel">
      >
    >;
  }

  OnDeleteWorkflowModelListener(
    filter?: ModelSubscriptionWorkflowModelFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteWorkflowModel">>
  > {
    const statement = `subscription OnDeleteWorkflowModel($filter: ModelSubscriptionWorkflowModelFilterInput) {
        onDeleteWorkflowModel(filter: $filter) {
          __typename
          id
          name
          checklists {
            __typename
            items {
              __typename
              id
              company
              start
              end
              createdAt
              updatedAt
              workflowModelChecklistsId
              checklistOwnerId
              checklistModelId
            }
            nextToken
          }
          actualStart
          actualEnd
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
        Pick<__SubscriptionContainer, "onDeleteWorkflowModel">
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
            checklists {
              __typename
              nextToken
            }
            actualStart
            actualEnd
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
            checklists {
              __typename
              nextToken
            }
            actualStart
            actualEnd
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
            checklists {
              __typename
              nextToken
            }
            actualStart
            actualEnd
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
