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
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatGridListModule } from '@angular/material/grid-list';
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
import { AddOwnerComponent } from './components/add-owner/add-owner.component';
import { AddWorkflowComponent } from './components/add-workflow/add-workflow.component';
import { AddStaffComponent } from './components/add-staff/add-staff.component';
import { AddVesselComponent } from './components/add-vessel/add-vessel.component';
import { AssignWorkflowComponent } from './components/assign-workflow/assign-workflow.component';
import { AvailableFleetComponent } from './components/available-fleet/available-fleet.component';
import { CharterChartComponent } from './components/charter-chart/charter-chart.component';
import { ChecklistComponent } from './components/checklist/checklist.component';
import { DeleteActionDialogComponent } from './components/delete-action-dialog/delete-action-dialog.component';
import { DeleteChecklistDialogComponent } from './components/delete-checklist-dialog/delete-checklist-dialog.component';
import { DemoComponent } from './components/demo/demo.component';
import { EditActionComponent } from './components/edit-action/edit-action.component';
import { EditChecklistComponent } from './components/edit-checklist/edit-checklist.component';
import { EditOwnerComponent } from './components/edit-owner/edit-owner.component';
import { EditStaffComponent } from './components/edit-staff/edit-staff.component';
import { EditVesselComponent } from './components/edit-vessel/edit-vessel.component';
import { EditWorkflowComponent } from './components/edit-workflow/edit-workflow.component';
import { InventoryTableComponent } from './components/inventory-table/inventory-table.component';
import { LoadingComponent } from './components/loading/loading.component';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { MainComponent } from './components/main/main.component';
import { ManageChecklistsComponent } from './components/manage-checklists/manage-checklists.component';
import { ManageFleetComponent } from './components/manage-fleet/manage-fleet.component';
import { ManageOwnersComponent } from './components/manage-owners/manage-owners.component';
import { ManageWorkflowsComponent } from './components/manage-workflows/manage-workflows.component';
import { ManageServiceOrdersComponent } from './components/manage-service-orders/manage-service-orders.component';
import { ManageActionsComponent } from './components/manage-actions/manage-actions.component';
import { MessagesComponent } from './components/messages/messages.component';
import { OwnerNamePipe } from './pipes/owner-name.pipe';
import { PendingTableComponent } from './components/pending-table/pending-table.component';
import { ManageStaffComponent } from './components/manage-staff/manage-staff.component';
import { ServiceOrderTableComponent } from './components/service-order-table/service-order-table.component';
import { SignupComponent } from './components/signup/signup.component';
import { SigninComponent } from './components/signin/signin.component';
import { StaffNamePipe } from './pipes/staff-name.pipe';
import { WorkflowOverviewComponent } from './components/workflow-overview/workflow-overview.component';
import { ShowActionNotesDialogComponent } from './components/show-action-notes-dialog/show-action-notes-dialog.component';
import { ShowChecklistNotesDialogComponent } from './components/show-checklist-notes-dialog/show-checklist-notes-dialog.component';
import { ShowWorkflowNotesDialogComponent } from './components/show-workflow-notes-dialog/show-workflow-notes-dialog.component';
import { TopComponent } from './components/top/top.component';
import { ManageVesselsComponent } from './components/manage-vessels/manage-vessels.component';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    AddActionComponent,
    AddChecklistComponent,
    AddStaffComponent, 
    AddOwnerComponent,
    AddVesselComponent,
    AddWorkflowComponent,
    AssignWorkflowComponent,
    AvailableFleetComponent,
    CharterChartComponent,
    ChecklistComponent,
    DeleteActionDialogComponent,
    DeleteChecklistDialogComponent,
    DemoComponent,
    EditActionComponent,
    EditChecklistComponent,
    EditOwnerComponent,
    EditStaffComponent,
    EditVesselComponent,
    EditWorkflowComponent,
    InventoryTableComponent,
    LoadingComponent,
    LoginComponent,
    LogoutComponent,
    ManageActionsComponent,
    ManageChecklistsComponent,
    ManageFleetComponent,
    ManageOwnersComponent,
    ManageWorkflowsComponent,
    ManageServiceOrdersComponent,
    ManageStaffComponent,
    MessagesComponent,
    OwnerNamePipe,
    PendingTableComponent,
    ServiceOrderTableComponent,
    ShowActionNotesDialogComponent,
    ShowChecklistNotesDialogComponent,
    ShowWorkflowNotesDialogComponent,
    SigninComponent,
    StaffNamePipe,
    SignupComponent,
    TopComponent,
    WorkflowOverviewComponent,
    InventoryTableComponent,
    ManageVesselsComponent,
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
    MatChipsModule,
    MatCheckboxModule,
    MatDialogModule,
    MatDividerModule,
    MatFormFieldModule,
    MatExpansionModule,
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
    NgChartsModule,
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
