import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { AssemblyComponent } from './assembly/assembly/assembly.component';
import { AssemblyListingComponent } from './assembly/assembly-listing/assembly-listing.component';
import { CreateAssemblyModalWrapperComponent } from './assembly/create-assembly/create-assembly-modal-wrapper.component';
import { PartComponent } from './part/part/part.component';
import { PartListingComponent } from './part/part-listing/part-listing.component';
import { CreatePartModalWrapperComponent } from './part/create-part/create-part-modal-wrapper.component';
import { ProjectComponent } from './project/project/project.component';
import { ProjectsListComponent } from './project/projects-listing/projects-list.component';
import { CreateProjectModalWrapperComponent } from './project/create-project/create-project-modal-wrapper.component';
import { PurchaseComponent } from './purchase/purchase.component';
import { SubassemblyComponent } from './subassembly/subassembly/subassembly.component';
import { SubassemblyListingComponent } from './subassembly/subassembly-listing/subassembly-listing.component';
import { CreateSubassemblyModalWrapperComponent } from './subassembly/create-subassembly/create-subassembly-modal-wrapper';
import { SupplyComponent } from './supply/supply.component';

import { AssemblyResolve } from './_resolve/assembly.resolve';
import { AssemblyByIdResolve } from './_resolve/assembly-by-id.resolve';
import { DashboardResolve } from './_resolve/dashboard.resolve';
import { PartResolve } from './_resolve/part.resolve';
import { PartByIdResolve } from './_resolve/part-by-id.resolve';
import { ProjectResolve } from './_resolve/project.resolve';
import { ProjectByIdResolve } from './_resolve/project-by-id.resolve';
import { SubassemblyResolve } from './_resolve/subassembly.resolve';
import { SubassemblyByIdResolve } from './_resolve/subassembly-by-id.resolve';



const routes: Routes = [
  { path: '',
    component: DashboardComponent,
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
        component: AssemblyListingComponent,
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
    ],
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
        path: 'project',
        component: CreateProjectModalWrapperComponent,
        runGuardsAndResolvers: 'always'
      },
      { 
        path: 'subassembly',
        component: CreateSubassemblyModalWrapperComponent,
        runGuardsAndResolvers: 'always'
      }
    ],
  },
  {
    path: 'part',
    children: [
      { 
        path: '',
        component: PartListingComponent,
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
    ],
  },
  {
    path: 'project',
    children: [
      { 
        path: '',
        component: ProjectsListComponent,
        runGuardsAndResolvers: 'always',
        resolve: {
          projects: ProjectResolve
        }
      },
      {
        path: ':id',
        component: ProjectComponent,
        runGuardsAndResolvers: 'always',
        resolve: {
          project: ProjectByIdResolve
        }
      }
    ]
  },
  {
    path: 'purchase',
    children: [
      { 
        path: '',
        component: PurchaseComponent
      },
      {
        path: ':id',
        component: PurchaseComponent,
        runGuardsAndResolvers: 'always',
        resolve: {
          part: PartByIdResolve
        }
      }
    ],
  },
  {
    path: 'subassembly',
    children: [
      { 
        path: '',
        component: SubassemblyListingComponent,
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
    ],
  },
  {
    path: 'supply',
    children: [
      { 
        path: '',
        component: SupplyComponent
      },
      {
        path: ':id',
        component: SupplyComponent,
        runGuardsAndResolvers: 'always',
        resolve: {
          part: PartByIdResolve
        }
      }
    ],
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  providers: [
    AssemblyResolve,
    AssemblyByIdResolve,
    DashboardResolve,
    PartResolve,
    PartByIdResolve,
    ProjectResolve,
    ProjectByIdResolve,
    SubassemblyResolve,
    SubassemblyByIdResolve
  ]
})
export class AppRoutingModule { }
