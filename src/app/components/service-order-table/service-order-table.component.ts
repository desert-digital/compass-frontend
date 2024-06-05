import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { ServiceOrderTableDataSource, ServiceOrderTableItem } from './service-order-table-datasource';

@Component({
  selector: 'app-service-order-table',
  templateUrl: './service-order-table.component.html',
  styleUrls: ['./service-order-table.component.scss']
})
export class ServiceOrderTableComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<ServiceOrderTableItem>;
  dataSource: ServiceOrderTableDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['boat', 'date', 'repair'];
  pageSize: number = 9;

  constructor() {
    this.dataSource = new ServiceOrderTableDataSource();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
