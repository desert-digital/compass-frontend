// Core

import { Component, AfterViewInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

// Local

import { ActionModel, Owner, Staff, Vessel } from 'src/API';
import { ActionModelsService } from 'src/app/services/action-models.service';
import { FleetService } from 'src/app/services/fleet.service';
import { OwnersService } from 'src/app/services/owners.service';
import { StaffService } from 'src/app/services/staff.service';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.scss'
})
export class DemoComponent implements AfterViewInit {

  vessels: Vessel[] = [];
  owners: Owner[] = [];
  staff: Staff[] = [];
  actions: ActionModel[] = [];

  constructor(private _fleetService: FleetService,
    private _staffService: StaffService,
    private _ownersService: OwnersService,
    private _actionsService: ActionModelsService,
    private _snackBar: MatSnackBar
  ) {}


  async onNgInit() {
    await this._getDemoData();
  }

  async ngAfterViewInit() {
    await this._getDemoData();
  }

  async _getDemoData() {
    await this._getFleet();
    await this._getStaff();
    await this._getOwners();
    await this._getActions();
  }

  async _getFleet() {
    this.vessels = await this._fleetService.getVessels();
  }

  async _getStaff() {
    this.staff = await this._staffService.getStaff();
  }

  async _getOwners() {
    this.owners = await this._ownersService.getOwners();
  }

  async _getActions() {
    this.actions = await this._actionsService.getActionModels();
  }

  addDemoFleet() {
    alert("To Do: Add Demo Fleet");
  }

  addDemoStaff() {
    this._staffService.createDemoStaff();
    this._getStaff();
    this._snackBar.open("Added Demo Staff", "OK", {duration: 5000})
  }

  addDemoOwners() {
    this._ownersService.createDemoOwners();
    this._getOwners();
    this._snackBar.open("Added Demo Staff", "OK", {duration: 5000})
  }

  addDemoActions() {
    this._actionsService.createDemoActions();
    this._getActions();
    this._snackBar.open("Added Demo Actions", "OK", {duration: 50000});
  }
}
