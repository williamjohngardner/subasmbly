import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'

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

  constructor(
    readonly _router: Router,
    readonly _route: ActivatedRoute
  ) {}

  ngOnInit() {
  }

  openPart (id: number) {
    this._router.navigate([id], {relativeTo: this._route});
  }
}
