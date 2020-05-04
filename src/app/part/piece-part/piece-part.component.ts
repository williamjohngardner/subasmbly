import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs';

import { Part } from '../part'

@Component({
  selector: 'app-piece-part',
  templateUrl: './piece-part.component.html',
  styleUrls: ['./piece-part.component.css']
})
export class PiecePartComponent implements OnInit {

  public _part: Observable<object> = this._route.data['_value']['part'];

  constructor(
    readonly _router: Router,
    readonly _route: ActivatedRoute
  ) {}

  ngOnInit () {
    console.log('_PART: ', this._part);
  }
}
