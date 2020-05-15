import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NguCarouselModule } from '@ngu/carousel';

import { CarouselComponent } from './carousel.component';

@NgModule({
	declarations: [CarouselComponent],
	imports: [CommonModule, NguCarouselModule],
	exports: [CarouselComponent]
})
export class CarouselModule {}
