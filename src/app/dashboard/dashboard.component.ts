import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { PartService } from '../_services/data.service';
import { AdafruitApiService } from '../_services/adafruit-api.service';

import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class HomeComponent implements AfterViewInit {
  public data: Observable<object> = this._activatedRoute.data;
  public adafruitProducts: object;

  constructor(
    readonly _partService: PartService,
    readonly _adafruitService: AdafruitApiService,
    readonly _activatedRoute: ActivatedRoute,
    readonly _router: Router,
  ) { }

  ngAfterViewInit() {
    this._partService.getParts()
      .subscribe(data => {
        // this.data = data;
        console.log('DATA: ', this.data);
      })
      // this._adafruitService.getAdafruitProducts()
      // .subscribe(data => {
      //   this.adafruitProducts = data;
      //   console.log('ADAFRUIT: ', this.adafruitProducts);
      // })
  }

}
