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

import { ApArDashboardComponent } from './ap-ar/ap-ar-dashboard/ap-ar-dashboard.component';

const SOURCING_ROUTES: Routes = [

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
      ApArDashboardComponent],
    providers: [],
    entryComponents: [],
    exports: []
  })
  export class SourcingModule { }
  