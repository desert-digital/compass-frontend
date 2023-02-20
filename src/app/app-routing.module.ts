import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Local

import { MainComponent } from './components/main/main.component';
import { HomeComponent } from './components/home/home.component';
import { FleetComponent } from './components/fleet/fleet.component';
import { StaffComponent } from './components/staff/staff.component';

import { ChecklistComponent } from './components/checklist/checklist.component';
import { WorkflowComponent } from './components/workflow/workflow.component';

const routes: Routes = [
  {
    path: 'main', component: MainComponent,
    children: [{
      path: 'fleet',
      component: FleetComponent
    },{
      path: 'staff',
      component: StaffComponent
    },{
      path: 'home',
      component: HomeComponent
    },{
      path: 'workflow',
      component: WorkflowComponent
    },{
      path: 'checklist',
      component: ChecklistComponent
    }],
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
