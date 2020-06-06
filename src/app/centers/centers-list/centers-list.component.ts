import { Component, OnInit, OnChanges, Input, ViewChild, SimpleChanges } from '@angular/core';
import { Center } from 'src/app/shared/helpers/Interfaces';
import { PaginatorConfigurable } from 'src/app/shared/helpers/Classes';
import { environment } from 'src/environments/environment';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';

@Component({
	selector: 'app-centers-list',
	templateUrl: './centers-list.component.html',
	styleUrls: ['./centers-list.component.css']
})
export class CentersListComponent implements OnInit, OnChanges {
	@Input() centers: Center[];

	@Input() paginatorConfigurable: PaginatorConfigurable;

	apiBaseUrl = environment.apiBaseUrl;

	dataSource: MatTableDataSource<Center>;

	@ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

	@ViewChild(MatSort, { static: true }) sort: MatSort;

	displayedColumns: string[];

	ngOnInit() {
		this.displayedColumns = ['id', 'name', 'description'];
	}

	ngOnChanges(changes: SimpleChanges): void {
		this.dataSource = new MatTableDataSource(this.centers);
		this.dataSource.sort = this.sort;

		this.paginator.length = this.paginatorConfigurable.length;
		this.paginator.pageIndex = this.paginatorConfigurable.pageEvent.pageIndex;
		this.paginator.pageSize = this.paginatorConfigurable.pageEvent.pageSize;
		this.paginator.pageSizeOptions = this.paginatorConfigurable.pageSizeOptions;
		this.dataSource.paginator = this.paginator;
	}

	applyFilter(filterValue: string) {
		this.dataSource.filter = filterValue.trim().toLowerCase();
	}
}
