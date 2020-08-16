import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { VendorDashboardComponent } from './vendors/vendor-dashboard/vendor-dashboard.component';
import { VendorComponent } from './vendors/vendor/vendor.component';
import { CreateVendorComponent } from './vendors/create-vendor/create-vendor.component';

import { CustomerDashboardComponent } from './customers/customer-dashboard/customer-dashboard.component';
import { CustomerComponent } from './customers/customer/customer.component';
import { CreateCustomerComponent } from './customers/create-customer/create-customer.component';

import { AccountingDashboardComponent } from './accounting/accounting-dashboard/accounting-dashboard.component';

const SOURCING_ROUTES: Routes = [
  {
    path: 'vendor',
    children: [
      {
        path: '',
        component: VendorDashboardComponent,
        runGuardsAndResolvers: 'always',
        // resolve: {
        //   projects: ProjectResolve
        // }
      },
      {
        path: ':id',
        component: VendorComponent,
        runGuardsAndResolvers: 'always',
        // resolve: {
        //   project: ProjectByIdResolve
        // }
      }
    ]
  },
  {
    path: 'customer',
    children: [
      {
        path: '',
        component: CustomerDashboardComponent,
        runGuardsAndResolvers: 'always',
        // resolve: {
        //   projects: ProjectResolve
        // }
      },
      {
        path: ':id',
        component: CustomerComponent,
        runGuardsAndResolvers: 'always',
        // resolve: {
        //   project: ProjectByIdResolve
        // }
      }
    ]
  },
  {
    path: 'accounting',
    children: [
      {
        path: '',
        component: VendorDashboardComponent,
        runGuardsAndResolvers: 'always',
        // resolve: {
        //   projects: ProjectResolve
        // }
      },

    ]
  },
]

@NgModule({
    imports: [
      CommonModule,
      HttpClientModule,
      RouterModule.forChild(SOURCING_ROUTES),],
    declarations: [
      VendorDashboardComponent,
      VendorComponent,
      CreateVendorComponent,
      CustomerDashboardComponent,
      CustomerComponent,
      CreateCustomerComponent,
      AccountingDashboardComponent
    ],
    providers: [],
    entryComponents: [],
    exports: []
  })
  export class SourcingModule { }
  