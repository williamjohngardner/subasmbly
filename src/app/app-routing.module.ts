import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardResolve } from './_resolve/dashboard.resolve';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    runGuardsAndResolvers: 'always',
    resolve: {
      dashboard: DashboardResolve
    }
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })
  ],
  exports: [
    RouterModule
  ],
  providers: []
})
export class AppRoutingModule { }
