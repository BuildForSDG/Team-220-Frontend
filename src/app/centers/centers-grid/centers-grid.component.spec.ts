import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CentersGridComponent } from './centers-grid.component';

describe('CentersGridComponent', () => {
	let component: CentersGridComponent;
	let fixture: ComponentFixture<CentersGridComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [CentersGridComponent]
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(CentersGridComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
