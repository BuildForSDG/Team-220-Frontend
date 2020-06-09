import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfessionalsComponent } from './professionals.component';

const routes: Routes = [{ path: 'professionals', component: ProfessionalsComponent }];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class ProfessionalsRoutingModule {}
