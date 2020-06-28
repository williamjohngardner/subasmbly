import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { HttpResponse } from '@angular/common/http';

import { DashboardService } from '../_services/dashboard.service';

@Injectable()
export class DashboardResolve implements Resolve<HttpResponse<any>> {
  
  constructor (
      readonly _dashboardService: DashboardService
  ) {}
  
  resolve (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this._dashboardService.getData();
  }
}
