import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

import { FilterBlankElementsService } from '../../_services/filter-blank-elements.service';

import * as _ from 'lodash';
import * as qs from 'qs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  @Output() searchTerms: EventEmitter<any> = new EventEmitter<any>();
  @Output() onReset: EventEmitter<any> = new EventEmitter<any>();

  public searchForm: FormGroup;

  constructor(
    readonly _router: Router,
    readonly _formBuilder: FormBuilder,
    readonly _filterBlankElements: FilterBlankElementsService
  ) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm () {
    this.searchForm = this._formBuilder.group({
      assemblyName: [''],
      assemblyNumber: [''],
      category: [''],
      subCategory: [''],
      material: [''],
      finish: ['']
    });
  }

  onSubmit (): void {
    const values: object = this._filterBlankElements.filterBlankElements(this.searchForm.value);
    this.searchTerms.emit(values);
    // take the search values and parse them into a nested url query parameter string
    // then split it apart into individual search parameters to be stitched
    // back together into an object where the values are all parsed for a url string
    let qsValues: any = qs.stringify(values);
    let queryArray: Array<any> = qsValues.split('&');
    let queryParams: object = {};
    // parse the query string into a queryParams object for Angular to pass to the navigate function
    for (let value in queryArray) {
      let valueParse: any = queryArray[value].split('=');
      let paramKey: any = valueParse[0];
      let paramValue: any = valueParse[1];
      let param: object = {};
      param[paramKey] = paramValue;
      Object.assign(queryParams, param);
    }
    this._router.navigate(['inventory', 'assembly'], { queryParams: queryParams });
  }
}
