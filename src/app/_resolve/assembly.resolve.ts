import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { HttpResponse } from '@angular/common/http';

import { AssemblyService } from '../_services/assembly.service';
import { QueryParamsParserService } from '../_services/queryParams-parse.service';

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
      readonly _assemblyService: AssemblyService,
      readonly _queryParamsParser: QueryParamsParserService
  ) {}
  
  resolve (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    this.searchParams.terms = this._queryParamsParser.queryParamsParser(route.queryParams);
    return this._assemblyService.searchAssemblies(this.searchParams.terms, this.searchParams.skip, this.searchParams.limit, this.searchParams.sort);
  }
}
