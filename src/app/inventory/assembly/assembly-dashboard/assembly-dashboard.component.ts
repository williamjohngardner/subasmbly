import { Component, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs'

@Component({
  selector: 'app-assembly-dashboard',
  templateUrl: './assembly-dashboard.component.html',
  styleUrls: ['./assembly-dashboard.component.css']
})
export class AssemblyDashboardComponent {
  public _assembly: Observable<object> = this._route.data;
  public searchToggle: boolean = false;
  public threeSixtyFive: string = '365px';
  public twoNinetyNine: string = '299px';
  @ViewChild('searchForm') searchForm: any;

  constructor(
    readonly http: HttpClient,
    readonly _router: Router,
    readonly _route: ActivatedRoute
  ) {}

  openAssembly (id: number) {
    this._router.navigate([id], {relativeTo: this._route});
  }

  createAssembly () {
    this._router.navigate(['create', 'assembly']);
  }

  toggleSearch () {
    this.searchToggle = !this.searchToggle;
    if (this.searchToggle === false) {
      this.searchForm.resetSearchForm()
    }
  }
}
