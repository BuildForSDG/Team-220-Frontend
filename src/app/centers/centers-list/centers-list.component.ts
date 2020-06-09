import { Component, OnInit, OnChanges, Input, ViewChild, SimpleChanges } from '@angular/core';
import { Center } from 'src/app/shared/helpers/Interfaces';
import { PaginatorConfigurable } from 'src/app/shared/helpers/Classes';
import { environment } from 'src/environments/environment';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
	selector: 'app-centers-list',
	templateUrl: './centers-list.component.html',
	styleUrls: ['./centers-list.component.css']
})
export class CentersListComponent implements OnInit, OnChanges {
	@Input() centers: Center[];

	@Input() paginatorConfigurable: PaginatorConfigurable;

	apiBaseUrl = environment.apiBaseUrl;

	isConnected: boolean;

	dataSource: MatTableDataSource<Center>;

	@ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

	@ViewChild(MatSort, { static: true }) sort: MatSort;

	displayedColumns: string[];

	ngOnInit(): void {
		this.displayedColumns = ['id', 'name', 'description'];
		this.isConnected = true;
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
