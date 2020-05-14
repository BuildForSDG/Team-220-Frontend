import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
	MatToolbarModule,
	MatIconModule,
	MatSidenavModule,
	MatListModule,
	MatButtonModule,
	MatCardModule,
	MatGridListModule,
	MatChipsModule,
	MatTooltipModule,
	MatPaginatorModule,
	MatTableModule,
	MatBadgeModule,
	MatSortModule,
	MatFormFieldModule,
	MatInputModule,
	MatSelectModule,
	MatProgressBarModule
} from '@angular/material';
import { NgModule } from '@angular/core';

@NgModule({
	declarations: [],
	imports: [
		BrowserAnimationsModule,
		MatToolbarModule,
		MatSidenavModule,
		MatListModule,
		MatButtonModule,
		MatIconModule,
		MatCardModule,
		MatGridListModule,
		MatChipsModule,
		MatTooltipModule,
		MatPaginatorModule,
		MatTableModule,
		MatBadgeModule,
		MatSortModule,
		MatFormFieldModule,
		MatInputModule,
		MatSelectModule,
		MatProgressBarModule
	],
	exports: [
		MatToolbarModule,
		MatSidenavModule,
		MatListModule,
		MatButtonModule,
		MatIconModule,
		MatCardModule,
		MatGridListModule,
		MatChipsModule,
		MatTooltipModule,
		MatPaginatorModule,
		MatTableModule,
		MatBadgeModule,
		MatSortModule,
		MatFormFieldModule,
		MatInputModule,
		MatSelectModule,
		MatProgressBarModule
	]
})
export class MyOwnCustomMaterialModule {}
