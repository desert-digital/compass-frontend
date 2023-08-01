/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createPendingEvent = /* GraphQL */ `
  mutation CreatePendingEvent(
    $input: CreatePendingEventInput!
    $condition: ModelPendingEventConditionInput
  ) {
    createPendingEvent(input: $input, condition: $condition) {
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
      __typename
    }
  }
`;
export const updatePendingEvent = /* GraphQL */ `
  mutation UpdatePendingEvent(
    $input: UpdatePendingEventInput!
    $condition: ModelPendingEventConditionInput
  ) {
    updatePendingEvent(input: $input, condition: $condition) {
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
      __typename
    }
  }
`;
export const deletePendingEvent = /* GraphQL */ `
  mutation DeletePendingEvent(
    $input: DeletePendingEventInput!
    $condition: ModelPendingEventConditionInput
  ) {
    deletePendingEvent(input: $input, condition: $condition) {
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
      __typename
    }
  }
`;
export const createVessel = /* GraphQL */ `
  mutation CreateVessel(
    $input: CreateVesselInput!
    $condition: ModelVesselConditionInput
  ) {
    createVessel(input: $input, condition: $condition) {
      id
      company
      name
      type
      documentNumber
      defaultWorkflow {
        id
        name
        notes
        duration
        checklists {
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
`;
export const updateVessel = /* GraphQL */ `
  mutation UpdateVessel(
    $input: UpdateVesselInput!
    $condition: ModelVesselConditionInput
  ) {
    updateVessel(input: $input, condition: $condition) {
      id
      company
      name
      type
      documentNumber
      defaultWorkflow {
        id
        name
        notes
        duration
        checklists {
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
`;
export const deleteVessel = /* GraphQL */ `
  mutation DeleteVessel(
    $input: DeleteVesselInput!
    $condition: ModelVesselConditionInput
  ) {
    deleteVessel(input: $input, condition: $condition) {
      id
      company
      name
      type
      documentNumber
      defaultWorkflow {
        id
        name
        notes
        duration
        checklists {
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
`;
export const createStaff = /* GraphQL */ `
  mutation CreateStaff(
    $input: CreateStaffInput!
    $condition: ModelStaffConditionInput
  ) {
    createStaff(input: $input, condition: $condition) {
      id
      company
      name
      email
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateStaff = /* GraphQL */ `
  mutation UpdateStaff(
    $input: UpdateStaffInput!
    $condition: ModelStaffConditionInput
  ) {
    updateStaff(input: $input, condition: $condition) {
      id
      company
      name
      email
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteStaff = /* GraphQL */ `
  mutation DeleteStaff(
    $input: DeleteStaffInput!
    $condition: ModelStaffConditionInput
  ) {
    deleteStaff(input: $input, condition: $condition) {
      id
      company
      name
      email
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createOwner = /* GraphQL */ `
  mutation CreateOwner(
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
          type
          documentNumber
          defaultWorkflow {
            id
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
`;
export const updateOwner = /* GraphQL */ `
  mutation UpdateOwner(
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
          type
          documentNumber
          defaultWorkflow {
            id
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
`;
export const deleteOwner = /* GraphQL */ `
  mutation DeleteOwner(
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
          type
          documentNumber
          defaultWorkflow {
            id
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
`;
export const createActionModel = /* GraphQL */ `
  mutation CreateActionModel(
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
`;
export const updateActionModel = /* GraphQL */ `
  mutation UpdateActionModel(
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
`;
export const deleteActionModel = /* GraphQL */ `
  mutation DeleteActionModel(
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
`;
export const createChecklistModel = /* GraphQL */ `
  mutation CreateChecklistModel(
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
      actions {
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
`;
export const updateChecklistModel = /* GraphQL */ `
  mutation UpdateChecklistModel(
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
      actions {
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
`;
export const deleteChecklistModel = /* GraphQL */ `
  mutation DeleteChecklistModel(
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
      actions {
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
`;
export const createWorkflowModel = /* GraphQL */ `
  mutation CreateWorkflowModel(
    $input: CreateWorkflowModelInput!
    $condition: ModelWorkflowModelConditionInput
  ) {
    createWorkflowModel(input: $input, condition: $condition) {
      id
      name
      notes
      duration
      checklists {
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
`;
export const updateWorkflowModel = /* GraphQL */ `
  mutation UpdateWorkflowModel(
    $input: UpdateWorkflowModelInput!
    $condition: ModelWorkflowModelConditionInput
  ) {
    updateWorkflowModel(input: $input, condition: $condition) {
      id
      name
      notes
      duration
      checklists {
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
`;
export const deleteWorkflowModel = /* GraphQL */ `
  mutation DeleteWorkflowModel(
    $input: DeleteWorkflowModelInput!
    $condition: ModelWorkflowModelConditionInput
  ) {
    deleteWorkflowModel(input: $input, condition: $condition) {
      id
      name
      notes
      duration
      checklists {
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
`;
export const createAction = /* GraphQL */ `
  mutation CreateAction(
    $input: CreateActionInput!
    $condition: ModelActionConditionInput
  ) {
    createAction(input: $input, condition: $condition) {
      id
      status
      model {
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
      actualStart
      actualEnd
      createdAt
      updatedAt
      actionModelId
      __typename
    }
  }
`;
export const updateAction = /* GraphQL */ `
  mutation UpdateAction(
    $input: UpdateActionInput!
    $condition: ModelActionConditionInput
  ) {
    updateAction(input: $input, condition: $condition) {
      id
      status
      model {
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
      actualStart
      actualEnd
      createdAt
      updatedAt
      actionModelId
      __typename
    }
  }
`;
export const deleteAction = /* GraphQL */ `
  mutation DeleteAction(
    $input: DeleteActionInput!
    $condition: ModelActionConditionInput
  ) {
    deleteAction(input: $input, condition: $condition) {
      id
      status
      model {
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
      actualStart
      actualEnd
      createdAt
      updatedAt
      actionModelId
      __typename
    }
  }
`;
export const createChecklist = /* GraphQL */ `
  mutation CreateChecklist(
    $input: CreateChecklistInput!
    $condition: ModelChecklistConditionInput
  ) {
    createChecklist(input: $input, condition: $condition) {
      id
      company
      owner {
        id
        company
        name
        email
        createdAt
        updatedAt
        __typename
      }
      model {
        id
        company
        name
        notes
        duration
        preCharter
        actions {
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
      start
      end
      createdAt
      updatedAt
      checklistOwnerId
      checklistModelId
      __typename
    }
  }
`;
export const updateChecklist = /* GraphQL */ `
  mutation UpdateChecklist(
    $input: UpdateChecklistInput!
    $condition: ModelChecklistConditionInput
  ) {
    updateChecklist(input: $input, condition: $condition) {
      id
      company
      owner {
        id
        company
        name
        email
        createdAt
        updatedAt
        __typename
      }
      model {
        id
        company
        name
        notes
        duration
        preCharter
        actions {
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
      start
      end
      createdAt
      updatedAt
      checklistOwnerId
      checklistModelId
      __typename
    }
  }
`;
export const deleteChecklist = /* GraphQL */ `
  mutation DeleteChecklist(
    $input: DeleteChecklistInput!
    $condition: ModelChecklistConditionInput
  ) {
    deleteChecklist(input: $input, condition: $condition) {
      id
      company
      owner {
        id
        company
        name
        email
        createdAt
        updatedAt
        __typename
      }
      model {
        id
        company
        name
        notes
        duration
        preCharter
        actions {
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
      start
      end
      createdAt
      updatedAt
      checklistOwnerId
      checklistModelId
      __typename
    }
  }
`;
export const createWorkflow = /* GraphQL */ `
  mutation CreateWorkflow(
    $input: CreateWorkflowInput!
    $condition: ModelWorkflowConditionInput
  ) {
    createWorkflow(input: $input, condition: $condition) {
      id
      company
      owner {
        id
        company
        name
        email
        createdAt
        updatedAt
        __typename
      }
      steps {
        id
        name
        notes
        duration
        checklists {
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
      start
      end
      createdAt
      updatedAt
      workflowOwnerId
      workflowStepsId
      __typename
    }
  }
`;
export const updateWorkflow = /* GraphQL */ `
  mutation UpdateWorkflow(
    $input: UpdateWorkflowInput!
    $condition: ModelWorkflowConditionInput
  ) {
    updateWorkflow(input: $input, condition: $condition) {
      id
      company
      owner {
        id
        company
        name
        email
        createdAt
        updatedAt
        __typename
      }
      steps {
        id
        name
        notes
        duration
        checklists {
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
      start
      end
      createdAt
      updatedAt
      workflowOwnerId
      workflowStepsId
      __typename
    }
  }
`;
export const deleteWorkflow = /* GraphQL */ `
  mutation DeleteWorkflow(
    $input: DeleteWorkflowInput!
    $condition: ModelWorkflowConditionInput
  ) {
    deleteWorkflow(input: $input, condition: $condition) {
      id
      company
      owner {
        id
        company
        name
        email
        createdAt
        updatedAt
        __typename
      }
      steps {
        id
        name
        notes
        duration
        checklists {
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
      start
      end
      createdAt
      updatedAt
      workflowOwnerId
      workflowStepsId
      __typename
    }
  }
`;
export const createChecklistActions = /* GraphQL */ `
  mutation CreateChecklistActions(
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
        actions {
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
`;
export const updateChecklistActions = /* GraphQL */ `
  mutation UpdateChecklistActions(
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
        actions {
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
`;
export const deleteChecklistActions = /* GraphQL */ `
  mutation DeleteChecklistActions(
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
        actions {
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
`;
export const createWorkflowChecklists = /* GraphQL */ `
  mutation CreateWorkflowChecklists(
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
        actions {
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
        name
        notes
        duration
        checklists {
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
`;
export const updateWorkflowChecklists = /* GraphQL */ `
  mutation UpdateWorkflowChecklists(
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
        actions {
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
        name
        notes
        duration
        checklists {
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
`;
export const deleteWorkflowChecklists = /* GraphQL */ `
  mutation DeleteWorkflowChecklists(
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
        actions {
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
        name
        notes
        duration
        checklists {
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
`;
