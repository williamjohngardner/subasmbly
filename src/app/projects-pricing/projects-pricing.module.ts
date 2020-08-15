import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { PricingDashboardComponent } from './pricing/pricing-dashboard/pricing-dashboard.component';
import { RevisionControlComponent } from './revision-control/revision-control.component';

const PROJECT_ROUTES: Routes = [

]

@NgModule({
    imports: [
      CommonModule,
      HttpClientModule,
      RouterModule.forChild(PROJECT_ROUTES),],
    declarations: [
      PricingDashboardComponent,
      RevisionControlComponent
    ],
    providers: [],
    entryComponents: [],
    exports: []
  })
  export class ProjectModule { }
  