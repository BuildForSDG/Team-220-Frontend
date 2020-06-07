import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CentersComponent } from './centers.component';
import { CentersListComponent } from './centers-list/centers-list.component';
import { CentersGridComponent } from './centers-grid/centers-grid.component';
import { CentersRoutingModule } from './centers-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
	declarations: [CentersComponent, CentersListComponent, CentersGridComponent],
	imports: [CommonModule, CentersRoutingModule, SharedModule]
})
export class CentersModule {}
