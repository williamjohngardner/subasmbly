import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'
import { HttpClient } from '@angular/common/http';

import { AdafruitApiService } from '../../_services/adafruit-api.service';

import { Observable } from 'rxjs'

@Component({
  selector: 'app-part-listing',
  templateUrl: './part-listing.component.html',
  styleUrls: ['./part-listing.component.css']
})
export class PartListingComponent implements OnInit {
  public _part: Observable<object> = this._route.data;
  public adaFruit: object = {};

  constructor(
    readonly http: HttpClient,
    readonly _router: Router,
    readonly _route: ActivatedRoute,
    readonly _adafruit: AdafruitApiService
  ) { }

  ngOnInit() {
    this._adafruit.getAdafruitProducts()
      .subscribe(ada => {
        this.adaFruit = ada;
        console.log('ADAFRUIT: ', this.adaFruit);
      })
  }

  openPart(id: number) {
    this._router.navigate([id], { relativeTo: this._route });
  }
}
