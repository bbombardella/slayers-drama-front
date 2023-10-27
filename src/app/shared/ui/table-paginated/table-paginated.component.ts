import {
  AfterViewInit,
  Component,
  DestroyRef,
  EventEmitter,
  Input,
  Output,
  PipeTransform,
  ViewChild
} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatTableModule} from "@angular/material/table";
import {MatDividerModule} from "@angular/material/divider";
import {MatPaginator, MatPaginatorModule} from "@angular/material/paginator";
import {MatSortModule} from "@angular/material/sort";
import {Observable, Subject, take, takeUntil} from "rxjs";
import {PaginatedResult} from "../../../api/models/paginated-result";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatRippleModule} from "@angular/material/core";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";

@Component({
  selector: 'app-table-paginated',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatDividerModule, MatPaginatorModule, MatSortModule, MatProgressSpinnerModule, MatRippleModule, MatButtonModule, MatIconModule],
  templateUrl: './table-paginated.component.html',
  styleUrls: ['./table-paginated.component.scss']
})
export class TablePaginatedComponent<TData> implements AfterViewInit {

  @Input({required: true}) displayedColumns: TableColumns[] = [];
  @Input({required: true}) fetchMethod!: (params: { page?: number, perPage?: number }) => Observable<PaginatedResult & {
    'data'?: Array<TData>;
  }>;
  @Input({required: false}) displayDelete: boolean = false;
  @Input({required: false}) refresh: Subject<void> = new Subject<void>();
  @Output() editTriggered: EventEmitter<TData> = new EventEmitter();
  @Output() deleteTriggered: EventEmitter<TData> = new EventEmitter();

  data: TData[] = [];
  totalCount: number = 0;
  loading: boolean = false;

  private readonly _cancellationToken: Subject<void> = new Subject<void>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  get headers(): string[] {
    return [...this.displayedColumns.map(c => c.field), "actions"];
  }

  constructor(private readonly destroyRef: DestroyRef) {
  }

  ngAfterViewInit(): void {
    this.refreshData();

    this.refresh
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(_ => this.refreshData());
  }

  refreshData(): void {
    this._cancellationToken.next();
    this.loading = true;

    this.fetchMethod({
      page: this.paginator.pageIndex + 1,
      perPage: this.paginator.pageSize
    })
      .pipe(
        take(1),
        takeUntil(this._cancellationToken),
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe(value => {
        this.loading = false;

        if (!value) {
          this.data = [];
          return;
        }

        this.totalCount = value.meta.total;
        this.data = value.data;
      });
  }

  editClicked(data: TData) {
    this.editTriggered.emit(data);
  }

  deleteClicked(data: TData) {
    this.deleteTriggered.emit(data);
  }

  getPropByString(object: any, path: string): any {
    return this.getProp(object, path.split('.'));
  }

  private getProp(object: any, path: string[]): any {
    if (path.length === 1) {
      return object[path[0]];
    } else if (path.length === 0) {
      return;
    } else {
      if (object[path[0]]) {
        return this.getProp(object[path[0]], path.slice(1))
      } else {
        object[path[0]] = {};
        return this.getProp(object[path[0]], path.slice(1));
      }
    }
  };
}

export interface TableColumns {
  name: string,
  field: string,
  pipe?: PipeTransform
}
