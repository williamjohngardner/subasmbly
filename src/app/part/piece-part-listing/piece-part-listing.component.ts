import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'
import { HttpClient } from '@angular/common/http';

import { PartService } from '../../_services/data.service';
import { Observable } from 'rxjs'

import { Part } from '../part'

@Component({
  selector: 'app-piece-part-listing',
  templateUrl: './piece-part-listing.component.html',
  styleUrls: ['./piece-part-listing.component.css']
})
export class PiecePartListingComponent implements OnInit {
  public _part: Observable<object> = this._route.data;

  constructor(
    readonly http: HttpClient,
    readonly _router: Router,
    readonly _route: ActivatedRoute,
    readonly _data: PartService
  ) {}

  ngOnInit() {
    console.log('PART: ', this._part);
  }

  openPart (id: number) {
    this._router.navigate([id], {relativeTo: this._route});
  }

  createPart () {
    this._router.navigate(['create', 'part'], {relativeTo: this._route});
  }
}
