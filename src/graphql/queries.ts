/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getPendingEvent = /* GraphQL */ `
  query GetPendingEvent($id: ID!) {
    getPendingEvent(id: $id) {
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
export const listPendingEvents = /* GraphQL */ `
  query ListPendingEvents(
    $filter: ModelPendingEventFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPendingEvents(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const getVessel = /* GraphQL */ `
  query GetVessel($id: ID!) {
    getVessel(id: $id) {
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
export const listVessels = /* GraphQL */ `
  query ListVessels(
    $filter: ModelVesselFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listVessels(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
      nextToken
      __typename
    }
  }
`;
export const getStaff = /* GraphQL */ `
  query GetStaff($id: ID!) {
    getStaff(id: $id) {
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
export const listStaff = /* GraphQL */ `
  query ListStaff(
    $filter: ModelStaffFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStaff(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        company
        name
        email
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getOwner = /* GraphQL */ `
  query GetOwner($id: ID!) {
    getOwner(id: $id) {
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
export const listOwners = /* GraphQL */ `
  query ListOwners(
    $filter: ModelOwnerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOwners(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const getActionModel = /* GraphQL */ `
  query GetActionModel($id: ID!) {
    getActionModel(id: $id) {
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
export const listActionModels = /* GraphQL */ `
  query ListActionModels(
    $filter: ModelActionModelFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listActionModels(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const getChecklistModel = /* GraphQL */ `
  query GetChecklistModel($id: ID!) {
    getChecklistModel(id: $id) {
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
export const listChecklistModels = /* GraphQL */ `
  query ListChecklistModels(
    $filter: ModelChecklistModelFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listChecklistModels(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const getWorkflowModel = /* GraphQL */ `
  query GetWorkflowModel($id: ID!) {
    getWorkflowModel(id: $id) {
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
export const listWorkflowModels = /* GraphQL */ `
  query ListWorkflowModels(
    $filter: ModelWorkflowModelFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listWorkflowModels(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const getAction = /* GraphQL */ `
  query GetAction($id: ID!) {
    getAction(id: $id) {
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
export const listActions = /* GraphQL */ `
  query ListActions(
    $filter: ModelActionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listActions(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        status
        model {
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
        actualStart
        actualEnd
        createdAt
        updatedAt
        actionModelId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getChecklist = /* GraphQL */ `
  query GetChecklist($id: ID!) {
    getChecklist(id: $id) {
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
export const listChecklists = /* GraphQL */ `
  query ListChecklists(
    $filter: ModelChecklistFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listChecklists(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
        start
        end
        createdAt
        updatedAt
        checklistOwnerId
        checklistModelId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getWorkflow = /* GraphQL */ `
  query GetWorkflow($id: ID!) {
    getWorkflow(id: $id) {
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
export const listWorkflows = /* GraphQL */ `
  query ListWorkflows(
    $filter: ModelWorkflowFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listWorkflows(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const getChecklistActions = /* GraphQL */ `
  query GetChecklistActions($id: ID!) {
    getChecklistActions(id: $id) {
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
export const listChecklistActions = /* GraphQL */ `
  query ListChecklistActions(
    $filter: ModelChecklistActionsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listChecklistActions(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
          checklists {
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
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getWorkflowChecklists = /* GraphQL */ `
  query GetWorkflowChecklists($id: ID!) {
    getWorkflowChecklists(id: $id) {
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
export const listWorkflowChecklists = /* GraphQL */ `
  query ListWorkflowChecklists(
    $filter: ModelWorkflowChecklistsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listWorkflowChecklists(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
          actions {
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
        workflowModel {
          id
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
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const checklistActionsByActionModelId = /* GraphQL */ `
  query ChecklistActionsByActionModelId(
    $actionModelId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelChecklistActionsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    checklistActionsByActionModelId(
      actionModelId: $actionModelId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
          checklists {
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
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const checklistActionsByChecklistModelId = /* GraphQL */ `
  query ChecklistActionsByChecklistModelId(
    $checklistModelId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelChecklistActionsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    checklistActionsByChecklistModelId(
      checklistModelId: $checklistModelId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
          checklists {
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
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const workflowChecklistsByChecklistModelId = /* GraphQL */ `
  query WorkflowChecklistsByChecklistModelId(
    $checklistModelId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelWorkflowChecklistsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    workflowChecklistsByChecklistModelId(
      checklistModelId: $checklistModelId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
          actions {
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
        workflowModel {
          id
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
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const workflowChecklistsByWorkflowModelId = /* GraphQL */ `
  query WorkflowChecklistsByWorkflowModelId(
    $workflowModelId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelWorkflowChecklistsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    workflowChecklistsByWorkflowModelId(
      workflowModelId: $workflowModelId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
          actions {
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
        workflowModel {
          id
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
        __typename
      }
      nextToken
      __typename
    }
  }
`;