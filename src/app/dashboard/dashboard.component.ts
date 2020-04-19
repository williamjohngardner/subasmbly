import { Component, OnInit, AfterViewInit } from '@angular/core';

import { DataService } from '../_services/data.service';
import { AdafruitApiService } from '../_services/adafruit-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class HomeComponent implements AfterViewInit {
  public data: any;
  public adafruitProducts: object;

  constructor(
    readonly _dataService: DataService,
    readonly _adafruitService: AdafruitApiService
  ) { }

  ngAfterViewInit() {
    this._dataService.getData()
      .subscribe(data => {
        this.data = data;
        console.log('DATA: ', data);
      })
      // this._adafruitService.getAdafruitProducts()
      // .subscribe(data => {
      //   this.adafruitProducts = data;
      //   console.log('ADAFRUIT: ', this.adafruitProducts);
      // })
  }

}
