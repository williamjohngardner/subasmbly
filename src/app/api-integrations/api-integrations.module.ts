import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { ApiIntegrationsDashboardComponent } from './api-integrations-dashboard/api-integrations-dashboard.component';

const INTEGRATION_ROUTES: Routes = [

]

@NgModule({
    imports: [
      CommonModule,
      HttpClientModule,
      RouterModule.forChild(INTEGRATION_ROUTES),],
    declarations: [ApiIntegrationsDashboardComponent],
    providers: [],
    entryComponents: [],
    exports: []
  })
  export class IntegrationsModule { }
  