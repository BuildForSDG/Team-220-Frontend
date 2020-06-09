import { Component, OnInit, Input } from '@angular/core';
import { Professional } from 'src/app/shared/helpers/Interfaces';

@Component({
	selector: 'app-center-professionals',
	templateUrl: './center-professionals.component.html',
	styleUrls: ['./center-professionals.component.css']
})
export class CenterProfessionalsComponent implements OnInit {
	@Input() professionals: Professional[];

	ngOnInit(): void {}
}
