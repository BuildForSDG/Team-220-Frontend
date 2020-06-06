import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { Center } from 'src/app/shared/helpers/Interfaces';
import { PaginatorConfigurable } from 'src/app/shared/helpers/Classes';
import { environment } from 'src/environments/environment';

@Component({
	selector: 'app-centers-grid',
	templateUrl: './centers-grid.component.html',
	styleUrls: ['./centers-grid.component.css']
})
export class CentersGridComponent implements OnInit {
	@Input() centers: Center[];

	@Input() paginatorConfigurable: PaginatorConfigurable;

	apiBaseUrl: string;

	paginatedCenters: Center[];

	ngOnInit() {
		this.apiBaseUrl = environment.apiBaseUrl;
	}

	ngOnChanges(changes: SimpleChanges): void {
		this.paginateData();
	}

	onPaginatorChange(event) {
		this.paginateData();
	}

	paginateData() {
		if (this.centers !== undefined) {
			this.paginatedCenters = this.centers.slice(
				this.paginatorConfigurable.pageEvent.pageIndex * this.paginatorConfigurable.pageEvent.pageSize,
				(this.paginatorConfigurable.pageEvent.pageIndex + 1) * this.paginatorConfigurable.pageEvent.pageSize
			);
		}
	}
}
