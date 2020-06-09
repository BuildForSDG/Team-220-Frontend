import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfessionalsRoutingModule } from './professionals-routing.module';
import { ProfessionalsComponent } from './professionals.component';
import { ProfessionalsListComponent } from './professionals-list/professionals-list.component';
import { ProfessionalsGridComponent } from './professionals-grid/professionals-grid.component';
import { ProfessionalsHeaderComponent } from './professionals-header/professionals-header.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
	declarations: [
		ProfessionalsComponent,
		ProfessionalsListComponent,
		ProfessionalsGridComponent,
		ProfessionalsHeaderComponent
	],
	imports: [CommonModule, ProfessionalsRoutingModule, SharedModule],
	exports: [ProfessionalsComponent]
})
export class ProfessionalsModule {}
