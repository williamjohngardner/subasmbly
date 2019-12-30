import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import parts from '../../assets/database/parts.json';

import { Part } from '../part/part';

@Injectable()
export class PartByIdResolve implements Resolve<Part> {
  
  constructor () {}
  
  resolve (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return parts.parts[route.params.id];
  }
}
