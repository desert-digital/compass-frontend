// Core

import { Router } from '@angular/router';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';

// Material 

import { MatTable } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatButtonToggleChange } from '@angular/material/button-toggle';

// Local

import { ManageVesselsDataSource } from './manage-vessels-datasource';
import { FleetService } from 'src/app/services/fleet.service';
import { Vessel } from 'src/API.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-manage-vessels',
  templateUrl: './manage-vessels.component.html',
  styleUrl: './manage-vessels.component.scss'
})
export class ManageVesselsComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<Vessel>;
  dataSource: ManageVesselsDataSource;

  selectedStatus: string = 'Active';

  formGroup = new FormGroup(
    { status: new FormControl('Active') },
    { updateOn: 'change' }
  );

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['name', 'type', 'documentNumber', 'status', 'owner', 'actions'];

  constructor(private _router: Router,
    private _snackBar: MatSnackBar,
    private _fleetService: FleetService) {
    this.dataSource = new ManageVesselsDataSource(_fleetService);
  }

  ngAfterViewInit(): void {
    this._setup();
  }

  _setup() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.dataSource.textFilter = this.formGroup.controls.status;

    this.table.dataSource = this.dataSource;
  }

  onAddNewVesselPressed() {
    this._router.navigate(['/main/add-vessel']);
  }

  onEditVesselPressed(vessel: Vessel) {
    this._router.navigate(['/main/edit-vessel', vessel.id]);
  }

  async onDeleteVesselPressed(vessel: Vessel) {
    await this._fleetService.deleteVessel(vessel.id).then(() => {
      this._snackBar.open(`Deleted ${vessel.name}`, 'OK', { duration: 3000 });
    });
    this._setup();
  }

  onStatusChange(vessel: Vessel) {
    // Handle the status change here
    this._fleetService.deactivateVessel(vessel).then(() => {
      this._snackBar.open(`Deactivated ${vessel.name}`, 'OK', { duration: 3 });
    })
    this._setup();
  }

  async onStatusChanged(status: MatButtonToggleChange) {
    // this.selectedStatus = status.value
    // if (this.selectedStatus === 'All') {
    //   await this._fleetService.getVessels();
    // }
    // else {
    //   await this._fleetService.getVessels(this.selectedStatus);
    // }
    // this.dataSource = new ManageVesselsDataSource(this._fleetService);
    this._setup();
  }
}
