// Core

import { AfterViewInit, Component, ViewChild } from '@angular/core';

// Material

import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';

// Local

import { PendingService } from 'src/app/services/pending.service';
import { PendingTableDataSource } from './pending-table-datasource';

@Component({
  selector: 'app-pending-table',
  templateUrl: './pending-table.component.html',
  styleUrls: ['./pending-table.component.scss']
})
export class PendingTableComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<Event>;
  
  dataSource: PendingTableDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['item', 'start', 'end', 'status'];

  constructor(private _pendingService: PendingService) {
    this.dataSource = new PendingTableDataSource(_pendingService);
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
