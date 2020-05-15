import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { LanguagesListComponent } from './languages-list.component';
import { MyOwnCustomMaterialModule } from '../my-own-custom-material/my-own-custom-material.module';

@NgModule({
	declarations: [LanguagesListComponent],
	imports: [CommonModule, MyOwnCustomMaterialModule, ReactiveFormsModule],
	exports: [LanguagesListComponent, MyOwnCustomMaterialModule]
})
export class LanguagesListModule {}
