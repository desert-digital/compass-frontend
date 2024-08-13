// Core

import { Component, AfterViewInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

// Local

import { Action, Owner, Staff, Vessel } from 'src/API';
import { ActionsService } from 'src/app/services/actions.service';
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
  actions: Action[] = [];

  constructor(private _fleetService: FleetService,
    private _staffService: StaffService,
    private _ownersService: OwnersService,
    private _actionsService: ActionsService,
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
    this.actions = await this._actionsService.getActions();
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
    alert("To Do: Add Demo Actions");
  }
}
