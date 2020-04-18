import { Component, OnInit, AfterViewInit } from '@angular/core';

import { DataService } from '../_services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit {
  public data: any;

  constructor(
    readonly _dataService: DataService
  ) { }

  ngAfterViewInit() {
    this._dataService.getData()
      .subscribe(data => {
        this.data = data;
        console.log('DATA: ', data);
      })
  }

}
