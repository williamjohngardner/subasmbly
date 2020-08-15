import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InventoryDashboardComponent } from './inventory/inventory-dashboard/inventory-dashboard.component';
import { AssemblyComponent } from './inventory/assembly/assembly/assembly.component';
import { AssemblyDashboardComponent } from './inventory/assembly/assembly-dashboard/assembly-dashboard.component';
import { CreateAssemblyModalWrapperComponent } from './inventory/assembly/create-assembly/create-assembly-modal-wrapper.component';
import { PartComponent } from './inventory/part/part/part.component';
import { PartDashboardComponent } from './inventory/part/part-dashboard/part-dashboard.component';
import { CreatePartModalWrapperComponent } from './inventory/part/create-part/create-part-modal-wrapper.component';
import { ProjectComponent } from './projects-pricing/projects/project/project.component';
import { ProjectsDashboardComponent } from './projects-pricing/projects/projects-dashboard/projects-dashboard.component';
import { CreateProjectModalWrapperComponent } from './projects-pricing/projects/create-project/create-project-modal-wrapper.component';
import { SubassemblyComponent } from './inventory/subassembly/subassembly/subassembly.component';
import { SubassemblyDashboardComponent } from './inventory/subassembly/subassembly-dashboard/subassembly-dashboard.component';
import { CreateSubassemblyModalWrapperComponent } from './inventory/subassembly/create-subassembly/create-subassembly-modal-wrapper';

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
    ],
  },
  {
    path: 'project',
    children: [
      { 
        path: '',
        component: ProjectsDashboardComponent,
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
    ],
  },
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
