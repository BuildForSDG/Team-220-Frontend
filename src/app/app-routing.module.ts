import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './core/navigation/error-pages/not-found/not-found.component';
import { LandingComponent } from './landing/landing.component';

const routes: Routes = [
	{ path: '404', component: NotFoundComponent },
	{ path: '', component: LandingComponent },
	{ path: '**', redirectTo: '404', pathMatch: 'full' }
];
@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {}
