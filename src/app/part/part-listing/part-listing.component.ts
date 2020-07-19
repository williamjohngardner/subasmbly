import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'
import { HttpClient } from '@angular/common/http';

import { PartService } from '../../_services/part.service';
import { Observable } from 'rxjs'

@Component({
  selector: 'app-part-listing',
  templateUrl: './part-listing.component.html',
  styleUrls: ['./part-listing.component.css']
})
export class PartListingComponent {
  public _part: Observable<object> = this._route.data;

  constructor(
    readonly http: HttpClient,
    readonly _router: Router,
    readonly _route: ActivatedRoute,
    readonly _data: PartService
  ) {}

  openPart (id: number) {
    this._router.navigate([id], {relativeTo: this._route});
  }
}
