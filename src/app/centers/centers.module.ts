import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CentersComponent } from './centers.component';
import { CentersListComponent } from './centers-list/centers-list.component';
import { CentersGridComponent } from './centers-grid/centers-grid.component';
import { CentersRoutingModule } from './centers-routing.module';
import { SharedModule } from '../shared/shared.module';
import { CentersHeaderComponent } from './centers-header/centers-header.component';

@NgModule({
	declarations: [CentersComponent, CentersListComponent, CentersGridComponent, CentersHeaderComponent],
	imports: [CommonModule, CentersRoutingModule, SharedModule]
})
export class CentersModule {}
