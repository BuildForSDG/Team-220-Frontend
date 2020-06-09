import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-language-toggle',
	templateUrl: './language-toggle.component.html',
	styleUrls: ['./language-toggle.component.css']
})
export class LanguageToggleComponent implements OnInit, AfterViewInit {
	languages = [
		{ name: 'En', code: 'en' },
		{ name: 'Fr', code: 'fr' }
	];

	firstLanguage: string;

	constructor(private router: Router) {}

	// eslint-disable-next-line @typescript-eslint/no-empty-function
	ngOnInit(): void {
		this.firstLanguage = 'en';
	}

	ngAfterViewInit(): void {
		const parts = window.location.href.split('/');
		if (parts[3].length !== 2) {
			this.firstLanguage = 'en';
		} else {
			this.firstLanguage = parts[3];
		}
	}
}
