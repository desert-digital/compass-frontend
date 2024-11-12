// Core

import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// Material

import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';

// Local

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
  pageSize: number = 7;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'boat', 'date', 'repair', 'actions'];

  constructor(private route: ActivatedRoute) {
    this.dataSource = new ServiceOrderTableDataSource();
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.pageSize = +params['size'] || 6;
    });
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }

  onInfoPressed() {
    alert('Info Pressed');
  }
}
