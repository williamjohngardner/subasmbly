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
import { DashboardComponent } from './inventory/dashboard/dashboard.component';
import { NavComponent } from './nav/nav.component';
import { AssemblyComponent } from './inventory/assembly/assembly/assembly.component';
import { AssemblyListingComponent } from './inventory/assembly/assembly-listing/assembly-listing.component';
import { PartComponent } from './inventory/part/part/part.component';
import { PartListingComponent } from './inventory/part/part-listing/part-listing.component';
import { ProjectComponent } from './projects/project/project.component';
import { ProjectsListComponent } from './projects/projects-listing/projects-list.component';
import { PurchaseComponent } from './purchase/purchase.component';
import { SubassemblyComponent } from './inventory/subassembly/subassembly/subassembly.component';
import { SubassemblyListingComponent } from './inventory/subassembly/subassembly-listing/subassembly-listing.component';
import { SupplyComponent } from './sourcing/supply/supply.component';
import { CreatePartComponent } from './inventory/part/create-part/create-part.component';
import { CreateSubassemblyComponent } from './inventory/subassembly/create-subassembly/create-subassembly.component';
import { CreateAssemblyComponent } from './inventory/assembly/create-assembly/create-assembly.component';
import { CreateProjectComponent } from './projects/create-project/create-project.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NavComponent,
    AssemblyComponent,
    AssemblyListingComponent,
    PartComponent,
    PartListingComponent,
    ProjectComponent,
    ProjectsListComponent,
    SubassemblyComponent,
    SubassemblyListingComponent,
    PurchaseComponent,
    SupplyComponent,
    CreatePartComponent,
    CreateSubassemblyComponent,
    CreateAssemblyComponent,
    CreateProjectComponent
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
