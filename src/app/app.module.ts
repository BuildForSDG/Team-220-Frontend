import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ServiceWorkerModule } from '@angular/service-worker';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { LayoutComponent } from './layout/layout.component';
import { AppRoutingModule } from './app-routing.module';
import { environment } from '../environments/environment';
import { LandingModule } from './landing/landing.module';

@NgModule({
	declarations: [AppComponent, LayoutComponent],
	imports: [
		BrowserModule,

		CoreModule,
		SharedModule,
		LandingModule,

		HttpClientModule,
		AppRoutingModule,
		ServiceWorkerModule.register('./ngsw-worker.js', { enabled: environment.production })
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {}
