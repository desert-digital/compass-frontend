// Core

import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

// Material 


import { MatTable } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

// Local

import { Vessel } from '../../API.service';
import { FleetService } from 'src/app/services/fleet.service';
import { FleetTableDataSource } from './fleet-table-datasource';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-fleet-table',
  templateUrl: './fleet-table.component.html',
  styleUrls: ['./fleet-table.component.scss']
})
export class FleetTableComponent implements AfterViewInit {
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
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }

  async onFileSelected(event: any) {
    const fleetFile = event.target.files[0];

    try {
      console.log('Uploading the file');
    }
    catch (e: any) {
      this._snackBar.open(`An error occured ${e.message} saving the media item. Please contact support`, 'OK');
    }
  }

  onAddNewVesselPressed() {
    this.router.navigate(['/main/add-vessel']);
  }

  onEditVesselPressed() {
    alert('Edit Pressed');
  }
}
