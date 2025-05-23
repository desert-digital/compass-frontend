// Core

import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

// Material

import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
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
  @ViewChild('pendingTable') pendingTable!: MatTable<any>;
  
  dataSource: PendingTableDataSource;
  pageSize: number = 6;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['item', 'start', 'end', 'status', 'actions'];

  constructor(private router: Router, 
    private route: ActivatedRoute,
    private _pendingService: PendingService) {
    this.dataSource = new PendingTableDataSource(_pendingService);
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

    const sortState: Sort = {active: 'start', direction: 'asc'};
    this.sort.active = sortState.active;
    this.sort.direction = sortState.direction;
    this.sort.sortChange.emit(sortState);
  }

  onAssignPressed(evt: any) {
    this.router.navigate(['/main/workflow', evt.id]);
  }

  onDeletePressed(evt: any) {
    this._pendingService.deleteItem(evt);
    this.paginator._changePageSize(this.paginator.pageSize);
  }
}
