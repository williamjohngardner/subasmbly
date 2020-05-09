import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';

import { WINDOW_PROVIDERS } from './_services/window.provider';
import { HostProviderService } from './_services/host-provider.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './dashboard/dashboard.component';
import { NavComponent } from './nav/nav.component';
import { AssemblyComponent } from './assembly/assembly/assembly.component';
import { AssemblyListingComponent } from './assembly/assembly-listing/assembly-listing.component';
import { PiecePartComponent } from './part/piece-part/piece-part.component';
import { PiecePartListingComponent } from './part/piece-part-listing/piece-part-listing.component';
import { ProjectComponent } from './project/project/project.component';
import { ProjectsListComponent } from './project/projects-listing/projects-list.component';
import { PurchaseComponent } from './purchase/purchase.component';
import { SubassemblyComponent } from './subassembly/subassembly/subassembly.component';
import { SubassemblyListingComponent } from './subassembly/subassembly-listing/subassembly-listing.component';
import { SupplyComponent } from './supply/supply.component';
import { CreatePartComponent } from './part/create-part/create-part.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    AssemblyComponent,
    AssemblyListingComponent,
    PiecePartComponent,
    PiecePartListingComponent,
    ProjectComponent,
    ProjectsListComponent,
    SubassemblyComponent,
    SubassemblyListingComponent,
    PurchaseComponent,
    SupplyComponent,
    CreatePartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    WINDOW_PROVIDERS,
    HostProviderService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
