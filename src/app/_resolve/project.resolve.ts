import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import projects from '../../assets/database/parts.json';

import { Project } from '../projects/project';

@Injectable()
export class ProjectResolve implements Resolve<any> {
  
  constructor () {}
  
  resolve (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    console.log('PROJECTS: ', projects.projects);
    return projects.projects;
  }
}
