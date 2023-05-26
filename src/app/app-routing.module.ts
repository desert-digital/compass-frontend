import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Local

import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { MainComponent } from './components/main/main.component';
import { HomeComponent } from './components/home/home.component';
import { FleetComponent } from './components/fleet/fleet.component';
import { StaffComponent } from './components/staff/staff.component';
import { WorkflowComponent } from './components/workflow/workflow.component';

import { ChecklistComponent } from './components/checklist/checklist.component';
import { PendingTableComponent } from './components/pending-table/pending-table.component';

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
      path: 'workflow',
      component: WorkflowComponent
    },{
      path: 'checklist',
      component: ChecklistComponent
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
  imports: [RouterModule.forRoot(routes, {enableTracing: false})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
