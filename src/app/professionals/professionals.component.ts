import { Component, OnInit } from '@angular/core';
import { Professional } from '../shared/helpers/Interfaces';
import { DisplayModeEnum } from '../shared/helpers/Enums';
import { PaginatorConfigurable } from '../shared/helpers/Classes';
import { DataService } from '../core/services/data.service';

@Component({
	selector: 'app-professionals',
	templateUrl: './professionals.component.html',
	styleUrls: ['./professionals.component.css']
})
export class ProfessionalsComponent implements OnInit {
	professionals: Professional[];

	displayMode: DisplayModeEnum;

	displayModeEnum = DisplayModeEnum;

	paginatorConfigurable: PaginatorConfigurable;

	constructor(private dataService: DataService) {}

	ngOnInit(): void {
		this.paginatorConfigurable = new PaginatorConfigurable();
		this.dataService.getAllProfessionals().subscribe((data: any) => {
			this.professionals = data;
			this.paginatorConfigurable = new PaginatorConfigurable(this.professionals.length, 4, [
				4,
				8,
				12,
				24,
				48,
				96
			]);
		});
		this.displayMode = DisplayModeEnum.Grid;
	}

	changeDisplayMode(mode: DisplayModeEnum): void {
		this.displayMode = mode;
	}
}
