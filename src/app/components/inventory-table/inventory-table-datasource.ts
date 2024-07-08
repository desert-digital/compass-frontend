import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';

// TODO: Replace this with your own data model type
export interface InventoryTableItem {
  id: string;
  partNumber: string;
  description: string;
  location: string;
  count: number
}

// TODO: replace this with real data from your application
const EXAMPLE_DATA: InventoryTableItem[] = [
  {id: 'SEA-001', partNumber: 'AXR2-53', description: 'La Barca', location: 'Fix it', count: 5},
  {id: 'SEA-002', partNumber: 'AXR2-53', description: 'Velero', location: 'New rudder', count: 3},
  {id: 'SEA-003', partNumber: 'AXR2-53', description: 'Speedy', location: 'Thru-hulls need work', count: 10},
  {id: 'SEA-004', partNumber: 'AXR2-53', description: 'Courageous', location: 'Engine Maintenance', count: 8},
  {id: 'SEA-005', partNumber: 'AXR2-53', description: 'Bruja', location: 'Gelcoat touch-up', count: 2},
  {id: 'SEA-006', partNumber: 'AXR2-53', description: 'Hexe', location: 'Mainsail repair', count: 1},
  {id: 'SEA-007', partNumber: 'AXR2-53', description: 'Maggie', location: 'Install Electronics', count: 5}
];

/**
 * Data source for the InventoryTable view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class InventoryTableDataSource extends DataSource<InventoryTableItem> {
  data: InventoryTableItem[] = EXAMPLE_DATA;
  paginator: MatPaginator | undefined;
  sort: MatSort | undefined;

  constructor() {
    super();
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<InventoryTableItem[]> {
    if (this.paginator && this.sort) {
      // Combine everything that affects the rendered data into one update
      // stream for the data-table to consume.
      return merge(observableOf(this.data), this.paginator.page, this.sort.sortChange)
        .pipe(map(() => {
          return this.getPagedData(this.getSortedData([...this.data ]));
        }));
    } else {
      throw Error('Please set the paginator and sort on the data source before connecting.');
    }
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect(): void {}

  /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getPagedData(data: InventoryTableItem[]): InventoryTableItem[] {
    if (this.paginator) {
      const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
      return data.splice(startIndex, this.paginator.pageSize);
    } else {
      return data;
    }
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: InventoryTableItem[]): InventoryTableItem[] {
    if (!this.sort || !this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort?.direction === 'asc';
      switch (this.sort?.active) {
        case 'description': return compare(a.description, b.description, isAsc);
        case 'id': return compare(+a.id, +b.id, isAsc);
        default: return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a: string | number, b: string | number, isAsc: boolean): number {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
