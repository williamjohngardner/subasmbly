import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs';

import { Part } from '../part'

@Component({
  selector: 'app-piece-part',
  templateUrl: './piece-part.component.html',
  styleUrls: ['./piece-part.component.css']
})
export class PiecePartComponent {

  public _part: Observable<object> = this._route.data['_value']['part'];

  constructor(
    readonly _router: Router,
    readonly _route: ActivatedRoute
  ) {}

}
