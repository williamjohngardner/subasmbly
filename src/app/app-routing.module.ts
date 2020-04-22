import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './dashboard/dashboard.component';
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

import { PartByIdResolve } from './_resolve/part-by-id.resolve';
import { ProjectResolve } from './_resolve/project.resolve';
import { ProjectByIdResolve } from './_resolve/project-by-id.resolve';



const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'assembly',
    children: [
      { 
        path: '',
        component: AssemblyListingComponent
      },
      {
        path: ':id',
        component: AssemblyComponent,
        runGuardsAndResolvers: 'always',
        resolve: {
          part: PartByIdResolve
        }
      }
    ],
  },
  {
    path: 'part',
    children: [
      { 
        path: '',
        component: PiecePartListingComponent
      },
      {
        path: ':id',
        component: PiecePartComponent,
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
        component: SubassemblyListingComponent
      },
      {
        path: ':id',
        component: SubassemblyComponent,
        runGuardsAndResolvers: 'always',
        resolve: {
          part: PartByIdResolve
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
    PartByIdResolve,
    ProjectResolve,
    ProjectByIdResolve
  ]
})
export class AppRoutingModule { }
