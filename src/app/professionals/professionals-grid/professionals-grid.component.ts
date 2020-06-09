import { Component, OnInit, Input, SimpleChanges, OnChanges } from '@angular/core';
import { Professional } from 'src/app/shared/helpers/Interfaces';
import { PaginatorConfigurable } from 'src/app/shared/helpers/Classes';
import { environment } from 'src/environments/environment';

@Component({
	selector: 'app-professionals-grid',
	templateUrl: './professionals-grid.component.html',
	styleUrls: ['./professionals-grid.component.css']
})
export class ProfessionalsGridComponent implements OnInit, OnChanges {
	@Input() professionals: Professional[];

	@Input() paginatorConfigurable: PaginatorConfigurable;

	apiBaseUrl: string;

	isConnected: boolean;

	paginatedProfessionals: Professional[];

	ngOnInit(): void {
		this.apiBaseUrl = environment.apiBaseUrl;
		this.isConnected = false;
	}

	ngOnChanges(changes: SimpleChanges): void {
		this.paginateData();
	}

	onPaginatorChange(event): void {
		this.paginateData();
	}

	paginateData(): void {
		if (this.professionals !== undefined) {
			this.paginatedProfessionals = this.professionals.slice(
				this.paginatorConfigurable.pageEvent.pageIndex * this.paginatorConfigurable.pageEvent.pageSize,
				(this.paginatorConfigurable.pageEvent.pageIndex + 1) * this.paginatorConfigurable.pageEvent.pageSize
			);
		}
	}
}
