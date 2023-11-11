import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Local

import { AddActionComponent } from './components/add-action/add-action.component';
import { AddChecklistComponent } from './components/add-checklist/add-checklist.component';
import { AddWorkflowComponent } from './components/add-workflow/add-workflow.component';
import { AddStaffComponent } from './components/add-staff/add-staff.component';
import { ChecklistComponent } from './components/checklist/checklist.component';
import { EditActionComponent } from './components/edit-action/edit-action.component';
import { EditChecklistComponent } from './components/edit-checklist/edit-checklist.component';
import { EditStaffComponent } from './components/edit-staff/edit-staff.component';
import { EditWorkflowComponent } from './components/edit-workflow/edit-workflow.component';
import { ManageFleetComponent } from './components/manage-fleet/manage-fleet.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { MainComponent } from './components/main/main.component';
import { ManageActionsComponent } from './components/manage-actions/manage-actions.component';
import { ManageChecklistsComponent } from './components/manage-checklists/manage-checklists.component';
import { ManageServiceOrdersComponent } from './components/manage-service-orders/manage-service-orders.component';
import { ManageWorkflowsComponent } from './components/manage-workflows/manage-workflows.component';
import { PendingTableComponent } from './components/pending-table/pending-table.component';
import { ManageStaffComponent } from './components/manage-staff/manage-staff.component';
import { AssignWorkflowComponent } from './components/assign-workflow/assign-workflow.component';
import { AddVesselComponent } from './components/add-vessel/add-vessel.component';
import { ManageOwnersComponent } from './components/manage-owners/manage-owners.component';
import { EditOwnerComponent } from './components/edit-owner/edit-owner.component';
import { AddOwnerComponent } from './components/add-owner/add-owner.component';
import { EditVesselComponent } from './components/edit-vessel/edit-vessel.component';

const routes: Routes = [
  {
    path: 'main', component: MainComponent,
    children: [{
      path: 'home',
      component: HomeComponent
    }, {
      path: 'add-vessel',
      component: AddVesselComponent
    }, {
      path: 'edit-vessel/:id',
      component: EditVesselComponent
    }, {
      path: 'fleet',
      component: ManageFleetComponent
    }, {
      path: 'staff',
      component: ManageStaffComponent
    }, {
      path: 'add-staff',
      component: AddStaffComponent
    }, {
      path: 'edit-staff/:id',
      component: EditStaffComponent
    }, {
      path: 'add-owner',
      component: AddOwnerComponent
    }, {
      path: 'edit-owner/:id',
      component: EditOwnerComponent
    }, {
      path: 'owners',
      component: ManageOwnersComponent
    }, {
      path: 'pending',
      component: PendingTableComponent
    }, {
      path: 'workflow/:eventId',
      component: AssignWorkflowComponent
    }, {
      path: 'add-workflow',
      component: AddWorkflowComponent
    }, {
      path: 'edit-workflow/:id',
      component: EditWorkflowComponent
    }, {
      path: 'workflows',
      component: ManageWorkflowsComponent
    }, {
      path: 'add-checklist',
      component: AddChecklistComponent
    }, {
      path: 'edit-checklist/:id',
      component: EditChecklistComponent
    }, {
      path: 'checklists',
      component: ManageChecklistsComponent
    }, {
      path: 'add-new-action',
      component: AddActionComponent
    }, {
      path: 'edit-action/:id',
      component: EditActionComponent
    }, {
      path: 'actions',
      component: ManageActionsComponent
    }, {
      path: 'services',
      component: ManageServiceOrdersComponent
    }],
  },
  {
    path: 'checklist',
    component: ChecklistComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'logout',
    component: LogoutComponent
  },
  {
    path: '', redirectTo: '/login', pathMatch: 'full',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
