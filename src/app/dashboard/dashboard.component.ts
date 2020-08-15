import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public data: Observable<object> = this._route.data['_value']['dashboard']['body'];

  constructor(
    readonly _route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
  }

}
