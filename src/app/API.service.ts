/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreatePendingEventInput = {
  id?: string | null,
  company?: string | null,
  body?: string | null,
  start?: string | null,
  end?: string | null,
  item?: string | null,
  item_id?: string | null,
  status?: string | null,
};

export type ModelPendingEventConditionInput = {
  company?: ModelIDInput | null,
  body?: ModelStringInput | null,
  start?: ModelStringInput | null,
  end?: ModelStringInput | null,
  item?: ModelStringInput | null,
  item_id?: ModelStringInput | null,
  status?: ModelStringInput | null,
  and?: Array< ModelPendingEventConditionInput | null > | null,
  or?: Array< ModelPendingEventConditionInput | null > | null,
  not?: ModelPendingEventConditionInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
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
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type PendingEvent = {
  __typename: "PendingEvent",
  id: string,
  company?: string | null,
  body?: string | null,
  start?: string | null,
  end?: string | null,
  item?: string | null,
  item_id?: string | null,
  status?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdatePendingEventInput = {
  id: string,
  company?: string | null,
  body?: string | null,
  start?: string | null,
  end?: string | null,
  item?: string | null,
  item_id?: string | null,
  status?: string | null,
};

export type DeletePendingEventInput = {
  id: string,
};

export type CreateVesselInput = {
  id?: string | null,
  company?: string | null,
  name?: string | null,
  vesselType?: string | null,
  documentNumber?: string | null,
  ownerBoatsId?: string | null,
  vesselDefaultWorkflowId?: string | null,
};

export type ModelVesselConditionInput = {
  company?: ModelIDInput | null,
  name?: ModelStringInput | null,
  vesselType?: ModelStringInput | null,
  documentNumber?: ModelStringInput | null,
  and?: Array< ModelVesselConditionInput | null > | null,
  or?: Array< ModelVesselConditionInput | null > | null,
  not?: ModelVesselConditionInput | null,
  ownerBoatsId?: ModelIDInput | null,
  vesselDefaultWorkflowId?: ModelIDInput | null,
};

export type Vessel = {
  __typename: "Vessel",
  id: string,
  company?: string | null,
  name?: string | null,
  vesselType?: string | null,
  documentNumber?: string | null,
  defaultWorkflow?: WorkflowModel | null,
  createdAt: string,
  updatedAt: string,
  ownerBoatsId?: string | null,
  vesselDefaultWorkflowId?: string | null,
};

export type WorkflowModel = {
  __typename: "WorkflowModel",
  id: string,
  company: string,
  name?: string | null,
  notes?: string | null,
  duration?: number | null,
  checklists?: ModelWorkflowChecklistsConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelWorkflowChecklistsConnection = {
  __typename: "ModelWorkflowChecklistsConnection",
  items:  Array<WorkflowChecklists | null >,
  nextToken?: string | null,
};

export type WorkflowChecklists = {
  __typename: "WorkflowChecklists",
  id: string,
  checklistModelId: string,
  workflowModelId: string,
  checklistModel: ChecklistModel,
  workflowModel: WorkflowModel,
  createdAt: string,
  updatedAt: string,
};

export type ChecklistModel = {
  __typename: "ChecklistModel",
  id: string,
  company?: string | null,
  name?: string | null,
  notes?: string | null,
  duration?: number | null,
  preCharter?: boolean | null,
  actions?: ModelChecklistActionsConnection | null,
  workflows?: ModelWorkflowChecklistsConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelChecklistActionsConnection = {
  __typename: "ModelChecklistActionsConnection",
  items:  Array<ChecklistActions | null >,
  nextToken?: string | null,
};

export type ChecklistActions = {
  __typename: "ChecklistActions",
  id: string,
  actionModelId: string,
  checklistModelId: string,
  actionModel: ActionModel,
  checklistModel: ChecklistModel,
  createdAt: string,
  updatedAt: string,
};

export type ActionModel = {
  __typename: "ActionModel",
  id: string,
  company?: string | null,
  name?: string | null,
  notes?: string | null,
  duration?: number | null,
  checklists?: ModelChecklistActionsConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateVesselInput = {
  id: string,
  company?: string | null,
  name?: string | null,
  vesselType?: string | null,
  documentNumber?: string | null,
  ownerBoatsId?: string | null,
  vesselDefaultWorkflowId?: string | null,
};

export type DeleteVesselInput = {
  id: string,
};

export type CreateStaffInput = {
  id?: string | null,
  company?: string | null,
  name?: string | null,
  email?: string | null,
};

export type ModelStaffConditionInput = {
  company?: ModelIDInput | null,
  name?: ModelStringInput | null,
  email?: ModelStringInput | null,
  and?: Array< ModelStaffConditionInput | null > | null,
  or?: Array< ModelStaffConditionInput | null > | null,
  not?: ModelStaffConditionInput | null,
};

export type Staff = {
  __typename: "Staff",
  id: string,
  company?: string | null,
  name?: string | null,
  email?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateStaffInput = {
  id: string,
  company?: string | null,
  name?: string | null,
  email?: string | null,
};

export type DeleteStaffInput = {
  id: string,
};

export type CreateOwnerInput = {
  id?: string | null,
  company?: string | null,
  name?: string | null,
  email?: string | null,
  phone?: string | null,
};

export type ModelOwnerConditionInput = {
  company?: ModelIDInput | null,
  name?: ModelStringInput | null,
  email?: ModelStringInput | null,
  phone?: ModelStringInput | null,
  and?: Array< ModelOwnerConditionInput | null > | null,
  or?: Array< ModelOwnerConditionInput | null > | null,
  not?: ModelOwnerConditionInput | null,
};

export type Owner = {
  __typename: "Owner",
  id: string,
  company?: string | null,
  name?: string | null,
  email?: string | null,
  phone?: string | null,
  boats?: ModelVesselConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelVesselConnection = {
  __typename: "ModelVesselConnection",
  items:  Array<Vessel | null >,
  nextToken?: string | null,
};

export type UpdateOwnerInput = {
  id: string,
  company?: string | null,
  name?: string | null,
  email?: string | null,
  phone?: string | null,
};

export type DeleteOwnerInput = {
  id: string,
};

export type CreateActionModelInput = {
  id?: string | null,
  company?: string | null,
  name?: string | null,
  notes?: string | null,
  duration?: number | null,
};

export type ModelActionModelConditionInput = {
  company?: ModelIDInput | null,
  name?: ModelStringInput | null,
  notes?: ModelStringInput | null,
  duration?: ModelIntInput | null,
  and?: Array< ModelActionModelConditionInput | null > | null,
  or?: Array< ModelActionModelConditionInput | null > | null,
  not?: ModelActionModelConditionInput | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdateActionModelInput = {
  id: string,
  company?: string | null,
  name?: string | null,
  notes?: string | null,
  duration?: number | null,
};

export type DeleteActionModelInput = {
  id: string,
};

export type CreateChecklistModelInput = {
  id?: string | null,
  company?: string | null,
  name?: string | null,
  notes?: string | null,
  duration?: number | null,
  preCharter?: boolean | null,
};

export type ModelChecklistModelConditionInput = {
  company?: ModelIDInput | null,
  name?: ModelStringInput | null,
  notes?: ModelStringInput | null,
  duration?: ModelIntInput | null,
  preCharter?: ModelBooleanInput | null,
  and?: Array< ModelChecklistModelConditionInput | null > | null,
  or?: Array< ModelChecklistModelConditionInput | null > | null,
  not?: ModelChecklistModelConditionInput | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdateChecklistModelInput = {
  id: string,
  company?: string | null,
  name?: string | null,
  notes?: string | null,
  duration?: number | null,
  preCharter?: boolean | null,
};

export type DeleteChecklistModelInput = {
  id: string,
};

export type CreateWorkflowModelInput = {
  id?: string | null,
  company: string,
  name?: string | null,
  notes?: string | null,
  duration?: number | null,
};

export type ModelWorkflowModelConditionInput = {
  company?: ModelIDInput | null,
  name?: ModelStringInput | null,
  notes?: ModelStringInput | null,
  duration?: ModelIntInput | null,
  and?: Array< ModelWorkflowModelConditionInput | null > | null,
  or?: Array< ModelWorkflowModelConditionInput | null > | null,
  not?: ModelWorkflowModelConditionInput | null,
};

export type UpdateWorkflowModelInput = {
  id: string,
  company?: string | null,
  name?: string | null,
  notes?: string | null,
  duration?: number | null,
};

export type DeleteWorkflowModelInput = {
  id: string,
};

export type CreateActionInput = {
  id?: string | null,
  status?: boolean | null,
  actualStart?: string | null,
  actualEnd?: string | null,
  actionModelId?: string | null,
};

export type ModelActionConditionInput = {
  status?: ModelBooleanInput | null,
  actualStart?: ModelStringInput | null,
  actualEnd?: ModelStringInput | null,
  and?: Array< ModelActionConditionInput | null > | null,
  or?: Array< ModelActionConditionInput | null > | null,
  not?: ModelActionConditionInput | null,
  actionModelId?: ModelIDInput | null,
};

export type Action = {
  __typename: "Action",
  id: string,
  status?: boolean | null,
  model?: ActionModel | null,
  actualStart?: string | null,
  actualEnd?: string | null,
  createdAt: string,
  updatedAt: string,
  actionModelId?: string | null,
};

export type UpdateActionInput = {
  id: string,
  status?: boolean | null,
  actualStart?: string | null,
  actualEnd?: string | null,
  actionModelId?: string | null,
};

export type DeleteActionInput = {
  id: string,
};

export type CreateChecklistInput = {
  id?: string | null,
  company?: string | null,
  start?: string | null,
  end?: string | null,
  checklistOwnerId?: string | null,
  checklistModelId?: string | null,
};

export type ModelChecklistConditionInput = {
  company?: ModelIDInput | null,
  start?: ModelStringInput | null,
  end?: ModelStringInput | null,
  and?: Array< ModelChecklistConditionInput | null > | null,
  or?: Array< ModelChecklistConditionInput | null > | null,
  not?: ModelChecklistConditionInput | null,
  checklistOwnerId?: ModelIDInput | null,
  checklistModelId?: ModelIDInput | null,
};

export type Checklist = {
  __typename: "Checklist",
  id: string,
  company?: string | null,
  owner?: Staff | null,
  model?: ChecklistModel | null,
  start?: string | null,
  end?: string | null,
  createdAt: string,
  updatedAt: string,
  checklistOwnerId?: string | null,
  checklistModelId?: string | null,
};

export type UpdateChecklistInput = {
  id: string,
  company?: string | null,
  start?: string | null,
  end?: string | null,
  checklistOwnerId?: string | null,
  checklistModelId?: string | null,
};

export type DeleteChecklistInput = {
  id: string,
};

export type CreateWorkflowInput = {
  id?: string | null,
  company: string,
  start?: string | null,
  end?: string | null,
  workflowOwnerId?: string | null,
  workflowStepsId?: string | null,
};

export type ModelWorkflowConditionInput = {
  company?: ModelIDInput | null,
  start?: ModelStringInput | null,
  end?: ModelStringInput | null,
  and?: Array< ModelWorkflowConditionInput | null > | null,
  or?: Array< ModelWorkflowConditionInput | null > | null,
  not?: ModelWorkflowConditionInput | null,
  workflowOwnerId?: ModelIDInput | null,
  workflowStepsId?: ModelIDInput | null,
};

export type Workflow = {
  __typename: "Workflow",
  id: string,
  company: string,
  owner?: Staff | null,
  steps?: WorkflowModel | null,
  start?: string | null,
  end?: string | null,
  createdAt: string,
  updatedAt: string,
  workflowOwnerId?: string | null,
  workflowStepsId?: string | null,
};

export type UpdateWorkflowInput = {
  id: string,
  company?: string | null,
  start?: string | null,
  end?: string | null,
  workflowOwnerId?: string | null,
  workflowStepsId?: string | null,
};

export type DeleteWorkflowInput = {
  id: string,
};

export type CreateChecklistActionsInput = {
  id?: string | null,
  actionModelId: string,
  checklistModelId: string,
};

export type ModelChecklistActionsConditionInput = {
  actionModelId?: ModelIDInput | null,
  checklistModelId?: ModelIDInput | null,
  and?: Array< ModelChecklistActionsConditionInput | null > | null,
  or?: Array< ModelChecklistActionsConditionInput | null > | null,
  not?: ModelChecklistActionsConditionInput | null,
};

export type UpdateChecklistActionsInput = {
  id: string,
  actionModelId?: string | null,
  checklistModelId?: string | null,
};

export type DeleteChecklistActionsInput = {
  id: string,
};

export type CreateWorkflowChecklistsInput = {
  id?: string | null,
  checklistModelId: string,
  workflowModelId: string,
};

export type ModelWorkflowChecklistsConditionInput = {
  checklistModelId?: ModelIDInput | null,
  workflowModelId?: ModelIDInput | null,
  and?: Array< ModelWorkflowChecklistsConditionInput | null > | null,
  or?: Array< ModelWorkflowChecklistsConditionInput | null > | null,
  not?: ModelWorkflowChecklistsConditionInput | null,
};

export type UpdateWorkflowChecklistsInput = {
  id: string,
  checklistModelId?: string | null,
  workflowModelId?: string | null,
};

export type DeleteWorkflowChecklistsInput = {
  id: string,
};

export type ModelPendingEventFilterInput = {
  id?: ModelIDInput | null,
  company?: ModelIDInput | null,
  body?: ModelStringInput | null,
  start?: ModelStringInput | null,
  end?: ModelStringInput | null,
  item?: ModelStringInput | null,
  item_id?: ModelStringInput | null,
  status?: ModelStringInput | null,
  and?: Array< ModelPendingEventFilterInput | null > | null,
  or?: Array< ModelPendingEventFilterInput | null > | null,
  not?: ModelPendingEventFilterInput | null,
};

export type ModelPendingEventConnection = {
  __typename: "ModelPendingEventConnection",
  items:  Array<PendingEvent | null >,
  nextToken?: string | null,
};

export type ModelVesselFilterInput = {
  id?: ModelIDInput | null,
  company?: ModelIDInput | null,
  name?: ModelStringInput | null,
  vesselType?: ModelStringInput | null,
  documentNumber?: ModelStringInput | null,
  and?: Array< ModelVesselFilterInput | null > | null,
  or?: Array< ModelVesselFilterInput | null > | null,
  not?: ModelVesselFilterInput | null,
  ownerBoatsId?: ModelIDInput | null,
  vesselDefaultWorkflowId?: ModelIDInput | null,
};

export type ModelStaffFilterInput = {
  id?: ModelIDInput | null,
  company?: ModelIDInput | null,
  name?: ModelStringInput | null,
  email?: ModelStringInput | null,
  and?: Array< ModelStaffFilterInput | null > | null,
  or?: Array< ModelStaffFilterInput | null > | null,
  not?: ModelStaffFilterInput | null,
};

export type ModelStaffConnection = {
  __typename: "ModelStaffConnection",
  items:  Array<Staff | null >,
  nextToken?: string | null,
};

export type ModelOwnerFilterInput = {
  id?: ModelIDInput | null,
  company?: ModelIDInput | null,
  name?: ModelStringInput | null,
  email?: ModelStringInput | null,
  phone?: ModelStringInput | null,
  and?: Array< ModelOwnerFilterInput | null > | null,
  or?: Array< ModelOwnerFilterInput | null > | null,
  not?: ModelOwnerFilterInput | null,
};

export type ModelOwnerConnection = {
  __typename: "ModelOwnerConnection",
  items:  Array<Owner | null >,
  nextToken?: string | null,
};

export type ModelActionModelFilterInput = {
  id?: ModelIDInput | null,
  company?: ModelIDInput | null,
  name?: ModelStringInput | null,
  notes?: ModelStringInput | null,
  duration?: ModelIntInput | null,
  and?: Array< ModelActionModelFilterInput | null > | null,
  or?: Array< ModelActionModelFilterInput | null > | null,
  not?: ModelActionModelFilterInput | null,
};

export type ModelActionModelConnection = {
  __typename: "ModelActionModelConnection",
  items:  Array<ActionModel | null >,
  nextToken?: string | null,
};

export type ModelChecklistModelFilterInput = {
  id?: ModelIDInput | null,
  company?: ModelIDInput | null,
  name?: ModelStringInput | null,
  notes?: ModelStringInput | null,
  duration?: ModelIntInput | null,
  preCharter?: ModelBooleanInput | null,
  and?: Array< ModelChecklistModelFilterInput | null > | null,
  or?: Array< ModelChecklistModelFilterInput | null > | null,
  not?: ModelChecklistModelFilterInput | null,
};

export type ModelChecklistModelConnection = {
  __typename: "ModelChecklistModelConnection",
  items:  Array<ChecklistModel | null >,
  nextToken?: string | null,
};

export type ModelWorkflowModelFilterInput = {
  id?: ModelIDInput | null,
  company?: ModelIDInput | null,
  name?: ModelStringInput | null,
  notes?: ModelStringInput | null,
  duration?: ModelIntInput | null,
  and?: Array< ModelWorkflowModelFilterInput | null > | null,
  or?: Array< ModelWorkflowModelFilterInput | null > | null,
  not?: ModelWorkflowModelFilterInput | null,
};

export type ModelWorkflowModelConnection = {
  __typename: "ModelWorkflowModelConnection",
  items:  Array<WorkflowModel | null >,
  nextToken?: string | null,
};

export type ModelActionFilterInput = {
  id?: ModelIDInput | null,
  status?: ModelBooleanInput | null,
  actualStart?: ModelStringInput | null,
  actualEnd?: ModelStringInput | null,
  and?: Array< ModelActionFilterInput | null > | null,
  or?: Array< ModelActionFilterInput | null > | null,
  not?: ModelActionFilterInput | null,
  actionModelId?: ModelIDInput | null,
};

export type ModelActionConnection = {
  __typename: "ModelActionConnection",
  items:  Array<Action | null >,
  nextToken?: string | null,
};

export type ModelChecklistFilterInput = {
  id?: ModelIDInput | null,
  company?: ModelIDInput | null,
  start?: ModelStringInput | null,
  end?: ModelStringInput | null,
  and?: Array< ModelChecklistFilterInput | null > | null,
  or?: Array< ModelChecklistFilterInput | null > | null,
  not?: ModelChecklistFilterInput | null,
  checklistOwnerId?: ModelIDInput | null,
  checklistModelId?: ModelIDInput | null,
};

export type ModelChecklistConnection = {
  __typename: "ModelChecklistConnection",
  items:  Array<Checklist | null >,
  nextToken?: string | null,
};

export type ModelWorkflowFilterInput = {
  id?: ModelIDInput | null,
  company?: ModelIDInput | null,
  start?: ModelStringInput | null,
  end?: ModelStringInput | null,
  and?: Array< ModelWorkflowFilterInput | null > | null,
  or?: Array< ModelWorkflowFilterInput | null > | null,
  not?: ModelWorkflowFilterInput | null,
  workflowOwnerId?: ModelIDInput | null,
  workflowStepsId?: ModelIDInput | null,
};

export type ModelWorkflowConnection = {
  __typename: "ModelWorkflowConnection",
  items:  Array<Workflow | null >,
  nextToken?: string | null,
};

export type ModelChecklistActionsFilterInput = {
  id?: ModelIDInput | null,
  actionModelId?: ModelIDInput | null,
  checklistModelId?: ModelIDInput | null,
  and?: Array< ModelChecklistActionsFilterInput | null > | null,
  or?: Array< ModelChecklistActionsFilterInput | null > | null,
  not?: ModelChecklistActionsFilterInput | null,
};

export type ModelWorkflowChecklistsFilterInput = {
  id?: ModelIDInput | null,
  checklistModelId?: ModelIDInput | null,
  workflowModelId?: ModelIDInput | null,
  and?: Array< ModelWorkflowChecklistsFilterInput | null > | null,
  or?: Array< ModelWorkflowChecklistsFilterInput | null > | null,
  not?: ModelWorkflowChecklistsFilterInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelSubscriptionPendingEventFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  company?: ModelSubscriptionIDInput | null,
  body?: ModelSubscriptionStringInput | null,
  start?: ModelSubscriptionStringInput | null,
  end?: ModelSubscriptionStringInput | null,
  item?: ModelSubscriptionStringInput | null,
  item_id?: ModelSubscriptionStringInput | null,
  status?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionPendingEventFilterInput | null > | null,
  or?: Array< ModelSubscriptionPendingEventFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionVesselFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  company?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  vesselType?: ModelSubscriptionStringInput | null,
  documentNumber?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionVesselFilterInput | null > | null,
  or?: Array< ModelSubscriptionVesselFilterInput | null > | null,
};

export type ModelSubscriptionStaffFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  company?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  email?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionStaffFilterInput | null > | null,
  or?: Array< ModelSubscriptionStaffFilterInput | null > | null,
};

export type ModelSubscriptionOwnerFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  company?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  email?: ModelSubscriptionStringInput | null,
  phone?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionOwnerFilterInput | null > | null,
  or?: Array< ModelSubscriptionOwnerFilterInput | null > | null,
};

export type ModelSubscriptionActionModelFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  company?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  notes?: ModelSubscriptionStringInput | null,
  duration?: ModelSubscriptionIntInput | null,
  and?: Array< ModelSubscriptionActionModelFilterInput | null > | null,
  or?: Array< ModelSubscriptionActionModelFilterInput | null > | null,
};

export type ModelSubscriptionIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionChecklistModelFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  company?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  notes?: ModelSubscriptionStringInput | null,
  duration?: ModelSubscriptionIntInput | null,
  preCharter?: ModelSubscriptionBooleanInput | null,
  and?: Array< ModelSubscriptionChecklistModelFilterInput | null > | null,
  or?: Array< ModelSubscriptionChecklistModelFilterInput | null > | null,
};

export type ModelSubscriptionBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
};

export type ModelSubscriptionWorkflowModelFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  company?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  notes?: ModelSubscriptionStringInput | null,
  duration?: ModelSubscriptionIntInput | null,
  and?: Array< ModelSubscriptionWorkflowModelFilterInput | null > | null,
  or?: Array< ModelSubscriptionWorkflowModelFilterInput | null > | null,
};

export type ModelSubscriptionActionFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  status?: ModelSubscriptionBooleanInput | null,
  actualStart?: ModelSubscriptionStringInput | null,
  actualEnd?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionActionFilterInput | null > | null,
  or?: Array< ModelSubscriptionActionFilterInput | null > | null,
};

export type ModelSubscriptionChecklistFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  company?: ModelSubscriptionIDInput | null,
  start?: ModelSubscriptionStringInput | null,
  end?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionChecklistFilterInput | null > | null,
  or?: Array< ModelSubscriptionChecklistFilterInput | null > | null,
};

export type ModelSubscriptionWorkflowFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  company?: ModelSubscriptionIDInput | null,
  start?: ModelSubscriptionStringInput | null,
  end?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionWorkflowFilterInput | null > | null,
  or?: Array< ModelSubscriptionWorkflowFilterInput | null > | null,
};

export type ModelSubscriptionChecklistActionsFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  actionModelId?: ModelSubscriptionIDInput | null,
  checklistModelId?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionChecklistActionsFilterInput | null > | null,
  or?: Array< ModelSubscriptionChecklistActionsFilterInput | null > | null,
};

export type ModelSubscriptionWorkflowChecklistsFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  checklistModelId?: ModelSubscriptionIDInput | null,
  workflowModelId?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionWorkflowChecklistsFilterInput | null > | null,
  or?: Array< ModelSubscriptionWorkflowChecklistsFilterInput | null > | null,
};

export type CreatePendingEventMutationVariables = {
  input: CreatePendingEventInput,
  condition?: ModelPendingEventConditionInput | null,
};

export type CreatePendingEventMutation = {
  createPendingEvent?:  {
    __typename: "PendingEvent",
    id: string,
    company?: string | null,
    body?: string | null,
    start?: string | null,
    end?: string | null,
    item?: string | null,
    item_id?: string | null,
    status?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdatePendingEventMutationVariables = {
  input: UpdatePendingEventInput,
  condition?: ModelPendingEventConditionInput | null,
};

export type UpdatePendingEventMutation = {
  updatePendingEvent?:  {
    __typename: "PendingEvent",
    id: string,
    company?: string | null,
    body?: string | null,
    start?: string | null,
    end?: string | null,
    item?: string | null,
    item_id?: string | null,
    status?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeletePendingEventMutationVariables = {
  input: DeletePendingEventInput,
  condition?: ModelPendingEventConditionInput | null,
};

export type DeletePendingEventMutation = {
  deletePendingEvent?:  {
    __typename: "PendingEvent",
    id: string,
    company?: string | null,
    body?: string | null,
    start?: string | null,
    end?: string | null,
    item?: string | null,
    item_id?: string | null,
    status?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateVesselMutationVariables = {
  input: CreateVesselInput,
  condition?: ModelVesselConditionInput | null,
};

export type CreateVesselMutation = {
  createVessel?:  {
    __typename: "Vessel",
    id: string,
    company?: string | null,
    name?: string | null,
    vesselType?: string | null,
    documentNumber?: string | null,
    defaultWorkflow?:  {
      __typename: "WorkflowModel",
      id: string,
      company: string,
      name?: string | null,
      notes?: string | null,
      duration?: number | null,
      checklists?:  {
        __typename: "ModelWorkflowChecklistsConnection",
        items:  Array< {
          __typename: "WorkflowChecklists",
          id: string,
          checklistModelId: string,
          workflowModelId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    ownerBoatsId?: string | null,
    vesselDefaultWorkflowId?: string | null,
  } | null,
};

export type UpdateVesselMutationVariables = {
  input: UpdateVesselInput,
  condition?: ModelVesselConditionInput | null,
};

export type UpdateVesselMutation = {
  updateVessel?:  {
    __typename: "Vessel",
    id: string,
    company?: string | null,
    name?: string | null,
    vesselType?: string | null,
    documentNumber?: string | null,
    defaultWorkflow?:  {
      __typename: "WorkflowModel",
      id: string,
      company: string,
      name?: string | null,
      notes?: string | null,
      duration?: number | null,
      checklists?:  {
        __typename: "ModelWorkflowChecklistsConnection",
        items:  Array< {
          __typename: "WorkflowChecklists",
          id: string,
          checklistModelId: string,
          workflowModelId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    ownerBoatsId?: string | null,
    vesselDefaultWorkflowId?: string | null,
  } | null,
};

export type DeleteVesselMutationVariables = {
  input: DeleteVesselInput,
  condition?: ModelVesselConditionInput | null,
};

export type DeleteVesselMutation = {
  deleteVessel?:  {
    __typename: "Vessel",
    id: string,
    company?: string | null,
    name?: string | null,
    vesselType?: string | null,
    documentNumber?: string | null,
    defaultWorkflow?:  {
      __typename: "WorkflowModel",
      id: string,
      company: string,
      name?: string | null,
      notes?: string | null,
      duration?: number | null,
      checklists?:  {
        __typename: "ModelWorkflowChecklistsConnection",
        items:  Array< {
          __typename: "WorkflowChecklists",
          id: string,
          checklistModelId: string,
          workflowModelId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    ownerBoatsId?: string | null,
    vesselDefaultWorkflowId?: string | null,
  } | null,
};

export type CreateStaffMutationVariables = {
  input: CreateStaffInput,
  condition?: ModelStaffConditionInput | null,
};

export type CreateStaffMutation = {
  createStaff?:  {
    __typename: "Staff",
    id: string,
    company?: string | null,
    name?: string | null,
    email?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateStaffMutationVariables = {
  input: UpdateStaffInput,
  condition?: ModelStaffConditionInput | null,
};

export type UpdateStaffMutation = {
  updateStaff?:  {
    __typename: "Staff",
    id: string,
    company?: string | null,
    name?: string | null,
    email?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteStaffMutationVariables = {
  input: DeleteStaffInput,
  condition?: ModelStaffConditionInput | null,
};

export type DeleteStaffMutation = {
  deleteStaff?:  {
    __typename: "Staff",
    id: string,
    company?: string | null,
    name?: string | null,
    email?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateOwnerMutationVariables = {
  input: CreateOwnerInput,
  condition?: ModelOwnerConditionInput | null,
};

export type CreateOwnerMutation = {
  createOwner?:  {
    __typename: "Owner",
    id: string,
    company?: string | null,
    name?: string | null,
    email?: string | null,
    phone?: string | null,
    boats?:  {
      __typename: "ModelVesselConnection",
      items:  Array< {
        __typename: "Vessel",
        id: string,
        company?: string | null,
        name?: string | null,
        vesselType?: string | null,
        documentNumber?: string | null,
        defaultWorkflow?:  {
          __typename: "WorkflowModel",
          id: string,
          company: string,
          name?: string | null,
          notes?: string | null,
          duration?: number | null,
          createdAt: string,
          updatedAt: string,
        } | null,
        createdAt: string,
        updatedAt: string,
        ownerBoatsId?: string | null,
        vesselDefaultWorkflowId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateOwnerMutationVariables = {
  input: UpdateOwnerInput,
  condition?: ModelOwnerConditionInput | null,
};

export type UpdateOwnerMutation = {
  updateOwner?:  {
    __typename: "Owner",
    id: string,
    company?: string | null,
    name?: string | null,
    email?: string | null,
    phone?: string | null,
    boats?:  {
      __typename: "ModelVesselConnection",
      items:  Array< {
        __typename: "Vessel",
        id: string,
        company?: string | null,
        name?: string | null,
        vesselType?: string | null,
        documentNumber?: string | null,
        defaultWorkflow?:  {
          __typename: "WorkflowModel",
          id: string,
          company: string,
          name?: string | null,
          notes?: string | null,
          duration?: number | null,
          createdAt: string,
          updatedAt: string,
        } | null,
        createdAt: string,
        updatedAt: string,
        ownerBoatsId?: string | null,
        vesselDefaultWorkflowId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteOwnerMutationVariables = {
  input: DeleteOwnerInput,
  condition?: ModelOwnerConditionInput | null,
};

export type DeleteOwnerMutation = {
  deleteOwner?:  {
    __typename: "Owner",
    id: string,
    company?: string | null,
    name?: string | null,
    email?: string | null,
    phone?: string | null,
    boats?:  {
      __typename: "ModelVesselConnection",
      items:  Array< {
        __typename: "Vessel",
        id: string,
        company?: string | null,
        name?: string | null,
        vesselType?: string | null,
        documentNumber?: string | null,
        defaultWorkflow?:  {
          __typename: "WorkflowModel",
          id: string,
          company: string,
          name?: string | null,
          notes?: string | null,
          duration?: number | null,
          createdAt: string,
          updatedAt: string,
        } | null,
        createdAt: string,
        updatedAt: string,
        ownerBoatsId?: string | null,
        vesselDefaultWorkflowId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateActionModelMutationVariables = {
  input: CreateActionModelInput,
  condition?: ModelActionModelConditionInput | null,
};

export type CreateActionModelMutation = {
  createActionModel?:  {
    __typename: "ActionModel",
    id: string,
    company?: string | null,
    name?: string | null,
    notes?: string | null,
    duration?: number | null,
    checklists?:  {
      __typename: "ModelChecklistActionsConnection",
      items:  Array< {
        __typename: "ChecklistActions",
        id: string,
        actionModelId: string,
        checklistModelId: string,
        actionModel:  {
          __typename: "ActionModel",
          id: string,
          company?: string | null,
          name?: string | null,
          notes?: string | null,
          duration?: number | null,
          createdAt: string,
          updatedAt: string,
        },
        checklistModel:  {
          __typename: "ChecklistModel",
          id: string,
          company?: string | null,
          name?: string | null,
          notes?: string | null,
          duration?: number | null,
          preCharter?: boolean | null,
          createdAt: string,
          updatedAt: string,
        },
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateActionModelMutationVariables = {
  input: UpdateActionModelInput,
  condition?: ModelActionModelConditionInput | null,
};

export type UpdateActionModelMutation = {
  updateActionModel?:  {
    __typename: "ActionModel",
    id: string,
    company?: string | null,
    name?: string | null,
    notes?: string | null,
    duration?: number | null,
    checklists?:  {
      __typename: "ModelChecklistActionsConnection",
      items:  Array< {
        __typename: "ChecklistActions",
        id: string,
        actionModelId: string,
        checklistModelId: string,
        actionModel:  {
          __typename: "ActionModel",
          id: string,
          company?: string | null,
          name?: string | null,
          notes?: string | null,
          duration?: number | null,
          createdAt: string,
          updatedAt: string,
        },
        checklistModel:  {
          __typename: "ChecklistModel",
          id: string,
          company?: string | null,
          name?: string | null,
          notes?: string | null,
          duration?: number | null,
          preCharter?: boolean | null,
          createdAt: string,
          updatedAt: string,
        },
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteActionModelMutationVariables = {
  input: DeleteActionModelInput,
  condition?: ModelActionModelConditionInput | null,
};

export type DeleteActionModelMutation = {
  deleteActionModel?:  {
    __typename: "ActionModel",
    id: string,
    company?: string | null,
    name?: string | null,
    notes?: string | null,
    duration?: number | null,
    checklists?:  {
      __typename: "ModelChecklistActionsConnection",
      items:  Array< {
        __typename: "ChecklistActions",
        id: string,
        actionModelId: string,
        checklistModelId: string,
        actionModel:  {
          __typename: "ActionModel",
          id: string,
          company?: string | null,
          name?: string | null,
          notes?: string | null,
          duration?: number | null,
          createdAt: string,
          updatedAt: string,
        },
        checklistModel:  {
          __typename: "ChecklistModel",
          id: string,
          company?: string | null,
          name?: string | null,
          notes?: string | null,
          duration?: number | null,
          preCharter?: boolean | null,
          createdAt: string,
          updatedAt: string,
        },
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateChecklistModelMutationVariables = {
  input: CreateChecklistModelInput,
  condition?: ModelChecklistModelConditionInput | null,
};

export type CreateChecklistModelMutation = {
  createChecklistModel?:  {
    __typename: "ChecklistModel",
    id: string,
    company?: string | null,
    name?: string | null,
    notes?: string | null,
    duration?: number | null,
    preCharter?: boolean | null,
    actions?:  {
      __typename: "ModelChecklistActionsConnection",
      items:  Array< {
        __typename: "ChecklistActions",
        id: string,
        actionModelId: string,
        checklistModelId: string,
        actionModel:  {
          __typename: "ActionModel",
          id: string,
          company?: string | null,
          name?: string | null,
          notes?: string | null,
          duration?: number | null,
          createdAt: string,
          updatedAt: string,
        },
        checklistModel:  {
          __typename: "ChecklistModel",
          id: string,
          company?: string | null,
          name?: string | null,
          notes?: string | null,
          duration?: number | null,
          preCharter?: boolean | null,
          createdAt: string,
          updatedAt: string,
        },
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    workflows?:  {
      __typename: "ModelWorkflowChecklistsConnection",
      items:  Array< {
        __typename: "WorkflowChecklists",
        id: string,
        checklistModelId: string,
        workflowModelId: string,
        checklistModel:  {
          __typename: "ChecklistModel",
          id: string,
          company?: string | null,
          name?: string | null,
          notes?: string | null,
          duration?: number | null,
          preCharter?: boolean | null,
          createdAt: string,
          updatedAt: string,
        },
        workflowModel:  {
          __typename: "WorkflowModel",
          id: string,
          company: string,
          name?: string | null,
          notes?: string | null,
          duration?: number | null,
          createdAt: string,
          updatedAt: string,
        },
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateChecklistModelMutationVariables = {
  input: UpdateChecklistModelInput,
  condition?: ModelChecklistModelConditionInput | null,
};

export type UpdateChecklistModelMutation = {
  updateChecklistModel?:  {
    __typename: "ChecklistModel",
    id: string,
    company?: string | null,
    name?: string | null,
    notes?: string | null,
    duration?: number | null,
    preCharter?: boolean | null,
    actions?:  {
      __typename: "ModelChecklistActionsConnection",
      items:  Array< {
        __typename: "ChecklistActions",
        id: string,
        actionModelId: string,
        checklistModelId: string,
        actionModel:  {
          __typename: "ActionModel",
          id: string,
          company?: string | null,
          name?: string | null,
          notes?: string | null,
          duration?: number | null,
          createdAt: string,
          updatedAt: string,
        },
        checklistModel:  {
          __typename: "ChecklistModel",
          id: string,
          company?: string | null,
          name?: string | null,
          notes?: string | null,
          duration?: number | null,
          preCharter?: boolean | null,
          createdAt: string,
          updatedAt: string,
        },
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    workflows?:  {
      __typename: "ModelWorkflowChecklistsConnection",
      items:  Array< {
        __typename: "WorkflowChecklists",
        id: string,
        checklistModelId: string,
        workflowModelId: string,
        checklistModel:  {
          __typename: "ChecklistModel",
          id: string,
          company?: string | null,
          name?: string | null,
          notes?: string | null,
          duration?: number | null,
          preCharter?: boolean | null,
          createdAt: string,
          updatedAt: string,
        },
        workflowModel:  {
          __typename: "WorkflowModel",
          id: string,
          company: string,
          name?: string | null,
          notes?: string | null,
          duration?: number | null,
          createdAt: string,
          updatedAt: string,
        },
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteChecklistModelMutationVariables = {
  input: DeleteChecklistModelInput,
  condition?: ModelChecklistModelConditionInput | null,
};

export type DeleteChecklistModelMutation = {
  deleteChecklistModel?:  {
    __typename: "ChecklistModel",
    id: string,
    company?: string | null,
    name?: string | null,
    notes?: string | null,
    duration?: number | null,
    preCharter?: boolean | null,
    actions?:  {
      __typename: "ModelChecklistActionsConnection",
      items:  Array< {
        __typename: "ChecklistActions",
        id: string,
        actionModelId: string,
        checklistModelId: string,
        actionModel:  {
          __typename: "ActionModel",
          id: string,
          company?: string | null,
          name?: string | null,
          notes?: string | null,
          duration?: number | null,
          createdAt: string,
          updatedAt: string,
        },
        checklistModel:  {
          __typename: "ChecklistModel",
          id: string,
          company?: string | null,
          name?: string | null,
          notes?: string | null,
          duration?: number | null,
          preCharter?: boolean | null,
          createdAt: string,
          updatedAt: string,
        },
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    workflows?:  {
      __typename: "ModelWorkflowChecklistsConnection",
      items:  Array< {
        __typename: "WorkflowChecklists",
        id: string,
        checklistModelId: string,
        workflowModelId: string,
        checklistModel:  {
          __typename: "ChecklistModel",
          id: string,
          company?: string | null,
          name?: string | null,
          notes?: string | null,
          duration?: number | null,
          preCharter?: boolean | null,
          createdAt: string,
          updatedAt: string,
        },
        workflowModel:  {
          __typename: "WorkflowModel",
          id: string,
          company: string,
          name?: string | null,
          notes?: string | null,
          duration?: number | null,
          createdAt: string,
          updatedAt: string,
        },
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateWorkflowModelMutationVariables = {
  input: CreateWorkflowModelInput,
  condition?: ModelWorkflowModelConditionInput | null,
};

export type CreateWorkflowModelMutation = {
  createWorkflowModel?:  {
    __typename: "WorkflowModel",
    id: string,
    company: string,
    name?: string | null,
    notes?: string | null,
    duration?: number | null,
    checklists?:  {
      __typename: "ModelWorkflowChecklistsConnection",
      items:  Array< {
        __typename: "WorkflowChecklists",
        id: string,
        checklistModelId: string,
        workflowModelId: string,
        checklistModel:  {
          __typename: "ChecklistModel",
          id: string,
          company?: string | null,
          name?: string | null,
          notes?: string | null,
          duration?: number | null,
          preCharter?: boolean | null,
          createdAt: string,
          updatedAt: string,
        },
        workflowModel:  {
          __typename: "WorkflowModel",
          id: string,
          company: string,
          name?: string | null,
          notes?: string | null,
          duration?: number | null,
          createdAt: string,
          updatedAt: string,
        },
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateWorkflowModelMutationVariables = {
  input: UpdateWorkflowModelInput,
  condition?: ModelWorkflowModelConditionInput | null,
};

export type UpdateWorkflowModelMutation = {
  updateWorkflowModel?:  {
    __typename: "WorkflowModel",
    id: string,
    company: string,
    name?: string | null,
    notes?: string | null,
    duration?: number | null,
    checklists?:  {
      __typename: "ModelWorkflowChecklistsConnection",
      items:  Array< {
        __typename: "WorkflowChecklists",
        id: string,
        checklistModelId: string,
        workflowModelId: string,
        checklistModel:  {
          __typename: "ChecklistModel",
          id: string,
          company?: string | null,
          name?: string | null,
          notes?: string | null,
          duration?: number | null,
          preCharter?: boolean | null,
          createdAt: string,
          updatedAt: string,
        },
        workflowModel:  {
          __typename: "WorkflowModel",
          id: string,
          company: string,
          name?: string | null,
          notes?: string | null,
          duration?: number | null,
          createdAt: string,
          updatedAt: string,
        },
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteWorkflowModelMutationVariables = {
  input: DeleteWorkflowModelInput,
  condition?: ModelWorkflowModelConditionInput | null,
};

export type DeleteWorkflowModelMutation = {
  deleteWorkflowModel?:  {
    __typename: "WorkflowModel",
    id: string,
    company: string,
    name?: string | null,
    notes?: string | null,
    duration?: number | null,
    checklists?:  {
      __typename: "ModelWorkflowChecklistsConnection",
      items:  Array< {
        __typename: "WorkflowChecklists",
        id: string,
        checklistModelId: string,
        workflowModelId: string,
        checklistModel:  {
          __typename: "ChecklistModel",
          id: string,
          company?: string | null,
          name?: string | null,
          notes?: string | null,
          duration?: number | null,
          preCharter?: boolean | null,
          createdAt: string,
          updatedAt: string,
        },
        workflowModel:  {
          __typename: "WorkflowModel",
          id: string,
          company: string,
          name?: string | null,
          notes?: string | null,
          duration?: number | null,
          createdAt: string,
          updatedAt: string,
        },
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateActionMutationVariables = {
  input: CreateActionInput,
  condition?: ModelActionConditionInput | null,
};

export type CreateActionMutation = {
  createAction?:  {
    __typename: "Action",
    id: string,
    status?: boolean | null,
    model?:  {
      __typename: "ActionModel",
      id: string,
      company?: string | null,
      name?: string | null,
      notes?: string | null,
      duration?: number | null,
      checklists?:  {
        __typename: "ModelChecklistActionsConnection",
        items:  Array< {
          __typename: "ChecklistActions",
          id: string,
          actionModelId: string,
          checklistModelId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    actualStart?: string | null,
    actualEnd?: string | null,
    createdAt: string,
    updatedAt: string,
    actionModelId?: string | null,
  } | null,
};

export type UpdateActionMutationVariables = {
  input: UpdateActionInput,
  condition?: ModelActionConditionInput | null,
};

export type UpdateActionMutation = {
  updateAction?:  {
    __typename: "Action",
    id: string,
    status?: boolean | null,
    model?:  {
      __typename: "ActionModel",
      id: string,
      company?: string | null,
      name?: string | null,
      notes?: string | null,
      duration?: number | null,
      checklists?:  {
        __typename: "ModelChecklistActionsConnection",
        items:  Array< {
          __typename: "ChecklistActions",
          id: string,
          actionModelId: string,
          checklistModelId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    actualStart?: string | null,
    actualEnd?: string | null,
    createdAt: string,
    updatedAt: string,
    actionModelId?: string | null,
  } | null,
};

export type DeleteActionMutationVariables = {
  input: DeleteActionInput,
  condition?: ModelActionConditionInput | null,
};

export type DeleteActionMutation = {
  deleteAction?:  {
    __typename: "Action",
    id: string,
    status?: boolean | null,
    model?:  {
      __typename: "ActionModel",
      id: string,
      company?: string | null,
      name?: string | null,
      notes?: string | null,
      duration?: number | null,
      checklists?:  {
        __typename: "ModelChecklistActionsConnection",
        items:  Array< {
          __typename: "ChecklistActions",
          id: string,
          actionModelId: string,
          checklistModelId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    actualStart?: string | null,
    actualEnd?: string | null,
    createdAt: string,
    updatedAt: string,
    actionModelId?: string | null,
  } | null,
};

export type CreateChecklistMutationVariables = {
  input: CreateChecklistInput,
  condition?: ModelChecklistConditionInput | null,
};

export type CreateChecklistMutation = {
  createChecklist?:  {
    __typename: "Checklist",
    id: string,
    company?: string | null,
    owner?:  {
      __typename: "Staff",
      id: string,
      company?: string | null,
      name?: string | null,
      email?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    model?:  {
      __typename: "ChecklistModel",
      id: string,
      company?: string | null,
      name?: string | null,
      notes?: string | null,
      duration?: number | null,
      preCharter?: boolean | null,
      actions?:  {
        __typename: "ModelChecklistActionsConnection",
        items:  Array< {
          __typename: "ChecklistActions",
          id: string,
          actionModelId: string,
          checklistModelId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      workflows?:  {
        __typename: "ModelWorkflowChecklistsConnection",
        items:  Array< {
          __typename: "WorkflowChecklists",
          id: string,
          checklistModelId: string,
          workflowModelId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    start?: string | null,
    end?: string | null,
    createdAt: string,
    updatedAt: string,
    checklistOwnerId?: string | null,
    checklistModelId?: string | null,
  } | null,
};

export type UpdateChecklistMutationVariables = {
  input: UpdateChecklistInput,
  condition?: ModelChecklistConditionInput | null,
};

export type UpdateChecklistMutation = {
  updateChecklist?:  {
    __typename: "Checklist",
    id: string,
    company?: string | null,
    owner?:  {
      __typename: "Staff",
      id: string,
      company?: string | null,
      name?: string | null,
      email?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    model?:  {
      __typename: "ChecklistModel",
      id: string,
      company?: string | null,
      name?: string | null,
      notes?: string | null,
      duration?: number | null,
      preCharter?: boolean | null,
      actions?:  {
        __typename: "ModelChecklistActionsConnection",
        items:  Array< {
          __typename: "ChecklistActions",
          id: string,
          actionModelId: string,
          checklistModelId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      workflows?:  {
        __typename: "ModelWorkflowChecklistsConnection",
        items:  Array< {
          __typename: "WorkflowChecklists",
          id: string,
          checklistModelId: string,
          workflowModelId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    start?: string | null,
    end?: string | null,
    createdAt: string,
    updatedAt: string,
    checklistOwnerId?: string | null,
    checklistModelId?: string | null,
  } | null,
};

export type DeleteChecklistMutationVariables = {
  input: DeleteChecklistInput,
  condition?: ModelChecklistConditionInput | null,
};

export type DeleteChecklistMutation = {
  deleteChecklist?:  {
    __typename: "Checklist",
    id: string,
    company?: string | null,
    owner?:  {
      __typename: "Staff",
      id: string,
      company?: string | null,
      name?: string | null,
      email?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    model?:  {
      __typename: "ChecklistModel",
      id: string,
      company?: string | null,
      name?: string | null,
      notes?: string | null,
      duration?: number | null,
      preCharter?: boolean | null,
      actions?:  {
        __typename: "ModelChecklistActionsConnection",
        items:  Array< {
          __typename: "ChecklistActions",
          id: string,
          actionModelId: string,
          checklistModelId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      workflows?:  {
        __typename: "ModelWorkflowChecklistsConnection",
        items:  Array< {
          __typename: "WorkflowChecklists",
          id: string,
          checklistModelId: string,
          workflowModelId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    start?: string | null,
    end?: string | null,
    createdAt: string,
    updatedAt: string,
    checklistOwnerId?: string | null,
    checklistModelId?: string | null,
  } | null,
};

export type CreateWorkflowMutationVariables = {
  input: CreateWorkflowInput,
  condition?: ModelWorkflowConditionInput | null,
};

export type CreateWorkflowMutation = {
  createWorkflow?:  {
    __typename: "Workflow",
    id: string,
    company: string,
    owner?:  {
      __typename: "Staff",
      id: string,
      company?: string | null,
      name?: string | null,
      email?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    steps?:  {
      __typename: "WorkflowModel",
      id: string,
      company: string,
      name?: string | null,
      notes?: string | null,
      duration?: number | null,
      checklists?:  {
        __typename: "ModelWorkflowChecklistsConnection",
        items:  Array< {
          __typename: "WorkflowChecklists",
          id: string,
          checklistModelId: string,
          workflowModelId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    start?: string | null,
    end?: string | null,
    createdAt: string,
    updatedAt: string,
    workflowOwnerId?: string | null,
    workflowStepsId?: string | null,
  } | null,
};

export type UpdateWorkflowMutationVariables = {
  input: UpdateWorkflowInput,
  condition?: ModelWorkflowConditionInput | null,
};

export type UpdateWorkflowMutation = {
  updateWorkflow?:  {
    __typename: "Workflow",
    id: string,
    company: string,
    owner?:  {
      __typename: "Staff",
      id: string,
      company?: string | null,
      name?: string | null,
      email?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    steps?:  {
      __typename: "WorkflowModel",
      id: string,
      company: string,
      name?: string | null,
      notes?: string | null,
      duration?: number | null,
      checklists?:  {
        __typename: "ModelWorkflowChecklistsConnection",
        items:  Array< {
          __typename: "WorkflowChecklists",
          id: string,
          checklistModelId: string,
          workflowModelId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    start?: string | null,
    end?: string | null,
    createdAt: string,
    updatedAt: string,
    workflowOwnerId?: string | null,
    workflowStepsId?: string | null,
  } | null,
};

export type DeleteWorkflowMutationVariables = {
  input: DeleteWorkflowInput,
  condition?: ModelWorkflowConditionInput | null,
};

export type DeleteWorkflowMutation = {
  deleteWorkflow?:  {
    __typename: "Workflow",
    id: string,
    company: string,
    owner?:  {
      __typename: "Staff",
      id: string,
      company?: string | null,
      name?: string | null,
      email?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    steps?:  {
      __typename: "WorkflowModel",
      id: string,
      company: string,
      name?: string | null,
      notes?: string | null,
      duration?: number | null,
      checklists?:  {
        __typename: "ModelWorkflowChecklistsConnection",
        items:  Array< {
          __typename: "WorkflowChecklists",
          id: string,
          checklistModelId: string,
          workflowModelId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    start?: string | null,
    end?: string | null,
    createdAt: string,
    updatedAt: string,
    workflowOwnerId?: string | null,
    workflowStepsId?: string | null,
  } | null,
};

export type CreateChecklistActionsMutationVariables = {
  input: CreateChecklistActionsInput,
  condition?: ModelChecklistActionsConditionInput | null,
};

export type CreateChecklistActionsMutation = {
  createChecklistActions?:  {
    __typename: "ChecklistActions",
    id: string,
    actionModelId: string,
    checklistModelId: string,
    actionModel:  {
      __typename: "ActionModel",
      id: string,
      company?: string | null,
      name?: string | null,
      notes?: string | null,
      duration?: number | null,
      checklists?:  {
        __typename: "ModelChecklistActionsConnection",
        items:  Array< {
          __typename: "ChecklistActions",
          id: string,
          actionModelId: string,
          checklistModelId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    checklistModel:  {
      __typename: "ChecklistModel",
      id: string,
      company?: string | null,
      name?: string | null,
      notes?: string | null,
      duration?: number | null,
      preCharter?: boolean | null,
      actions?:  {
        __typename: "ModelChecklistActionsConnection",
        items:  Array< {
          __typename: "ChecklistActions",
          id: string,
          actionModelId: string,
          checklistModelId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      workflows?:  {
        __typename: "ModelWorkflowChecklistsConnection",
        items:  Array< {
          __typename: "WorkflowChecklists",
          id: string,
          checklistModelId: string,
          workflowModelId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateChecklistActionsMutationVariables = {
  input: UpdateChecklistActionsInput,
  condition?: ModelChecklistActionsConditionInput | null,
};

export type UpdateChecklistActionsMutation = {
  updateChecklistActions?:  {
    __typename: "ChecklistActions",
    id: string,
    actionModelId: string,
    checklistModelId: string,
    actionModel:  {
      __typename: "ActionModel",
      id: string,
      company?: string | null,
      name?: string | null,
      notes?: string | null,
      duration?: number | null,
      checklists?:  {
        __typename: "ModelChecklistActionsConnection",
        items:  Array< {
          __typename: "ChecklistActions",
          id: string,
          actionModelId: string,
          checklistModelId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    checklistModel:  {
      __typename: "ChecklistModel",
      id: string,
      company?: string | null,
      name?: string | null,
      notes?: string | null,
      duration?: number | null,
      preCharter?: boolean | null,
      actions?:  {
        __typename: "ModelChecklistActionsConnection",
        items:  Array< {
          __typename: "ChecklistActions",
          id: string,
          actionModelId: string,
          checklistModelId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      workflows?:  {
        __typename: "ModelWorkflowChecklistsConnection",
        items:  Array< {
          __typename: "WorkflowChecklists",
          id: string,
          checklistModelId: string,
          workflowModelId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteChecklistActionsMutationVariables = {
  input: DeleteChecklistActionsInput,
  condition?: ModelChecklistActionsConditionInput | null,
};

export type DeleteChecklistActionsMutation = {
  deleteChecklistActions?:  {
    __typename: "ChecklistActions",
    id: string,
    actionModelId: string,
    checklistModelId: string,
    actionModel:  {
      __typename: "ActionModel",
      id: string,
      company?: string | null,
      name?: string | null,
      notes?: string | null,
      duration?: number | null,
      checklists?:  {
        __typename: "ModelChecklistActionsConnection",
        items:  Array< {
          __typename: "ChecklistActions",
          id: string,
          actionModelId: string,
          checklistModelId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    checklistModel:  {
      __typename: "ChecklistModel",
      id: string,
      company?: string | null,
      name?: string | null,
      notes?: string | null,
      duration?: number | null,
      preCharter?: boolean | null,
      actions?:  {
        __typename: "ModelChecklistActionsConnection",
        items:  Array< {
          __typename: "ChecklistActions",
          id: string,
          actionModelId: string,
          checklistModelId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      workflows?:  {
        __typename: "ModelWorkflowChecklistsConnection",
        items:  Array< {
          __typename: "WorkflowChecklists",
          id: string,
          checklistModelId: string,
          workflowModelId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateWorkflowChecklistsMutationVariables = {
  input: CreateWorkflowChecklistsInput,
  condition?: ModelWorkflowChecklistsConditionInput | null,
};

export type CreateWorkflowChecklistsMutation = {
  createWorkflowChecklists?:  {
    __typename: "WorkflowChecklists",
    id: string,
    checklistModelId: string,
    workflowModelId: string,
    checklistModel:  {
      __typename: "ChecklistModel",
      id: string,
      company?: string | null,
      name?: string | null,
      notes?: string | null,
      duration?: number | null,
      preCharter?: boolean | null,
      actions?:  {
        __typename: "ModelChecklistActionsConnection",
        items:  Array< {
          __typename: "ChecklistActions",
          id: string,
          actionModelId: string,
          checklistModelId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      workflows?:  {
        __typename: "ModelWorkflowChecklistsConnection",
        items:  Array< {
          __typename: "WorkflowChecklists",
          id: string,
          checklistModelId: string,
          workflowModelId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    workflowModel:  {
      __typename: "WorkflowModel",
      id: string,
      company: string,
      name?: string | null,
      notes?: string | null,
      duration?: number | null,
      checklists?:  {
        __typename: "ModelWorkflowChecklistsConnection",
        items:  Array< {
          __typename: "WorkflowChecklists",
          id: string,
          checklistModelId: string,
          workflowModelId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateWorkflowChecklistsMutationVariables = {
  input: UpdateWorkflowChecklistsInput,
  condition?: ModelWorkflowChecklistsConditionInput | null,
};

export type UpdateWorkflowChecklistsMutation = {
  updateWorkflowChecklists?:  {
    __typename: "WorkflowChecklists",
    id: string,
    checklistModelId: string,
    workflowModelId: string,
    checklistModel:  {
      __typename: "ChecklistModel",
      id: string,
      company?: string | null,
      name?: string | null,
      notes?: string | null,
      duration?: number | null,
      preCharter?: boolean | null,
      actions?:  {
        __typename: "ModelChecklistActionsConnection",
        items:  Array< {
          __typename: "ChecklistActions",
          id: string,
          actionModelId: string,
          checklistModelId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      workflows?:  {
        __typename: "ModelWorkflowChecklistsConnection",
        items:  Array< {
          __typename: "WorkflowChecklists",
          id: string,
          checklistModelId: string,
          workflowModelId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    workflowModel:  {
      __typename: "WorkflowModel",
      id: string,
      company: string,
      name?: string | null,
      notes?: string | null,
      duration?: number | null,
      checklists?:  {
        __typename: "ModelWorkflowChecklistsConnection",
        items:  Array< {
          __typename: "WorkflowChecklists",
          id: string,
          checklistModelId: string,
          workflowModelId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteWorkflowChecklistsMutationVariables = {
  input: DeleteWorkflowChecklistsInput,
  condition?: ModelWorkflowChecklistsConditionInput | null,
};

export type DeleteWorkflowChecklistsMutation = {
  deleteWorkflowChecklists?:  {
    __typename: "WorkflowChecklists",
    id: string,
    checklistModelId: string,
    workflowModelId: string,
    checklistModel:  {
      __typename: "ChecklistModel",
      id: string,
      company?: string | null,
      name?: string | null,
      notes?: string | null,
      duration?: number | null,
      preCharter?: boolean | null,
      actions?:  {
        __typename: "ModelChecklistActionsConnection",
        items:  Array< {
          __typename: "ChecklistActions",
          id: string,
          actionModelId: string,
          checklistModelId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      workflows?:  {
        __typename: "ModelWorkflowChecklistsConnection",
        items:  Array< {
          __typename: "WorkflowChecklists",
          id: string,
          checklistModelId: string,
          workflowModelId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    workflowModel:  {
      __typename: "WorkflowModel",
      id: string,
      company: string,
      name?: string | null,
      notes?: string | null,
      duration?: number | null,
      checklists?:  {
        __typename: "ModelWorkflowChecklistsConnection",
        items:  Array< {
          __typename: "WorkflowChecklists",
          id: string,
          checklistModelId: string,
          workflowModelId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetPendingEventQueryVariables = {
  id: string,
};

export type GetPendingEventQuery = {
  getPendingEvent?:  {
    __typename: "PendingEvent",
    id: string,
    company?: string | null,
    body?: string | null,
    start?: string | null,
    end?: string | null,
    item?: string | null,
    item_id?: string | null,
    status?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListPendingEventsQueryVariables = {
  filter?: ModelPendingEventFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPendingEventsQuery = {
  listPendingEvents?:  {
    __typename: "ModelPendingEventConnection",
    items:  Array< {
      __typename: "PendingEvent",
      id: string,
      company?: string | null,
      body?: string | null,
      start?: string | null,
      end?: string | null,
      item?: string | null,
      item_id?: string | null,
      status?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetVesselQueryVariables = {
  id: string,
};

export type GetVesselQuery = {
  getVessel?:  {
    __typename: "Vessel",
    id: string,
    company?: string | null,
    name?: string | null,
    vesselType?: string | null,
    documentNumber?: string | null,
    defaultWorkflow?:  {
      __typename: "WorkflowModel",
      id: string,
      company: string,
      name?: string | null,
      notes?: string | null,
      duration?: number | null,
      checklists?:  {
        __typename: "ModelWorkflowChecklistsConnection",
        items:  Array< {
          __typename: "WorkflowChecklists",
          id: string,
          checklistModelId: string,
          workflowModelId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    ownerBoatsId?: string | null,
    vesselDefaultWorkflowId?: string | null,
  } | null,
};

export type ListVesselsQueryVariables = {
  filter?: ModelVesselFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListVesselsQuery = {
  listVessels?:  {
    __typename: "ModelVesselConnection",
    items:  Array< {
      __typename: "Vessel",
      id: string,
      company?: string | null,
      name?: string | null,
      vesselType?: string | null,
      documentNumber?: string | null,
      defaultWorkflow?:  {
        __typename: "WorkflowModel",
        id: string,
        company: string,
        name?: string | null,
        notes?: string | null,
        duration?: number | null,
        checklists?:  {
          __typename: "ModelWorkflowChecklistsConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
      ownerBoatsId?: string | null,
      vesselDefaultWorkflowId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetStaffQueryVariables = {
  id: string,
};

export type GetStaffQuery = {
  getStaff?:  {
    __typename: "Staff",
    id: string,
    company?: string | null,
    name?: string | null,
    email?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListStaffQueryVariables = {
  filter?: ModelStaffFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListStaffQuery = {
  listStaff?:  {
    __typename: "ModelStaffConnection",
    items:  Array< {
      __typename: "Staff",
      id: string,
      company?: string | null,
      name?: string | null,
      email?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetOwnerQueryVariables = {
  id: string,
};

export type GetOwnerQuery = {
  getOwner?:  {
    __typename: "Owner",
    id: string,
    company?: string | null,
    name?: string | null,
    email?: string | null,
    phone?: string | null,
    boats?:  {
      __typename: "ModelVesselConnection",
      items:  Array< {
        __typename: "Vessel",
        id: string,
        company?: string | null,
        name?: string | null,
        vesselType?: string | null,
        documentNumber?: string | null,
        defaultWorkflow?:  {
          __typename: "WorkflowModel",
          id: string,
          company: string,
          name?: string | null,
          notes?: string | null,
          duration?: number | null,
          createdAt: string,
          updatedAt: string,
        } | null,
        createdAt: string,
        updatedAt: string,
        ownerBoatsId?: string | null,
        vesselDefaultWorkflowId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListOwnersQueryVariables = {
  filter?: ModelOwnerFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListOwnersQuery = {
  listOwners?:  {
    __typename: "ModelOwnerConnection",
    items:  Array< {
      __typename: "Owner",
      id: string,
      company?: string | null,
      name?: string | null,
      email?: string | null,
      phone?: string | null,
      boats?:  {
        __typename: "ModelVesselConnection",
        items:  Array< {
          __typename: "Vessel",
          id: string,
          company?: string | null,
          name?: string | null,
          vesselType?: string | null,
          documentNumber?: string | null,
          createdAt: string,
          updatedAt: string,
          ownerBoatsId?: string | null,
          vesselDefaultWorkflowId?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetActionModelQueryVariables = {
  id: string,
};

export type GetActionModelQuery = {
  getActionModel?:  {
    __typename: "ActionModel",
    id: string,
    company?: string | null,
    name?: string | null,
    notes?: string | null,
    duration?: number | null,
    checklists?:  {
      __typename: "ModelChecklistActionsConnection",
      items:  Array< {
        __typename: "ChecklistActions",
        id: string,
        actionModelId: string,
        checklistModelId: string,
        actionModel:  {
          __typename: "ActionModel",
          id: string,
          company?: string | null,
          name?: string | null,
          notes?: string | null,
          duration?: number | null,
          createdAt: string,
          updatedAt: string,
        },
        checklistModel:  {
          __typename: "ChecklistModel",
          id: string,
          company?: string | null,
          name?: string | null,
          notes?: string | null,
          duration?: number | null,
          preCharter?: boolean | null,
          createdAt: string,
          updatedAt: string,
        },
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListActionModelsQueryVariables = {
  filter?: ModelActionModelFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListActionModelsQuery = {
  listActionModels?:  {
    __typename: "ModelActionModelConnection",
    items:  Array< {
      __typename: "ActionModel",
      id: string,
      company?: string | null,
      name?: string | null,
      notes?: string | null,
      duration?: number | null,
      checklists?:  {
        __typename: "ModelChecklistActionsConnection",
        items:  Array< {
          __typename: "ChecklistActions",
          id: string,
          actionModelId: string,
          checklistModelId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetChecklistModelQueryVariables = {
  id: string,
};

export type GetChecklistModelQuery = {
  getChecklistModel?:  {
    __typename: "ChecklistModel",
    id: string,
    company?: string | null,
    name?: string | null,
    notes?: string | null,
    duration?: number | null,
    preCharter?: boolean | null,
    actions?:  {
      __typename: "ModelChecklistActionsConnection",
      items:  Array< {
        __typename: "ChecklistActions",
        id: string,
        actionModelId: string,
        checklistModelId: string,
        actionModel:  {
          __typename: "ActionModel",
          id: string,
          company?: string | null,
          name?: string | null,
          notes?: string | null,
          duration?: number | null,
          createdAt: string,
          updatedAt: string,
        },
        checklistModel:  {
          __typename: "ChecklistModel",
          id: string,
          company?: string | null,
          name?: string | null,
          notes?: string | null,
          duration?: number | null,
          preCharter?: boolean | null,
          createdAt: string,
          updatedAt: string,
        },
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    workflows?:  {
      __typename: "ModelWorkflowChecklistsConnection",
      items:  Array< {
        __typename: "WorkflowChecklists",
        id: string,
        checklistModelId: string,
        workflowModelId: string,
        checklistModel:  {
          __typename: "ChecklistModel",
          id: string,
          company?: string | null,
          name?: string | null,
          notes?: string | null,
          duration?: number | null,
          preCharter?: boolean | null,
          createdAt: string,
          updatedAt: string,
        },
        workflowModel:  {
          __typename: "WorkflowModel",
          id: string,
          company: string,
          name?: string | null,
          notes?: string | null,
          duration?: number | null,
          createdAt: string,
          updatedAt: string,
        },
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListChecklistModelsQueryVariables = {
  filter?: ModelChecklistModelFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListChecklistModelsQuery = {
  listChecklistModels?:  {
    __typename: "ModelChecklistModelConnection",
    items:  Array< {
      __typename: "ChecklistModel",
      id: string,
      company?: string | null,
      name?: string | null,
      notes?: string | null,
      duration?: number | null,
      preCharter?: boolean | null,
      actions?:  {
        __typename: "ModelChecklistActionsConnection",
        items:  Array< {
          __typename: "ChecklistActions",
          id: string,
          actionModelId: string,
          checklistModelId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      workflows?:  {
        __typename: "ModelWorkflowChecklistsConnection",
        items:  Array< {
          __typename: "WorkflowChecklists",
          id: string,
          checklistModelId: string,
          workflowModelId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetWorkflowModelQueryVariables = {
  id: string,
};

export type GetWorkflowModelQuery = {
  getWorkflowModel?:  {
    __typename: "WorkflowModel",
    id: string,
    company: string,
    name?: string | null,
    notes?: string | null,
    duration?: number | null,
    checklists?:  {
      __typename: "ModelWorkflowChecklistsConnection",
      items:  Array< {
        __typename: "WorkflowChecklists",
        id: string,
        checklistModelId: string,
        workflowModelId: string,
        checklistModel:  {
          __typename: "ChecklistModel",
          id: string,
          company?: string | null,
          name?: string | null,
          notes?: string | null,
          duration?: number | null,
          preCharter?: boolean | null,
          createdAt: string,
          updatedAt: string,
        },
        workflowModel:  {
          __typename: "WorkflowModel",
          id: string,
          company: string,
          name?: string | null,
          notes?: string | null,
          duration?: number | null,
          createdAt: string,
          updatedAt: string,
        },
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListWorkflowModelsQueryVariables = {
  filter?: ModelWorkflowModelFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListWorkflowModelsQuery = {
  listWorkflowModels?:  {
    __typename: "ModelWorkflowModelConnection",
    items:  Array< {
      __typename: "WorkflowModel",
      id: string,
      company: string,
      name?: string | null,
      notes?: string | null,
      duration?: number | null,
      checklists?:  {
        __typename: "ModelWorkflowChecklistsConnection",
        items:  Array< {
          __typename: "WorkflowChecklists",
          id: string,
          checklistModelId: string,
          workflowModelId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetActionQueryVariables = {
  id: string,
};

export type GetActionQuery = {
  getAction?:  {
    __typename: "Action",
    id: string,
    status?: boolean | null,
    model?:  {
      __typename: "ActionModel",
      id: string,
      company?: string | null,
      name?: string | null,
      notes?: string | null,
      duration?: number | null,
      checklists?:  {
        __typename: "ModelChecklistActionsConnection",
        items:  Array< {
          __typename: "ChecklistActions",
          id: string,
          actionModelId: string,
          checklistModelId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    actualStart?: string | null,
    actualEnd?: string | null,
    createdAt: string,
    updatedAt: string,
    actionModelId?: string | null,
  } | null,
};

export type ListActionsQueryVariables = {
  filter?: ModelActionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListActionsQuery = {
  listActions?:  {
    __typename: "ModelActionConnection",
    items:  Array< {
      __typename: "Action",
      id: string,
      status?: boolean | null,
      model?:  {
        __typename: "ActionModel",
        id: string,
        company?: string | null,
        name?: string | null,
        notes?: string | null,
        duration?: number | null,
        checklists?:  {
          __typename: "ModelChecklistActionsConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      actualStart?: string | null,
      actualEnd?: string | null,
      createdAt: string,
      updatedAt: string,
      actionModelId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetChecklistQueryVariables = {
  id: string,
};

export type GetChecklistQuery = {
  getChecklist?:  {
    __typename: "Checklist",
    id: string,
    company?: string | null,
    owner?:  {
      __typename: "Staff",
      id: string,
      company?: string | null,
      name?: string | null,
      email?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    model?:  {
      __typename: "ChecklistModel",
      id: string,
      company?: string | null,
      name?: string | null,
      notes?: string | null,
      duration?: number | null,
      preCharter?: boolean | null,
      actions?:  {
        __typename: "ModelChecklistActionsConnection",
        items:  Array< {
          __typename: "ChecklistActions",
          id: string,
          actionModelId: string,
          checklistModelId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      workflows?:  {
        __typename: "ModelWorkflowChecklistsConnection",
        items:  Array< {
          __typename: "WorkflowChecklists",
          id: string,
          checklistModelId: string,
          workflowModelId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    start?: string | null,
    end?: string | null,
    createdAt: string,
    updatedAt: string,
    checklistOwnerId?: string | null,
    checklistModelId?: string | null,
  } | null,
};

export type ListChecklistsQueryVariables = {
  filter?: ModelChecklistFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListChecklistsQuery = {
  listChecklists?:  {
    __typename: "ModelChecklistConnection",
    items:  Array< {
      __typename: "Checklist",
      id: string,
      company?: string | null,
      owner?:  {
        __typename: "Staff",
        id: string,
        company?: string | null,
        name?: string | null,
        email?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      model?:  {
        __typename: "ChecklistModel",
        id: string,
        company?: string | null,
        name?: string | null,
        notes?: string | null,
        duration?: number | null,
        preCharter?: boolean | null,
        actions?:  {
          __typename: "ModelChecklistActionsConnection",
          nextToken?: string | null,
        } | null,
        workflows?:  {
          __typename: "ModelWorkflowChecklistsConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      start?: string | null,
      end?: string | null,
      createdAt: string,
      updatedAt: string,
      checklistOwnerId?: string | null,
      checklistModelId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetWorkflowQueryVariables = {
  id: string,
};

export type GetWorkflowQuery = {
  getWorkflow?:  {
    __typename: "Workflow",
    id: string,
    company: string,
    owner?:  {
      __typename: "Staff",
      id: string,
      company?: string | null,
      name?: string | null,
      email?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    steps?:  {
      __typename: "WorkflowModel",
      id: string,
      company: string,
      name?: string | null,
      notes?: string | null,
      duration?: number | null,
      checklists?:  {
        __typename: "ModelWorkflowChecklistsConnection",
        items:  Array< {
          __typename: "WorkflowChecklists",
          id: string,
          checklistModelId: string,
          workflowModelId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    start?: string | null,
    end?: string | null,
    createdAt: string,
    updatedAt: string,
    workflowOwnerId?: string | null,
    workflowStepsId?: string | null,
  } | null,
};

export type ListWorkflowsQueryVariables = {
  filter?: ModelWorkflowFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListWorkflowsQuery = {
  listWorkflows?:  {
    __typename: "ModelWorkflowConnection",
    items:  Array< {
      __typename: "Workflow",
      id: string,
      company: string,
      owner?:  {
        __typename: "Staff",
        id: string,
        company?: string | null,
        name?: string | null,
        email?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      steps?:  {
        __typename: "WorkflowModel",
        id: string,
        company: string,
        name?: string | null,
        notes?: string | null,
        duration?: number | null,
        checklists?:  {
          __typename: "ModelWorkflowChecklistsConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      start?: string | null,
      end?: string | null,
      createdAt: string,
      updatedAt: string,
      workflowOwnerId?: string | null,
      workflowStepsId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetChecklistActionsQueryVariables = {
  id: string,
};

export type GetChecklistActionsQuery = {
  getChecklistActions?:  {
    __typename: "ChecklistActions",
    id: string,
    actionModelId: string,
    checklistModelId: string,
    actionModel:  {
      __typename: "ActionModel",
      id: string,
      company?: string | null,
      name?: string | null,
      notes?: string | null,
      duration?: number | null,
      checklists?:  {
        __typename: "ModelChecklistActionsConnection",
        items:  Array< {
          __typename: "ChecklistActions",
          id: string,
          actionModelId: string,
          checklistModelId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    checklistModel:  {
      __typename: "ChecklistModel",
      id: string,
      company?: string | null,
      name?: string | null,
      notes?: string | null,
      duration?: number | null,
      preCharter?: boolean | null,
      actions?:  {
        __typename: "ModelChecklistActionsConnection",
        items:  Array< {
          __typename: "ChecklistActions",
          id: string,
          actionModelId: string,
          checklistModelId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      workflows?:  {
        __typename: "ModelWorkflowChecklistsConnection",
        items:  Array< {
          __typename: "WorkflowChecklists",
          id: string,
          checklistModelId: string,
          workflowModelId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListChecklistActionsQueryVariables = {
  filter?: ModelChecklistActionsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListChecklistActionsQuery = {
  listChecklistActions?:  {
    __typename: "ModelChecklistActionsConnection",
    items:  Array< {
      __typename: "ChecklistActions",
      id: string,
      actionModelId: string,
      checklistModelId: string,
      actionModel:  {
        __typename: "ActionModel",
        id: string,
        company?: string | null,
        name?: string | null,
        notes?: string | null,
        duration?: number | null,
        checklists?:  {
          __typename: "ModelChecklistActionsConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      },
      checklistModel:  {
        __typename: "ChecklistModel",
        id: string,
        company?: string | null,
        name?: string | null,
        notes?: string | null,
        duration?: number | null,
        preCharter?: boolean | null,
        actions?:  {
          __typename: "ModelChecklistActionsConnection",
          nextToken?: string | null,
        } | null,
        workflows?:  {
          __typename: "ModelWorkflowChecklistsConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      },
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetWorkflowChecklistsQueryVariables = {
  id: string,
};

export type GetWorkflowChecklistsQuery = {
  getWorkflowChecklists?:  {
    __typename: "WorkflowChecklists",
    id: string,
    checklistModelId: string,
    workflowModelId: string,
    checklistModel:  {
      __typename: "ChecklistModel",
      id: string,
      company?: string | null,
      name?: string | null,
      notes?: string | null,
      duration?: number | null,
      preCharter?: boolean | null,
      actions?:  {
        __typename: "ModelChecklistActionsConnection",
        items:  Array< {
          __typename: "ChecklistActions",
          id: string,
          actionModelId: string,
          checklistModelId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      workflows?:  {
        __typename: "ModelWorkflowChecklistsConnection",
        items:  Array< {
          __typename: "WorkflowChecklists",
          id: string,
          checklistModelId: string,
          workflowModelId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    workflowModel:  {
      __typename: "WorkflowModel",
      id: string,
      company: string,
      name?: string | null,
      notes?: string | null,
      duration?: number | null,
      checklists?:  {
        __typename: "ModelWorkflowChecklistsConnection",
        items:  Array< {
          __typename: "WorkflowChecklists",
          id: string,
          checklistModelId: string,
          workflowModelId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListWorkflowChecklistsQueryVariables = {
  filter?: ModelWorkflowChecklistsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListWorkflowChecklistsQuery = {
  listWorkflowChecklists?:  {
    __typename: "ModelWorkflowChecklistsConnection",
    items:  Array< {
      __typename: "WorkflowChecklists",
      id: string,
      checklistModelId: string,
      workflowModelId: string,
      checklistModel:  {
        __typename: "ChecklistModel",
        id: string,
        company?: string | null,
        name?: string | null,
        notes?: string | null,
        duration?: number | null,
        preCharter?: boolean | null,
        actions?:  {
          __typename: "ModelChecklistActionsConnection",
          nextToken?: string | null,
        } | null,
        workflows?:  {
          __typename: "ModelWorkflowChecklistsConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      },
      workflowModel:  {
        __typename: "WorkflowModel",
        id: string,
        company: string,
        name?: string | null,
        notes?: string | null,
        duration?: number | null,
        checklists?:  {
          __typename: "ModelWorkflowChecklistsConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      },
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ChecklistActionsByActionModelIdQueryVariables = {
  actionModelId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelChecklistActionsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ChecklistActionsByActionModelIdQuery = {
  checklistActionsByActionModelId?:  {
    __typename: "ModelChecklistActionsConnection",
    items:  Array< {
      __typename: "ChecklistActions",
      id: string,
      actionModelId: string,
      checklistModelId: string,
      actionModel:  {
        __typename: "ActionModel",
        id: string,
        company?: string | null,
        name?: string | null,
        notes?: string | null,
        duration?: number | null,
        checklists?:  {
          __typename: "ModelChecklistActionsConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      },
      checklistModel:  {
        __typename: "ChecklistModel",
        id: string,
        company?: string | null,
        name?: string | null,
        notes?: string | null,
        duration?: number | null,
        preCharter?: boolean | null,
        actions?:  {
          __typename: "ModelChecklistActionsConnection",
          nextToken?: string | null,
        } | null,
        workflows?:  {
          __typename: "ModelWorkflowChecklistsConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      },
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ChecklistActionsByChecklistModelIdQueryVariables = {
  checklistModelId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelChecklistActionsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ChecklistActionsByChecklistModelIdQuery = {
  checklistActionsByChecklistModelId?:  {
    __typename: "ModelChecklistActionsConnection",
    items:  Array< {
      __typename: "ChecklistActions",
      id: string,
      actionModelId: string,
      checklistModelId: string,
      actionModel:  {
        __typename: "ActionModel",
        id: string,
        company?: string | null,
        name?: string | null,
        notes?: string | null,
        duration?: number | null,
        checklists?:  {
          __typename: "ModelChecklistActionsConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      },
      checklistModel:  {
        __typename: "ChecklistModel",
        id: string,
        company?: string | null,
        name?: string | null,
        notes?: string | null,
        duration?: number | null,
        preCharter?: boolean | null,
        actions?:  {
          __typename: "ModelChecklistActionsConnection",
          nextToken?: string | null,
        } | null,
        workflows?:  {
          __typename: "ModelWorkflowChecklistsConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      },
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type WorkflowChecklistsByChecklistModelIdQueryVariables = {
  checklistModelId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelWorkflowChecklistsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type WorkflowChecklistsByChecklistModelIdQuery = {
  workflowChecklistsByChecklistModelId?:  {
    __typename: "ModelWorkflowChecklistsConnection",
    items:  Array< {
      __typename: "WorkflowChecklists",
      id: string,
      checklistModelId: string,
      workflowModelId: string,
      checklistModel:  {
        __typename: "ChecklistModel",
        id: string,
        company?: string | null,
        name?: string | null,
        notes?: string | null,
        duration?: number | null,
        preCharter?: boolean | null,
        actions?:  {
          __typename: "ModelChecklistActionsConnection",
          nextToken?: string | null,
        } | null,
        workflows?:  {
          __typename: "ModelWorkflowChecklistsConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      },
      workflowModel:  {
        __typename: "WorkflowModel",
        id: string,
        company: string,
        name?: string | null,
        notes?: string | null,
        duration?: number | null,
        checklists?:  {
          __typename: "ModelWorkflowChecklistsConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      },
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type WorkflowChecklistsByWorkflowModelIdQueryVariables = {
  workflowModelId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelWorkflowChecklistsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type WorkflowChecklistsByWorkflowModelIdQuery = {
  workflowChecklistsByWorkflowModelId?:  {
    __typename: "ModelWorkflowChecklistsConnection",
    items:  Array< {
      __typename: "WorkflowChecklists",
      id: string,
      checklistModelId: string,
      workflowModelId: string,
      checklistModel:  {
        __typename: "ChecklistModel",
        id: string,
        company?: string | null,
        name?: string | null,
        notes?: string | null,
        duration?: number | null,
        preCharter?: boolean | null,
        actions?:  {
          __typename: "ModelChecklistActionsConnection",
          nextToken?: string | null,
        } | null,
        workflows?:  {
          __typename: "ModelWorkflowChecklistsConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      },
      workflowModel:  {
        __typename: "WorkflowModel",
        id: string,
        company: string,
        name?: string | null,
        notes?: string | null,
        duration?: number | null,
        checklists?:  {
          __typename: "ModelWorkflowChecklistsConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      },
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreatePendingEventSubscriptionVariables = {
  filter?: ModelSubscriptionPendingEventFilterInput | null,
};

export type OnCreatePendingEventSubscription = {
  onCreatePendingEvent?:  {
    __typename: "PendingEvent",
    id: string,
    company?: string | null,
    body?: string | null,
    start?: string | null,
    end?: string | null,
    item?: string | null,
    item_id?: string | null,
    status?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdatePendingEventSubscriptionVariables = {
  filter?: ModelSubscriptionPendingEventFilterInput | null,
};

export type OnUpdatePendingEventSubscription = {
  onUpdatePendingEvent?:  {
    __typename: "PendingEvent",
    id: string,
    company?: string | null,
    body?: string | null,
    start?: string | null,
    end?: string | null,
    item?: string | null,
    item_id?: string | null,
    status?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeletePendingEventSubscriptionVariables = {
  filter?: ModelSubscriptionPendingEventFilterInput | null,
};

export type OnDeletePendingEventSubscription = {
  onDeletePendingEvent?:  {
    __typename: "PendingEvent",
    id: string,
    company?: string | null,
    body?: string | null,
    start?: string | null,
    end?: string | null,
    item?: string | null,
    item_id?: string | null,
    status?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateVesselSubscriptionVariables = {
  filter?: ModelSubscriptionVesselFilterInput | null,
};

export type OnCreateVesselSubscription = {
  onCreateVessel?:  {
    __typename: "Vessel",
    id: string,
    company?: string | null,
    name?: string | null,
    vesselType?: string | null,
    documentNumber?: string | null,
    defaultWorkflow?:  {
      __typename: "WorkflowModel",
      id: string,
      company: string,
      name?: string | null,
      notes?: string | null,
      duration?: number | null,
      checklists?:  {
        __typename: "ModelWorkflowChecklistsConnection",
        items:  Array< {
          __typename: "WorkflowChecklists",
          id: string,
          checklistModelId: string,
          workflowModelId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    ownerBoatsId?: string | null,
    vesselDefaultWorkflowId?: string | null,
  } | null,
};

export type OnUpdateVesselSubscriptionVariables = {
  filter?: ModelSubscriptionVesselFilterInput | null,
};

export type OnUpdateVesselSubscription = {
  onUpdateVessel?:  {
    __typename: "Vessel",
    id: string,
    company?: string | null,
    name?: string | null,
    vesselType?: string | null,
    documentNumber?: string | null,
    defaultWorkflow?:  {
      __typename: "WorkflowModel",
      id: string,
      company: string,
      name?: string | null,
      notes?: string | null,
      duration?: number | null,
      checklists?:  {
        __typename: "ModelWorkflowChecklistsConnection",
        items:  Array< {
          __typename: "WorkflowChecklists",
          id: string,
          checklistModelId: string,
          workflowModelId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    ownerBoatsId?: string | null,
    vesselDefaultWorkflowId?: string | null,
  } | null,
};

export type OnDeleteVesselSubscriptionVariables = {
  filter?: ModelSubscriptionVesselFilterInput | null,
};

export type OnDeleteVesselSubscription = {
  onDeleteVessel?:  {
    __typename: "Vessel",
    id: string,
    company?: string | null,
    name?: string | null,
    vesselType?: string | null,
    documentNumber?: string | null,
    defaultWorkflow?:  {
      __typename: "WorkflowModel",
      id: string,
      company: string,
      name?: string | null,
      notes?: string | null,
      duration?: number | null,
      checklists?:  {
        __typename: "ModelWorkflowChecklistsConnection",
        items:  Array< {
          __typename: "WorkflowChecklists",
          id: string,
          checklistModelId: string,
          workflowModelId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    ownerBoatsId?: string | null,
    vesselDefaultWorkflowId?: string | null,
  } | null,
};

export type OnCreateStaffSubscriptionVariables = {
  filter?: ModelSubscriptionStaffFilterInput | null,
};

export type OnCreateStaffSubscription = {
  onCreateStaff?:  {
    __typename: "Staff",
    id: string,
    company?: string | null,
    name?: string | null,
    email?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateStaffSubscriptionVariables = {
  filter?: ModelSubscriptionStaffFilterInput | null,
};

export type OnUpdateStaffSubscription = {
  onUpdateStaff?:  {
    __typename: "Staff",
    id: string,
    company?: string | null,
    name?: string | null,
    email?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteStaffSubscriptionVariables = {
  filter?: ModelSubscriptionStaffFilterInput | null,
};

export type OnDeleteStaffSubscription = {
  onDeleteStaff?:  {
    __typename: "Staff",
    id: string,
    company?: string | null,
    name?: string | null,
    email?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateOwnerSubscriptionVariables = {
  filter?: ModelSubscriptionOwnerFilterInput | null,
};

export type OnCreateOwnerSubscription = {
  onCreateOwner?:  {
    __typename: "Owner",
    id: string,
    company?: string | null,
    name?: string | null,
    email?: string | null,
    phone?: string | null,
    boats?:  {
      __typename: "ModelVesselConnection",
      items:  Array< {
        __typename: "Vessel",
        id: string,
        company?: string | null,
        name?: string | null,
        vesselType?: string | null,
        documentNumber?: string | null,
        defaultWorkflow?:  {
          __typename: "WorkflowModel",
          id: string,
          company: string,
          name?: string | null,
          notes?: string | null,
          duration?: number | null,
          createdAt: string,
          updatedAt: string,
        } | null,
        createdAt: string,
        updatedAt: string,
        ownerBoatsId?: string | null,
        vesselDefaultWorkflowId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateOwnerSubscriptionVariables = {
  filter?: ModelSubscriptionOwnerFilterInput | null,
};

export type OnUpdateOwnerSubscription = {
  onUpdateOwner?:  {
    __typename: "Owner",
    id: string,
    company?: string | null,
    name?: string | null,
    email?: string | null,
    phone?: string | null,
    boats?:  {
      __typename: "ModelVesselConnection",
      items:  Array< {
        __typename: "Vessel",
        id: string,
        company?: string | null,
        name?: string | null,
        vesselType?: string | null,
        documentNumber?: string | null,
        defaultWorkflow?:  {
          __typename: "WorkflowModel",
          id: string,
          company: string,
          name?: string | null,
          notes?: string | null,
          duration?: number | null,
          createdAt: string,
          updatedAt: string,
        } | null,
        createdAt: string,
        updatedAt: string,
        ownerBoatsId?: string | null,
        vesselDefaultWorkflowId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteOwnerSubscriptionVariables = {
  filter?: ModelSubscriptionOwnerFilterInput | null,
};

export type OnDeleteOwnerSubscription = {
  onDeleteOwner?:  {
    __typename: "Owner",
    id: string,
    company?: string | null,
    name?: string | null,
    email?: string | null,
    phone?: string | null,
    boats?:  {
      __typename: "ModelVesselConnection",
      items:  Array< {
        __typename: "Vessel",
        id: string,
        company?: string | null,
        name?: string | null,
        vesselType?: string | null,
        documentNumber?: string | null,
        defaultWorkflow?:  {
          __typename: "WorkflowModel",
          id: string,
          company: string,
          name?: string | null,
          notes?: string | null,
          duration?: number | null,
          createdAt: string,
          updatedAt: string,
        } | null,
        createdAt: string,
        updatedAt: string,
        ownerBoatsId?: string | null,
        vesselDefaultWorkflowId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateActionModelSubscriptionVariables = {
  filter?: ModelSubscriptionActionModelFilterInput | null,
};

export type OnCreateActionModelSubscription = {
  onCreateActionModel?:  {
    __typename: "ActionModel",
    id: string,
    company?: string | null,
    name?: string | null,
    notes?: string | null,
    duration?: number | null,
    checklists?:  {
      __typename: "ModelChecklistActionsConnection",
      items:  Array< {
        __typename: "ChecklistActions",
        id: string,
        actionModelId: string,
        checklistModelId: string,
        actionModel:  {
          __typename: "ActionModel",
          id: string,
          company?: string | null,
          name?: string | null,
          notes?: string | null,
          duration?: number | null,
          createdAt: string,
          updatedAt: string,
        },
        checklistModel:  {
          __typename: "ChecklistModel",
          id: string,
          company?: string | null,
          name?: string | null,
          notes?: string | null,
          duration?: number | null,
          preCharter?: boolean | null,
          createdAt: string,
          updatedAt: string,
        },
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateActionModelSubscriptionVariables = {
  filter?: ModelSubscriptionActionModelFilterInput | null,
};

export type OnUpdateActionModelSubscription = {
  onUpdateActionModel?:  {
    __typename: "ActionModel",
    id: string,
    company?: string | null,
    name?: string | null,
    notes?: string | null,
    duration?: number | null,
    checklists?:  {
      __typename: "ModelChecklistActionsConnection",
      items:  Array< {
        __typename: "ChecklistActions",
        id: string,
        actionModelId: string,
        checklistModelId: string,
        actionModel:  {
          __typename: "ActionModel",
          id: string,
          company?: string | null,
          name?: string | null,
          notes?: string | null,
          duration?: number | null,
          createdAt: string,
          updatedAt: string,
        },
        checklistModel:  {
          __typename: "ChecklistModel",
          id: string,
          company?: string | null,
          name?: string | null,
          notes?: string | null,
          duration?: number | null,
          preCharter?: boolean | null,
          createdAt: string,
          updatedAt: string,
        },
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteActionModelSubscriptionVariables = {
  filter?: ModelSubscriptionActionModelFilterInput | null,
};

export type OnDeleteActionModelSubscription = {
  onDeleteActionModel?:  {
    __typename: "ActionModel",
    id: string,
    company?: string | null,
    name?: string | null,
    notes?: string | null,
    duration?: number | null,
    checklists?:  {
      __typename: "ModelChecklistActionsConnection",
      items:  Array< {
        __typename: "ChecklistActions",
        id: string,
        actionModelId: string,
        checklistModelId: string,
        actionModel:  {
          __typename: "ActionModel",
          id: string,
          company?: string | null,
          name?: string | null,
          notes?: string | null,
          duration?: number | null,
          createdAt: string,
          updatedAt: string,
        },
        checklistModel:  {
          __typename: "ChecklistModel",
          id: string,
          company?: string | null,
          name?: string | null,
          notes?: string | null,
          duration?: number | null,
          preCharter?: boolean | null,
          createdAt: string,
          updatedAt: string,
        },
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateChecklistModelSubscriptionVariables = {
  filter?: ModelSubscriptionChecklistModelFilterInput | null,
};

export type OnCreateChecklistModelSubscription = {
  onCreateChecklistModel?:  {
    __typename: "ChecklistModel",
    id: string,
    company?: string | null,
    name?: string | null,
    notes?: string | null,
    duration?: number | null,
    preCharter?: boolean | null,
    actions?:  {
      __typename: "ModelChecklistActionsConnection",
      items:  Array< {
        __typename: "ChecklistActions",
        id: string,
        actionModelId: string,
        checklistModelId: string,
        actionModel:  {
          __typename: "ActionModel",
          id: string,
          company?: string | null,
          name?: string | null,
          notes?: string | null,
          duration?: number | null,
          createdAt: string,
          updatedAt: string,
        },
        checklistModel:  {
          __typename: "ChecklistModel",
          id: string,
          company?: string | null,
          name?: string | null,
          notes?: string | null,
          duration?: number | null,
          preCharter?: boolean | null,
          createdAt: string,
          updatedAt: string,
        },
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    workflows?:  {
      __typename: "ModelWorkflowChecklistsConnection",
      items:  Array< {
        __typename: "WorkflowChecklists",
        id: string,
        checklistModelId: string,
        workflowModelId: string,
        checklistModel:  {
          __typename: "ChecklistModel",
          id: string,
          company?: string | null,
          name?: string | null,
          notes?: string | null,
          duration?: number | null,
          preCharter?: boolean | null,
          createdAt: string,
          updatedAt: string,
        },
        workflowModel:  {
          __typename: "WorkflowModel",
          id: string,
          company: string,
          name?: string | null,
          notes?: string | null,
          duration?: number | null,
          createdAt: string,
          updatedAt: string,
        },
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateChecklistModelSubscriptionVariables = {
  filter?: ModelSubscriptionChecklistModelFilterInput | null,
};

export type OnUpdateChecklistModelSubscription = {
  onUpdateChecklistModel?:  {
    __typename: "ChecklistModel",
    id: string,
    company?: string | null,
    name?: string | null,
    notes?: string | null,
    duration?: number | null,
    preCharter?: boolean | null,
    actions?:  {
      __typename: "ModelChecklistActionsConnection",
      items:  Array< {
        __typename: "ChecklistActions",
        id: string,
        actionModelId: string,
        checklistModelId: string,
        actionModel:  {
          __typename: "ActionModel",
          id: string,
          company?: string | null,
          name?: string | null,
          notes?: string | null,
          duration?: number | null,
          createdAt: string,
          updatedAt: string,
        },
        checklistModel:  {
          __typename: "ChecklistModel",
          id: string,
          company?: string | null,
          name?: string | null,
          notes?: string | null,
          duration?: number | null,
          preCharter?: boolean | null,
          createdAt: string,
          updatedAt: string,
        },
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    workflows?:  {
      __typename: "ModelWorkflowChecklistsConnection",
      items:  Array< {
        __typename: "WorkflowChecklists",
        id: string,
        checklistModelId: string,
        workflowModelId: string,
        checklistModel:  {
          __typename: "ChecklistModel",
          id: string,
          company?: string | null,
          name?: string | null,
          notes?: string | null,
          duration?: number | null,
          preCharter?: boolean | null,
          createdAt: string,
          updatedAt: string,
        },
        workflowModel:  {
          __typename: "WorkflowModel",
          id: string,
          company: string,
          name?: string | null,
          notes?: string | null,
          duration?: number | null,
          createdAt: string,
          updatedAt: string,
        },
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteChecklistModelSubscriptionVariables = {
  filter?: ModelSubscriptionChecklistModelFilterInput | null,
};

export type OnDeleteChecklistModelSubscription = {
  onDeleteChecklistModel?:  {
    __typename: "ChecklistModel",
    id: string,
    company?: string | null,
    name?: string | null,
    notes?: string | null,
    duration?: number | null,
    preCharter?: boolean | null,
    actions?:  {
      __typename: "ModelChecklistActionsConnection",
      items:  Array< {
        __typename: "ChecklistActions",
        id: string,
        actionModelId: string,
        checklistModelId: string,
        actionModel:  {
          __typename: "ActionModel",
          id: string,
          company?: string | null,
          name?: string | null,
          notes?: string | null,
          duration?: number | null,
          createdAt: string,
          updatedAt: string,
        },
        checklistModel:  {
          __typename: "ChecklistModel",
          id: string,
          company?: string | null,
          name?: string | null,
          notes?: string | null,
          duration?: number | null,
          preCharter?: boolean | null,
          createdAt: string,
          updatedAt: string,
        },
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    workflows?:  {
      __typename: "ModelWorkflowChecklistsConnection",
      items:  Array< {
        __typename: "WorkflowChecklists",
        id: string,
        checklistModelId: string,
        workflowModelId: string,
        checklistModel:  {
          __typename: "ChecklistModel",
          id: string,
          company?: string | null,
          name?: string | null,
          notes?: string | null,
          duration?: number | null,
          preCharter?: boolean | null,
          createdAt: string,
          updatedAt: string,
        },
        workflowModel:  {
          __typename: "WorkflowModel",
          id: string,
          company: string,
          name?: string | null,
          notes?: string | null,
          duration?: number | null,
          createdAt: string,
          updatedAt: string,
        },
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateWorkflowModelSubscriptionVariables = {
  filter?: ModelSubscriptionWorkflowModelFilterInput | null,
};

export type OnCreateWorkflowModelSubscription = {
  onCreateWorkflowModel?:  {
    __typename: "WorkflowModel",
    id: string,
    company: string,
    name?: string | null,
    notes?: string | null,
    duration?: number | null,
    checklists?:  {
      __typename: "ModelWorkflowChecklistsConnection",
      items:  Array< {
        __typename: "WorkflowChecklists",
        id: string,
        checklistModelId: string,
        workflowModelId: string,
        checklistModel:  {
          __typename: "ChecklistModel",
          id: string,
          company?: string | null,
          name?: string | null,
          notes?: string | null,
          duration?: number | null,
          preCharter?: boolean | null,
          createdAt: string,
          updatedAt: string,
        },
        workflowModel:  {
          __typename: "WorkflowModel",
          id: string,
          company: string,
          name?: string | null,
          notes?: string | null,
          duration?: number | null,
          createdAt: string,
          updatedAt: string,
        },
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateWorkflowModelSubscriptionVariables = {
  filter?: ModelSubscriptionWorkflowModelFilterInput | null,
};

export type OnUpdateWorkflowModelSubscription = {
  onUpdateWorkflowModel?:  {
    __typename: "WorkflowModel",
    id: string,
    company: string,
    name?: string | null,
    notes?: string | null,
    duration?: number | null,
    checklists?:  {
      __typename: "ModelWorkflowChecklistsConnection",
      items:  Array< {
        __typename: "WorkflowChecklists",
        id: string,
        checklistModelId: string,
        workflowModelId: string,
        checklistModel:  {
          __typename: "ChecklistModel",
          id: string,
          company?: string | null,
          name?: string | null,
          notes?: string | null,
          duration?: number | null,
          preCharter?: boolean | null,
          createdAt: string,
          updatedAt: string,
        },
        workflowModel:  {
          __typename: "WorkflowModel",
          id: string,
          company: string,
          name?: string | null,
          notes?: string | null,
          duration?: number | null,
          createdAt: string,
          updatedAt: string,
        },
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteWorkflowModelSubscriptionVariables = {
  filter?: ModelSubscriptionWorkflowModelFilterInput | null,
};

export type OnDeleteWorkflowModelSubscription = {
  onDeleteWorkflowModel?:  {
    __typename: "WorkflowModel",
    id: string,
    company: string,
    name?: string | null,
    notes?: string | null,
    duration?: number | null,
    checklists?:  {
      __typename: "ModelWorkflowChecklistsConnection",
      items:  Array< {
        __typename: "WorkflowChecklists",
        id: string,
        checklistModelId: string,
        workflowModelId: string,
        checklistModel:  {
          __typename: "ChecklistModel",
          id: string,
          company?: string | null,
          name?: string | null,
          notes?: string | null,
          duration?: number | null,
          preCharter?: boolean | null,
          createdAt: string,
          updatedAt: string,
        },
        workflowModel:  {
          __typename: "WorkflowModel",
          id: string,
          company: string,
          name?: string | null,
          notes?: string | null,
          duration?: number | null,
          createdAt: string,
          updatedAt: string,
        },
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateActionSubscriptionVariables = {
  filter?: ModelSubscriptionActionFilterInput | null,
};

export type OnCreateActionSubscription = {
  onCreateAction?:  {
    __typename: "Action",
    id: string,
    status?: boolean | null,
    model?:  {
      __typename: "ActionModel",
      id: string,
      company?: string | null,
      name?: string | null,
      notes?: string | null,
      duration?: number | null,
      checklists?:  {
        __typename: "ModelChecklistActionsConnection",
        items:  Array< {
          __typename: "ChecklistActions",
          id: string,
          actionModelId: string,
          checklistModelId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    actualStart?: string | null,
    actualEnd?: string | null,
    createdAt: string,
    updatedAt: string,
    actionModelId?: string | null,
  } | null,
};

export type OnUpdateActionSubscriptionVariables = {
  filter?: ModelSubscriptionActionFilterInput | null,
};

export type OnUpdateActionSubscription = {
  onUpdateAction?:  {
    __typename: "Action",
    id: string,
    status?: boolean | null,
    model?:  {
      __typename: "ActionModel",
      id: string,
      company?: string | null,
      name?: string | null,
      notes?: string | null,
      duration?: number | null,
      checklists?:  {
        __typename: "ModelChecklistActionsConnection",
        items:  Array< {
          __typename: "ChecklistActions",
          id: string,
          actionModelId: string,
          checklistModelId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    actualStart?: string | null,
    actualEnd?: string | null,
    createdAt: string,
    updatedAt: string,
    actionModelId?: string | null,
  } | null,
};

export type OnDeleteActionSubscriptionVariables = {
  filter?: ModelSubscriptionActionFilterInput | null,
};

export type OnDeleteActionSubscription = {
  onDeleteAction?:  {
    __typename: "Action",
    id: string,
    status?: boolean | null,
    model?:  {
      __typename: "ActionModel",
      id: string,
      company?: string | null,
      name?: string | null,
      notes?: string | null,
      duration?: number | null,
      checklists?:  {
        __typename: "ModelChecklistActionsConnection",
        items:  Array< {
          __typename: "ChecklistActions",
          id: string,
          actionModelId: string,
          checklistModelId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    actualStart?: string | null,
    actualEnd?: string | null,
    createdAt: string,
    updatedAt: string,
    actionModelId?: string | null,
  } | null,
};

export type OnCreateChecklistSubscriptionVariables = {
  filter?: ModelSubscriptionChecklistFilterInput | null,
};

export type OnCreateChecklistSubscription = {
  onCreateChecklist?:  {
    __typename: "Checklist",
    id: string,
    company?: string | null,
    owner?:  {
      __typename: "Staff",
      id: string,
      company?: string | null,
      name?: string | null,
      email?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    model?:  {
      __typename: "ChecklistModel",
      id: string,
      company?: string | null,
      name?: string | null,
      notes?: string | null,
      duration?: number | null,
      preCharter?: boolean | null,
      actions?:  {
        __typename: "ModelChecklistActionsConnection",
        items:  Array< {
          __typename: "ChecklistActions",
          id: string,
          actionModelId: string,
          checklistModelId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      workflows?:  {
        __typename: "ModelWorkflowChecklistsConnection",
        items:  Array< {
          __typename: "WorkflowChecklists",
          id: string,
          checklistModelId: string,
          workflowModelId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    start?: string | null,
    end?: string | null,
    createdAt: string,
    updatedAt: string,
    checklistOwnerId?: string | null,
    checklistModelId?: string | null,
  } | null,
};

export type OnUpdateChecklistSubscriptionVariables = {
  filter?: ModelSubscriptionChecklistFilterInput | null,
};

export type OnUpdateChecklistSubscription = {
  onUpdateChecklist?:  {
    __typename: "Checklist",
    id: string,
    company?: string | null,
    owner?:  {
      __typename: "Staff",
      id: string,
      company?: string | null,
      name?: string | null,
      email?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    model?:  {
      __typename: "ChecklistModel",
      id: string,
      company?: string | null,
      name?: string | null,
      notes?: string | null,
      duration?: number | null,
      preCharter?: boolean | null,
      actions?:  {
        __typename: "ModelChecklistActionsConnection",
        items:  Array< {
          __typename: "ChecklistActions",
          id: string,
          actionModelId: string,
          checklistModelId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      workflows?:  {
        __typename: "ModelWorkflowChecklistsConnection",
        items:  Array< {
          __typename: "WorkflowChecklists",
          id: string,
          checklistModelId: string,
          workflowModelId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    start?: string | null,
    end?: string | null,
    createdAt: string,
    updatedAt: string,
    checklistOwnerId?: string | null,
    checklistModelId?: string | null,
  } | null,
};

export type OnDeleteChecklistSubscriptionVariables = {
  filter?: ModelSubscriptionChecklistFilterInput | null,
};

export type OnDeleteChecklistSubscription = {
  onDeleteChecklist?:  {
    __typename: "Checklist",
    id: string,
    company?: string | null,
    owner?:  {
      __typename: "Staff",
      id: string,
      company?: string | null,
      name?: string | null,
      email?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    model?:  {
      __typename: "ChecklistModel",
      id: string,
      company?: string | null,
      name?: string | null,
      notes?: string | null,
      duration?: number | null,
      preCharter?: boolean | null,
      actions?:  {
        __typename: "ModelChecklistActionsConnection",
        items:  Array< {
          __typename: "ChecklistActions",
          id: string,
          actionModelId: string,
          checklistModelId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      workflows?:  {
        __typename: "ModelWorkflowChecklistsConnection",
        items:  Array< {
          __typename: "WorkflowChecklists",
          id: string,
          checklistModelId: string,
          workflowModelId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    start?: string | null,
    end?: string | null,
    createdAt: string,
    updatedAt: string,
    checklistOwnerId?: string | null,
    checklistModelId?: string | null,
  } | null,
};

export type OnCreateWorkflowSubscriptionVariables = {
  filter?: ModelSubscriptionWorkflowFilterInput | null,
};

export type OnCreateWorkflowSubscription = {
  onCreateWorkflow?:  {
    __typename: "Workflow",
    id: string,
    company: string,
    owner?:  {
      __typename: "Staff",
      id: string,
      company?: string | null,
      name?: string | null,
      email?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    steps?:  {
      __typename: "WorkflowModel",
      id: string,
      company: string,
      name?: string | null,
      notes?: string | null,
      duration?: number | null,
      checklists?:  {
        __typename: "ModelWorkflowChecklistsConnection",
        items:  Array< {
          __typename: "WorkflowChecklists",
          id: string,
          checklistModelId: string,
          workflowModelId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    start?: string | null,
    end?: string | null,
    createdAt: string,
    updatedAt: string,
    workflowOwnerId?: string | null,
    workflowStepsId?: string | null,
  } | null,
};

export type OnUpdateWorkflowSubscriptionVariables = {
  filter?: ModelSubscriptionWorkflowFilterInput | null,
};

export type OnUpdateWorkflowSubscription = {
  onUpdateWorkflow?:  {
    __typename: "Workflow",
    id: string,
    company: string,
    owner?:  {
      __typename: "Staff",
      id: string,
      company?: string | null,
      name?: string | null,
      email?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    steps?:  {
      __typename: "WorkflowModel",
      id: string,
      company: string,
      name?: string | null,
      notes?: string | null,
      duration?: number | null,
      checklists?:  {
        __typename: "ModelWorkflowChecklistsConnection",
        items:  Array< {
          __typename: "WorkflowChecklists",
          id: string,
          checklistModelId: string,
          workflowModelId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    start?: string | null,
    end?: string | null,
    createdAt: string,
    updatedAt: string,
    workflowOwnerId?: string | null,
    workflowStepsId?: string | null,
  } | null,
};

export type OnDeleteWorkflowSubscriptionVariables = {
  filter?: ModelSubscriptionWorkflowFilterInput | null,
};

export type OnDeleteWorkflowSubscription = {
  onDeleteWorkflow?:  {
    __typename: "Workflow",
    id: string,
    company: string,
    owner?:  {
      __typename: "Staff",
      id: string,
      company?: string | null,
      name?: string | null,
      email?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    steps?:  {
      __typename: "WorkflowModel",
      id: string,
      company: string,
      name?: string | null,
      notes?: string | null,
      duration?: number | null,
      checklists?:  {
        __typename: "ModelWorkflowChecklistsConnection",
        items:  Array< {
          __typename: "WorkflowChecklists",
          id: string,
          checklistModelId: string,
          workflowModelId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    start?: string | null,
    end?: string | null,
    createdAt: string,
    updatedAt: string,
    workflowOwnerId?: string | null,
    workflowStepsId?: string | null,
  } | null,
};

export type OnCreateChecklistActionsSubscriptionVariables = {
  filter?: ModelSubscriptionChecklistActionsFilterInput | null,
};

export type OnCreateChecklistActionsSubscription = {
  onCreateChecklistActions?:  {
    __typename: "ChecklistActions",
    id: string,
    actionModelId: string,
    checklistModelId: string,
    actionModel:  {
      __typename: "ActionModel",
      id: string,
      company?: string | null,
      name?: string | null,
      notes?: string | null,
      duration?: number | null,
      checklists?:  {
        __typename: "ModelChecklistActionsConnection",
        items:  Array< {
          __typename: "ChecklistActions",
          id: string,
          actionModelId: string,
          checklistModelId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    checklistModel:  {
      __typename: "ChecklistModel",
      id: string,
      company?: string | null,
      name?: string | null,
      notes?: string | null,
      duration?: number | null,
      preCharter?: boolean | null,
      actions?:  {
        __typename: "ModelChecklistActionsConnection",
        items:  Array< {
          __typename: "ChecklistActions",
          id: string,
          actionModelId: string,
          checklistModelId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      workflows?:  {
        __typename: "ModelWorkflowChecklistsConnection",
        items:  Array< {
          __typename: "WorkflowChecklists",
          id: string,
          checklistModelId: string,
          workflowModelId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateChecklistActionsSubscriptionVariables = {
  filter?: ModelSubscriptionChecklistActionsFilterInput | null,
};

export type OnUpdateChecklistActionsSubscription = {
  onUpdateChecklistActions?:  {
    __typename: "ChecklistActions",
    id: string,
    actionModelId: string,
    checklistModelId: string,
    actionModel:  {
      __typename: "ActionModel",
      id: string,
      company?: string | null,
      name?: string | null,
      notes?: string | null,
      duration?: number | null,
      checklists?:  {
        __typename: "ModelChecklistActionsConnection",
        items:  Array< {
          __typename: "ChecklistActions",
          id: string,
          actionModelId: string,
          checklistModelId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    checklistModel:  {
      __typename: "ChecklistModel",
      id: string,
      company?: string | null,
      name?: string | null,
      notes?: string | null,
      duration?: number | null,
      preCharter?: boolean | null,
      actions?:  {
        __typename: "ModelChecklistActionsConnection",
        items:  Array< {
          __typename: "ChecklistActions",
          id: string,
          actionModelId: string,
          checklistModelId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      workflows?:  {
        __typename: "ModelWorkflowChecklistsConnection",
        items:  Array< {
          __typename: "WorkflowChecklists",
          id: string,
          checklistModelId: string,
          workflowModelId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteChecklistActionsSubscriptionVariables = {
  filter?: ModelSubscriptionChecklistActionsFilterInput | null,
};

export type OnDeleteChecklistActionsSubscription = {
  onDeleteChecklistActions?:  {
    __typename: "ChecklistActions",
    id: string,
    actionModelId: string,
    checklistModelId: string,
    actionModel:  {
      __typename: "ActionModel",
      id: string,
      company?: string | null,
      name?: string | null,
      notes?: string | null,
      duration?: number | null,
      checklists?:  {
        __typename: "ModelChecklistActionsConnection",
        items:  Array< {
          __typename: "ChecklistActions",
          id: string,
          actionModelId: string,
          checklistModelId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    checklistModel:  {
      __typename: "ChecklistModel",
      id: string,
      company?: string | null,
      name?: string | null,
      notes?: string | null,
      duration?: number | null,
      preCharter?: boolean | null,
      actions?:  {
        __typename: "ModelChecklistActionsConnection",
        items:  Array< {
          __typename: "ChecklistActions",
          id: string,
          actionModelId: string,
          checklistModelId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      workflows?:  {
        __typename: "ModelWorkflowChecklistsConnection",
        items:  Array< {
          __typename: "WorkflowChecklists",
          id: string,
          checklistModelId: string,
          workflowModelId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateWorkflowChecklistsSubscriptionVariables = {
  filter?: ModelSubscriptionWorkflowChecklistsFilterInput | null,
};

export type OnCreateWorkflowChecklistsSubscription = {
  onCreateWorkflowChecklists?:  {
    __typename: "WorkflowChecklists",
    id: string,
    checklistModelId: string,
    workflowModelId: string,
    checklistModel:  {
      __typename: "ChecklistModel",
      id: string,
      company?: string | null,
      name?: string | null,
      notes?: string | null,
      duration?: number | null,
      preCharter?: boolean | null,
      actions?:  {
        __typename: "ModelChecklistActionsConnection",
        items:  Array< {
          __typename: "ChecklistActions",
          id: string,
          actionModelId: string,
          checklistModelId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      workflows?:  {
        __typename: "ModelWorkflowChecklistsConnection",
        items:  Array< {
          __typename: "WorkflowChecklists",
          id: string,
          checklistModelId: string,
          workflowModelId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    workflowModel:  {
      __typename: "WorkflowModel",
      id: string,
      company: string,
      name?: string | null,
      notes?: string | null,
      duration?: number | null,
      checklists?:  {
        __typename: "ModelWorkflowChecklistsConnection",
        items:  Array< {
          __typename: "WorkflowChecklists",
          id: string,
          checklistModelId: string,
          workflowModelId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateWorkflowChecklistsSubscriptionVariables = {
  filter?: ModelSubscriptionWorkflowChecklistsFilterInput | null,
};

export type OnUpdateWorkflowChecklistsSubscription = {
  onUpdateWorkflowChecklists?:  {
    __typename: "WorkflowChecklists",
    id: string,
    checklistModelId: string,
    workflowModelId: string,
    checklistModel:  {
      __typename: "ChecklistModel",
      id: string,
      company?: string | null,
      name?: string | null,
      notes?: string | null,
      duration?: number | null,
      preCharter?: boolean | null,
      actions?:  {
        __typename: "ModelChecklistActionsConnection",
        items:  Array< {
          __typename: "ChecklistActions",
          id: string,
          actionModelId: string,
          checklistModelId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      workflows?:  {
        __typename: "ModelWorkflowChecklistsConnection",
        items:  Array< {
          __typename: "WorkflowChecklists",
          id: string,
          checklistModelId: string,
          workflowModelId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    workflowModel:  {
      __typename: "WorkflowModel",
      id: string,
      company: string,
      name?: string | null,
      notes?: string | null,
      duration?: number | null,
      checklists?:  {
        __typename: "ModelWorkflowChecklistsConnection",
        items:  Array< {
          __typename: "WorkflowChecklists",
          id: string,
          checklistModelId: string,
          workflowModelId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteWorkflowChecklistsSubscriptionVariables = {
  filter?: ModelSubscriptionWorkflowChecklistsFilterInput | null,
};

export type OnDeleteWorkflowChecklistsSubscription = {
  onDeleteWorkflowChecklists?:  {
    __typename: "WorkflowChecklists",
    id: string,
    checklistModelId: string,
    workflowModelId: string,
    checklistModel:  {
      __typename: "ChecklistModel",
      id: string,
      company?: string | null,
      name?: string | null,
      notes?: string | null,
      duration?: number | null,
      preCharter?: boolean | null,
      actions?:  {
        __typename: "ModelChecklistActionsConnection",
        items:  Array< {
          __typename: "ChecklistActions",
          id: string,
          actionModelId: string,
          checklistModelId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      workflows?:  {
        __typename: "ModelWorkflowChecklistsConnection",
        items:  Array< {
          __typename: "WorkflowChecklists",
          id: string,
          checklistModelId: string,
          workflowModelId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    workflowModel:  {
      __typename: "WorkflowModel",
      id: string,
      company: string,
      name?: string | null,
      notes?: string | null,
      duration?: number | null,
      checklists?:  {
        __typename: "ModelWorkflowChecklistsConnection",
        items:  Array< {
          __typename: "WorkflowChecklists",
          id: string,
          checklistModelId: string,
          workflowModelId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};
