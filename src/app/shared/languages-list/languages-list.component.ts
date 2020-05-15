import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Language } from '../helpers/Interfaces';

@Component({
	selector: 'app-languages-list',
	templateUrl: './languages-list.component.html',
	styleUrls: ['./languages-list.component.css']
})
export class LanguagesListComponent implements OnInit {
	@Input() languages: Language[];

	languagesSelect = new FormControl();

	selected = 'all';

	@Output() filterByProperty = new EventEmitter<number>();

	// eslint-disable-next-line @typescript-eslint/no-empty-function
	ngOnInit() {}

	filterBy(languageId) {
		this.filterByProperty.emit(languageId);
	}
}
