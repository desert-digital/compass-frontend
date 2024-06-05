import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';

// TODO: Replace this with your own data model type
export interface ServiceOrderTableItem {
  repair: string;
  date: string;
  boat: string;
}

// TODO: replace this with real data from your application
const todaysDate = new Date();
const EXAMPLE_DATA: ServiceOrderTableItem[] = [
  {boat: 'La Barca', date: todaysDate.toDateString(), repair: 'Fix it'},
  {boat: 'Velero', date: todaysDate.toDateString(), repair: 'New rudder'},
  {boat: 'Speedy', date: todaysDate.toDateString(), repair: 'Thru-hulls need work'},
  {boat: 'Courageous', date: todaysDate.toDateString(), repair: 'Engine Maintenance'},
  {boat: 'Bruja', date: todaysDate.toDateString(), repair: 'Gelcoat touch-up'},
  {boat: 'Hexe', date: todaysDate.toDateString(), repair: 'Mainsail repair'},
  {boat: 'Maggie', date: todaysDate.toDateString(), repair: 'Install Electronics'}
];

/**
 * Data source for the ServiceOrderTable view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class ServiceOrderTableDataSource extends DataSource<ServiceOrderTableItem> {
  data: ServiceOrderTableItem[] = EXAMPLE_DATA;
  public numberOfOrders: number = 0;
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
  connect(): Observable<ServiceOrderTableItem[]> {
    if (this.paginator && this.sort) {
      // Combine everything that affects the rendered data into one update
      // stream for the data-table to consume.
      return merge(observableOf(this.data), this.paginator.page, this.sort.sortChange)
        .pipe(map(() => {
          this.numberOfOrders = this.data.length;
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
  private getPagedData(data: ServiceOrderTableItem[]): ServiceOrderTableItem[] {
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
  private getSortedData(data: ServiceOrderTableItem[]): ServiceOrderTableItem[] {
    if (!this.sort || !this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort?.direction === 'asc';
      switch (this.sort?.active) {
        case 'name': return compare(a.boat, b.boat, isAsc);
        case 'repair': return compare(+a.repair, +b.repair, isAsc);
        default: return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a: string | number, b: string | number, isAsc: boolean): number {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
