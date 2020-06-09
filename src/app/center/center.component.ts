import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Center, Professional } from '../shared/helpers/Interfaces';
import { DataService } from '../core/services/data.service';

@Component({
	selector: 'app-center',
	templateUrl: './center.component.html',
	styleUrls: ['./center.component.css']
})
export class CenterComponent implements OnInit {
	center: Center;

	professionals: Professional[];

	constructor(private dataService: DataService, private router: Router, private route: ActivatedRoute) {}

	ngOnInit() {
		this.route.paramMap.subscribe((params) => {
			const id = +params.get('id');
			this.dataService.getCenterById(id).subscribe((data: any) => {
				this.center = data;
				if (this.center === undefined) {
					this.navigateTo404();
				}
			});

			this.dataService.getProfessionalsByCenterId(id).subscribe((data: any) => {
				this.professionals = data;
			});
		});
	}

	navigateTo404() {
		this.router.navigateByUrl('/404');
	}
}
