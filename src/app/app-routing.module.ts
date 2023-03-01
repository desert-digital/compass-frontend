import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Local

import { MainComponent } from './components/main/main.component';
import { HomeComponent } from './components/home/home.component';
import { FleetComponent } from './components/fleet/fleet.component';
import { StaffComponent } from './components/staff/staff.component';
import { ManageWorkflowComponent } from './components/manage-workflow/manage-workflow.component';

import { ChecklistComponent } from './components/checklist/checklist.component';

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
      component: ManageWorkflowComponent
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
    path: '', redirectTo: '/main/home', pathMatch: 'full',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
