import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import projects from '../../assets/database/parts.json';

import { Project } from '../project/project';

@Injectable()
export class ProjectByIdResolve implements Resolve<any> {
  
  constructor () {}
  
  resolve (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return projects.projects[route.params.id];
  }
}
