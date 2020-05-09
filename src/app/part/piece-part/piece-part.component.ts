import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { PartService } from '../../_services/data.service'

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
    readonly _route: ActivatedRoute,
    readonly _partService: PartService
  ) {}

  ngOnInit () {
    console.log('_PART: ', this._part);
  }

  deletePart () {
    const result = confirm('Please Confirm That You Want To Delete This Part.');
    if (result) {
      this._partService.deletePart(this._part['_id']).subscribe(() => {
        alert('Part Successfully Deleted')
        this._router.navigate(['part']);
      }, Error => {
        alert(Error);
      });
    }
  }
}
