import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { ProjectService } from '../_services/project.service';
import { PartService } from '../_services/part.service';

import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public data: Observable<object> = this._route.data['_value']['dashboard']['body'];
  // These will need to be moved into the route resolvers to be observables
  public projects: object;

  constructor(
    readonly _projectService: ProjectService,
    readonly _partService: PartService,
    readonly _route: ActivatedRoute,
    readonly _router: Router,
  ) { }

  ngOnInit() {
    // console.log('DASHBOARD: ', this.data);
      this._projectService.getProjects()
      .subscribe(data => {
        this.projects = data.body;
        console.log('PROJECTS: ', this.projects);
      })
  }

}
