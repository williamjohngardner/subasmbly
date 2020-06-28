import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpResponse, HttpHeaders } from '@angular/common/http';

import { HostProviderService } from './host-provider.service';

import { Part } from '../part/part'

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PartService {
  readonly hostname: string = this._host.getHostname();
  readonly partUrl: string = `http://localhost:3000/api/v1/part/`;
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
    return this.http.get<Part>(`${this.partUrl}`, { 
      headers: { 'Content-Type': 'application/json' },
      observe: 'response'
    });
  }

  public getPartById (id: string): Observable<HttpResponse<Part>> {
    return this.http.get<Part>(`${this.partUrl}${id}`, { 
      headers: { 'Content-Type': 'application/json' },
      observe: 'response'
    });
  }

  public createPart (value: object): Observable<Part> {
    return this.http.post<Part>(`${this.partUrl}`, value, { 
      headers: { 'Content-Type': 'application/json' }
    });
  }

  public updatePart (id: string, value: object): Observable<Part> {
    return this.http.put<Part>(`${this.partUrl}${id}`, value, { 
      headers: { 'Content-Type': 'application/json' }
    });
  }

  public deletePart (id: string): Observable<Part> {
    return this.http.delete<Part>(`${this.partUrl}${id}`, { 
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
