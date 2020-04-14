import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpResponse, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  readonly dataUrl: string = `http://localhost:3000/parts`
  readonly _header = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  }

  constructor(
    readonly http: HttpClient
  ) { }

  public getData (): Observable<any> {
    return this.http.get<any>(this.dataUrl, this._header);
  }
}
