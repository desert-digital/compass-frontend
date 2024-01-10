/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../app/API.service";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getCompassUser = /* GraphQL */ `query GetCompassUser($id: ID!) {
  getCompassUser(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetCompassUserQueryVariables,
  APITypes.GetCompassUserQuery
>;
export const listCompassUsers = /* GraphQL */ `query ListCompassUsers(
  $filter: ModelCompassUserFilterInput
  $limit: Int
  $nextToken: String
) {
  listCompassUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListCompassUsersQueryVariables,
  APITypes.ListCompassUsersQuery
>;
export const getCompassUserRole = /* GraphQL */ `query GetCompassUserRole($id: ID!) {
  getCompassUserRole(id: $id) {
    id
    company
    roleName
    createdAt
    updatedAt
    compassUserRolesId
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetCompassUserRoleQueryVariables,
  APITypes.GetCompassUserRoleQuery
>;
export const listCompassUserRoles = /* GraphQL */ `query ListCompassUserRoles(
  $filter: ModelCompassUserRoleFilterInput
  $limit: Int
  $nextToken: String
) {
  listCompassUserRoles(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
}
` as GeneratedQuery<
  APITypes.ListCompassUserRolesQueryVariables,
  APITypes.ListCompassUserRolesQuery
>;
export const getPendingEvent = /* GraphQL */ `query GetPendingEvent($id: ID!) {
  getPendingEvent(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetPendingEventQueryVariables,
  APITypes.GetPendingEventQuery
>;
export const listPendingEvents = /* GraphQL */ `query ListPendingEvents(
  $filter: ModelPendingEventFilterInput
  $limit: Int
  $nextToken: String
) {
  listPendingEvents(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListPendingEventsQueryVariables,
  APITypes.ListPendingEventsQuery
>;
export const getServiceOrder = /* GraphQL */ `query GetServiceOrder($id: ID!) {
  getServiceOrder(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetServiceOrderQueryVariables,
  APITypes.GetServiceOrderQuery
>;
export const listServiceOrders = /* GraphQL */ `query ListServiceOrders(
  $filter: ModelServiceOrderFilterInput
  $limit: Int
  $nextToken: String
) {
  listServiceOrders(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListServiceOrdersQueryVariables,
  APITypes.ListServiceOrdersQuery
>;
export const getVessel = /* GraphQL */ `query GetVessel($id: ID!) {
  getVessel(id: $id) {
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
` as GeneratedQuery<APITypes.GetVesselQueryVariables, APITypes.GetVesselQuery>;
export const listVessels = /* GraphQL */ `query ListVessels(
  $filter: ModelVesselFilterInput
  $limit: Int
  $nextToken: String
) {
  listVessels(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
` as GeneratedQuery<
  APITypes.ListVesselsQueryVariables,
  APITypes.ListVesselsQuery
>;
export const getStaff = /* GraphQL */ `query GetStaff($id: ID!) {
  getStaff(id: $id) {
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
` as GeneratedQuery<APITypes.GetStaffQueryVariables, APITypes.GetStaffQuery>;
export const listStaff = /* GraphQL */ `query ListStaff(
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
      phone
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListStaffQueryVariables, APITypes.ListStaffQuery>;
export const getOwner = /* GraphQL */ `query GetOwner($id: ID!) {
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
` as GeneratedQuery<APITypes.GetOwnerQueryVariables, APITypes.GetOwnerQuery>;
export const listOwners = /* GraphQL */ `query ListOwners(
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
          vesselType
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
` as GeneratedQuery<
  APITypes.ListOwnersQueryVariables,
  APITypes.ListOwnersQuery
>;
export const getActionModel = /* GraphQL */ `query GetActionModel($id: ID!) {
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
` as GeneratedQuery<
  APITypes.GetActionModelQueryVariables,
  APITypes.GetActionModelQuery
>;
export const listActionModels = /* GraphQL */ `query ListActionModels(
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
` as GeneratedQuery<
  APITypes.ListActionModelsQueryVariables,
  APITypes.ListActionModelsQuery
>;
export const getChecklistModel = /* GraphQL */ `query GetChecklistModel($id: ID!) {
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
` as GeneratedQuery<
  APITypes.GetChecklistModelQueryVariables,
  APITypes.GetChecklistModelQuery
>;
export const listChecklistModels = /* GraphQL */ `query ListChecklistModels(
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
` as GeneratedQuery<
  APITypes.ListChecklistModelsQueryVariables,
  APITypes.ListChecklistModelsQuery
>;
export const getWorkflowModel = /* GraphQL */ `query GetWorkflowModel($id: ID!) {
  getWorkflowModel(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetWorkflowModelQueryVariables,
  APITypes.GetWorkflowModelQuery
>;
export const listWorkflowModels = /* GraphQL */ `query ListWorkflowModels(
  $filter: ModelWorkflowModelFilterInput
  $limit: Int
  $nextToken: String
) {
  listWorkflowModels(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListWorkflowModelsQueryVariables,
  APITypes.ListWorkflowModelsQuery
>;
export const getAction = /* GraphQL */ `query GetAction($id: ID!) {
  getAction(id: $id) {
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
` as GeneratedQuery<APITypes.GetActionQueryVariables, APITypes.GetActionQuery>;
export const listActions = /* GraphQL */ `query ListActions(
  $filter: ModelActionFilterInput
  $limit: Int
  $nextToken: String
) {
  listActions(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
}
` as GeneratedQuery<
  APITypes.ListActionsQueryVariables,
  APITypes.ListActionsQuery
>;
export const getChecklist = /* GraphQL */ `query GetChecklist($id: ID!) {
  getChecklist(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetChecklistQueryVariables,
  APITypes.GetChecklistQuery
>;
export const listChecklists = /* GraphQL */ `query ListChecklists(
  $filter: ModelChecklistFilterInput
  $limit: Int
  $nextToken: String
) {
  listChecklists(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListChecklistsQueryVariables,
  APITypes.ListChecklistsQuery
>;
export const getWorkflow = /* GraphQL */ `query GetWorkflow($id: ID!) {
  getWorkflow(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetWorkflowQueryVariables,
  APITypes.GetWorkflowQuery
>;
export const listWorkflows = /* GraphQL */ `query ListWorkflows(
  $filter: ModelWorkflowFilterInput
  $limit: Int
  $nextToken: String
) {
  listWorkflows(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListWorkflowsQueryVariables,
  APITypes.ListWorkflowsQuery
>;
export const getChecklistActions = /* GraphQL */ `query GetChecklistActions($id: ID!) {
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
` as GeneratedQuery<
  APITypes.GetChecklistActionsQueryVariables,
  APITypes.GetChecklistActionsQuery
>;
export const listChecklistActions = /* GraphQL */ `query ListChecklistActions(
  $filter: ModelChecklistActionsFilterInput
  $limit: Int
  $nextToken: String
) {
  listChecklistActions(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
` as GeneratedQuery<
  APITypes.ListChecklistActionsQueryVariables,
  APITypes.ListChecklistActionsQuery
>;
export const getWorkflowChecklists = /* GraphQL */ `query GetWorkflowChecklists($id: ID!) {
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
` as GeneratedQuery<
  APITypes.GetWorkflowChecklistsQueryVariables,
  APITypes.GetWorkflowChecklistsQuery
>;
export const listWorkflowChecklists = /* GraphQL */ `query ListWorkflowChecklists(
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
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListWorkflowChecklistsQueryVariables,
  APITypes.ListWorkflowChecklistsQuery
>;
export const checklistActionsByActionModelId = /* GraphQL */ `query ChecklistActionsByActionModelId(
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
` as GeneratedQuery<
  APITypes.ChecklistActionsByActionModelIdQueryVariables,
  APITypes.ChecklistActionsByActionModelIdQuery
>;
export const checklistActionsByChecklistModelId = /* GraphQL */ `query ChecklistActionsByChecklistModelId(
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
` as GeneratedQuery<
  APITypes.ChecklistActionsByChecklistModelIdQueryVariables,
  APITypes.ChecklistActionsByChecklistModelIdQuery
>;
export const workflowChecklistsByChecklistModelId = /* GraphQL */ `query WorkflowChecklistsByChecklistModelId(
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
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.WorkflowChecklistsByChecklistModelIdQueryVariables,
  APITypes.WorkflowChecklistsByChecklistModelIdQuery
>;
export const workflowChecklistsByWorkflowModelId = /* GraphQL */ `query WorkflowChecklistsByWorkflowModelId(
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
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.WorkflowChecklistsByWorkflowModelIdQueryVariables,
  APITypes.WorkflowChecklistsByWorkflowModelIdQuery
>;
