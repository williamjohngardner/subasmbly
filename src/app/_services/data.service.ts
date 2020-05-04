import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpResponse, HttpHeaders } from '@angular/common/http';

import { HostProviderService } from './host-provider.service';

import { Part } from '../part/part'

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  readonly hostname: string = this._host.getHostname();
  readonly dataUrl: string = `http://localhost:3000/api/v1/`
  // readonly _header = {
  //   headers: new HttpHeaders({
  //     'Content-Type': 'application/json',
  //   })
  // }

  constructor(
    readonly http: HttpClient,
    readonly _host: HostProviderService
  ) { }

  public getParts (): Observable<HttpResponse<Part>> {
    return this.http.get<Part>(`${this.dataUrl}part`, { 
      headers: { 'Content-Type': 'application/json' },
      observe: 'response'
    });
  }

  public getPartById (id: string): Observable<any> {
    return this.http.get<Part>(`${this.dataUrl}part/${id}`, { 
      headers: { 'Content-Type': 'application/json' }
    });
  }

  public createPart (value: object): Observable<any> {
    return this.http.post<Part>(`${this.dataUrl}part/`, value, { 
      headers: { 'Content-Type': 'application/json' }
    });
  }

  public updatePart (id: string, value: object): Observable<any> {
    return this.http.put<Part>(`${this.dataUrl}part/${id}`, value, { 
      headers: { 'Content-Type': 'application/json' }
    });
  }

  public deletePart (id: string): Observable<any> {
    return this.http.delete<Part>(`${this.dataUrl}part/${id}`, { 
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
