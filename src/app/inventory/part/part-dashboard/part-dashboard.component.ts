import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'
import { HttpClient } from '@angular/common/http';

import { AdafruitApiService } from '../../../_services/adafruit-api.service';
import { BestBuyApiService } from '../../../_services/best-buy-api.service';

import { Observable } from 'rxjs'

@Component({
  selector: 'app-part-dashboard',
  templateUrl: './part-dashboard.component.html',
  styleUrls: ['./part-dashboard.component.css']
})
export class PartDashboardComponent implements OnInit {
  public _part: Observable<object> = this._route.data;
  public adaFruit: object = {};
  public bestBuy: object = {};

  constructor(
    readonly http: HttpClient,
    readonly _router: Router,
    readonly _route: ActivatedRoute,
    readonly _adafruit: AdafruitApiService,
    readonly _bestBuy: BestBuyApiService
  ) { }

  ngOnInit() {
    this._adafruit.getAdafruitProducts()
      .subscribe(ada => {
        this.adaFruit = ada;
      })
    this._bestBuy.getBestBuyProducts()
      .subscribe(bby => {
        this.bestBuy = bby;
      })
  }

  openPart(id: number) {
    this._router.navigate([id], { relativeTo: this._route });
  }
}
