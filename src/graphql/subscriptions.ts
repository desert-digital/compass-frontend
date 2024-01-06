/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateCompassUser = /* GraphQL */ `
  subscription OnCreateCompassUser(
    $filter: ModelSubscriptionCompassUserFilterInput
  ) {
    onCreateCompassUser(filter: $filter) {
      id
      company
      userName
      role {
        id
        company
        roleName
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
export const onUpdateCompassUser = /* GraphQL */ `
  subscription OnUpdateCompassUser(
    $filter: ModelSubscriptionCompassUserFilterInput
  ) {
    onUpdateCompassUser(filter: $filter) {
      id
      company
      userName
      role {
        id
        company
        roleName
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
export const onDeleteCompassUser = /* GraphQL */ `
  subscription OnDeleteCompassUser(
    $filter: ModelSubscriptionCompassUserFilterInput
  ) {
    onDeleteCompassUser(filter: $filter) {
      id
      company
      userName
      role {
        id
        company
        roleName
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
export const onCreateCompassUserRole = /* GraphQL */ `
  subscription OnCreateCompassUserRole(
    $filter: ModelSubscriptionCompassUserRoleFilterInput
  ) {
    onCreateCompassUserRole(filter: $filter) {
      id
      company
      roleName
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateCompassUserRole = /* GraphQL */ `
  subscription OnUpdateCompassUserRole(
    $filter: ModelSubscriptionCompassUserRoleFilterInput
  ) {
    onUpdateCompassUserRole(filter: $filter) {
      id
      company
      roleName
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteCompassUserRole = /* GraphQL */ `
  subscription OnDeleteCompassUserRole(
    $filter: ModelSubscriptionCompassUserRoleFilterInput
  ) {
    onDeleteCompassUserRole(filter: $filter) {
      id
      company
      roleName
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreatePendingEvent = /* GraphQL */ `
  subscription OnCreatePendingEvent(
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
`;
export const onUpdatePendingEvent = /* GraphQL */ `
  subscription OnUpdatePendingEvent(
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
`;
export const onDeletePendingEvent = /* GraphQL */ `
  subscription OnDeletePendingEvent(
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
`;
export const onCreateServiceOrder = /* GraphQL */ `
  subscription OnCreateServiceOrder(
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
        defaultWorkflow {
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
`;
export const onUpdateServiceOrder = /* GraphQL */ `
  subscription OnUpdateServiceOrder(
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
        defaultWorkflow {
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
`;
export const onDeleteServiceOrder = /* GraphQL */ `
  subscription OnDeleteServiceOrder(
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
        defaultWorkflow {
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
`;
export const onCreateVessel = /* GraphQL */ `
  subscription OnCreateVessel($filter: ModelSubscriptionVesselFilterInput) {
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
export const onUpdateVessel = /* GraphQL */ `
  subscription OnUpdateVessel($filter: ModelSubscriptionVesselFilterInput) {
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
export const onDeleteVessel = /* GraphQL */ `
  subscription OnDeleteVessel($filter: ModelSubscriptionVesselFilterInput) {
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
export const onCreateStaff = /* GraphQL */ `
  subscription OnCreateStaff($filter: ModelSubscriptionStaffFilterInput) {
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
`;
export const onUpdateStaff = /* GraphQL */ `
  subscription OnUpdateStaff($filter: ModelSubscriptionStaffFilterInput) {
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
`;
export const onDeleteStaff = /* GraphQL */ `
  subscription OnDeleteStaff($filter: ModelSubscriptionStaffFilterInput) {
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
`;
export const onCreateOwner = /* GraphQL */ `
  subscription OnCreateOwner($filter: ModelSubscriptionOwnerFilterInput) {
    onCreateOwner(filter: $filter) {
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
`;
export const onUpdateOwner = /* GraphQL */ `
  subscription OnUpdateOwner($filter: ModelSubscriptionOwnerFilterInput) {
    onUpdateOwner(filter: $filter) {
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
`;
export const onDeleteOwner = /* GraphQL */ `
  subscription OnDeleteOwner($filter: ModelSubscriptionOwnerFilterInput) {
    onDeleteOwner(filter: $filter) {
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
`;
export const onCreateActionModel = /* GraphQL */ `
  subscription OnCreateActionModel(
    $filter: ModelSubscriptionActionModelFilterInput
  ) {
    onCreateActionModel(filter: $filter) {
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
export const onUpdateActionModel = /* GraphQL */ `
  subscription OnUpdateActionModel(
    $filter: ModelSubscriptionActionModelFilterInput
  ) {
    onUpdateActionModel(filter: $filter) {
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
export const onDeleteActionModel = /* GraphQL */ `
  subscription OnDeleteActionModel(
    $filter: ModelSubscriptionActionModelFilterInput
  ) {
    onDeleteActionModel(filter: $filter) {
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
export const onCreateChecklistModel = /* GraphQL */ `
  subscription OnCreateChecklistModel(
    $filter: ModelSubscriptionChecklistModelFilterInput
  ) {
    onCreateChecklistModel(filter: $filter) {
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
`;
export const onUpdateChecklistModel = /* GraphQL */ `
  subscription OnUpdateChecklistModel(
    $filter: ModelSubscriptionChecklistModelFilterInput
  ) {
    onUpdateChecklistModel(filter: $filter) {
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
`;
export const onDeleteChecklistModel = /* GraphQL */ `
  subscription OnDeleteChecklistModel(
    $filter: ModelSubscriptionChecklistModelFilterInput
  ) {
    onDeleteChecklistModel(filter: $filter) {
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
`;
export const onCreateWorkflowModel = /* GraphQL */ `
  subscription OnCreateWorkflowModel(
    $filter: ModelSubscriptionWorkflowModelFilterInput
  ) {
    onCreateWorkflowModel(filter: $filter) {
      id
      company
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
`;
export const onUpdateWorkflowModel = /* GraphQL */ `
  subscription OnUpdateWorkflowModel(
    $filter: ModelSubscriptionWorkflowModelFilterInput
  ) {
    onUpdateWorkflowModel(filter: $filter) {
      id
      company
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
`;
export const onDeleteWorkflowModel = /* GraphQL */ `
  subscription OnDeleteWorkflowModel(
    $filter: ModelSubscriptionWorkflowModelFilterInput
  ) {
    onDeleteWorkflowModel(filter: $filter) {
      id
      company
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
`;
export const onCreateAction = /* GraphQL */ `
  subscription OnCreateAction($filter: ModelSubscriptionActionFilterInput) {
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
`;
export const onUpdateAction = /* GraphQL */ `
  subscription OnUpdateAction($filter: ModelSubscriptionActionFilterInput) {
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
`;
export const onDeleteAction = /* GraphQL */ `
  subscription OnDeleteAction($filter: ModelSubscriptionActionFilterInput) {
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
`;
export const onCreateChecklist = /* GraphQL */ `
  subscription OnCreateChecklist(
    $filter: ModelSubscriptionChecklistFilterInput
  ) {
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
`;
export const onUpdateChecklist = /* GraphQL */ `
  subscription OnUpdateChecklist(
    $filter: ModelSubscriptionChecklistFilterInput
  ) {
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
`;
export const onDeleteChecklist = /* GraphQL */ `
  subscription OnDeleteChecklist(
    $filter: ModelSubscriptionChecklistFilterInput
  ) {
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
`;
export const onCreateWorkflow = /* GraphQL */ `
  subscription OnCreateWorkflow($filter: ModelSubscriptionWorkflowFilterInput) {
    onCreateWorkflow(filter: $filter) {
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
`;
export const onUpdateWorkflow = /* GraphQL */ `
  subscription OnUpdateWorkflow($filter: ModelSubscriptionWorkflowFilterInput) {
    onUpdateWorkflow(filter: $filter) {
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
`;
export const onDeleteWorkflow = /* GraphQL */ `
  subscription OnDeleteWorkflow($filter: ModelSubscriptionWorkflowFilterInput) {
    onDeleteWorkflow(filter: $filter) {
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
`;
export const onCreateChecklistActions = /* GraphQL */ `
  subscription OnCreateChecklistActions(
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
export const onUpdateChecklistActions = /* GraphQL */ `
  subscription OnUpdateChecklistActions(
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
export const onDeleteChecklistActions = /* GraphQL */ `
  subscription OnDeleteChecklistActions(
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
export const onCreateWorkflowChecklists = /* GraphQL */ `
  subscription OnCreateWorkflowChecklists(
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
        company
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
export const onUpdateWorkflowChecklists = /* GraphQL */ `
  subscription OnUpdateWorkflowChecklists(
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
        company
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
export const onDeleteWorkflowChecklists = /* GraphQL */ `
  subscription OnDeleteWorkflowChecklists(
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
        company
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
