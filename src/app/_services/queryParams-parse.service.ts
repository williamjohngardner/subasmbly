import { Injectable } from '@angular/core';

import * as _ from 'lodash';
import * as qs from 'qs';

@Injectable({
  providedIn: 'root'
})
export class QueryParamsParserService {

    constructor() {}

    queryParamsParser (paramsObj): object {
      // Parses the url query params into a JS Object to be sent to API request
      const urlQueryParams: object = {}
      for(const param in paramsObj) {
        let tempString: string = `${param}=${paramsObj[param]}`;
        let parsedParam: object;
        parsedParam = qs.parse(tempString);
        const key: string[] = _.keysIn(parsedParam);
        const value: string = paramsObj[param].split('%20').join(' ');
        _.set(urlQueryParams, _.keysIn(parsedParam), value);
      }
      return urlQueryParams;
    }
}