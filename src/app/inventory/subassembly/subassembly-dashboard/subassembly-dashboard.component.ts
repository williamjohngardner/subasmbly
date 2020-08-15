import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'
import { HttpClient } from '@angular/common/http';

import { SubassemblyService } from '../../../_services/subassembly.service';
import { Observable } from 'rxjs'

@Component({
  selector: 'app-subassembly-dashboard',
  templateUrl: './subassembly-dashboard.component.html',
  styleUrls: ['./subassembly-dashboard.component.css']
})
export class SubassemblyDashboardComponent {
  public _subassembly: Observable<object> = this._route.data;

  constructor(
    readonly http: HttpClient,
    readonly _router: Router,
    readonly _route: ActivatedRoute,
    readonly _subassemblyService: SubassemblyService
  ) {}

  openSubassembly (id: number) {
    this._router.navigate([id], {relativeTo: this._route});
  }
}
