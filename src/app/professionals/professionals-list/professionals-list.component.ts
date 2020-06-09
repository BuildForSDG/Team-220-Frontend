import { Component, OnInit, OnChanges, Input, ViewChild, SimpleChanges } from '@angular/core';
import { Professional } from 'src/app/shared/helpers/Interfaces';
import { PaginatorConfigurable } from 'src/app/shared/helpers/Classes';
import { environment } from 'src/environments/environment';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
	selector: 'app-professionals-list',
	templateUrl: './professionals-list.component.html',
	styleUrls: ['./professionals-list.component.css']
})
export class ProfessionalsListComponent implements OnInit, OnChanges {
	@Input() professionals: Professional[];

	@Input() paginatorConfigurable: PaginatorConfigurable;

	apiBaseUrl = environment.apiBaseUrl;

	isConnected: boolean;

	dataSource: MatTableDataSource<Professional>;

	@ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

	@ViewChild(MatSort, { static: true }) sort: MatSort;

	displayedColumns: string[];

	ngOnInit(): void {
		this.displayedColumns = ['id', 'name', 'description'];
		this.isConnected = false;
	}

	ngOnChanges(changes: SimpleChanges): void {
		this.dataSource = new MatTableDataSource(this.professionals);
		this.dataSource.sort = this.sort;

		this.paginator.length = this.paginatorConfigurable.length;
		this.paginator.pageIndex = this.paginatorConfigurable.pageEvent.pageIndex;
		this.paginator.pageSize = this.paginatorConfigurable.pageEvent.pageSize;
		this.paginator.pageSizeOptions = this.paginatorConfigurable.pageSizeOptions;
		this.dataSource.paginator = this.paginator;
	}

	applyFilter(filterValue: string): void {
		this.dataSource.filter = filterValue.trim().toLowerCase();
	}
}
