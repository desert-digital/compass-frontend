/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../app/API.service";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const startWorkflow = /* GraphQL */ `mutation StartWorkflow($workflowId: String!) {
  startWorkflow(workflowId: $workflowId)
}
` as GeneratedMutation<
  APITypes.StartWorkflowMutationVariables,
  APITypes.StartWorkflowMutation
>;
export const createCompassUser = /* GraphQL */ `mutation CreateCompassUser(
  $input: CreateCompassUserInput!
  $condition: ModelCompassUserConditionInput
) {
  createCompassUser(input: $input, condition: $condition) {
    id
    company
    userName
    roles {
      items {
        id
        company
        roleName
        createdAt
        updatedAt
        compassUserRolesId
        __typename
      }
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateCompassUserMutationVariables,
  APITypes.CreateCompassUserMutation
>;
export const updateCompassUser = /* GraphQL */ `mutation UpdateCompassUser(
  $input: UpdateCompassUserInput!
  $condition: ModelCompassUserConditionInput
) {
  updateCompassUser(input: $input, condition: $condition) {
    id
    company
    userName
    roles {
      items {
        id
        company
        roleName
        createdAt
        updatedAt
        compassUserRolesId
        __typename
      }
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateCompassUserMutationVariables,
  APITypes.UpdateCompassUserMutation
>;
export const deleteCompassUser = /* GraphQL */ `mutation DeleteCompassUser(
  $input: DeleteCompassUserInput!
  $condition: ModelCompassUserConditionInput
) {
  deleteCompassUser(input: $input, condition: $condition) {
    id
    company
    userName
    roles {
      items {
        id
        company
        roleName
        createdAt
        updatedAt
        compassUserRolesId
        __typename
      }
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteCompassUserMutationVariables,
  APITypes.DeleteCompassUserMutation
>;
export const createCompassUserRole = /* GraphQL */ `mutation CreateCompassUserRole(
  $input: CreateCompassUserRoleInput!
  $condition: ModelCompassUserRoleConditionInput
) {
  createCompassUserRole(input: $input, condition: $condition) {
    id
    company
    roleName
    createdAt
    updatedAt
    compassUserRolesId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateCompassUserRoleMutationVariables,
  APITypes.CreateCompassUserRoleMutation
>;
export const updateCompassUserRole = /* GraphQL */ `mutation UpdateCompassUserRole(
  $input: UpdateCompassUserRoleInput!
  $condition: ModelCompassUserRoleConditionInput
) {
  updateCompassUserRole(input: $input, condition: $condition) {
    id
    company
    roleName
    createdAt
    updatedAt
    compassUserRolesId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateCompassUserRoleMutationVariables,
  APITypes.UpdateCompassUserRoleMutation
>;
export const deleteCompassUserRole = /* GraphQL */ `mutation DeleteCompassUserRole(
  $input: DeleteCompassUserRoleInput!
  $condition: ModelCompassUserRoleConditionInput
) {
  deleteCompassUserRole(input: $input, condition: $condition) {
    id
    company
    roleName
    createdAt
    updatedAt
    compassUserRolesId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteCompassUserRoleMutationVariables,
  APITypes.DeleteCompassUserRoleMutation
>;
export const createPendingEvent = /* GraphQL */ `mutation CreatePendingEvent(
  $input: CreatePendingEventInput!
  $condition: ModelPendingEventConditionInput
) {
  createPendingEvent(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreatePendingEventMutationVariables,
  APITypes.CreatePendingEventMutation
>;
export const updatePendingEvent = /* GraphQL */ `mutation UpdatePendingEvent(
  $input: UpdatePendingEventInput!
  $condition: ModelPendingEventConditionInput
) {
  updatePendingEvent(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdatePendingEventMutationVariables,
  APITypes.UpdatePendingEventMutation
>;
export const deletePendingEvent = /* GraphQL */ `mutation DeletePendingEvent(
  $input: DeletePendingEventInput!
  $condition: ModelPendingEventConditionInput
) {
  deletePendingEvent(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeletePendingEventMutationVariables,
  APITypes.DeletePendingEventMutation
>;
export const createServiceOrder = /* GraphQL */ `mutation CreateServiceOrder(
  $input: CreateServiceOrderInput!
  $condition: ModelServiceOrderConditionInput
) {
  createServiceOrder(input: $input, condition: $condition) {
    id
    company
    boat {
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
        checklistModels {
          nextToken
          __typename
        }
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
    items
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateServiceOrderMutationVariables,
  APITypes.CreateServiceOrderMutation
>;
export const updateServiceOrder = /* GraphQL */ `mutation UpdateServiceOrder(
  $input: UpdateServiceOrderInput!
  $condition: ModelServiceOrderConditionInput
) {
  updateServiceOrder(input: $input, condition: $condition) {
    id
    company
    boat {
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
        checklistModels {
          nextToken
          __typename
        }
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
    items
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateServiceOrderMutationVariables,
  APITypes.UpdateServiceOrderMutation
>;
export const deleteServiceOrder = /* GraphQL */ `mutation DeleteServiceOrder(
  $input: DeleteServiceOrderInput!
  $condition: ModelServiceOrderConditionInput
) {
  deleteServiceOrder(input: $input, condition: $condition) {
    id
    company
    boat {
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
        checklistModels {
          nextToken
          __typename
        }
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
    items
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteServiceOrderMutationVariables,
  APITypes.DeleteServiceOrderMutation
>;
export const createInventoryItem = /* GraphQL */ `mutation CreateInventoryItem(
  $input: CreateInventoryItemInput!
  $condition: ModelInventoryItemConditionInput
) {
  createInventoryItem(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateInventoryItemMutationVariables,
  APITypes.CreateInventoryItemMutation
>;
export const updateInventoryItem = /* GraphQL */ `mutation UpdateInventoryItem(
  $input: UpdateInventoryItemInput!
  $condition: ModelInventoryItemConditionInput
) {
  updateInventoryItem(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateInventoryItemMutationVariables,
  APITypes.UpdateInventoryItemMutation
>;
export const deleteInventoryItem = /* GraphQL */ `mutation DeleteInventoryItem(
  $input: DeleteInventoryItemInput!
  $condition: ModelInventoryItemConditionInput
) {
  deleteInventoryItem(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteInventoryItemMutationVariables,
  APITypes.DeleteInventoryItemMutation
>;
export const createVessel = /* GraphQL */ `mutation CreateVessel(
  $input: CreateVesselInput!
  $condition: ModelVesselConditionInput
) {
  createVessel(input: $input, condition: $condition) {
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
      checklistModels {
        items {
          id
          checklistModelId
          workflowModelId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
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
` as GeneratedMutation<
  APITypes.CreateVesselMutationVariables,
  APITypes.CreateVesselMutation
>;
export const updateVessel = /* GraphQL */ `mutation UpdateVessel(
  $input: UpdateVesselInput!
  $condition: ModelVesselConditionInput
) {
  updateVessel(input: $input, condition: $condition) {
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
      checklistModels {
        items {
          id
          checklistModelId
          workflowModelId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
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
` as GeneratedMutation<
  APITypes.UpdateVesselMutationVariables,
  APITypes.UpdateVesselMutation
>;
export const deleteVessel = /* GraphQL */ `mutation DeleteVessel(
  $input: DeleteVesselInput!
  $condition: ModelVesselConditionInput
) {
  deleteVessel(input: $input, condition: $condition) {
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
      checklistModels {
        items {
          id
          checklistModelId
          workflowModelId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
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
` as GeneratedMutation<
  APITypes.DeleteVesselMutationVariables,
  APITypes.DeleteVesselMutation
>;
export const createStaff = /* GraphQL */ `mutation CreateStaff(
  $input: CreateStaffInput!
  $condition: ModelStaffConditionInput
) {
  createStaff(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateStaffMutationVariables,
  APITypes.CreateStaffMutation
>;
export const updateStaff = /* GraphQL */ `mutation UpdateStaff(
  $input: UpdateStaffInput!
  $condition: ModelStaffConditionInput
) {
  updateStaff(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateStaffMutationVariables,
  APITypes.UpdateStaffMutation
>;
export const deleteStaff = /* GraphQL */ `mutation DeleteStaff(
  $input: DeleteStaffInput!
  $condition: ModelStaffConditionInput
) {
  deleteStaff(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteStaffMutationVariables,
  APITypes.DeleteStaffMutation
>;
export const createOwner = /* GraphQL */ `mutation CreateOwner(
  $input: CreateOwnerInput!
  $condition: ModelOwnerConditionInput
) {
  createOwner(input: $input, condition: $condition) {
    id
    company
    name
    email
    phone
    boats {
      items {
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
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateOwnerMutationVariables,
  APITypes.CreateOwnerMutation
>;
export const updateOwner = /* GraphQL */ `mutation UpdateOwner(
  $input: UpdateOwnerInput!
  $condition: ModelOwnerConditionInput
) {
  updateOwner(input: $input, condition: $condition) {
    id
    company
    name
    email
    phone
    boats {
      items {
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
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateOwnerMutationVariables,
  APITypes.UpdateOwnerMutation
>;
export const deleteOwner = /* GraphQL */ `mutation DeleteOwner(
  $input: DeleteOwnerInput!
  $condition: ModelOwnerConditionInput
) {
  deleteOwner(input: $input, condition: $condition) {
    id
    company
    name
    email
    phone
    boats {
      items {
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
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteOwnerMutationVariables,
  APITypes.DeleteOwnerMutation
>;
export const createActionModel = /* GraphQL */ `mutation CreateActionModel(
  $input: CreateActionModelInput!
  $condition: ModelActionModelConditionInput
) {
  createActionModel(input: $input, condition: $condition) {
    id
    company
    name
    notes
    duration
    checklists {
      items {
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
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateActionModelMutationVariables,
  APITypes.CreateActionModelMutation
>;
export const updateActionModel = /* GraphQL */ `mutation UpdateActionModel(
  $input: UpdateActionModelInput!
  $condition: ModelActionModelConditionInput
) {
  updateActionModel(input: $input, condition: $condition) {
    id
    company
    name
    notes
    duration
    checklists {
      items {
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
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateActionModelMutationVariables,
  APITypes.UpdateActionModelMutation
>;
export const deleteActionModel = /* GraphQL */ `mutation DeleteActionModel(
  $input: DeleteActionModelInput!
  $condition: ModelActionModelConditionInput
) {
  deleteActionModel(input: $input, condition: $condition) {
    id
    company
    name
    notes
    duration
    checklists {
      items {
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
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteActionModelMutationVariables,
  APITypes.DeleteActionModelMutation
>;
export const createChecklistModel = /* GraphQL */ `mutation CreateChecklistModel(
  $input: CreateChecklistModelInput!
  $condition: ModelChecklistModelConditionInput
) {
  createChecklistModel(input: $input, condition: $condition) {
    id
    company
    name
    notes
    duration
    preCharter
    actionModels {
      items {
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
      nextToken
      __typename
    }
    workflows {
      items {
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
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateChecklistModelMutationVariables,
  APITypes.CreateChecklistModelMutation
>;
export const updateChecklistModel = /* GraphQL */ `mutation UpdateChecklistModel(
  $input: UpdateChecklistModelInput!
  $condition: ModelChecklistModelConditionInput
) {
  updateChecklistModel(input: $input, condition: $condition) {
    id
    company
    name
    notes
    duration
    preCharter
    actionModels {
      items {
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
      nextToken
      __typename
    }
    workflows {
      items {
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
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateChecklistModelMutationVariables,
  APITypes.UpdateChecklistModelMutation
>;
export const deleteChecklistModel = /* GraphQL */ `mutation DeleteChecklistModel(
  $input: DeleteChecklistModelInput!
  $condition: ModelChecklistModelConditionInput
) {
  deleteChecklistModel(input: $input, condition: $condition) {
    id
    company
    name
    notes
    duration
    preCharter
    actionModels {
      items {
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
      nextToken
      __typename
    }
    workflows {
      items {
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
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteChecklistModelMutationVariables,
  APITypes.DeleteChecklistModelMutation
>;
export const createWorkflowModel = /* GraphQL */ `mutation CreateWorkflowModel(
  $input: CreateWorkflowModelInput!
  $condition: ModelWorkflowModelConditionInput
) {
  createWorkflowModel(input: $input, condition: $condition) {
    id
    company
    name
    notes
    duration
    checklistModels {
      items {
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
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateWorkflowModelMutationVariables,
  APITypes.CreateWorkflowModelMutation
>;
export const updateWorkflowModel = /* GraphQL */ `mutation UpdateWorkflowModel(
  $input: UpdateWorkflowModelInput!
  $condition: ModelWorkflowModelConditionInput
) {
  updateWorkflowModel(input: $input, condition: $condition) {
    id
    company
    name
    notes
    duration
    checklistModels {
      items {
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
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateWorkflowModelMutationVariables,
  APITypes.UpdateWorkflowModelMutation
>;
export const deleteWorkflowModel = /* GraphQL */ `mutation DeleteWorkflowModel(
  $input: DeleteWorkflowModelInput!
  $condition: ModelWorkflowModelConditionInput
) {
  deleteWorkflowModel(input: $input, condition: $condition) {
    id
    company
    name
    notes
    duration
    checklistModels {
      items {
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
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteWorkflowModelMutationVariables,
  APITypes.DeleteWorkflowModelMutation
>;
export const createAction = /* GraphQL */ `mutation CreateAction(
  $input: CreateActionInput!
  $condition: ModelActionConditionInput
) {
  createAction(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateActionMutationVariables,
  APITypes.CreateActionMutation
>;
export const updateAction = /* GraphQL */ `mutation UpdateAction(
  $input: UpdateActionInput!
  $condition: ModelActionConditionInput
) {
  updateAction(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateActionMutationVariables,
  APITypes.UpdateActionMutation
>;
export const deleteAction = /* GraphQL */ `mutation DeleteAction(
  $input: DeleteActionInput!
  $condition: ModelActionConditionInput
) {
  deleteAction(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteActionMutationVariables,
  APITypes.DeleteActionMutation
>;
export const createChecklist = /* GraphQL */ `mutation CreateChecklist(
  $input: CreateChecklistInput!
  $condition: ModelChecklistConditionInput
) {
  createChecklist(input: $input, condition: $condition) {
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
      items {
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
` as GeneratedMutation<
  APITypes.CreateChecklistMutationVariables,
  APITypes.CreateChecklistMutation
>;
export const updateChecklist = /* GraphQL */ `mutation UpdateChecklist(
  $input: UpdateChecklistInput!
  $condition: ModelChecklistConditionInput
) {
  updateChecklist(input: $input, condition: $condition) {
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
      items {
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
` as GeneratedMutation<
  APITypes.UpdateChecklistMutationVariables,
  APITypes.UpdateChecklistMutation
>;
export const deleteChecklist = /* GraphQL */ `mutation DeleteChecklist(
  $input: DeleteChecklistInput!
  $condition: ModelChecklistConditionInput
) {
  deleteChecklist(input: $input, condition: $condition) {
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
      items {
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
` as GeneratedMutation<
  APITypes.DeleteChecklistMutationVariables,
  APITypes.DeleteChecklistMutation
>;
export const createWorkflow = /* GraphQL */ `mutation CreateWorkflow(
  $input: CreateWorkflowInput!
  $condition: ModelWorkflowConditionInput
) {
  createWorkflow(input: $input, condition: $condition) {
    id
    company
    name
    duration
    steps {
      items {
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
` as GeneratedMutation<
  APITypes.CreateWorkflowMutationVariables,
  APITypes.CreateWorkflowMutation
>;
export const updateWorkflow = /* GraphQL */ `mutation UpdateWorkflow(
  $input: UpdateWorkflowInput!
  $condition: ModelWorkflowConditionInput
) {
  updateWorkflow(input: $input, condition: $condition) {
    id
    company
    name
    duration
    steps {
      items {
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
` as GeneratedMutation<
  APITypes.UpdateWorkflowMutationVariables,
  APITypes.UpdateWorkflowMutation
>;
export const deleteWorkflow = /* GraphQL */ `mutation DeleteWorkflow(
  $input: DeleteWorkflowInput!
  $condition: ModelWorkflowConditionInput
) {
  deleteWorkflow(input: $input, condition: $condition) {
    id
    company
    name
    duration
    steps {
      items {
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
` as GeneratedMutation<
  APITypes.DeleteWorkflowMutationVariables,
  APITypes.DeleteWorkflowMutation
>;
export const createChecklistActions = /* GraphQL */ `mutation CreateChecklistActions(
  $input: CreateChecklistActionsInput!
  $condition: ModelChecklistActionsConditionInput
) {
  createChecklistActions(input: $input, condition: $condition) {
    id
    actionModelId
    checklistModelId
    actionModel {
      id
      company
      name
      notes
      duration
      checklists {
        items {
          id
          actionModelId
          checklistModelId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
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
      actionModels {
        items {
          id
          actionModelId
          checklistModelId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      workflows {
        items {
          id
          checklistModelId
          workflowModelId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateChecklistActionsMutationVariables,
  APITypes.CreateChecklistActionsMutation
>;
export const updateChecklistActions = /* GraphQL */ `mutation UpdateChecklistActions(
  $input: UpdateChecklistActionsInput!
  $condition: ModelChecklistActionsConditionInput
) {
  updateChecklistActions(input: $input, condition: $condition) {
    id
    actionModelId
    checklistModelId
    actionModel {
      id
      company
      name
      notes
      duration
      checklists {
        items {
          id
          actionModelId
          checklistModelId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
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
      actionModels {
        items {
          id
          actionModelId
          checklistModelId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      workflows {
        items {
          id
          checklistModelId
          workflowModelId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateChecklistActionsMutationVariables,
  APITypes.UpdateChecklistActionsMutation
>;
export const deleteChecklistActions = /* GraphQL */ `mutation DeleteChecklistActions(
  $input: DeleteChecklistActionsInput!
  $condition: ModelChecklistActionsConditionInput
) {
  deleteChecklistActions(input: $input, condition: $condition) {
    id
    actionModelId
    checklistModelId
    actionModel {
      id
      company
      name
      notes
      duration
      checklists {
        items {
          id
          actionModelId
          checklistModelId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
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
      actionModels {
        items {
          id
          actionModelId
          checklistModelId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      workflows {
        items {
          id
          checklistModelId
          workflowModelId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteChecklistActionsMutationVariables,
  APITypes.DeleteChecklistActionsMutation
>;
export const createWorkflowChecklists = /* GraphQL */ `mutation CreateWorkflowChecklists(
  $input: CreateWorkflowChecklistsInput!
  $condition: ModelWorkflowChecklistsConditionInput
) {
  createWorkflowChecklists(input: $input, condition: $condition) {
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
      actionModels {
        items {
          id
          actionModelId
          checklistModelId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      workflows {
        items {
          id
          checklistModelId
          workflowModelId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
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
      checklistModels {
        items {
          id
          checklistModelId
          workflowModelId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateWorkflowChecklistsMutationVariables,
  APITypes.CreateWorkflowChecklistsMutation
>;
export const updateWorkflowChecklists = /* GraphQL */ `mutation UpdateWorkflowChecklists(
  $input: UpdateWorkflowChecklistsInput!
  $condition: ModelWorkflowChecklistsConditionInput
) {
  updateWorkflowChecklists(input: $input, condition: $condition) {
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
      actionModels {
        items {
          id
          actionModelId
          checklistModelId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      workflows {
        items {
          id
          checklistModelId
          workflowModelId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
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
      checklistModels {
        items {
          id
          checklistModelId
          workflowModelId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateWorkflowChecklistsMutationVariables,
  APITypes.UpdateWorkflowChecklistsMutation
>;
export const deleteWorkflowChecklists = /* GraphQL */ `mutation DeleteWorkflowChecklists(
  $input: DeleteWorkflowChecklistsInput!
  $condition: ModelWorkflowChecklistsConditionInput
) {
  deleteWorkflowChecklists(input: $input, condition: $condition) {
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
      actionModels {
        items {
          id
          actionModelId
          checklistModelId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      workflows {
        items {
          id
          checklistModelId
          workflowModelId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
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
      checklistModels {
        items {
          id
          checklistModelId
          workflowModelId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteWorkflowChecklistsMutationVariables,
  APITypes.DeleteWorkflowChecklistsMutation
>;
