import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MyOwnCustomMaterialModule } from './my-own-custom-material/my-own-custom-material.module';
import { CarouselModule } from './carousel/carousel.module';
import { LanguagesListModule } from './languages-list/languages-list.module';

@NgModule({
	declarations: [],
	imports: [CommonModule, MyOwnCustomMaterialModule, FlexLayoutModule, CarouselModule, LanguagesListModule],
	exports: [CommonModule, MyOwnCustomMaterialModule, FlexLayoutModule, CarouselModule, LanguagesListModule]
})
export class SharedModule {}
