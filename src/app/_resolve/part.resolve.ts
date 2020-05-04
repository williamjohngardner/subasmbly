import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { HttpResponse } from '@angular/common/http';

import { DataService } from '../_services/data.service';

import { Part } from '../part/part';

@Injectable()
export class PartResolve implements Resolve<HttpResponse<Part>> {
  
  constructor (
      readonly _dataService: DataService
  ) {}
  
  resolve (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this._dataService.getParts();
  }
}
