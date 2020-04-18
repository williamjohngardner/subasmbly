import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';

import { WINDOW_PROVIDERS } from './_services/window.provider';
import { HostProviderService } from './_services/host-provider.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { PiecePartComponent } from './part/piece-part/piece-part.component';
import { PiecePartListingComponent } from './part/piece-part-listing/piece-part-listing.component';
import { ProjectsListingComponent } from './projects/projects-listing/projects-listing.component';
import { ProjectComponent } from './projects/project/project.component';

@NgModule({
  declarations: [
    AppComponent,
    PiecePartComponent,
    HomeComponent,
    NavComponent,
    PiecePartListingComponent,
    ProjectsListingComponent,
    ProjectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [
    WINDOW_PROVIDERS,
    HostProviderService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
