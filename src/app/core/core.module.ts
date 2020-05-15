import { NgModule, Optional, SkipSelf, ErrorHandler } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { EnsureModuleLoadedOnceGuard } from './ensure-module-loaded-once-guard.guard';
import { MyOwnCustomMaterialModule } from '../shared/my-own-custom-material/my-own-custom-material.module';
import { HeaderComponent } from './navigation/header/header.component';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';
import { FooterComponent } from './navigation/footer/footer.component';
import { NotFoundComponent } from './navigation/error-pages/not-found/not-found.component';
import { AddHeaderInterceptor } from './interceptors/add-header.interceptor';
import { LogResponseInterceptor } from './interceptors/log-response.interceptor';
import { CacheInterceptor } from './interceptors/cache.interceptor';
import { LanguageToggleComponent } from './navigation/language-toggle/language-toggle.component';

@NgModule({
	declarations: [HeaderComponent, SidenavListComponent, FooterComponent, NotFoundComponent, LanguageToggleComponent],
	imports: [CommonModule, RouterModule, MyOwnCustomMaterialModule, FlexLayoutModule, FormsModule],
	providers: [
		{ provide: HTTP_INTERCEPTORS, useClass: AddHeaderInterceptor, multi: true },
		{ provide: HTTP_INTERCEPTORS, useClass: LogResponseInterceptor, multi: true }
	],
	exports: [
		RouterModule,
		MyOwnCustomMaterialModule,
		FlexLayoutModule,
		HeaderComponent,
		SidenavListComponent,
		FooterComponent,
		FormsModule
	]
})
export class CoreModule extends EnsureModuleLoadedOnceGuard {
	// Ensure that CoreModule is only loaded into AppModule

	// Looks for the module in the parent injector to see if it's already been loaded (only want it loaded once)
	// eslint-disable-next-line @typescript-eslint/no-useless-constructor
	constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
		super(parentModule);
	}
}
