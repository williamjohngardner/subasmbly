import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs';

@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.css']
})
export class ProjectsListComponent {

  public user: string = 'Bill Gardner';
  public _projects: Observable<object> = this._route.data;

  constructor(
    readonly _router: Router,
    readonly _route: ActivatedRoute
  ) {}

  openProject (id: string) {
    this._router.navigate([id], {relativeTo: this._route})
  }
}
