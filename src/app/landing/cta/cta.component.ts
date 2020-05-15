import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-cta',
	templateUrl: './cta.component.html',
	styleUrls: ['./cta.component.css']
})
export class CtaComponent implements OnInit {
	// eslint-disable-next-line @typescript-eslint/no-empty-function
	ngOnInit(): void {}

	buyWil() {
		window.open('https://');
	}
}
