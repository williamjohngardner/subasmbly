import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpResponse, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdafruitApiService {
  readonly dataUrl: string = `https://www.adafruit.com/api/products/`
  // readonly _header = {
  //   headers: new HttpHeaders({
  //     'Content-Type': 'application/json',
  //   })
  // }

  constructor(
    readonly http: HttpClient,
  ) { }

  public getAdafruitProducts (): Observable<object> {
    return this.http.get<object>(`${this.dataUrl}parts`);
  }
}
