import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { PartService } from '../_services/part.service';
import { AdafruitApiService } from '../_services/adafruit-api.service';

import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements AfterViewInit {
  public data: Observable<object> = this._route.data['_value']['dashboard']['body'];
  public adafruitProducts: object;

  constructor(
    readonly _partService: PartService,
    readonly _adafruitService: AdafruitApiService,
    readonly _route: ActivatedRoute,
    readonly _router: Router,
  ) { }

  ngAfterViewInit() {
    // console.log('DASHBOARD: ', this.data);
      this._adafruitService.getAdafruitProducts()
      .subscribe(data => {
        this.adafruitProducts = data;
        console.log('ADAFRUIT: ', this.adafruitProducts);
      })
  }

}
