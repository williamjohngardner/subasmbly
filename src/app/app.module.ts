import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faChevronLeft, faChevronDown, faSearch } from '@fortawesome/free-solid-svg-icons';

import { AppRoutingModule } from './app-routing.module';
import { InventoryModule } from './inventory/inventory.module';
import { ProjectsPricingModule } from './projects-pricing/projects-pricing.module';
import { IntegrationsModule } from './api-integrations/api-integrations.module';
import { SourcingModule } from './sourcing/sourcing.module';
import { UsersModule } from './users/users.module';

import { WINDOW_PROVIDERS } from './_services/window.provider';
import { HostProviderService } from './_services/host-provider.service';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InventoryModule,
    ProjectsPricingModule,
    IntegrationsModule,
    SourcingModule,
    UsersModule,
    RouterModule,
    NgbModule,
    FontAwesomeModule
  ],
  providers: [
    WINDOW_PROVIDERS,
    HostProviderService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(faChevronLeft, faChevronDown, faSearch);
  }
}
