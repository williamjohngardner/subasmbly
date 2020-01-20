import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'

import parts from '../../../assets/database/parts.json'

import { Part } from '../part'

@Component({
  selector: 'app-piece-part-listing',
  templateUrl: './piece-part-listing.component.html',
  styleUrls: ['./piece-part-listing.component.css']
})
export class PiecePartListingComponent implements OnInit {

  public user: string = 'Bill Gardner';
  public partsList: Array<Part> = parts.parts;
  
  readonly _partUrl: string = `http://localhost:3000/api/v1/parts/`;

  constructor(
    readonly http: HttpClient,
    readonly _router: Router,
    readonly _route: ActivatedRoute
  ) {}

  ngOnInit() {
    const parts: any = this.getParts().subscribe(res => {
      console.log('PARTS: ', res);
    });
  }

  public getParts (): Observable<any> {
    return this.http.get<any>(this._partUrl);
  }

  openPart (id: number) {
    this._router.navigate([id], {relativeTo: this._route});
  }
}
