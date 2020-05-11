import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { HttpResponse } from '@angular/common/http';

import { AssemblyService } from '../_services/assembly.service';

import { Assembly } from '../assembly/assembly';

@Injectable()
export class AssemblyResolve implements Resolve<HttpResponse<Assembly>> {
  
  constructor (
      readonly _assemblyService: AssemblyService
  ) {}
  
  resolve (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this._assemblyService.getAssemblies();
  }
}
