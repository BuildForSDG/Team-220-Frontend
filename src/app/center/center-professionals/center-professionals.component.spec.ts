import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CenterProfessionalsComponent } from './center-professionals.component';

describe('CenterProfessionalsComponent', () => {
	let component: CenterProfessionalsComponent;
	let fixture: ComponentFixture<CenterProfessionalsComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [CenterProfessionalsComponent]
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(CenterProfessionalsComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
