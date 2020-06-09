import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessionalsGridComponent } from './professionals-grid.component';

describe('ProfessionalsGridComponent', () => {
	let component: ProfessionalsGridComponent;
	let fixture: ComponentFixture<ProfessionalsGridComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ProfessionalsGridComponent]
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(ProfessionalsGridComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
