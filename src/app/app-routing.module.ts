import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ProjectsListingComponent } from './projects/projects-listing/projects-listing.component';
import { ProjectComponent } from './projects/project/project.component'
import { PiecePartListingComponent } from './part/piece-part-listing/piece-part-listing.component'
import { PiecePartComponent } from './part/piece-part/piece-part.component'

import { PartByIdResolve } from './_resolve/part-by-id.resolve';
import { ProjectResolve } from './_resolve/project.resolve';
import { ProjectByIdResolve } from './_resolve/project-by-id.resolve';



const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'parts',
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
    path: 'projects',
    children: [
      { 
        path: '',
        component: ProjectsListingComponent,
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
