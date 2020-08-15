import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { MaterialsDashboardComponent } from './materials/materials-dashboard/materials-dashboard.component';
import { MaterialComponent } from './materials/material/material.component';
import { CreateMaterialComponent } from './materials/create-material/create-material.component';

import { TaxonomyDashboardComponent } from './taxonomy/taxonomy-dashboard/taxonomy-dashboard.component';
import { TaxonomyComponent } from './taxonomy/taxonomy/taxonomy.component';
import { CreateTaxonomyComponent } from './taxonomy/create-taxonomy/create-taxonomy.component';

const INVENTORY_ROUTES: Routes = [

]

@NgModule({
    imports: [
      CommonModule,
      HttpClientModule,
      RouterModule.forChild(INVENTORY_ROUTES),],
    declarations: [
      MaterialsDashboardComponent,
      MaterialComponent,
      CreateMaterialComponent,
      TaxonomyDashboardComponent,
      TaxonomyComponent,
      CreateTaxonomyComponent
    ],
    providers: [],
    entryComponents: [],
    exports: []
  })
  export class InventoryModule { }
  