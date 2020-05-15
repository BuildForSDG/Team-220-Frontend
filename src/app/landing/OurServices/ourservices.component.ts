import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-services',
	templateUrl: './ourservices.component.html',
	styleUrls: ['./ourservices.component.css']
})
export class OurServicesComponent implements OnInit {
	@Input('backgroundGray') public backgroundGray;

	// eslint-disable-next-line @typescript-eslint/no-empty-function
	ngOnInit(): void {}
}
