import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CenterRoutingModule } from './center-routing.module';
import { CenterComponent } from './center.component';
import { CenterDetailsComponent } from './center-details/center-details.component';
import { CenterProfessionalsComponent } from './center-professionals/center-professionals.component';
import { SharedModule } from '../shared/shared.module';
import { ProfessionalsModule } from '../professionals/professionals.module';

@NgModule({
	declarations: [CenterComponent, CenterDetailsComponent, CenterProfessionalsComponent],
	imports: [CommonModule, CenterRoutingModule, SharedModule, FormsModule, ReactiveFormsModule, ProfessionalsModule]
})
export class CenterModule {}
