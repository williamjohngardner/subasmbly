import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardResolve } from './_resolve/dashboard.resolve';

import { UserProfileComponent } from './users/user-profile/user-profile.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    runGuardsAndResolvers: 'always',
    resolve: {
      dashboard: DashboardResolve
    }
  },
  {
    path: 'user',
    component: UserProfileComponent,
    // runGuardsAndResolvers: 'always',
    // resolve: {
    //   dashboard: DashboardResolve
    // }
  }
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
