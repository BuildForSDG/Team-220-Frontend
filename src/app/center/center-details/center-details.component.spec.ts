import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CenterDetailsComponent } from './center-details.component';

describe('CenterDetailsComponent', () => {
	let component: CenterDetailsComponent;
	let fixture: ComponentFixture<CenterDetailsComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [CenterDetailsComponent]
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(CenterDetailsComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
