import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AssemblyResolve } from '../_resolve/assembly.resolve';
import { AssemblyByIdResolve } from '../_resolve/assembly-by-id.resolve';
import { DashboardResolve } from '../_resolve/dashboard.resolve';
import { PartResolve } from '../_resolve/part.resolve';
import { PartByIdResolve } from '../_resolve/part-by-id.resolve';
import { SubassemblyResolve } from '../_resolve/subassembly.resolve';
import { SubassemblyByIdResolve } from '../_resolve/subassembly-by-id.resolve';

import { InventoryDashboardComponent } from './inventory-dashboard/inventory-dashboard.component';

import { AssemblyComponent } from './assembly/assembly/assembly.component';
import { AssemblyDashboardComponent } from './assembly/assembly-dashboard/assembly-dashboard.component';
import { CreateAssemblyModalWrapperComponent } from './assembly/create-assembly/create-assembly-modal-wrapper.component';
import { CreateAssemblyComponent } from './assembly/create-assembly/create-assembly.component';

import { PartComponent } from './part/part/part.component';
import { PartDashboardComponent } from './part/part-dashboard/part-dashboard.component';
import { CreatePartModalWrapperComponent } from './part/create-part/create-part-modal-wrapper.component';
import { CreatePartComponent } from './part/create-part/create-part.component';

import { SubassemblyComponent } from './subassembly/subassembly/subassembly.component';
import { SubassemblyDashboardComponent } from './subassembly/subassembly-dashboard/subassembly-dashboard.component';
import { CreateSubassemblyModalWrapperComponent } from './subassembly/create-subassembly/create-subassembly-modal-wrapper';
import { CreateSubassemblyComponent } from './subassembly/create-subassembly/create-subassembly.component';

import { MaterialsDashboardComponent } from './materials/materials-dashboard/materials-dashboard.component';
import { MaterialComponent } from './materials/material/material.component';
import { CreateMaterialComponent } from './materials/create-material/create-material.component';

import { TaxonomyDashboardComponent } from './taxonomy/taxonomy-dashboard/taxonomy-dashboard.component';
import { TaxonomyComponent } from './taxonomy/taxonomy/taxonomy.component';
import { CreateTaxonomyComponent } from './taxonomy/create-taxonomy/create-taxonomy.component';

const INVENTORY_ROUTES: Routes = [
  {
    path: 'inventory',
    children: [
      {
        path: '',
        component: InventoryDashboardComponent,
        runGuardsAndResolvers: 'always',
        resolve: {
          dashboard: DashboardResolve
        }
      },
      {
        path: 'assembly',
        children: [
          {
            path: '',
            component: AssemblyDashboardComponent,
            runGuardsAndResolvers: 'always',
            resolve: {
              assemblies: AssemblyResolve
            }
          },
          {
            path: ':id',
            component: AssemblyComponent,
            runGuardsAndResolvers: 'always',
            resolve: {
              assembly: AssemblyByIdResolve
            }
          }
        ]
      },
      {
        path: 'create',
        children: [
          {
            path: 'assembly',
            component: CreateAssemblyModalWrapperComponent,
            runGuardsAndResolvers: 'always'
          },
          {
            path: 'part',
            component: CreatePartModalWrapperComponent,
            runGuardsAndResolvers: 'always'
          },
          {
            path: 'subassembly',
            component: CreateSubassemblyModalWrapperComponent,
            runGuardsAndResolvers: 'always'
          }
        ]
      },
      {
        path: 'part',
        children: [
          {
            path: '',
            component: PartDashboardComponent,
            runGuardsAndResolvers: 'always',
            resolve: {
              part: PartResolve
            }
          },
          {
            path: ':id',
            component: PartComponent,
            runGuardsAndResolvers: 'always',
            resolve: {
              part: PartByIdResolve
            }
          }
        ]
      },
      {
        path: 'subassembly',
        children: [
          {
            path: '',
            component: SubassemblyDashboardComponent,
            runGuardsAndResolvers: 'always',
            resolve: {
              subassemblies: SubassemblyResolve
            }
          },
          {
            path: ':id',
            component: SubassemblyComponent,
            runGuardsAndResolvers: 'always',
            resolve: {
              subassembly: SubassemblyByIdResolve
            }
          }
        ]
      }
    ]
  }
]

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(INVENTORY_ROUTES),
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    InventoryDashboardComponent,
    AssemblyComponent,
    AssemblyDashboardComponent,
    CreateAssemblyModalWrapperComponent,
    CreateAssemblyComponent,
    PartComponent,
    PartDashboardComponent,
    CreatePartModalWrapperComponent,
    CreatePartComponent,
    SubassemblyComponent,
    SubassemblyDashboardComponent,
    CreateSubassemblyModalWrapperComponent,
    CreateSubassemblyComponent, 
    MaterialsDashboardComponent,
    MaterialComponent,
    CreateMaterialComponent,
    TaxonomyDashboardComponent,
    TaxonomyComponent,
    CreateTaxonomyComponent
  ],
  providers: [
    AssemblyResolve,
    AssemblyByIdResolve,
    DashboardResolve,
    PartResolve,
    PartByIdResolve,
    SubassemblyResolve,
    SubassemblyByIdResolve
  ],
  entryComponents: [],
  exports: []
})
export class InventoryModule { }
