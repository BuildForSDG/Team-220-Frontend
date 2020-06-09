import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Center } from 'src/app/shared/helpers/Interfaces';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
	selector: 'app-center-details',
	templateUrl: './center-details.component.html',
	styleUrls: ['./center-details.component.css']
})
export class CenterDetailsComponent implements OnInit, OnChanges {
	@Input() center: Center;

	options: FormGroup;

	floatLabelControl = new FormControl('public');

	constructor(fb: FormBuilder) {
		this.options = fb.group({
			floatLabel: this.floatLabelControl
		});
	}

	ngOnChanges(changes: SimpleChanges): void {
		if (this.center) {
			this.floatLabelControl = new FormControl(this.center.type);
			this.center.phoneNumbers = this.center.phoneNumbers.split(',').join('\n');
		}
	}

	ngOnInit(): void {}
}
