import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './landing.component';
import { OurServicesComponent } from './OurServices/ourservices.component';
import { CtaComponent } from './cta/cta.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
	declarations: [LandingComponent, OurServicesComponent, CtaComponent],
	imports: [CommonModule, SharedModule]
})
export class LandingModule {}
