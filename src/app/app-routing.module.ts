import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Local

import { AddChecklistComponent } from './components/add-checklist/add-checklist.component';
import { ChecklistComponent } from './components/checklist/checklist.component';
import { FleetComponent } from './components/fleet/fleet.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { MainComponent } from './components/main/main.component';
import { ManageChecklistsComponent } from './components/manage-checklists/manage-checklists.component';
import { ManageServiceOrdersComponent } from './components/manage-service-orders/manage-service-orders.component';
import { ManageWorkflowsComponent } from './components/manage-workflows/manage-workflows.component';
import { PendingTableComponent } from './components/pending-table/pending-table.component';
import { StaffComponent } from './components/staff/staff.component';
import { WorkflowComponent } from './components/workflow/workflow.component';

const routes: Routes = [
  {
    path: 'main', component: MainComponent,
    children: [{
      path: 'home',
      component: HomeComponent
    },{
      path: 'fleet',
      component: FleetComponent
    },{
      path: 'staff',
      component: StaffComponent
    },{
      path: 'pending',
      component: PendingTableComponent
    },{
      path: 'workflow/:eventId',
      component: WorkflowComponent
    },{
      path: 'workflows',
      component: ManageWorkflowsComponent
    },{
      path: 'add-checklist',
      component: AddChecklistComponent
    },{
      path: 'checklists',
      component: ManageChecklistsComponent
    },{
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
  imports: [RouterModule.forRoot(routes, {enableTracing: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
