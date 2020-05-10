import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { HttpResponse } from '@angular/common/http';

import { SubassemblyService } from '../_services/subassembly.service';

import { Subassembly } from '../subassembly/subassembly';

@Injectable()
export class SubassemblyResolve implements Resolve<HttpResponse<Subassembly>> {
  
  constructor (
      readonly _subassemblyService: SubassemblyService
  ) {}
  
  resolve (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this._subassemblyService.getSubassemblies();
  }
}
