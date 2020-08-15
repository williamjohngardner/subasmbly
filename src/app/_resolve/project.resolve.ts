import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { HttpResponse } from '@angular/common/http';

import { ProjectService } from '../_services/project.service';

import { Project } from '../projects-pricing/projects/project';

@Injectable()
export class ProjectResolve implements Resolve<HttpResponse<Project>> {
  
  constructor (
    readonly _projectService: ProjectService
) {}
  
  resolve (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this._projectService.getProjects();
  }
}
