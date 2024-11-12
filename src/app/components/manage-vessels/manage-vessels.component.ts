// Core

import { Router } from '@angular/router';
import { AfterViewInit, Component, ViewChild } from '@angular/core';

// Material 

import { MatTable } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatSnackBar } from '@angular/material/snack-bar';

// Local

import { ManageVesselsDataSource, ManageVesselsItem } from './manage-vessels-datasource';
import { FleetService } from 'src/app/services/fleet.service';
import { Vessel } from '../../API.service';

@Component({
  selector: 'app-manage-vessels',
  templateUrl: './manage-vessels.component.html',
  styleUrl: './manage-vessels.component.scss'
})
export class ManageVesselsComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<ManageVesselsItem>;
  dataSource = new ManageVesselsDataSource();

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['name', 'type', 'documentNumber', 'status', 'owner', 'actions'];

  constructor(private _router: Router,
    private _snackBar: MatSnackBar,
    private _fleetService: FleetService) {
  }

  ngAfterViewInit(): void {
    this._setup();
  }

  _setup() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
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
}
