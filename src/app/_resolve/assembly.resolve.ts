import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { HttpResponse } from '@angular/common/http';

import { AssemblyService } from '../_services/assembly.service';

import { Assembly } from '../inventory/assembly/assembly';

interface PARAMS {
  terms: object;
  skip: number;
  limit: number;
  sort: string;
}

@Injectable()
export class AssemblyResolve implements Resolve<HttpResponse<Assembly>> {

  private searchParams: PARAMS = {
    terms: {},
    skip: 0,
    limit: 50,
    sort: '-_dateUpdated'
  };
  
  constructor (
      readonly _assemblyService: AssemblyService
  ) {}
  
  resolve (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    console.log('ROUTE: ', route);
    console.log('STATE:', state);
    this.searchParams.terms = route.queryParams;
    return this._assemblyService.searchAssemblies(this.searchParams.terms, this.searchParams.skip, this.searchParams.limit, this.searchParams.sort);
  }
}
