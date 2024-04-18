// Core

import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

// Material 

import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTable } from '@angular/material/table';

// Local

import { Vessel } from '../../API.service';
import { FleetService } from 'src/app/services/fleet.service';
import { FleetTableDataSource } from './manage-fleet-datasource';
import { MatInput } from '@angular/material/input';

@Component({
  selector: 'app-manage-fleet',
  templateUrl: './manage-fleet.component.html',
  styleUrls: ['./manage-fleet.component.scss']
})
export class ManageFleetComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<Vessel>;
  dataSource: FleetTableDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['name', 'type', 'documentNumber', 'owner', 'actions'];

  fileName: string = '';
  percentComplete: number = 0;

  constructor(private router: Router,
    private _snackBar: MatSnackBar,
    private _fleetService: FleetService) {
    this.dataSource = new FleetTableDataSource(_fleetService);
  }

  ngAfterViewInit(): void {
    this._setup();
  }

  _setup() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }

  async onFileSelected(event: MatInput) {
    try {
      console.log(`Uploading the file ${event.value}`);
    }
    catch (e: any) {
      this._snackBar.open(`An error occured ${e.message} saving the vessel. Please contact support`, 'OK');
    }
  }

  onAddNewVesselPressed() {
    this.router.navigate(['/main/add-vessel']);
  }

  onEditVesselPressed(vessel: Vessel) {
    this.router.navigate(['/main/edit-vessel', vessel.id]);
  }

  async onDeleteVesselPressed(vessel: Vessel) {
    await this._fleetService.deleteVessel(vessel.id).then(() => {
      this._snackBar.open(`Deleted ${vessel.name}`, 'OK', {duration: 3000});
    });
    this._setup();
  }
}
