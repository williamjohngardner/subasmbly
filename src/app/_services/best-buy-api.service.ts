import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BestBuyApiService {
  readonly proxyUrl: string = `https://aqueous-temple-36708.herokuapp.com/`;
  readonly dataUrl: string = 'https://api.bestbuy.com/v1/categories?format=json&show=id&apiKey='
  readonly apiKey: string = 'rBCq2aSgmiaQr4Fuk2R9ozV5'

  constructor(
    readonly http: HttpClient
  ) { }

   public getBestBuyProducts (): Observable<object> {
    return this.http.get<object>(`${this.proxyUrl}${this.dataUrl}${this.apiKey}`);
  }
}
