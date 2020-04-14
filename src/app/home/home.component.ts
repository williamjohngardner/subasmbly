import { Component, OnInit } from '@angular/core';

import { DataService } from '../_services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public data: any;

  constructor(
    readonly _dataService: DataService
  ) { }

  ngOnInit() {
    this._dataService.getData()
      .subscribe(data => {
        data = this.data;
        console.log('DATA: ', data);
      })
  }

}
