// Core

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Material

import { DragDropModule } from '@angular/cdk/drag-drop';
import { LayoutModule } from '@angular/cdk/layout';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatRadioModule } from '@angular/material/radio';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSelectModule } from '@angular/material/select';
import { MatSortModule } from '@angular/material/sort';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ScrollingModule } from '@angular/cdk/scrolling';

// Amplify 

import { AmplifyAuthenticatorModule } from '@aws-amplify/ui-angular';

// charts

import { NgChartsModule } from 'ng2-charts';

// Local

import { AddActionComponent } from './components/add-action/add-action.component';
import { AddChecklistComponent } from './components/add-checklist/add-checklist.component';
import { AddWorkflowComponent } from './components/add-workflow/add-workflow.component';
import { AvailableFleetComponent } from './components/available-fleet/available-fleet.component';
import { CharterChartComponent } from './components/charter-chart/charter-chart.component';
import { ChecklistComponent } from './components/checklist/checklist.component';
import { DeleteActionDialogComponent } from './components/delete-action-dialog/delete-action-dialog.component';
import { DeleteChecklistDialogComponent } from './components/delete-checklist-dialog/delete-checklist-dialog.component';
import { EditActionComponent } from './components/edit-action/edit-action.component';
import { FleetTableComponent } from './components/fleet-table/fleet-table.component';
import { FleetComponent } from './components/fleet/fleet.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { MainComponent } from './components/main/main.component';
import { ManageChecklistsComponent } from './components/manage-checklists/manage-checklists.component';
import { ManageWorkflowsComponent } from './components/manage-workflows/manage-workflows.component';
import { ManageServiceOrdersComponent } from './components/manage-service-orders/manage-service-orders.component';
import { ManageActionsComponent } from './components/manage-actions/manage-actions.component';
import { PendingTableComponent } from './components/pending-table/pending-table.component';
import { StaffComponent } from './components/staff/staff.component';
import { ServiceOrderTableComponent } from './components/service-order-table/service-order-table.component';
import { WorkflowComponent } from './components/workflow/workflow.component';
import { WorkflowListComponent } from './components/workflow-list/workflow-list.component';
import { ShowActionNotesDialogComponent } from './components/show-action-notes-dialog/show-action-notes-dialog.component';
import { ShowChecklistNotesDialogComponent } from './components/show-checklist-notes-dialog/show-checklist-notes-dialog.component';
import { EditChecklistComponent } from './components/edit-checklist/edit-checklist.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HomeComponent,
    WorkflowComponent,
    StaffComponent,
    FleetComponent,
    ChecklistComponent,
    WorkflowListComponent,
    AvailableFleetComponent,
    ServiceOrderTableComponent,
    CharterChartComponent,
    LoginComponent,
    LogoutComponent,
    PendingTableComponent,
    ManageChecklistsComponent,
    ManageWorkflowsComponent,
    ManageServiceOrdersComponent,
    FleetTableComponent,
    AddChecklistComponent,
    AddWorkflowComponent,
    AddActionComponent,
    ManageActionsComponent,
    DeleteActionDialogComponent,
    DeleteChecklistDialogComponent,
    EditActionComponent,
    ShowActionNotesDialogComponent,
    ShowChecklistNotesDialogComponent,
    EditChecklistComponent,
    ],
  imports: [
    AmplifyAuthenticatorModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DragDropModule,
    FormsModule, 
    ReactiveFormsModule,
    LayoutModule,
    MatBadgeModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatFormFieldModule, 
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatRadioModule,
    MatSnackBarModule,
    MatSidenavModule,
    MatSelectModule,
    MatToolbarModule,
    MatStepperModule,
    ScrollingModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    NgChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})



export class AppModule { }
