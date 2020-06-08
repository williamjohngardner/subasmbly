import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs'

@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.css']
})
export class ProjectsListComponent {
  public _projects: Observable<object> = this._route.data['_value']['projects']['body'];

  constructor(
    readonly http: HttpClient,
    readonly _router: Router,
    readonly _route: ActivatedRoute
  ) {}

  ngOnInit () {
    console.log('PROJECTS: ', this._projects);
  }
  
  openProject (id: number) {
    this._router.navigate([id], {relativeTo: this._route});
  }

  createProject () {
    this._router.navigate(['create', 'project']);
  }
}
