// Core

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Material

import { LayoutModule } from '@angular/cdk/layout';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSelectModule } from '@angular/material/select';
import { MatStepperModule } from '@angular/material/stepper';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ScrollingModule } from '@angular/cdk/scrolling';


// Local

import { HomeComponent } from './components/home/home.component';
import { MainComponent } from './components/main/main.component';
import { WorkflowComponent } from './components/workflow/workflow.component';
import { StaffComponent } from './components/staff/staff.component';
import { FleetComponent } from './components/fleet/fleet.component';
import { ChecklistComponent } from './components/checklist/checklist.component';
import { ServiceOrdersChartComponent } from './components/service-orders-chart/service-orders-chart.component';
import { WorkflowListComponent } from './components/workflow-list/workflow-list.component';
import { AvailableFleetComponent } from './components/available-fleet/available-fleet.component';
import { ServiceOrderTableComponent } from './components/service-order-table/service-order-table.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { CharterChartComponent } from './components/charter-chart/charter-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HomeComponent,
    WorkflowComponent,
    StaffComponent,
    FleetComponent,
    ChecklistComponent,
    ServiceOrdersChartComponent,
    WorkflowListComponent,
    AvailableFleetComponent,
    ServiceOrderTableComponent,
    CharterChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule, 
    ReactiveFormsModule,
    LayoutModule,
    MatBadgeModule,
    MatButtonModule,
    MatFormFieldModule, 
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatSidenavModule,
    MatSelectModule,
    MatToolbarModule,
    MatStepperModule,
    ScrollingModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
