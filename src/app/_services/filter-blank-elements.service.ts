import { Injectable } from '@angular/core';
import * as _ from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class FilterBlankElementsService {

  public filterBlankElements (jsonObject: any) {
    const keys = _.keysIn(jsonObject);
    let newObject = _.cloneDeep(jsonObject);
    keys.forEach(key => {
      // Clean up any strings that have blanks at the beginning and end
      if (typeof newObject[key] === 'string' && newObject[key] !== ' ') {
        newObject[key] = _.trim(newObject[key]);
      }
      if (newObject[key] === '' || newObject[key] === null) {
        newObject = _.omit(newObject, key);
      } else if (typeof newObject[key] === 'object') {
        // If this is a nested object we need to filter out every level
        newObject[key] = this.filterBlankElements(newObject[key]);
        // If we have removed all the subkeys remove the parent
        if (_.keysIn(newObject[key]).length === 0) {
          if (_.isArray(newObject)) {
            _.pullAt(newObject, parseInt(key, 10));
          } else {
            newObject = _.omit(newObject, key);
          }
        }
      }
    });
    return newObject;
  }
}