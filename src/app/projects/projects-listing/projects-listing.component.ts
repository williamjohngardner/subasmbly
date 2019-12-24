import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs';

@Component({
  selector: 'app-projects-listing',
  templateUrl: './projects-listing.component.html',
  styleUrls: ['./projects-listing.component.css']
})
export class ProjectsListingComponent {

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
