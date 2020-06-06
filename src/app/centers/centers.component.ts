import { Component, OnInit } from '@angular/core';
import { DisplayModeEnum } from '../shared/helpers/Enums';
import { PaginatorConfigurable } from '../shared/helpers/Classes';
import { Center } from '../shared/helpers/Interfaces';
import { DataService } from '../core/services/data.service';

@Component({
	selector: 'app-centers',
	templateUrl: './centers.component.html',
	styleUrls: ['./centers.component.css']
})
export class CentersComponent implements OnInit {
	centers: Center[];

	displayMode: DisplayModeEnum;

	displayModeEnum = DisplayModeEnum;

	paginatorConfigurable: PaginatorConfigurable;

	constructor(private dataService: DataService) {}

	ngOnInit() {
		this.paginatorConfigurable = new PaginatorConfigurable();
		this.dataService.getAllCenters().subscribe((data: any) => {
			this.centers = data;
			this.paginatorConfigurable = new PaginatorConfigurable(this.centers.length, 4, [4, 8, 12, 24, 48, 96]);
		});
		this.displayMode = DisplayModeEnum.Grid;
	}

	changeDisplayMode(mode: DisplayModeEnum) {
		this.displayMode = mode;
	}
}
