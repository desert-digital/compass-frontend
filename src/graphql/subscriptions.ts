/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateCompassUser = /* GraphQL */ `subscription OnCreateCompassUser(
  $filter: ModelSubscriptionCompassUserFilterInput
) {
  onCreateCompassUser(filter: $filter) {
    id
    company
    userName
    roles {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateCompassUserSubscriptionVariables,
  APITypes.OnCreateCompassUserSubscription
>;
export const onUpdateCompassUser = /* GraphQL */ `subscription OnUpdateCompassUser(
  $filter: ModelSubscriptionCompassUserFilterInput
) {
  onUpdateCompassUser(filter: $filter) {
    id
    company
    userName
    roles {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateCompassUserSubscriptionVariables,
  APITypes.OnUpdateCompassUserSubscription
>;
export const onDeleteCompassUser = /* GraphQL */ `subscription OnDeleteCompassUser(
  $filter: ModelSubscriptionCompassUserFilterInput
) {
  onDeleteCompassUser(filter: $filter) {
    id
    company
    userName
    roles {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteCompassUserSubscriptionVariables,
  APITypes.OnDeleteCompassUserSubscription
>;
export const onCreateCompassUserRole = /* GraphQL */ `subscription OnCreateCompassUserRole(
  $filter: ModelSubscriptionCompassUserRoleFilterInput
) {
  onCreateCompassUserRole(filter: $filter) {
    id
    company
    roleName
    createdAt
    updatedAt
    compassUserRolesId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateCompassUserRoleSubscriptionVariables,
  APITypes.OnCreateCompassUserRoleSubscription
>;
export const onUpdateCompassUserRole = /* GraphQL */ `subscription OnUpdateCompassUserRole(
  $filter: ModelSubscriptionCompassUserRoleFilterInput
) {
  onUpdateCompassUserRole(filter: $filter) {
    id
    company
    roleName
    createdAt
    updatedAt
    compassUserRolesId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateCompassUserRoleSubscriptionVariables,
  APITypes.OnUpdateCompassUserRoleSubscription
>;
export const onDeleteCompassUserRole = /* GraphQL */ `subscription OnDeleteCompassUserRole(
  $filter: ModelSubscriptionCompassUserRoleFilterInput
) {
  onDeleteCompassUserRole(filter: $filter) {
    id
    company
    roleName
    createdAt
    updatedAt
    compassUserRolesId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteCompassUserRoleSubscriptionVariables,
  APITypes.OnDeleteCompassUserRoleSubscription
>;
export const onCreatePendingEvent = /* GraphQL */ `subscription OnCreatePendingEvent(
  $filter: ModelSubscriptionPendingEventFilterInput
) {
  onCreatePendingEvent(filter: $filter) {
    id
    company
    start
    end
    item
    item_id
    status
    contactEmail
    contactName
    contactPhone
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreatePendingEventSubscriptionVariables,
  APITypes.OnCreatePendingEventSubscription
>;
export const onUpdatePendingEvent = /* GraphQL */ `subscription OnUpdatePendingEvent(
  $filter: ModelSubscriptionPendingEventFilterInput
) {
  onUpdatePendingEvent(filter: $filter) {
    id
    company
    start
    end
    item
    item_id
    status
    contactEmail
    contactName
    contactPhone
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdatePendingEventSubscriptionVariables,
  APITypes.OnUpdatePendingEventSubscription
>;
export const onDeletePendingEvent = /* GraphQL */ `subscription OnDeletePendingEvent(
  $filter: ModelSubscriptionPendingEventFilterInput
) {
  onDeletePendingEvent(filter: $filter) {
    id
    company
    start
    end
    item
    item_id
    status
    contactEmail
    contactName
    contactPhone
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeletePendingEventSubscriptionVariables,
  APITypes.OnDeletePendingEventSubscription
>;
export const onCreateServiceOrder = /* GraphQL */ `subscription OnCreateServiceOrder(
  $filter: ModelSubscriptionServiceOrderFilterInput
) {
  onCreateServiceOrder(filter: $filter) {
    id
    company
    boat {
      id
      company
      name
      vesselType
      documentNumber
      createdAt
      updatedAt
      ownerBoatsId
      vesselDefaultWorkflowId
      __typename
    }
    items
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateServiceOrderSubscriptionVariables,
  APITypes.OnCreateServiceOrderSubscription
>;
export const onUpdateServiceOrder = /* GraphQL */ `subscription OnUpdateServiceOrder(
  $filter: ModelSubscriptionServiceOrderFilterInput
) {
  onUpdateServiceOrder(filter: $filter) {
    id
    company
    boat {
      id
      company
      name
      vesselType
      documentNumber
      createdAt
      updatedAt
      ownerBoatsId
      vesselDefaultWorkflowId
      __typename
    }
    items
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateServiceOrderSubscriptionVariables,
  APITypes.OnUpdateServiceOrderSubscription
>;
export const onDeleteServiceOrder = /* GraphQL */ `subscription OnDeleteServiceOrder(
  $filter: ModelSubscriptionServiceOrderFilterInput
) {
  onDeleteServiceOrder(filter: $filter) {
    id
    company
    boat {
      id
      company
      name
      vesselType
      documentNumber
      createdAt
      updatedAt
      ownerBoatsId
      vesselDefaultWorkflowId
      __typename
    }
    items
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteServiceOrderSubscriptionVariables,
  APITypes.OnDeleteServiceOrderSubscription
>;
export const onCreateInventoryItem = /* GraphQL */ `subscription OnCreateInventoryItem(
  $filter: ModelSubscriptionInventoryItemFilterInput
) {
  onCreateInventoryItem(filter: $filter) {
    id
    location
    description
    leadTime
    quantity
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateInventoryItemSubscriptionVariables,
  APITypes.OnCreateInventoryItemSubscription
>;
export const onUpdateInventoryItem = /* GraphQL */ `subscription OnUpdateInventoryItem(
  $filter: ModelSubscriptionInventoryItemFilterInput
) {
  onUpdateInventoryItem(filter: $filter) {
    id
    location
    description
    leadTime
    quantity
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateInventoryItemSubscriptionVariables,
  APITypes.OnUpdateInventoryItemSubscription
>;
export const onDeleteInventoryItem = /* GraphQL */ `subscription OnDeleteInventoryItem(
  $filter: ModelSubscriptionInventoryItemFilterInput
) {
  onDeleteInventoryItem(filter: $filter) {
    id
    location
    description
    leadTime
    quantity
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteInventoryItemSubscriptionVariables,
  APITypes.OnDeleteInventoryItemSubscription
>;
export const onCreateVessel = /* GraphQL */ `subscription OnCreateVessel($filter: ModelSubscriptionVesselFilterInput) {
  onCreateVessel(filter: $filter) {
    id
    company
    name
    vesselType
    documentNumber
    defaultWorkflow {
      id
      company
      name
      notes
      duration
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    ownerBoatsId
    vesselDefaultWorkflowId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateVesselSubscriptionVariables,
  APITypes.OnCreateVesselSubscription
>;
export const onUpdateVessel = /* GraphQL */ `subscription OnUpdateVessel($filter: ModelSubscriptionVesselFilterInput) {
  onUpdateVessel(filter: $filter) {
    id
    company
    name
    vesselType
    documentNumber
    defaultWorkflow {
      id
      company
      name
      notes
      duration
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    ownerBoatsId
    vesselDefaultWorkflowId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateVesselSubscriptionVariables,
  APITypes.OnUpdateVesselSubscription
>;
export const onDeleteVessel = /* GraphQL */ `subscription OnDeleteVessel($filter: ModelSubscriptionVesselFilterInput) {
  onDeleteVessel(filter: $filter) {
    id
    company
    name
    vesselType
    documentNumber
    defaultWorkflow {
      id
      company
      name
      notes
      duration
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    ownerBoatsId
    vesselDefaultWorkflowId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteVesselSubscriptionVariables,
  APITypes.OnDeleteVesselSubscription
>;
export const onCreateStaff = /* GraphQL */ `subscription OnCreateStaff($filter: ModelSubscriptionStaffFilterInput) {
  onCreateStaff(filter: $filter) {
    id
    company
    name
    email
    phone
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateStaffSubscriptionVariables,
  APITypes.OnCreateStaffSubscription
>;
export const onUpdateStaff = /* GraphQL */ `subscription OnUpdateStaff($filter: ModelSubscriptionStaffFilterInput) {
  onUpdateStaff(filter: $filter) {
    id
    company
    name
    email
    phone
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateStaffSubscriptionVariables,
  APITypes.OnUpdateStaffSubscription
>;
export const onDeleteStaff = /* GraphQL */ `subscription OnDeleteStaff($filter: ModelSubscriptionStaffFilterInput) {
  onDeleteStaff(filter: $filter) {
    id
    company
    name
    email
    phone
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteStaffSubscriptionVariables,
  APITypes.OnDeleteStaffSubscription
>;
export const onCreateOwner = /* GraphQL */ `subscription OnCreateOwner($filter: ModelSubscriptionOwnerFilterInput) {
  onCreateOwner(filter: $filter) {
    id
    company
    name
    email
    phone
    boats {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateOwnerSubscriptionVariables,
  APITypes.OnCreateOwnerSubscription
>;
export const onUpdateOwner = /* GraphQL */ `subscription OnUpdateOwner($filter: ModelSubscriptionOwnerFilterInput) {
  onUpdateOwner(filter: $filter) {
    id
    company
    name
    email
    phone
    boats {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateOwnerSubscriptionVariables,
  APITypes.OnUpdateOwnerSubscription
>;
export const onDeleteOwner = /* GraphQL */ `subscription OnDeleteOwner($filter: ModelSubscriptionOwnerFilterInput) {
  onDeleteOwner(filter: $filter) {
    id
    company
    name
    email
    phone
    boats {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteOwnerSubscriptionVariables,
  APITypes.OnDeleteOwnerSubscription
>;
export const onCreateActionModel = /* GraphQL */ `subscription OnCreateActionModel(
  $filter: ModelSubscriptionActionModelFilterInput
) {
  onCreateActionModel(filter: $filter) {
    id
    company
    name
    notes
    duration
    checklists {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateActionModelSubscriptionVariables,
  APITypes.OnCreateActionModelSubscription
>;
export const onUpdateActionModel = /* GraphQL */ `subscription OnUpdateActionModel(
  $filter: ModelSubscriptionActionModelFilterInput
) {
  onUpdateActionModel(filter: $filter) {
    id
    company
    name
    notes
    duration
    checklists {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateActionModelSubscriptionVariables,
  APITypes.OnUpdateActionModelSubscription
>;
export const onDeleteActionModel = /* GraphQL */ `subscription OnDeleteActionModel(
  $filter: ModelSubscriptionActionModelFilterInput
) {
  onDeleteActionModel(filter: $filter) {
    id
    company
    name
    notes
    duration
    checklists {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteActionModelSubscriptionVariables,
  APITypes.OnDeleteActionModelSubscription
>;
export const onCreateChecklistModel = /* GraphQL */ `subscription OnCreateChecklistModel(
  $filter: ModelSubscriptionChecklistModelFilterInput
) {
  onCreateChecklistModel(filter: $filter) {
    id
    company
    name
    notes
    duration
    preCharter
    actionModels {
      nextToken
      __typename
    }
    workflows {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateChecklistModelSubscriptionVariables,
  APITypes.OnCreateChecklistModelSubscription
>;
export const onUpdateChecklistModel = /* GraphQL */ `subscription OnUpdateChecklistModel(
  $filter: ModelSubscriptionChecklistModelFilterInput
) {
  onUpdateChecklistModel(filter: $filter) {
    id
    company
    name
    notes
    duration
    preCharter
    actionModels {
      nextToken
      __typename
    }
    workflows {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateChecklistModelSubscriptionVariables,
  APITypes.OnUpdateChecklistModelSubscription
>;
export const onDeleteChecklistModel = /* GraphQL */ `subscription OnDeleteChecklistModel(
  $filter: ModelSubscriptionChecklistModelFilterInput
) {
  onDeleteChecklistModel(filter: $filter) {
    id
    company
    name
    notes
    duration
    preCharter
    actionModels {
      nextToken
      __typename
    }
    workflows {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteChecklistModelSubscriptionVariables,
  APITypes.OnDeleteChecklistModelSubscription
>;
export const onCreateWorkflowModel = /* GraphQL */ `subscription OnCreateWorkflowModel(
  $filter: ModelSubscriptionWorkflowModelFilterInput
) {
  onCreateWorkflowModel(filter: $filter) {
    id
    company
    name
    notes
    duration
    checklistModels {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateWorkflowModelSubscriptionVariables,
  APITypes.OnCreateWorkflowModelSubscription
>;
export const onUpdateWorkflowModel = /* GraphQL */ `subscription OnUpdateWorkflowModel(
  $filter: ModelSubscriptionWorkflowModelFilterInput
) {
  onUpdateWorkflowModel(filter: $filter) {
    id
    company
    name
    notes
    duration
    checklistModels {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateWorkflowModelSubscriptionVariables,
  APITypes.OnUpdateWorkflowModelSubscription
>;
export const onDeleteWorkflowModel = /* GraphQL */ `subscription OnDeleteWorkflowModel(
  $filter: ModelSubscriptionWorkflowModelFilterInput
) {
  onDeleteWorkflowModel(filter: $filter) {
    id
    company
    name
    notes
    duration
    checklistModels {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteWorkflowModelSubscriptionVariables,
  APITypes.OnDeleteWorkflowModelSubscription
>;
export const onCreateAction = /* GraphQL */ `subscription OnCreateAction($filter: ModelSubscriptionActionFilterInput) {
  onCreateAction(filter: $filter) {
    id
    company
    status
    name
    duration
    actualStart
    actualEnd
    createdAt
    updatedAt
    checklistStepsId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateActionSubscriptionVariables,
  APITypes.OnCreateActionSubscription
>;
export const onUpdateAction = /* GraphQL */ `subscription OnUpdateAction($filter: ModelSubscriptionActionFilterInput) {
  onUpdateAction(filter: $filter) {
    id
    company
    status
    name
    duration
    actualStart
    actualEnd
    createdAt
    updatedAt
    checklistStepsId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateActionSubscriptionVariables,
  APITypes.OnUpdateActionSubscription
>;
export const onDeleteAction = /* GraphQL */ `subscription OnDeleteAction($filter: ModelSubscriptionActionFilterInput) {
  onDeleteAction(filter: $filter) {
    id
    company
    status
    name
    duration
    actualStart
    actualEnd
    createdAt
    updatedAt
    checklistStepsId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteActionSubscriptionVariables,
  APITypes.OnDeleteActionSubscription
>;
export const onCreateChecklist = /* GraphQL */ `subscription OnCreateChecklist($filter: ModelSubscriptionChecklistFilterInput) {
  onCreateChecklist(filter: $filter) {
    id
    company
    name
    duration
    owner {
      id
      company
      name
      email
      phone
      createdAt
      updatedAt
      __typename
    }
    steps {
      nextToken
      __typename
    }
    mustStart
    mustEnd
    actualStart
    actualEnd
    createdAt
    updatedAt
    workflowStepsId
    checklistOwnerId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateChecklistSubscriptionVariables,
  APITypes.OnCreateChecklistSubscription
>;
export const onUpdateChecklist = /* GraphQL */ `subscription OnUpdateChecklist($filter: ModelSubscriptionChecklistFilterInput) {
  onUpdateChecklist(filter: $filter) {
    id
    company
    name
    duration
    owner {
      id
      company
      name
      email
      phone
      createdAt
      updatedAt
      __typename
    }
    steps {
      nextToken
      __typename
    }
    mustStart
    mustEnd
    actualStart
    actualEnd
    createdAt
    updatedAt
    workflowStepsId
    checklistOwnerId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateChecklistSubscriptionVariables,
  APITypes.OnUpdateChecklistSubscription
>;
export const onDeleteChecklist = /* GraphQL */ `subscription OnDeleteChecklist($filter: ModelSubscriptionChecklistFilterInput) {
  onDeleteChecklist(filter: $filter) {
    id
    company
    name
    duration
    owner {
      id
      company
      name
      email
      phone
      createdAt
      updatedAt
      __typename
    }
    steps {
      nextToken
      __typename
    }
    mustStart
    mustEnd
    actualStart
    actualEnd
    createdAt
    updatedAt
    workflowStepsId
    checklistOwnerId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteChecklistSubscriptionVariables,
  APITypes.OnDeleteChecklistSubscription
>;
export const onCreateWorkflow = /* GraphQL */ `subscription OnCreateWorkflow($filter: ModelSubscriptionWorkflowFilterInput) {
  onCreateWorkflow(filter: $filter) {
    id
    company
    name
    duration
    steps {
      nextToken
      __typename
    }
    mustStart
    mustEnd
    actualStart
    actualEnd
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateWorkflowSubscriptionVariables,
  APITypes.OnCreateWorkflowSubscription
>;
export const onUpdateWorkflow = /* GraphQL */ `subscription OnUpdateWorkflow($filter: ModelSubscriptionWorkflowFilterInput) {
  onUpdateWorkflow(filter: $filter) {
    id
    company
    name
    duration
    steps {
      nextToken
      __typename
    }
    mustStart
    mustEnd
    actualStart
    actualEnd
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateWorkflowSubscriptionVariables,
  APITypes.OnUpdateWorkflowSubscription
>;
export const onDeleteWorkflow = /* GraphQL */ `subscription OnDeleteWorkflow($filter: ModelSubscriptionWorkflowFilterInput) {
  onDeleteWorkflow(filter: $filter) {
    id
    company
    name
    duration
    steps {
      nextToken
      __typename
    }
    mustStart
    mustEnd
    actualStart
    actualEnd
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteWorkflowSubscriptionVariables,
  APITypes.OnDeleteWorkflowSubscription
>;
export const onCreateChecklistActions = /* GraphQL */ `subscription OnCreateChecklistActions(
  $filter: ModelSubscriptionChecklistActionsFilterInput
) {
  onCreateChecklistActions(filter: $filter) {
    id
    actionModelId
    checklistModelId
    actionModel {
      id
      company
      name
      notes
      duration
      createdAt
      updatedAt
      __typename
    }
    checklistModel {
      id
      company
      name
      notes
      duration
      preCharter
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateChecklistActionsSubscriptionVariables,
  APITypes.OnCreateChecklistActionsSubscription
>;
export const onUpdateChecklistActions = /* GraphQL */ `subscription OnUpdateChecklistActions(
  $filter: ModelSubscriptionChecklistActionsFilterInput
) {
  onUpdateChecklistActions(filter: $filter) {
    id
    actionModelId
    checklistModelId
    actionModel {
      id
      company
      name
      notes
      duration
      createdAt
      updatedAt
      __typename
    }
    checklistModel {
      id
      company
      name
      notes
      duration
      preCharter
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateChecklistActionsSubscriptionVariables,
  APITypes.OnUpdateChecklistActionsSubscription
>;
export const onDeleteChecklistActions = /* GraphQL */ `subscription OnDeleteChecklistActions(
  $filter: ModelSubscriptionChecklistActionsFilterInput
) {
  onDeleteChecklistActions(filter: $filter) {
    id
    actionModelId
    checklistModelId
    actionModel {
      id
      company
      name
      notes
      duration
      createdAt
      updatedAt
      __typename
    }
    checklistModel {
      id
      company
      name
      notes
      duration
      preCharter
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteChecklistActionsSubscriptionVariables,
  APITypes.OnDeleteChecklistActionsSubscription
>;
export const onCreateWorkflowChecklists = /* GraphQL */ `subscription OnCreateWorkflowChecklists(
  $filter: ModelSubscriptionWorkflowChecklistsFilterInput
) {
  onCreateWorkflowChecklists(filter: $filter) {
    id
    checklistModelId
    workflowModelId
    checklistModel {
      id
      company
      name
      notes
      duration
      preCharter
      createdAt
      updatedAt
      __typename
    }
    workflowModel {
      id
      company
      name
      notes
      duration
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateWorkflowChecklistsSubscriptionVariables,
  APITypes.OnCreateWorkflowChecklistsSubscription
>;
export const onUpdateWorkflowChecklists = /* GraphQL */ `subscription OnUpdateWorkflowChecklists(
  $filter: ModelSubscriptionWorkflowChecklistsFilterInput
) {
  onUpdateWorkflowChecklists(filter: $filter) {
    id
    checklistModelId
    workflowModelId
    checklistModel {
      id
      company
      name
      notes
      duration
      preCharter
      createdAt
      updatedAt
      __typename
    }
    workflowModel {
      id
      company
      name
      notes
      duration
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateWorkflowChecklistsSubscriptionVariables,
  APITypes.OnUpdateWorkflowChecklistsSubscription
>;
export const onDeleteWorkflowChecklists = /* GraphQL */ `subscription OnDeleteWorkflowChecklists(
  $filter: ModelSubscriptionWorkflowChecklistsFilterInput
) {
  onDeleteWorkflowChecklists(filter: $filter) {
    id
    checklistModelId
    workflowModelId
    checklistModel {
      id
      company
      name
      notes
      duration
      preCharter
      createdAt
      updatedAt
      __typename
    }
    workflowModel {
      id
      company
      name
      notes
      duration
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteWorkflowChecklistsSubscriptionVariables,
  APITypes.OnDeleteWorkflowChecklistsSubscription
>;
