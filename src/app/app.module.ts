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
import { NavComponent } from './nav/nav.component';

import { InventoryDashboardComponent } from './inventory/inventory-dashboard/inventory-dashboard.component';
import { AssemblyComponent } from './inventory/assembly/assembly/assembly.component';
import { AssemblyDashboardComponent } from './inventory/assembly/assembly-dashboard/assembly-dashboard.component';
import { PartComponent } from './inventory/part/part/part.component';
import { PartDashboardComponent } from './inventory/part/part-dashboard/part-dashboard.component';
import { ProjectComponent } from './projects-pricing/projects/project/project.component';
import { ProjectsDashboardComponent } from './projects-pricing/projects/projects-dashboard/projects-dashboard.component';
import { SubassemblyComponent } from './inventory/subassembly/subassembly/subassembly.component';
import { SubassemblyDashboardComponent } from './inventory/subassembly/subassembly-dashboard/subassembly-dashboard.component';
import { CreatePartComponent } from './inventory/part/create-part/create-part.component';
import { CreateSubassemblyComponent } from './inventory/subassembly/create-subassembly/create-subassembly.component';
import { CreateAssemblyComponent } from './inventory/assembly/create-assembly/create-assembly.component';
import { CreateProjectComponent } from './projects-pricing/projects/create-project/create-project.component';

@NgModule({
  declarations: [
    AppComponent,
    InventoryDashboardComponent,
    NavComponent,
    AssemblyComponent,
    AssemblyDashboardComponent,
    PartComponent,
    PartDashboardComponent,
    ProjectComponent,
    ProjectsDashboardComponent,
    SubassemblyComponent,
    SubassemblyDashboardComponent,
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
