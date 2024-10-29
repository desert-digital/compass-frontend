/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreatePendingEventInput = {
  id?: string | null,
  company?: string | null,
  start?: string | null,
  end?: string | null,
  item?: string | null,
  item_id?: string | null,
  status?: string | null,
  contactEmail?: string | null,
  contactName?: string | null,
  contactPhone?: string | null,
};

export type ModelPendingEventConditionInput = {
  company?: ModelStringInput | null,
  start?: ModelStringInput | null,
  end?: ModelStringInput | null,
  item?: ModelStringInput | null,
  item_id?: ModelStringInput | null,
  status?: ModelStringInput | null,
  contactEmail?: ModelStringInput | null,
  contactName?: ModelStringInput | null,
  contactPhone?: ModelStringInput | null,
  and?: Array< ModelPendingEventConditionInput | null > | null,
  or?: Array< ModelPendingEventConditionInput | null > | null,
  not?: ModelPendingEventConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
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

export type PendingEvent = {
  __typename: "PendingEvent",
  id: string,
  company?: string | null,
  start?: string | null,
  end?: string | null,
  item?: string | null,
  item_id?: string | null,
  status?: string | null,
  contactEmail?: string | null,
  contactName?: string | null,
  contactPhone?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdatePendingEventInput = {
  id: string,
  company?: string | null,
  start?: string | null,
  end?: string | null,
  item?: string | null,
  item_id?: string | null,
  status?: string | null,
  contactEmail?: string | null,
  contactName?: string | null,
  contactPhone?: string | null,
};

export type DeletePendingEventInput = {
  id: string,
};

export type CreateServiceOrderInput = {
  id?: string | null,
  company?: string | null,
  items?: Array< string | null > | null,
  serviceOrderBoatId?: string | null,
};

export type ModelServiceOrderConditionInput = {
  company?: ModelStringInput | null,
  items?: ModelStringInput | null,
  and?: Array< ModelServiceOrderConditionInput | null > | null,
  or?: Array< ModelServiceOrderConditionInput | null > | null,
  not?: ModelServiceOrderConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  serviceOrderBoatId?: ModelIDInput | null,
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

export type ServiceOrder = {
  __typename: "ServiceOrder",
  id: string,
  company?: string | null,
  boat?: Vessel | null,
  items?: Array< string | null > | null,
  createdAt: string,
  updatedAt: string,
  serviceOrderBoatId?: string | null,
};

export type Vessel = {
  __typename: "Vessel",
  id: string,
  company: string,
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
  checklistModels?: ModelWorkflowChecklistsConnection | null,
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
  company: string,
  name?: string | null,
  notes?: string | null,
  duration?: number | null,
  preCharter?: boolean | null,
  actionModels?: ModelChecklistActionsConnection | null,
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
  company: string,
  name?: string | null,
  notes?: string | null,
  duration?: number | null,
  checklists?: ModelChecklistActionsConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateServiceOrderInput = {
  id: string,
  company?: string | null,
  items?: Array< string | null > | null,
  serviceOrderBoatId?: string | null,
};

export type DeleteServiceOrderInput = {
  id: string,
};

export type CreateInventoryItemInput = {
  id?: string | null,
  location?: string | null,
  description?: string | null,
  leadTime?: number | null,
  quantity?: number | null,
};

export type ModelInventoryItemConditionInput = {
  location?: ModelStringInput | null,
  description?: ModelStringInput | null,
  leadTime?: ModelIntInput | null,
  quantity?: ModelIntInput | null,
  and?: Array< ModelInventoryItemConditionInput | null > | null,
  or?: Array< ModelInventoryItemConditionInput | null > | null,
  not?: ModelInventoryItemConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
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

export type InventoryItem = {
  __typename: "InventoryItem",
  id: string,
  location?: string | null,
  description?: string | null,
  leadTime?: number | null,
  quantity?: number | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateInventoryItemInput = {
  id: string,
  location?: string | null,
  description?: string | null,
  leadTime?: number | null,
  quantity?: number | null,
};

export type DeleteInventoryItemInput = {
  id: string,
};

export type CreateVesselInput = {
  id?: string | null,
  company: string,
  name?: string | null,
  vesselType?: string | null,
  documentNumber?: string | null,
  ownerBoatsId?: string | null,
  vesselDefaultWorkflowId?: string | null,
};

export type ModelVesselConditionInput = {
  company?: ModelStringInput | null,
  name?: ModelStringInput | null,
  vesselType?: ModelStringInput | null,
  documentNumber?: ModelStringInput | null,
  and?: Array< ModelVesselConditionInput | null > | null,
  or?: Array< ModelVesselConditionInput | null > | null,
  not?: ModelVesselConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  ownerBoatsId?: ModelIDInput | null,
  vesselDefaultWorkflowId?: ModelIDInput | null,
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
  company: string,
  name?: string | null,
  email?: string | null,
  phone?: string | null,
  username?: string | null,
  role?: CompassUserRole | null,
};

export enum CompassUserRole {
  Admin = "Admin",
  OpsManager = "OpsManager",
  ServiceManager = "ServiceManager",
  Crew = "Crew",
}


export type ModelStaffConditionInput = {
  company?: ModelStringInput | null,
  name?: ModelStringInput | null,
  email?: ModelStringInput | null,
  phone?: ModelStringInput | null,
  username?: ModelStringInput | null,
  role?: ModelCompassUserRoleInput | null,
  and?: Array< ModelStaffConditionInput | null > | null,
  or?: Array< ModelStaffConditionInput | null > | null,
  not?: ModelStaffConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelCompassUserRoleInput = {
  eq?: CompassUserRole | null,
  ne?: CompassUserRole | null,
};

export type Staff = {
  __typename: "Staff",
  id: string,
  company: string,
  name?: string | null,
  email?: string | null,
  phone?: string | null,
  username?: string | null,
  role?: CompassUserRole | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateStaffInput = {
  id: string,
  company?: string | null,
  name?: string | null,
  email?: string | null,
  phone?: string | null,
  username?: string | null,
  role?: CompassUserRole | null,
};

export type DeleteStaffInput = {
  id: string,
};

export type CreateOwnerInput = {
  id?: string | null,
  company: string,
  name?: string | null,
  email?: string | null,
  phone?: string | null,
};

export type ModelOwnerConditionInput = {
  company?: ModelStringInput | null,
  name?: ModelStringInput | null,
  email?: ModelStringInput | null,
  phone?: ModelStringInput | null,
  and?: Array< ModelOwnerConditionInput | null > | null,
  or?: Array< ModelOwnerConditionInput | null > | null,
  not?: ModelOwnerConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type Owner = {
  __typename: "Owner",
  id: string,
  company: string,
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
  company: string,
  name?: string | null,
  notes?: string | null,
  duration?: number | null,
};

export type ModelActionModelConditionInput = {
  company?: ModelStringInput | null,
  name?: ModelStringInput | null,
  notes?: ModelStringInput | null,
  duration?: ModelIntInput | null,
  and?: Array< ModelActionModelConditionInput | null > | null,
  or?: Array< ModelActionModelConditionInput | null > | null,
  not?: ModelActionModelConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
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
  company: string,
  name?: string | null,
  notes?: string | null,
  duration?: number | null,
  preCharter?: boolean | null,
};

export type ModelChecklistModelConditionInput = {
  company?: ModelStringInput | null,
  name?: ModelStringInput | null,
  notes?: ModelStringInput | null,
  duration?: ModelIntInput | null,
  preCharter?: ModelBooleanInput | null,
  and?: Array< ModelChecklistModelConditionInput | null > | null,
  or?: Array< ModelChecklistModelConditionInput | null > | null,
  not?: ModelChecklistModelConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
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
  company?: ModelStringInput | null,
  name?: ModelStringInput | null,
  notes?: ModelStringInput | null,
  duration?: ModelIntInput | null,
  and?: Array< ModelWorkflowModelConditionInput | null > | null,
  or?: Array< ModelWorkflowModelConditionInput | null > | null,
  not?: ModelWorkflowModelConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
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
  company?: string | null,
  status?: boolean | null,
  name?: string | null,
  duration?: number | null,
  actualStart?: string | null,
  actualEnd?: string | null,
  checklistStepsId?: string | null,
};

export type ModelActionConditionInput = {
  company?: ModelStringInput | null,
  status?: ModelBooleanInput | null,
  name?: ModelStringInput | null,
  duration?: ModelIntInput | null,
  actualStart?: ModelStringInput | null,
  actualEnd?: ModelStringInput | null,
  and?: Array< ModelActionConditionInput | null > | null,
  or?: Array< ModelActionConditionInput | null > | null,
  not?: ModelActionConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  checklistStepsId?: ModelIDInput | null,
};

export type Action = {
  __typename: "Action",
  id: string,
  company?: string | null,
  status?: boolean | null,
  name?: string | null,
  duration?: number | null,
  actualStart?: string | null,
  actualEnd?: string | null,
  createdAt: string,
  updatedAt: string,
  checklistStepsId?: string | null,
};

export type UpdateActionInput = {
  id: string,
  company?: string | null,
  status?: boolean | null,
  name?: string | null,
  duration?: number | null,
  actualStart?: string | null,
  actualEnd?: string | null,
  checklistStepsId?: string | null,
};

export type DeleteActionInput = {
  id: string,
};

export type CreateChecklistInput = {
  id?: string | null,
  company: string,
  name?: string | null,
  duration?: number | null,
  mustStart?: string | null,
  mustEnd?: string | null,
  actualStart?: string | null,
  actualEnd?: string | null,
  workflowStepsId?: string | null,
  checklistOwnerId?: string | null,
};

export type ModelChecklistConditionInput = {
  company?: ModelStringInput | null,
  name?: ModelStringInput | null,
  duration?: ModelIntInput | null,
  mustStart?: ModelStringInput | null,
  mustEnd?: ModelStringInput | null,
  actualStart?: ModelStringInput | null,
  actualEnd?: ModelStringInput | null,
  and?: Array< ModelChecklistConditionInput | null > | null,
  or?: Array< ModelChecklistConditionInput | null > | null,
  not?: ModelChecklistConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  workflowStepsId?: ModelIDInput | null,
  checklistOwnerId?: ModelIDInput | null,
};

export type Checklist = {
  __typename: "Checklist",
  id: string,
  company: string,
  name?: string | null,
  duration?: number | null,
  owner?: Staff | null,
  steps?: ModelActionConnection | null,
  mustStart?: string | null,
  mustEnd?: string | null,
  actualStart?: string | null,
  actualEnd?: string | null,
  createdAt: string,
  updatedAt: string,
  workflowStepsId?: string | null,
  checklistOwnerId?: string | null,
};

export type ModelActionConnection = {
  __typename: "ModelActionConnection",
  items:  Array<Action | null >,
  nextToken?: string | null,
};

export type UpdateChecklistInput = {
  id: string,
  company?: string | null,
  name?: string | null,
  duration?: number | null,
  mustStart?: string | null,
  mustEnd?: string | null,
  actualStart?: string | null,
  actualEnd?: string | null,
  workflowStepsId?: string | null,
  checklistOwnerId?: string | null,
};

export type DeleteChecklistInput = {
  id: string,
};

export type CreateWorkflowInput = {
  id?: string | null,
  company: string,
  name?: string | null,
  duration?: number | null,
  mustStart?: string | null,
  mustEnd?: string | null,
  actualStart?: string | null,
  actualEnd?: string | null,
};

export type ModelWorkflowConditionInput = {
  company?: ModelStringInput | null,
  name?: ModelStringInput | null,
  duration?: ModelIntInput | null,
  mustStart?: ModelStringInput | null,
  mustEnd?: ModelStringInput | null,
  actualStart?: ModelStringInput | null,
  actualEnd?: ModelStringInput | null,
  and?: Array< ModelWorkflowConditionInput | null > | null,
  or?: Array< ModelWorkflowConditionInput | null > | null,
  not?: ModelWorkflowConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type Workflow = {
  __typename: "Workflow",
  id: string,
  company: string,
  name?: string | null,
  duration?: number | null,
  steps?: ModelChecklistConnection | null,
  mustStart?: string | null,
  mustEnd?: string | null,
  actualStart?: string | null,
  actualEnd?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelChecklistConnection = {
  __typename: "ModelChecklistConnection",
  items:  Array<Checklist | null >,
  nextToken?: string | null,
};

export type UpdateWorkflowInput = {
  id: string,
  company?: string | null,
  name?: string | null,
  duration?: number | null,
  mustStart?: string | null,
  mustEnd?: string | null,
  actualStart?: string | null,
  actualEnd?: string | null,
};

export type DeleteWorkflowInput = {
  id: string,
};

export type CreateMessageInput = {
  id?: string | null,
  toAddress: string,
  fromAddress: string,
  message: string,
  messageMessageChecklistId?: string | null,
};

export type ModelMessageConditionInput = {
  toAddress?: ModelStringInput | null,
  fromAddress?: ModelStringInput | null,
  message?: ModelStringInput | null,
  and?: Array< ModelMessageConditionInput | null > | null,
  or?: Array< ModelMessageConditionInput | null > | null,
  not?: ModelMessageConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  messageMessageChecklistId?: ModelIDInput | null,
};

export type Message = {
  __typename: "Message",
  id: string,
  toAddress: string,
  fromAddress: string,
  message: string,
  messageChecklist?: Checklist | null,
  createdAt: string,
  updatedAt: string,
  messageMessageChecklistId?: string | null,
};

export type UpdateMessageInput = {
  id: string,
  toAddress?: string | null,
  fromAddress?: string | null,
  message?: string | null,
  messageMessageChecklistId?: string | null,
};

export type DeleteMessageInput = {
  id: string,
};

export type CreateAppFlagInput = {
  id?: string | null,
  flag: string,
  value: string,
};

export type ModelAppFlagConditionInput = {
  flag?: ModelStringInput | null,
  value?: ModelStringInput | null,
  and?: Array< ModelAppFlagConditionInput | null > | null,
  or?: Array< ModelAppFlagConditionInput | null > | null,
  not?: ModelAppFlagConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type AppFlag = {
  __typename: "AppFlag",
  id: string,
  flag: string,
  value: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateAppFlagInput = {
  id: string,
  flag?: string | null,
  value?: string | null,
};

export type DeleteAppFlagInput = {
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
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
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
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
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
  company?: ModelStringInput | null,
  start?: ModelStringInput | null,
  end?: ModelStringInput | null,
  item?: ModelStringInput | null,
  item_id?: ModelStringInput | null,
  status?: ModelStringInput | null,
  contactEmail?: ModelStringInput | null,
  contactName?: ModelStringInput | null,
  contactPhone?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelPendingEventFilterInput | null > | null,
  or?: Array< ModelPendingEventFilterInput | null > | null,
  not?: ModelPendingEventFilterInput | null,
};

export type ModelPendingEventConnection = {
  __typename: "ModelPendingEventConnection",
  items:  Array<PendingEvent | null >,
  nextToken?: string | null,
};

export type ModelServiceOrderFilterInput = {
  id?: ModelIDInput | null,
  company?: ModelStringInput | null,
  items?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelServiceOrderFilterInput | null > | null,
  or?: Array< ModelServiceOrderFilterInput | null > | null,
  not?: ModelServiceOrderFilterInput | null,
  serviceOrderBoatId?: ModelIDInput | null,
};

export type ModelServiceOrderConnection = {
  __typename: "ModelServiceOrderConnection",
  items:  Array<ServiceOrder | null >,
  nextToken?: string | null,
};

export type ModelInventoryItemFilterInput = {
  id?: ModelIDInput | null,
  location?: ModelStringInput | null,
  description?: ModelStringInput | null,
  leadTime?: ModelIntInput | null,
  quantity?: ModelIntInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelInventoryItemFilterInput | null > | null,
  or?: Array< ModelInventoryItemFilterInput | null > | null,
  not?: ModelInventoryItemFilterInput | null,
};

export type ModelInventoryItemConnection = {
  __typename: "ModelInventoryItemConnection",
  items:  Array<InventoryItem | null >,
  nextToken?: string | null,
};

export type ModelVesselFilterInput = {
  id?: ModelIDInput | null,
  company?: ModelStringInput | null,
  name?: ModelStringInput | null,
  vesselType?: ModelStringInput | null,
  documentNumber?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelVesselFilterInput | null > | null,
  or?: Array< ModelVesselFilterInput | null > | null,
  not?: ModelVesselFilterInput | null,
  ownerBoatsId?: ModelIDInput | null,
  vesselDefaultWorkflowId?: ModelIDInput | null,
};

export type ModelStaffFilterInput = {
  id?: ModelIDInput | null,
  company?: ModelStringInput | null,
  name?: ModelStringInput | null,
  email?: ModelStringInput | null,
  phone?: ModelStringInput | null,
  username?: ModelStringInput | null,
  role?: ModelCompassUserRoleInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
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
  company?: ModelStringInput | null,
  name?: ModelStringInput | null,
  email?: ModelStringInput | null,
  phone?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
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
  company?: ModelStringInput | null,
  name?: ModelStringInput | null,
  notes?: ModelStringInput | null,
  duration?: ModelIntInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
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
  company?: ModelStringInput | null,
  name?: ModelStringInput | null,
  notes?: ModelStringInput | null,
  duration?: ModelIntInput | null,
  preCharter?: ModelBooleanInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
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
  company?: ModelStringInput | null,
  name?: ModelStringInput | null,
  notes?: ModelStringInput | null,
  duration?: ModelIntInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
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
  company?: ModelStringInput | null,
  status?: ModelBooleanInput | null,
  name?: ModelStringInput | null,
  duration?: ModelIntInput | null,
  actualStart?: ModelStringInput | null,
  actualEnd?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelActionFilterInput | null > | null,
  or?: Array< ModelActionFilterInput | null > | null,
  not?: ModelActionFilterInput | null,
  checklistStepsId?: ModelIDInput | null,
};

export type ModelChecklistFilterInput = {
  id?: ModelIDInput | null,
  company?: ModelStringInput | null,
  name?: ModelStringInput | null,
  duration?: ModelIntInput | null,
  mustStart?: ModelStringInput | null,
  mustEnd?: ModelStringInput | null,
  actualStart?: ModelStringInput | null,
  actualEnd?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelChecklistFilterInput | null > | null,
  or?: Array< ModelChecklistFilterInput | null > | null,
  not?: ModelChecklistFilterInput | null,
  workflowStepsId?: ModelIDInput | null,
  checklistOwnerId?: ModelIDInput | null,
};

export type ModelWorkflowFilterInput = {
  id?: ModelIDInput | null,
  company?: ModelStringInput | null,
  name?: ModelStringInput | null,
  duration?: ModelIntInput | null,
  mustStart?: ModelStringInput | null,
  mustEnd?: ModelStringInput | null,
  actualStart?: ModelStringInput | null,
  actualEnd?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelWorkflowFilterInput | null > | null,
  or?: Array< ModelWorkflowFilterInput | null > | null,
  not?: ModelWorkflowFilterInput | null,
};

export type ModelWorkflowConnection = {
  __typename: "ModelWorkflowConnection",
  items:  Array<Workflow | null >,
  nextToken?: string | null,
};

export type ModelMessageFilterInput = {
  id?: ModelIDInput | null,
  toAddress?: ModelStringInput | null,
  fromAddress?: ModelStringInput | null,
  message?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelMessageFilterInput | null > | null,
  or?: Array< ModelMessageFilterInput | null > | null,
  not?: ModelMessageFilterInput | null,
  messageMessageChecklistId?: ModelIDInput | null,
};

export type ModelMessageConnection = {
  __typename: "ModelMessageConnection",
  items:  Array<Message | null >,
  nextToken?: string | null,
};

export type ModelAppFlagFilterInput = {
  id?: ModelIDInput | null,
  flag?: ModelStringInput | null,
  value?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelAppFlagFilterInput | null > | null,
  or?: Array< ModelAppFlagFilterInput | null > | null,
  not?: ModelAppFlagFilterInput | null,
};

export type ModelAppFlagConnection = {
  __typename: "ModelAppFlagConnection",
  items:  Array<AppFlag | null >,
  nextToken?: string | null,
};

export type ModelChecklistActionsFilterInput = {
  id?: ModelIDInput | null,
  actionModelId?: ModelIDInput | null,
  checklistModelId?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelChecklistActionsFilterInput | null > | null,
  or?: Array< ModelChecklistActionsFilterInput | null > | null,
  not?: ModelChecklistActionsFilterInput | null,
};

export type ModelWorkflowChecklistsFilterInput = {
  id?: ModelIDInput | null,
  checklistModelId?: ModelIDInput | null,
  workflowModelId?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
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
  company?: ModelSubscriptionStringInput | null,
  start?: ModelSubscriptionStringInput | null,
  end?: ModelSubscriptionStringInput | null,
  item?: ModelSubscriptionStringInput | null,
  item_id?: ModelSubscriptionStringInput | null,
  status?: ModelSubscriptionStringInput | null,
  contactEmail?: ModelSubscriptionStringInput | null,
  contactName?: ModelSubscriptionStringInput | null,
  contactPhone?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
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

export type ModelSubscriptionServiceOrderFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  company?: ModelSubscriptionStringInput | null,
  items?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionServiceOrderFilterInput | null > | null,
  or?: Array< ModelSubscriptionServiceOrderFilterInput | null > | null,
  serviceOrderBoatId?: ModelSubscriptionIDInput | null,
};

export type ModelSubscriptionInventoryItemFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  location?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  leadTime?: ModelSubscriptionIntInput | null,
  quantity?: ModelSubscriptionIntInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionInventoryItemFilterInput | null > | null,
  or?: Array< ModelSubscriptionInventoryItemFilterInput | null > | null,
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

export type ModelSubscriptionVesselFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  company?: ModelSubscriptionStringInput | null,
  name?: ModelSubscriptionStringInput | null,
  vesselType?: ModelSubscriptionStringInput | null,
  documentNumber?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionVesselFilterInput | null > | null,
  or?: Array< ModelSubscriptionVesselFilterInput | null > | null,
  vesselDefaultWorkflowId?: ModelSubscriptionIDInput | null,
};

export type ModelSubscriptionStaffFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  company?: ModelSubscriptionStringInput | null,
  name?: ModelSubscriptionStringInput | null,
  email?: ModelSubscriptionStringInput | null,
  phone?: ModelSubscriptionStringInput | null,
  username?: ModelSubscriptionStringInput | null,
  role?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionStaffFilterInput | null > | null,
  or?: Array< ModelSubscriptionStaffFilterInput | null > | null,
};

export type ModelSubscriptionOwnerFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  company?: ModelSubscriptionStringInput | null,
  name?: ModelSubscriptionStringInput | null,
  email?: ModelSubscriptionStringInput | null,
  phone?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionOwnerFilterInput | null > | null,
  or?: Array< ModelSubscriptionOwnerFilterInput | null > | null,
  ownerBoatsId?: ModelSubscriptionIDInput | null,
};

export type ModelSubscriptionActionModelFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  company?: ModelSubscriptionStringInput | null,
  name?: ModelSubscriptionStringInput | null,
  notes?: ModelSubscriptionStringInput | null,
  duration?: ModelSubscriptionIntInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionActionModelFilterInput | null > | null,
  or?: Array< ModelSubscriptionActionModelFilterInput | null > | null,
};

export type ModelSubscriptionChecklistModelFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  company?: ModelSubscriptionStringInput | null,
  name?: ModelSubscriptionStringInput | null,
  notes?: ModelSubscriptionStringInput | null,
  duration?: ModelSubscriptionIntInput | null,
  preCharter?: ModelSubscriptionBooleanInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionChecklistModelFilterInput | null > | null,
  or?: Array< ModelSubscriptionChecklistModelFilterInput | null > | null,
};

export type ModelSubscriptionBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
};

export type ModelSubscriptionWorkflowModelFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  company?: ModelSubscriptionStringInput | null,
  name?: ModelSubscriptionStringInput | null,
  notes?: ModelSubscriptionStringInput | null,
  duration?: ModelSubscriptionIntInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionWorkflowModelFilterInput | null > | null,
  or?: Array< ModelSubscriptionWorkflowModelFilterInput | null > | null,
};

export type ModelSubscriptionActionFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  company?: ModelSubscriptionStringInput | null,
  status?: ModelSubscriptionBooleanInput | null,
  name?: ModelSubscriptionStringInput | null,
  duration?: ModelSubscriptionIntInput | null,
  actualStart?: ModelSubscriptionStringInput | null,
  actualEnd?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionActionFilterInput | null > | null,
  or?: Array< ModelSubscriptionActionFilterInput | null > | null,
};

export type ModelSubscriptionChecklistFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  company?: ModelSubscriptionStringInput | null,
  name?: ModelSubscriptionStringInput | null,
  duration?: ModelSubscriptionIntInput | null,
  mustStart?: ModelSubscriptionStringInput | null,
  mustEnd?: ModelSubscriptionStringInput | null,
  actualStart?: ModelSubscriptionStringInput | null,
  actualEnd?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionChecklistFilterInput | null > | null,
  or?: Array< ModelSubscriptionChecklistFilterInput | null > | null,
  checklistStepsId?: ModelSubscriptionIDInput | null,
  checklistOwnerId?: ModelSubscriptionIDInput | null,
};

export type ModelSubscriptionWorkflowFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  company?: ModelSubscriptionStringInput | null,
  name?: ModelSubscriptionStringInput | null,
  duration?: ModelSubscriptionIntInput | null,
  mustStart?: ModelSubscriptionStringInput | null,
  mustEnd?: ModelSubscriptionStringInput | null,
  actualStart?: ModelSubscriptionStringInput | null,
  actualEnd?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionWorkflowFilterInput | null > | null,
  or?: Array< ModelSubscriptionWorkflowFilterInput | null > | null,
  workflowStepsId?: ModelSubscriptionIDInput | null,
};

export type ModelSubscriptionMessageFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  toAddress?: ModelSubscriptionStringInput | null,
  fromAddress?: ModelSubscriptionStringInput | null,
  message?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionMessageFilterInput | null > | null,
  or?: Array< ModelSubscriptionMessageFilterInput | null > | null,
  messageMessageChecklistId?: ModelSubscriptionIDInput | null,
};

export type ModelSubscriptionAppFlagFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  flag?: ModelSubscriptionStringInput | null,
  value?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionAppFlagFilterInput | null > | null,
  or?: Array< ModelSubscriptionAppFlagFilterInput | null > | null,
};

export type ModelSubscriptionChecklistActionsFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  actionModelId?: ModelSubscriptionIDInput | null,
  checklistModelId?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionChecklistActionsFilterInput | null > | null,
  or?: Array< ModelSubscriptionChecklistActionsFilterInput | null > | null,
};

export type ModelSubscriptionWorkflowChecklistsFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  checklistModelId?: ModelSubscriptionIDInput | null,
  workflowModelId?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionWorkflowChecklistsFilterInput | null > | null,
  or?: Array< ModelSubscriptionWorkflowChecklistsFilterInput | null > | null,
};

export type StartWorkflowMutationVariables = {
  workflowId: string,
};

export type StartWorkflowMutation = {
  startWorkflow?: string | null,
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
    start?: string | null,
    end?: string | null,
    item?: string | null,
    item_id?: string | null,
    status?: string | null,
    contactEmail?: string | null,
    contactName?: string | null,
    contactPhone?: string | null,
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
    start?: string | null,
    end?: string | null,
    item?: string | null,
    item_id?: string | null,
    status?: string | null,
    contactEmail?: string | null,
    contactName?: string | null,
    contactPhone?: string | null,
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
    start?: string | null,
    end?: string | null,
    item?: string | null,
    item_id?: string | null,
    status?: string | null,
    contactEmail?: string | null,
    contactName?: string | null,
    contactPhone?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateServiceOrderMutationVariables = {
  input: CreateServiceOrderInput,
  condition?: ModelServiceOrderConditionInput | null,
};

export type CreateServiceOrderMutation = {
  createServiceOrder?:  {
    __typename: "ServiceOrder",
    id: string,
    company?: string | null,
    boat?:  {
      __typename: "Vessel",
      id: string,
      company: string,
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
        checklistModels?:  {
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
    } | null,
    items?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
    serviceOrderBoatId?: string | null,
  } | null,
};

export type UpdateServiceOrderMutationVariables = {
  input: UpdateServiceOrderInput,
  condition?: ModelServiceOrderConditionInput | null,
};

export type UpdateServiceOrderMutation = {
  updateServiceOrder?:  {
    __typename: "ServiceOrder",
    id: string,
    company?: string | null,
    boat?:  {
      __typename: "Vessel",
      id: string,
      company: string,
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
        checklistModels?:  {
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
    } | null,
    items?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
    serviceOrderBoatId?: string | null,
  } | null,
};

export type DeleteServiceOrderMutationVariables = {
  input: DeleteServiceOrderInput,
  condition?: ModelServiceOrderConditionInput | null,
};

export type DeleteServiceOrderMutation = {
  deleteServiceOrder?:  {
    __typename: "ServiceOrder",
    id: string,
    company?: string | null,
    boat?:  {
      __typename: "Vessel",
      id: string,
      company: string,
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
        checklistModels?:  {
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
    } | null,
    items?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
    serviceOrderBoatId?: string | null,
  } | null,
};

export type CreateInventoryItemMutationVariables = {
  input: CreateInventoryItemInput,
  condition?: ModelInventoryItemConditionInput | null,
};

export type CreateInventoryItemMutation = {
  createInventoryItem?:  {
    __typename: "InventoryItem",
    id: string,
    location?: string | null,
    description?: string | null,
    leadTime?: number | null,
    quantity?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateInventoryItemMutationVariables = {
  input: UpdateInventoryItemInput,
  condition?: ModelInventoryItemConditionInput | null,
};

export type UpdateInventoryItemMutation = {
  updateInventoryItem?:  {
    __typename: "InventoryItem",
    id: string,
    location?: string | null,
    description?: string | null,
    leadTime?: number | null,
    quantity?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteInventoryItemMutationVariables = {
  input: DeleteInventoryItemInput,
  condition?: ModelInventoryItemConditionInput | null,
};

export type DeleteInventoryItemMutation = {
  deleteInventoryItem?:  {
    __typename: "InventoryItem",
    id: string,
    location?: string | null,
    description?: string | null,
    leadTime?: number | null,
    quantity?: number | null,
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
    company: string,
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
      checklistModels?:  {
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
    company: string,
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
      checklistModels?:  {
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
    company: string,
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
      checklistModels?:  {
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
    company: string,
    name?: string | null,
    email?: string | null,
    phone?: string | null,
    username?: string | null,
    role?: CompassUserRole | null,
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
    company: string,
    name?: string | null,
    email?: string | null,
    phone?: string | null,
    username?: string | null,
    role?: CompassUserRole | null,
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
    company: string,
    name?: string | null,
    email?: string | null,
    phone?: string | null,
    username?: string | null,
    role?: CompassUserRole | null,
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
    company: string,
    name?: string | null,
    email?: string | null,
    phone?: string | null,
    boats?:  {
      __typename: "ModelVesselConnection",
      items:  Array< {
        __typename: "Vessel",
        id: string,
        company: string,
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
    company: string,
    name?: string | null,
    email?: string | null,
    phone?: string | null,
    boats?:  {
      __typename: "ModelVesselConnection",
      items:  Array< {
        __typename: "Vessel",
        id: string,
        company: string,
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
    company: string,
    name?: string | null,
    email?: string | null,
    phone?: string | null,
    boats?:  {
      __typename: "ModelVesselConnection",
      items:  Array< {
        __typename: "Vessel",
        id: string,
        company: string,
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
    company: string,
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
          company: string,
          name?: string | null,
          notes?: string | null,
          duration?: number | null,
          createdAt: string,
          updatedAt: string,
        },
        checklistModel:  {
          __typename: "ChecklistModel",
          id: string,
          company: string,
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
    company: string,
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
          company: string,
          name?: string | null,
          notes?: string | null,
          duration?: number | null,
          createdAt: string,
          updatedAt: string,
        },
        checklistModel:  {
          __typename: "ChecklistModel",
          id: string,
          company: string,
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
    company: string,
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
          company: string,
          name?: string | null,
          notes?: string | null,
          duration?: number | null,
          createdAt: string,
          updatedAt: string,
        },
        checklistModel:  {
          __typename: "ChecklistModel",
          id: string,
          company: string,
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
    company: string,
    name?: string | null,
    notes?: string | null,
    duration?: number | null,
    preCharter?: boolean | null,
    actionModels?:  {
      __typename: "ModelChecklistActionsConnection",
      items:  Array< {
        __typename: "ChecklistActions",
        id: string,
        actionModelId: string,
        checklistModelId: string,
        actionModel:  {
          __typename: "ActionModel",
          id: string,
          company: string,
          name?: string | null,
          notes?: string | null,
          duration?: number | null,
          createdAt: string,
          updatedAt: string,
        },
        checklistModel:  {
          __typename: "ChecklistModel",
          id: string,
          company: string,
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
          company: string,
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
    company: string,
    name?: string | null,
    notes?: string | null,
    duration?: number | null,
    preCharter?: boolean | null,
    actionModels?:  {
      __typename: "ModelChecklistActionsConnection",
      items:  Array< {
        __typename: "ChecklistActions",
        id: string,
        actionModelId: string,
        checklistModelId: string,
        actionModel:  {
          __typename: "ActionModel",
          id: string,
          company: string,
          name?: string | null,
          notes?: string | null,
          duration?: number | null,
          createdAt: string,
          updatedAt: string,
        },
        checklistModel:  {
          __typename: "ChecklistModel",
          id: string,
          company: string,
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
          company: string,
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
    company: string,
    name?: string | null,
    notes?: string | null,
    duration?: number | null,
    preCharter?: boolean | null,
    actionModels?:  {
      __typename: "ModelChecklistActionsConnection",
      items:  Array< {
        __typename: "ChecklistActions",
        id: string,
        actionModelId: string,
        checklistModelId: string,
        actionModel:  {
          __typename: "ActionModel",
          id: string,
          company: string,
          name?: string | null,
          notes?: string | null,
          duration?: number | null,
          createdAt: string,
          updatedAt: string,
        },
        checklistModel:  {
          __typename: "ChecklistModel",
          id: string,
          company: string,
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
          company: string,
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
    checklistModels?:  {
      __typename: "ModelWorkflowChecklistsConnection",
      items:  Array< {
        __typename: "WorkflowChecklists",
        id: string,
        checklistModelId: string,
        workflowModelId: string,
        checklistModel:  {
          __typename: "ChecklistModel",
          id: string,
          company: string,
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
    checklistModels?:  {
      __typename: "ModelWorkflowChecklistsConnection",
      items:  Array< {
        __typename: "WorkflowChecklists",
        id: string,
        checklistModelId: string,
        workflowModelId: string,
        checklistModel:  {
          __typename: "ChecklistModel",
          id: string,
          company: string,
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
    checklistModels?:  {
      __typename: "ModelWorkflowChecklistsConnection",
      items:  Array< {
        __typename: "WorkflowChecklists",
        id: string,
        checklistModelId: string,
        workflowModelId: string,
        checklistModel:  {
          __typename: "ChecklistModel",
          id: string,
          company: string,
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
    company?: string | null,
    status?: boolean | null,
    name?: string | null,
    duration?: number | null,
    actualStart?: string | null,
    actualEnd?: string | null,
    createdAt: string,
    updatedAt: string,
    checklistStepsId?: string | null,
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
    company?: string | null,
    status?: boolean | null,
    name?: string | null,
    duration?: number | null,
    actualStart?: string | null,
    actualEnd?: string | null,
    createdAt: string,
    updatedAt: string,
    checklistStepsId?: string | null,
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
    company?: string | null,
    status?: boolean | null,
    name?: string | null,
    duration?: number | null,
    actualStart?: string | null,
    actualEnd?: string | null,
    createdAt: string,
    updatedAt: string,
    checklistStepsId?: string | null,
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
    company: string,
    name?: string | null,
    duration?: number | null,
    owner?:  {
      __typename: "Staff",
      id: string,
      company: string,
      name?: string | null,
      email?: string | null,
      phone?: string | null,
      username?: string | null,
      role?: CompassUserRole | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    steps?:  {
      __typename: "ModelActionConnection",
      items:  Array< {
        __typename: "Action",
        id: string,
        company?: string | null,
        status?: boolean | null,
        name?: string | null,
        duration?: number | null,
        actualStart?: string | null,
        actualEnd?: string | null,
        createdAt: string,
        updatedAt: string,
        checklistStepsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    mustStart?: string | null,
    mustEnd?: string | null,
    actualStart?: string | null,
    actualEnd?: string | null,
    createdAt: string,
    updatedAt: string,
    workflowStepsId?: string | null,
    checklistOwnerId?: string | null,
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
    company: string,
    name?: string | null,
    duration?: number | null,
    owner?:  {
      __typename: "Staff",
      id: string,
      company: string,
      name?: string | null,
      email?: string | null,
      phone?: string | null,
      username?: string | null,
      role?: CompassUserRole | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    steps?:  {
      __typename: "ModelActionConnection",
      items:  Array< {
        __typename: "Action",
        id: string,
        company?: string | null,
        status?: boolean | null,
        name?: string | null,
        duration?: number | null,
        actualStart?: string | null,
        actualEnd?: string | null,
        createdAt: string,
        updatedAt: string,
        checklistStepsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    mustStart?: string | null,
    mustEnd?: string | null,
    actualStart?: string | null,
    actualEnd?: string | null,
    createdAt: string,
    updatedAt: string,
    workflowStepsId?: string | null,
    checklistOwnerId?: string | null,
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
    company: string,
    name?: string | null,
    duration?: number | null,
    owner?:  {
      __typename: "Staff",
      id: string,
      company: string,
      name?: string | null,
      email?: string | null,
      phone?: string | null,
      username?: string | null,
      role?: CompassUserRole | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    steps?:  {
      __typename: "ModelActionConnection",
      items:  Array< {
        __typename: "Action",
        id: string,
        company?: string | null,
        status?: boolean | null,
        name?: string | null,
        duration?: number | null,
        actualStart?: string | null,
        actualEnd?: string | null,
        createdAt: string,
        updatedAt: string,
        checklistStepsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    mustStart?: string | null,
    mustEnd?: string | null,
    actualStart?: string | null,
    actualEnd?: string | null,
    createdAt: string,
    updatedAt: string,
    workflowStepsId?: string | null,
    checklistOwnerId?: string | null,
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
    name?: string | null,
    duration?: number | null,
    steps?:  {
      __typename: "ModelChecklistConnection",
      items:  Array< {
        __typename: "Checklist",
        id: string,
        company: string,
        name?: string | null,
        duration?: number | null,
        owner?:  {
          __typename: "Staff",
          id: string,
          company: string,
          name?: string | null,
          email?: string | null,
          phone?: string | null,
          username?: string | null,
          role?: CompassUserRole | null,
          createdAt: string,
          updatedAt: string,
        } | null,
        steps?:  {
          __typename: "ModelActionConnection",
          nextToken?: string | null,
        } | null,
        mustStart?: string | null,
        mustEnd?: string | null,
        actualStart?: string | null,
        actualEnd?: string | null,
        createdAt: string,
        updatedAt: string,
        workflowStepsId?: string | null,
        checklistOwnerId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    mustStart?: string | null,
    mustEnd?: string | null,
    actualStart?: string | null,
    actualEnd?: string | null,
    createdAt: string,
    updatedAt: string,
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
    name?: string | null,
    duration?: number | null,
    steps?:  {
      __typename: "ModelChecklistConnection",
      items:  Array< {
        __typename: "Checklist",
        id: string,
        company: string,
        name?: string | null,
        duration?: number | null,
        owner?:  {
          __typename: "Staff",
          id: string,
          company: string,
          name?: string | null,
          email?: string | null,
          phone?: string | null,
          username?: string | null,
          role?: CompassUserRole | null,
          createdAt: string,
          updatedAt: string,
        } | null,
        steps?:  {
          __typename: "ModelActionConnection",
          nextToken?: string | null,
        } | null,
        mustStart?: string | null,
        mustEnd?: string | null,
        actualStart?: string | null,
        actualEnd?: string | null,
        createdAt: string,
        updatedAt: string,
        workflowStepsId?: string | null,
        checklistOwnerId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    mustStart?: string | null,
    mustEnd?: string | null,
    actualStart?: string | null,
    actualEnd?: string | null,
    createdAt: string,
    updatedAt: string,
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
    name?: string | null,
    duration?: number | null,
    steps?:  {
      __typename: "ModelChecklistConnection",
      items:  Array< {
        __typename: "Checklist",
        id: string,
        company: string,
        name?: string | null,
        duration?: number | null,
        owner?:  {
          __typename: "Staff",
          id: string,
          company: string,
          name?: string | null,
          email?: string | null,
          phone?: string | null,
          username?: string | null,
          role?: CompassUserRole | null,
          createdAt: string,
          updatedAt: string,
        } | null,
        steps?:  {
          __typename: "ModelActionConnection",
          nextToken?: string | null,
        } | null,
        mustStart?: string | null,
        mustEnd?: string | null,
        actualStart?: string | null,
        actualEnd?: string | null,
        createdAt: string,
        updatedAt: string,
        workflowStepsId?: string | null,
        checklistOwnerId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    mustStart?: string | null,
    mustEnd?: string | null,
    actualStart?: string | null,
    actualEnd?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateMessageMutationVariables = {
  input: CreateMessageInput,
  condition?: ModelMessageConditionInput | null,
};

export type CreateMessageMutation = {
  createMessage?:  {
    __typename: "Message",
    id: string,
    toAddress: string,
    fromAddress: string,
    message: string,
    messageChecklist?:  {
      __typename: "Checklist",
      id: string,
      company: string,
      name?: string | null,
      duration?: number | null,
      owner?:  {
        __typename: "Staff",
        id: string,
        company: string,
        name?: string | null,
        email?: string | null,
        phone?: string | null,
        username?: string | null,
        role?: CompassUserRole | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      steps?:  {
        __typename: "ModelActionConnection",
        items:  Array< {
          __typename: "Action",
          id: string,
          company?: string | null,
          status?: boolean | null,
          name?: string | null,
          duration?: number | null,
          actualStart?: string | null,
          actualEnd?: string | null,
          createdAt: string,
          updatedAt: string,
          checklistStepsId?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      mustStart?: string | null,
      mustEnd?: string | null,
      actualStart?: string | null,
      actualEnd?: string | null,
      createdAt: string,
      updatedAt: string,
      workflowStepsId?: string | null,
      checklistOwnerId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    messageMessageChecklistId?: string | null,
  } | null,
};

export type UpdateMessageMutationVariables = {
  input: UpdateMessageInput,
  condition?: ModelMessageConditionInput | null,
};

export type UpdateMessageMutation = {
  updateMessage?:  {
    __typename: "Message",
    id: string,
    toAddress: string,
    fromAddress: string,
    message: string,
    messageChecklist?:  {
      __typename: "Checklist",
      id: string,
      company: string,
      name?: string | null,
      duration?: number | null,
      owner?:  {
        __typename: "Staff",
        id: string,
        company: string,
        name?: string | null,
        email?: string | null,
        phone?: string | null,
        username?: string | null,
        role?: CompassUserRole | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      steps?:  {
        __typename: "ModelActionConnection",
        items:  Array< {
          __typename: "Action",
          id: string,
          company?: string | null,
          status?: boolean | null,
          name?: string | null,
          duration?: number | null,
          actualStart?: string | null,
          actualEnd?: string | null,
          createdAt: string,
          updatedAt: string,
          checklistStepsId?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      mustStart?: string | null,
      mustEnd?: string | null,
      actualStart?: string | null,
      actualEnd?: string | null,
      createdAt: string,
      updatedAt: string,
      workflowStepsId?: string | null,
      checklistOwnerId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    messageMessageChecklistId?: string | null,
  } | null,
};

export type DeleteMessageMutationVariables = {
  input: DeleteMessageInput,
  condition?: ModelMessageConditionInput | null,
};

export type DeleteMessageMutation = {
  deleteMessage?:  {
    __typename: "Message",
    id: string,
    toAddress: string,
    fromAddress: string,
    message: string,
    messageChecklist?:  {
      __typename: "Checklist",
      id: string,
      company: string,
      name?: string | null,
      duration?: number | null,
      owner?:  {
        __typename: "Staff",
        id: string,
        company: string,
        name?: string | null,
        email?: string | null,
        phone?: string | null,
        username?: string | null,
        role?: CompassUserRole | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      steps?:  {
        __typename: "ModelActionConnection",
        items:  Array< {
          __typename: "Action",
          id: string,
          company?: string | null,
          status?: boolean | null,
          name?: string | null,
          duration?: number | null,
          actualStart?: string | null,
          actualEnd?: string | null,
          createdAt: string,
          updatedAt: string,
          checklistStepsId?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      mustStart?: string | null,
      mustEnd?: string | null,
      actualStart?: string | null,
      actualEnd?: string | null,
      createdAt: string,
      updatedAt: string,
      workflowStepsId?: string | null,
      checklistOwnerId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    messageMessageChecklistId?: string | null,
  } | null,
};

export type CreateAppFlagMutationVariables = {
  input: CreateAppFlagInput,
  condition?: ModelAppFlagConditionInput | null,
};

export type CreateAppFlagMutation = {
  createAppFlag?:  {
    __typename: "AppFlag",
    id: string,
    flag: string,
    value: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateAppFlagMutationVariables = {
  input: UpdateAppFlagInput,
  condition?: ModelAppFlagConditionInput | null,
};

export type UpdateAppFlagMutation = {
  updateAppFlag?:  {
    __typename: "AppFlag",
    id: string,
    flag: string,
    value: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteAppFlagMutationVariables = {
  input: DeleteAppFlagInput,
  condition?: ModelAppFlagConditionInput | null,
};

export type DeleteAppFlagMutation = {
  deleteAppFlag?:  {
    __typename: "AppFlag",
    id: string,
    flag: string,
    value: string,
    createdAt: string,
    updatedAt: string,
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
      company: string,
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
      company: string,
      name?: string | null,
      notes?: string | null,
      duration?: number | null,
      preCharter?: boolean | null,
      actionModels?:  {
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
      company: string,
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
      company: string,
      name?: string | null,
      notes?: string | null,
      duration?: number | null,
      preCharter?: boolean | null,
      actionModels?:  {
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
      company: string,
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
      company: string,
      name?: string | null,
      notes?: string | null,
      duration?: number | null,
      preCharter?: boolean | null,
      actionModels?:  {
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
      company: string,
      name?: string | null,
      notes?: string | null,
      duration?: number | null,
      preCharter?: boolean | null,
      actionModels?:  {
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
      checklistModels?:  {
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
      company: string,
      name?: string | null,
      notes?: string | null,
      duration?: number | null,
      preCharter?: boolean | null,
      actionModels?:  {
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
      checklistModels?:  {
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
      company: string,
      name?: string | null,
      notes?: string | null,
      duration?: number | null,
      preCharter?: boolean | null,
      actionModels?:  {
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
      checklistModels?:  {
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
    start?: string | null,
    end?: string | null,
    item?: string | null,
    item_id?: string | null,
    status?: string | null,
    contactEmail?: string | null,
    contactName?: string | null,
    contactPhone?: string | null,
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
      start?: string | null,
      end?: string | null,
      item?: string | null,
      item_id?: string | null,
      status?: string | null,
      contactEmail?: string | null,
      contactName?: string | null,
      contactPhone?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetServiceOrderQueryVariables = {
  id: string,
};

export type GetServiceOrderQuery = {
  getServiceOrder?:  {
    __typename: "ServiceOrder",
    id: string,
    company?: string | null,
    boat?:  {
      __typename: "Vessel",
      id: string,
      company: string,
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
        checklistModels?:  {
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
    } | null,
    items?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
    serviceOrderBoatId?: string | null,
  } | null,
};

export type ListServiceOrdersQueryVariables = {
  filter?: ModelServiceOrderFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListServiceOrdersQuery = {
  listServiceOrders?:  {
    __typename: "ModelServiceOrderConnection",
    items:  Array< {
      __typename: "ServiceOrder",
      id: string,
      company?: string | null,
      boat?:  {
        __typename: "Vessel",
        id: string,
        company: string,
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
      } | null,
      items?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
      serviceOrderBoatId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetInventoryItemQueryVariables = {
  id: string,
};

export type GetInventoryItemQuery = {
  getInventoryItem?:  {
    __typename: "InventoryItem",
    id: string,
    location?: string | null,
    description?: string | null,
    leadTime?: number | null,
    quantity?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListInventoryItemsQueryVariables = {
  filter?: ModelInventoryItemFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListInventoryItemsQuery = {
  listInventoryItems?:  {
    __typename: "ModelInventoryItemConnection",
    items:  Array< {
      __typename: "InventoryItem",
      id: string,
      location?: string | null,
      description?: string | null,
      leadTime?: number | null,
      quantity?: number | null,
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
    company: string,
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
      checklistModels?:  {
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
      company: string,
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
        checklistModels?:  {
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
    company: string,
    name?: string | null,
    email?: string | null,
    phone?: string | null,
    username?: string | null,
    role?: CompassUserRole | null,
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
      company: string,
      name?: string | null,
      email?: string | null,
      phone?: string | null,
      username?: string | null,
      role?: CompassUserRole | null,
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
    company: string,
    name?: string | null,
    email?: string | null,
    phone?: string | null,
    boats?:  {
      __typename: "ModelVesselConnection",
      items:  Array< {
        __typename: "Vessel",
        id: string,
        company: string,
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
      company: string,
      name?: string | null,
      email?: string | null,
      phone?: string | null,
      boats?:  {
        __typename: "ModelVesselConnection",
        items:  Array< {
          __typename: "Vessel",
          id: string,
          company: string,
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
    company: string,
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
          company: string,
          name?: string | null,
          notes?: string | null,
          duration?: number | null,
          createdAt: string,
          updatedAt: string,
        },
        checklistModel:  {
          __typename: "ChecklistModel",
          id: string,
          company: string,
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
      company: string,
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
    company: string,
    name?: string | null,
    notes?: string | null,
    duration?: number | null,
    preCharter?: boolean | null,
    actionModels?:  {
      __typename: "ModelChecklistActionsConnection",
      items:  Array< {
        __typename: "ChecklistActions",
        id: string,
        actionModelId: string,
        checklistModelId: string,
        actionModel:  {
          __typename: "ActionModel",
          id: string,
          company: string,
          name?: string | null,
          notes?: string | null,
          duration?: number | null,
          createdAt: string,
          updatedAt: string,
        },
        checklistModel:  {
          __typename: "ChecklistModel",
          id: string,
          company: string,
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
          company: string,
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
      company: string,
      name?: string | null,
      notes?: string | null,
      duration?: number | null,
      preCharter?: boolean | null,
      actionModels?:  {
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
    checklistModels?:  {
      __typename: "ModelWorkflowChecklistsConnection",
      items:  Array< {
        __typename: "WorkflowChecklists",
        id: string,
        checklistModelId: string,
        workflowModelId: string,
        checklistModel:  {
          __typename: "ChecklistModel",
          id: string,
          company: string,
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
      checklistModels?:  {
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
    company?: string | null,
    status?: boolean | null,
    name?: string | null,
    duration?: number | null,
    actualStart?: string | null,
    actualEnd?: string | null,
    createdAt: string,
    updatedAt: string,
    checklistStepsId?: string | null,
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
      company?: string | null,
      status?: boolean | null,
      name?: string | null,
      duration?: number | null,
      actualStart?: string | null,
      actualEnd?: string | null,
      createdAt: string,
      updatedAt: string,
      checklistStepsId?: string | null,
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
    company: string,
    name?: string | null,
    duration?: number | null,
    owner?:  {
      __typename: "Staff",
      id: string,
      company: string,
      name?: string | null,
      email?: string | null,
      phone?: string | null,
      username?: string | null,
      role?: CompassUserRole | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    steps?:  {
      __typename: "ModelActionConnection",
      items:  Array< {
        __typename: "Action",
        id: string,
        company?: string | null,
        status?: boolean | null,
        name?: string | null,
        duration?: number | null,
        actualStart?: string | null,
        actualEnd?: string | null,
        createdAt: string,
        updatedAt: string,
        checklistStepsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    mustStart?: string | null,
    mustEnd?: string | null,
    actualStart?: string | null,
    actualEnd?: string | null,
    createdAt: string,
    updatedAt: string,
    workflowStepsId?: string | null,
    checklistOwnerId?: string | null,
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
      company: string,
      name?: string | null,
      duration?: number | null,
      owner?:  {
        __typename: "Staff",
        id: string,
        company: string,
        name?: string | null,
        email?: string | null,
        phone?: string | null,
        username?: string | null,
        role?: CompassUserRole | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      steps?:  {
        __typename: "ModelActionConnection",
        items:  Array< {
          __typename: "Action",
          id: string,
          company?: string | null,
          status?: boolean | null,
          name?: string | null,
          duration?: number | null,
          actualStart?: string | null,
          actualEnd?: string | null,
          createdAt: string,
          updatedAt: string,
          checklistStepsId?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      mustStart?: string | null,
      mustEnd?: string | null,
      actualStart?: string | null,
      actualEnd?: string | null,
      createdAt: string,
      updatedAt: string,
      workflowStepsId?: string | null,
      checklistOwnerId?: string | null,
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
    name?: string | null,
    duration?: number | null,
    steps?:  {
      __typename: "ModelChecklistConnection",
      items:  Array< {
        __typename: "Checklist",
        id: string,
        company: string,
        name?: string | null,
        duration?: number | null,
        owner?:  {
          __typename: "Staff",
          id: string,
          company: string,
          name?: string | null,
          email?: string | null,
          phone?: string | null,
          username?: string | null,
          role?: CompassUserRole | null,
          createdAt: string,
          updatedAt: string,
        } | null,
        steps?:  {
          __typename: "ModelActionConnection",
          nextToken?: string | null,
        } | null,
        mustStart?: string | null,
        mustEnd?: string | null,
        actualStart?: string | null,
        actualEnd?: string | null,
        createdAt: string,
        updatedAt: string,
        workflowStepsId?: string | null,
        checklistOwnerId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    mustStart?: string | null,
    mustEnd?: string | null,
    actualStart?: string | null,
    actualEnd?: string | null,
    createdAt: string,
    updatedAt: string,
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
      name?: string | null,
      duration?: number | null,
      steps?:  {
        __typename: "ModelChecklistConnection",
        items:  Array< {
          __typename: "Checklist",
          id: string,
          company: string,
          name?: string | null,
          duration?: number | null,
          mustStart?: string | null,
          mustEnd?: string | null,
          actualStart?: string | null,
          actualEnd?: string | null,
          createdAt: string,
          updatedAt: string,
          workflowStepsId?: string | null,
          checklistOwnerId?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      mustStart?: string | null,
      mustEnd?: string | null,
      actualStart?: string | null,
      actualEnd?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetMessageQueryVariables = {
  id: string,
};

export type GetMessageQuery = {
  getMessage?:  {
    __typename: "Message",
    id: string,
    toAddress: string,
    fromAddress: string,
    message: string,
    messageChecklist?:  {
      __typename: "Checklist",
      id: string,
      company: string,
      name?: string | null,
      duration?: number | null,
      owner?:  {
        __typename: "Staff",
        id: string,
        company: string,
        name?: string | null,
        email?: string | null,
        phone?: string | null,
        username?: string | null,
        role?: CompassUserRole | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      steps?:  {
        __typename: "ModelActionConnection",
        items:  Array< {
          __typename: "Action",
          id: string,
          company?: string | null,
          status?: boolean | null,
          name?: string | null,
          duration?: number | null,
          actualStart?: string | null,
          actualEnd?: string | null,
          createdAt: string,
          updatedAt: string,
          checklistStepsId?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      mustStart?: string | null,
      mustEnd?: string | null,
      actualStart?: string | null,
      actualEnd?: string | null,
      createdAt: string,
      updatedAt: string,
      workflowStepsId?: string | null,
      checklistOwnerId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    messageMessageChecklistId?: string | null,
  } | null,
};

export type ListMessagesQueryVariables = {
  filter?: ModelMessageFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListMessagesQuery = {
  listMessages?:  {
    __typename: "ModelMessageConnection",
    items:  Array< {
      __typename: "Message",
      id: string,
      toAddress: string,
      fromAddress: string,
      message: string,
      messageChecklist?:  {
        __typename: "Checklist",
        id: string,
        company: string,
        name?: string | null,
        duration?: number | null,
        owner?:  {
          __typename: "Staff",
          id: string,
          company: string,
          name?: string | null,
          email?: string | null,
          phone?: string | null,
          username?: string | null,
          role?: CompassUserRole | null,
          createdAt: string,
          updatedAt: string,
        } | null,
        steps?:  {
          __typename: "ModelActionConnection",
          nextToken?: string | null,
        } | null,
        mustStart?: string | null,
        mustEnd?: string | null,
        actualStart?: string | null,
        actualEnd?: string | null,
        createdAt: string,
        updatedAt: string,
        workflowStepsId?: string | null,
        checklistOwnerId?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      messageMessageChecklistId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetAppFlagQueryVariables = {
  id: string,
};

export type GetAppFlagQuery = {
  getAppFlag?:  {
    __typename: "AppFlag",
    id: string,
    flag: string,
    value: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListAppFlagsQueryVariables = {
  filter?: ModelAppFlagFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListAppFlagsQuery = {
  listAppFlags?:  {
    __typename: "ModelAppFlagConnection",
    items:  Array< {
      __typename: "AppFlag",
      id: string,
      flag: string,
      value: string,
      createdAt: string,
      updatedAt: string,
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
      company: string,
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
      company: string,
      name?: string | null,
      notes?: string | null,
      duration?: number | null,
      preCharter?: boolean | null,
      actionModels?:  {
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
        company: string,
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
        company: string,
        name?: string | null,
        notes?: string | null,
        duration?: number | null,
        preCharter?: boolean | null,
        actionModels?:  {
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
      company: string,
      name?: string | null,
      notes?: string | null,
      duration?: number | null,
      preCharter?: boolean | null,
      actionModels?:  {
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
      checklistModels?:  {
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
        company: string,
        name?: string | null,
        notes?: string | null,
        duration?: number | null,
        preCharter?: boolean | null,
        actionModels?:  {
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
        checklistModels?:  {
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

export type GetStaffByUserNameQueryVariables = {
  username: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelStaffFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type GetStaffByUserNameQuery = {
  getStaffByUserName?:  {
    __typename: "ModelStaffConnection",
    items:  Array< {
      __typename: "Staff",
      id: string,
      company: string,
      name?: string | null,
      email?: string | null,
      phone?: string | null,
      username?: string | null,
      role?: CompassUserRole | null,
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
        company: string,
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
        company: string,
        name?: string | null,
        notes?: string | null,
        duration?: number | null,
        preCharter?: boolean | null,
        actionModels?:  {
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
        company: string,
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
        company: string,
        name?: string | null,
        notes?: string | null,
        duration?: number | null,
        preCharter?: boolean | null,
        actionModels?:  {
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
        company: string,
        name?: string | null,
        notes?: string | null,
        duration?: number | null,
        preCharter?: boolean | null,
        actionModels?:  {
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
        checklistModels?:  {
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
        company: string,
        name?: string | null,
        notes?: string | null,
        duration?: number | null,
        preCharter?: boolean | null,
        actionModels?:  {
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
        checklistModels?:  {
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
    start?: string | null,
    end?: string | null,
    item?: string | null,
    item_id?: string | null,
    status?: string | null,
    contactEmail?: string | null,
    contactName?: string | null,
    contactPhone?: string | null,
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
    start?: string | null,
    end?: string | null,
    item?: string | null,
    item_id?: string | null,
    status?: string | null,
    contactEmail?: string | null,
    contactName?: string | null,
    contactPhone?: string | null,
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
    start?: string | null,
    end?: string | null,
    item?: string | null,
    item_id?: string | null,
    status?: string | null,
    contactEmail?: string | null,
    contactName?: string | null,
    contactPhone?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateServiceOrderSubscriptionVariables = {
  filter?: ModelSubscriptionServiceOrderFilterInput | null,
};

export type OnCreateServiceOrderSubscription = {
  onCreateServiceOrder?:  {
    __typename: "ServiceOrder",
    id: string,
    company?: string | null,
    boat?:  {
      __typename: "Vessel",
      id: string,
      company: string,
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
        checklistModels?:  {
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
    } | null,
    items?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
    serviceOrderBoatId?: string | null,
  } | null,
};

export type OnUpdateServiceOrderSubscriptionVariables = {
  filter?: ModelSubscriptionServiceOrderFilterInput | null,
};

export type OnUpdateServiceOrderSubscription = {
  onUpdateServiceOrder?:  {
    __typename: "ServiceOrder",
    id: string,
    company?: string | null,
    boat?:  {
      __typename: "Vessel",
      id: string,
      company: string,
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
        checklistModels?:  {
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
    } | null,
    items?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
    serviceOrderBoatId?: string | null,
  } | null,
};

export type OnDeleteServiceOrderSubscriptionVariables = {
  filter?: ModelSubscriptionServiceOrderFilterInput | null,
};

export type OnDeleteServiceOrderSubscription = {
  onDeleteServiceOrder?:  {
    __typename: "ServiceOrder",
    id: string,
    company?: string | null,
    boat?:  {
      __typename: "Vessel",
      id: string,
      company: string,
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
        checklistModels?:  {
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
    } | null,
    items?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
    serviceOrderBoatId?: string | null,
  } | null,
};

export type OnCreateInventoryItemSubscriptionVariables = {
  filter?: ModelSubscriptionInventoryItemFilterInput | null,
};

export type OnCreateInventoryItemSubscription = {
  onCreateInventoryItem?:  {
    __typename: "InventoryItem",
    id: string,
    location?: string | null,
    description?: string | null,
    leadTime?: number | null,
    quantity?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateInventoryItemSubscriptionVariables = {
  filter?: ModelSubscriptionInventoryItemFilterInput | null,
};

export type OnUpdateInventoryItemSubscription = {
  onUpdateInventoryItem?:  {
    __typename: "InventoryItem",
    id: string,
    location?: string | null,
    description?: string | null,
    leadTime?: number | null,
    quantity?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteInventoryItemSubscriptionVariables = {
  filter?: ModelSubscriptionInventoryItemFilterInput | null,
};

export type OnDeleteInventoryItemSubscription = {
  onDeleteInventoryItem?:  {
    __typename: "InventoryItem",
    id: string,
    location?: string | null,
    description?: string | null,
    leadTime?: number | null,
    quantity?: number | null,
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
    company: string,
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
      checklistModels?:  {
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
    company: string,
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
      checklistModels?:  {
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
    company: string,
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
      checklistModels?:  {
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
    company: string,
    name?: string | null,
    email?: string | null,
    phone?: string | null,
    username?: string | null,
    role?: CompassUserRole | null,
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
    company: string,
    name?: string | null,
    email?: string | null,
    phone?: string | null,
    username?: string | null,
    role?: CompassUserRole | null,
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
    company: string,
    name?: string | null,
    email?: string | null,
    phone?: string | null,
    username?: string | null,
    role?: CompassUserRole | null,
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
    company: string,
    name?: string | null,
    email?: string | null,
    phone?: string | null,
    boats?:  {
      __typename: "ModelVesselConnection",
      items:  Array< {
        __typename: "Vessel",
        id: string,
        company: string,
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
    company: string,
    name?: string | null,
    email?: string | null,
    phone?: string | null,
    boats?:  {
      __typename: "ModelVesselConnection",
      items:  Array< {
        __typename: "Vessel",
        id: string,
        company: string,
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
    company: string,
    name?: string | null,
    email?: string | null,
    phone?: string | null,
    boats?:  {
      __typename: "ModelVesselConnection",
      items:  Array< {
        __typename: "Vessel",
        id: string,
        company: string,
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
    company: string,
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
          company: string,
          name?: string | null,
          notes?: string | null,
          duration?: number | null,
          createdAt: string,
          updatedAt: string,
        },
        checklistModel:  {
          __typename: "ChecklistModel",
          id: string,
          company: string,
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
    company: string,
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
          company: string,
          name?: string | null,
          notes?: string | null,
          duration?: number | null,
          createdAt: string,
          updatedAt: string,
        },
        checklistModel:  {
          __typename: "ChecklistModel",
          id: string,
          company: string,
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
    company: string,
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
          company: string,
          name?: string | null,
          notes?: string | null,
          duration?: number | null,
          createdAt: string,
          updatedAt: string,
        },
        checklistModel:  {
          __typename: "ChecklistModel",
          id: string,
          company: string,
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
    company: string,
    name?: string | null,
    notes?: string | null,
    duration?: number | null,
    preCharter?: boolean | null,
    actionModels?:  {
      __typename: "ModelChecklistActionsConnection",
      items:  Array< {
        __typename: "ChecklistActions",
        id: string,
        actionModelId: string,
        checklistModelId: string,
        actionModel:  {
          __typename: "ActionModel",
          id: string,
          company: string,
          name?: string | null,
          notes?: string | null,
          duration?: number | null,
          createdAt: string,
          updatedAt: string,
        },
        checklistModel:  {
          __typename: "ChecklistModel",
          id: string,
          company: string,
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
          company: string,
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
    company: string,
    name?: string | null,
    notes?: string | null,
    duration?: number | null,
    preCharter?: boolean | null,
    actionModels?:  {
      __typename: "ModelChecklistActionsConnection",
      items:  Array< {
        __typename: "ChecklistActions",
        id: string,
        actionModelId: string,
        checklistModelId: string,
        actionModel:  {
          __typename: "ActionModel",
          id: string,
          company: string,
          name?: string | null,
          notes?: string | null,
          duration?: number | null,
          createdAt: string,
          updatedAt: string,
        },
        checklistModel:  {
          __typename: "ChecklistModel",
          id: string,
          company: string,
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
          company: string,
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
    company: string,
    name?: string | null,
    notes?: string | null,
    duration?: number | null,
    preCharter?: boolean | null,
    actionModels?:  {
      __typename: "ModelChecklistActionsConnection",
      items:  Array< {
        __typename: "ChecklistActions",
        id: string,
        actionModelId: string,
        checklistModelId: string,
        actionModel:  {
          __typename: "ActionModel",
          id: string,
          company: string,
          name?: string | null,
          notes?: string | null,
          duration?: number | null,
          createdAt: string,
          updatedAt: string,
        },
        checklistModel:  {
          __typename: "ChecklistModel",
          id: string,
          company: string,
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
          company: string,
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
    checklistModels?:  {
      __typename: "ModelWorkflowChecklistsConnection",
      items:  Array< {
        __typename: "WorkflowChecklists",
        id: string,
        checklistModelId: string,
        workflowModelId: string,
        checklistModel:  {
          __typename: "ChecklistModel",
          id: string,
          company: string,
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
    checklistModels?:  {
      __typename: "ModelWorkflowChecklistsConnection",
      items:  Array< {
        __typename: "WorkflowChecklists",
        id: string,
        checklistModelId: string,
        workflowModelId: string,
        checklistModel:  {
          __typename: "ChecklistModel",
          id: string,
          company: string,
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
    checklistModels?:  {
      __typename: "ModelWorkflowChecklistsConnection",
      items:  Array< {
        __typename: "WorkflowChecklists",
        id: string,
        checklistModelId: string,
        workflowModelId: string,
        checklistModel:  {
          __typename: "ChecklistModel",
          id: string,
          company: string,
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
    company?: string | null,
    status?: boolean | null,
    name?: string | null,
    duration?: number | null,
    actualStart?: string | null,
    actualEnd?: string | null,
    createdAt: string,
    updatedAt: string,
    checklistStepsId?: string | null,
  } | null,
};

export type OnUpdateActionSubscriptionVariables = {
  filter?: ModelSubscriptionActionFilterInput | null,
};

export type OnUpdateActionSubscription = {
  onUpdateAction?:  {
    __typename: "Action",
    id: string,
    company?: string | null,
    status?: boolean | null,
    name?: string | null,
    duration?: number | null,
    actualStart?: string | null,
    actualEnd?: string | null,
    createdAt: string,
    updatedAt: string,
    checklistStepsId?: string | null,
  } | null,
};

export type OnDeleteActionSubscriptionVariables = {
  filter?: ModelSubscriptionActionFilterInput | null,
};

export type OnDeleteActionSubscription = {
  onDeleteAction?:  {
    __typename: "Action",
    id: string,
    company?: string | null,
    status?: boolean | null,
    name?: string | null,
    duration?: number | null,
    actualStart?: string | null,
    actualEnd?: string | null,
    createdAt: string,
    updatedAt: string,
    checklistStepsId?: string | null,
  } | null,
};

export type OnCreateChecklistSubscriptionVariables = {
  filter?: ModelSubscriptionChecklistFilterInput | null,
};

export type OnCreateChecklistSubscription = {
  onCreateChecklist?:  {
    __typename: "Checklist",
    id: string,
    company: string,
    name?: string | null,
    duration?: number | null,
    owner?:  {
      __typename: "Staff",
      id: string,
      company: string,
      name?: string | null,
      email?: string | null,
      phone?: string | null,
      username?: string | null,
      role?: CompassUserRole | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    steps?:  {
      __typename: "ModelActionConnection",
      items:  Array< {
        __typename: "Action",
        id: string,
        company?: string | null,
        status?: boolean | null,
        name?: string | null,
        duration?: number | null,
        actualStart?: string | null,
        actualEnd?: string | null,
        createdAt: string,
        updatedAt: string,
        checklistStepsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    mustStart?: string | null,
    mustEnd?: string | null,
    actualStart?: string | null,
    actualEnd?: string | null,
    createdAt: string,
    updatedAt: string,
    workflowStepsId?: string | null,
    checklistOwnerId?: string | null,
  } | null,
};

export type OnUpdateChecklistSubscriptionVariables = {
  filter?: ModelSubscriptionChecklistFilterInput | null,
};

export type OnUpdateChecklistSubscription = {
  onUpdateChecklist?:  {
    __typename: "Checklist",
    id: string,
    company: string,
    name?: string | null,
    duration?: number | null,
    owner?:  {
      __typename: "Staff",
      id: string,
      company: string,
      name?: string | null,
      email?: string | null,
      phone?: string | null,
      username?: string | null,
      role?: CompassUserRole | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    steps?:  {
      __typename: "ModelActionConnection",
      items:  Array< {
        __typename: "Action",
        id: string,
        company?: string | null,
        status?: boolean | null,
        name?: string | null,
        duration?: number | null,
        actualStart?: string | null,
        actualEnd?: string | null,
        createdAt: string,
        updatedAt: string,
        checklistStepsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    mustStart?: string | null,
    mustEnd?: string | null,
    actualStart?: string | null,
    actualEnd?: string | null,
    createdAt: string,
    updatedAt: string,
    workflowStepsId?: string | null,
    checklistOwnerId?: string | null,
  } | null,
};

export type OnDeleteChecklistSubscriptionVariables = {
  filter?: ModelSubscriptionChecklistFilterInput | null,
};

export type OnDeleteChecklistSubscription = {
  onDeleteChecklist?:  {
    __typename: "Checklist",
    id: string,
    company: string,
    name?: string | null,
    duration?: number | null,
    owner?:  {
      __typename: "Staff",
      id: string,
      company: string,
      name?: string | null,
      email?: string | null,
      phone?: string | null,
      username?: string | null,
      role?: CompassUserRole | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    steps?:  {
      __typename: "ModelActionConnection",
      items:  Array< {
        __typename: "Action",
        id: string,
        company?: string | null,
        status?: boolean | null,
        name?: string | null,
        duration?: number | null,
        actualStart?: string | null,
        actualEnd?: string | null,
        createdAt: string,
        updatedAt: string,
        checklistStepsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    mustStart?: string | null,
    mustEnd?: string | null,
    actualStart?: string | null,
    actualEnd?: string | null,
    createdAt: string,
    updatedAt: string,
    workflowStepsId?: string | null,
    checklistOwnerId?: string | null,
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
    name?: string | null,
    duration?: number | null,
    steps?:  {
      __typename: "ModelChecklistConnection",
      items:  Array< {
        __typename: "Checklist",
        id: string,
        company: string,
        name?: string | null,
        duration?: number | null,
        owner?:  {
          __typename: "Staff",
          id: string,
          company: string,
          name?: string | null,
          email?: string | null,
          phone?: string | null,
          username?: string | null,
          role?: CompassUserRole | null,
          createdAt: string,
          updatedAt: string,
        } | null,
        steps?:  {
          __typename: "ModelActionConnection",
          nextToken?: string | null,
        } | null,
        mustStart?: string | null,
        mustEnd?: string | null,
        actualStart?: string | null,
        actualEnd?: string | null,
        createdAt: string,
        updatedAt: string,
        workflowStepsId?: string | null,
        checklistOwnerId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    mustStart?: string | null,
    mustEnd?: string | null,
    actualStart?: string | null,
    actualEnd?: string | null,
    createdAt: string,
    updatedAt: string,
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
    name?: string | null,
    duration?: number | null,
    steps?:  {
      __typename: "ModelChecklistConnection",
      items:  Array< {
        __typename: "Checklist",
        id: string,
        company: string,
        name?: string | null,
        duration?: number | null,
        owner?:  {
          __typename: "Staff",
          id: string,
          company: string,
          name?: string | null,
          email?: string | null,
          phone?: string | null,
          username?: string | null,
          role?: CompassUserRole | null,
          createdAt: string,
          updatedAt: string,
        } | null,
        steps?:  {
          __typename: "ModelActionConnection",
          nextToken?: string | null,
        } | null,
        mustStart?: string | null,
        mustEnd?: string | null,
        actualStart?: string | null,
        actualEnd?: string | null,
        createdAt: string,
        updatedAt: string,
        workflowStepsId?: string | null,
        checklistOwnerId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    mustStart?: string | null,
    mustEnd?: string | null,
    actualStart?: string | null,
    actualEnd?: string | null,
    createdAt: string,
    updatedAt: string,
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
    name?: string | null,
    duration?: number | null,
    steps?:  {
      __typename: "ModelChecklistConnection",
      items:  Array< {
        __typename: "Checklist",
        id: string,
        company: string,
        name?: string | null,
        duration?: number | null,
        owner?:  {
          __typename: "Staff",
          id: string,
          company: string,
          name?: string | null,
          email?: string | null,
          phone?: string | null,
          username?: string | null,
          role?: CompassUserRole | null,
          createdAt: string,
          updatedAt: string,
        } | null,
        steps?:  {
          __typename: "ModelActionConnection",
          nextToken?: string | null,
        } | null,
        mustStart?: string | null,
        mustEnd?: string | null,
        actualStart?: string | null,
        actualEnd?: string | null,
        createdAt: string,
        updatedAt: string,
        workflowStepsId?: string | null,
        checklistOwnerId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    mustStart?: string | null,
    mustEnd?: string | null,
    actualStart?: string | null,
    actualEnd?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateMessageSubscriptionVariables = {
  filter?: ModelSubscriptionMessageFilterInput | null,
};

export type OnCreateMessageSubscription = {
  onCreateMessage?:  {
    __typename: "Message",
    id: string,
    toAddress: string,
    fromAddress: string,
    message: string,
    messageChecklist?:  {
      __typename: "Checklist",
      id: string,
      company: string,
      name?: string | null,
      duration?: number | null,
      owner?:  {
        __typename: "Staff",
        id: string,
        company: string,
        name?: string | null,
        email?: string | null,
        phone?: string | null,
        username?: string | null,
        role?: CompassUserRole | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      steps?:  {
        __typename: "ModelActionConnection",
        items:  Array< {
          __typename: "Action",
          id: string,
          company?: string | null,
          status?: boolean | null,
          name?: string | null,
          duration?: number | null,
          actualStart?: string | null,
          actualEnd?: string | null,
          createdAt: string,
          updatedAt: string,
          checklistStepsId?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      mustStart?: string | null,
      mustEnd?: string | null,
      actualStart?: string | null,
      actualEnd?: string | null,
      createdAt: string,
      updatedAt: string,
      workflowStepsId?: string | null,
      checklistOwnerId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    messageMessageChecklistId?: string | null,
  } | null,
};

export type OnUpdateMessageSubscriptionVariables = {
  filter?: ModelSubscriptionMessageFilterInput | null,
};

export type OnUpdateMessageSubscription = {
  onUpdateMessage?:  {
    __typename: "Message",
    id: string,
    toAddress: string,
    fromAddress: string,
    message: string,
    messageChecklist?:  {
      __typename: "Checklist",
      id: string,
      company: string,
      name?: string | null,
      duration?: number | null,
      owner?:  {
        __typename: "Staff",
        id: string,
        company: string,
        name?: string | null,
        email?: string | null,
        phone?: string | null,
        username?: string | null,
        role?: CompassUserRole | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      steps?:  {
        __typename: "ModelActionConnection",
        items:  Array< {
          __typename: "Action",
          id: string,
          company?: string | null,
          status?: boolean | null,
          name?: string | null,
          duration?: number | null,
          actualStart?: string | null,
          actualEnd?: string | null,
          createdAt: string,
          updatedAt: string,
          checklistStepsId?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      mustStart?: string | null,
      mustEnd?: string | null,
      actualStart?: string | null,
      actualEnd?: string | null,
      createdAt: string,
      updatedAt: string,
      workflowStepsId?: string | null,
      checklistOwnerId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    messageMessageChecklistId?: string | null,
  } | null,
};

export type OnDeleteMessageSubscriptionVariables = {
  filter?: ModelSubscriptionMessageFilterInput | null,
};

export type OnDeleteMessageSubscription = {
  onDeleteMessage?:  {
    __typename: "Message",
    id: string,
    toAddress: string,
    fromAddress: string,
    message: string,
    messageChecklist?:  {
      __typename: "Checklist",
      id: string,
      company: string,
      name?: string | null,
      duration?: number | null,
      owner?:  {
        __typename: "Staff",
        id: string,
        company: string,
        name?: string | null,
        email?: string | null,
        phone?: string | null,
        username?: string | null,
        role?: CompassUserRole | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      steps?:  {
        __typename: "ModelActionConnection",
        items:  Array< {
          __typename: "Action",
          id: string,
          company?: string | null,
          status?: boolean | null,
          name?: string | null,
          duration?: number | null,
          actualStart?: string | null,
          actualEnd?: string | null,
          createdAt: string,
          updatedAt: string,
          checklistStepsId?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      mustStart?: string | null,
      mustEnd?: string | null,
      actualStart?: string | null,
      actualEnd?: string | null,
      createdAt: string,
      updatedAt: string,
      workflowStepsId?: string | null,
      checklistOwnerId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    messageMessageChecklistId?: string | null,
  } | null,
};

export type OnCreateAppFlagSubscriptionVariables = {
  filter?: ModelSubscriptionAppFlagFilterInput | null,
};

export type OnCreateAppFlagSubscription = {
  onCreateAppFlag?:  {
    __typename: "AppFlag",
    id: string,
    flag: string,
    value: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateAppFlagSubscriptionVariables = {
  filter?: ModelSubscriptionAppFlagFilterInput | null,
};

export type OnUpdateAppFlagSubscription = {
  onUpdateAppFlag?:  {
    __typename: "AppFlag",
    id: string,
    flag: string,
    value: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteAppFlagSubscriptionVariables = {
  filter?: ModelSubscriptionAppFlagFilterInput | null,
};

export type OnDeleteAppFlagSubscription = {
  onDeleteAppFlag?:  {
    __typename: "AppFlag",
    id: string,
    flag: string,
    value: string,
    createdAt: string,
    updatedAt: string,
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
      company: string,
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
      company: string,
      name?: string | null,
      notes?: string | null,
      duration?: number | null,
      preCharter?: boolean | null,
      actionModels?:  {
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
      company: string,
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
      company: string,
      name?: string | null,
      notes?: string | null,
      duration?: number | null,
      preCharter?: boolean | null,
      actionModels?:  {
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
      company: string,
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
      company: string,
      name?: string | null,
      notes?: string | null,
      duration?: number | null,
      preCharter?: boolean | null,
      actionModels?:  {
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
      company: string,
      name?: string | null,
      notes?: string | null,
      duration?: number | null,
      preCharter?: boolean | null,
      actionModels?:  {
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
      checklistModels?:  {
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
      company: string,
      name?: string | null,
      notes?: string | null,
      duration?: number | null,
      preCharter?: boolean | null,
      actionModels?:  {
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
      checklistModels?:  {
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
      company: string,
      name?: string | null,
      notes?: string | null,
      duration?: number | null,
      preCharter?: boolean | null,
      actionModels?:  {
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
      checklistModels?:  {
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
