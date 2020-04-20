import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  public _project: Observable<object> = this._route.data['_value']['project'];

  constructor(
    readonly _router: Router,
    readonly _route: ActivatedRoute
  ) {}

  ngOnInit() {
  }

}
