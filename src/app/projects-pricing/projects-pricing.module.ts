import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ProjectResolve } from '../_resolve/project.resolve';
import { ProjectByIdResolve } from '../_resolve/project-by-id.resolve';

import { ProjectComponent } from '../projects-pricing/projects/project/project.component';
import { ProjectsDashboardComponent } from '../projects-pricing/projects/projects-dashboard/projects-dashboard.component';
import { CreateProjectModalWrapperComponent } from '../projects-pricing/projects/create-project/create-project-modal-wrapper.component';
import { CreateProjectComponent } from '../projects-pricing/projects/create-project/create-project.component';

import { PricingDashboardComponent } from './pricing/pricing-dashboard/pricing-dashboard.component';
import { RevisionControlComponent } from './revision-control/revision-control.component';

const PROJECT_ROUTES: Routes = [
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
    path: 'create',
    children: [
      {
        path: 'project',
        component: CreateProjectModalWrapperComponent,
        runGuardsAndResolvers: 'always'
      }
    ]
  }
]

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(PROJECT_ROUTES),
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    ProjectComponent,
    ProjectsDashboardComponent,
    CreateProjectModalWrapperComponent,
    CreateProjectComponent,
    PricingDashboardComponent,
    RevisionControlComponent
  ],
  providers: [
    ProjectResolve,
    ProjectByIdResolve,
  ],
  entryComponents: [],
  exports: []
})
export class ProjectsPricingModule { }
