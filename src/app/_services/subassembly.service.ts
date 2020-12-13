import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpResponse, HttpHeaders } from '@angular/common/http';

import { HostProviderService } from './host-provider.service';

import { Subassembly } from '../inventory/subassembly/subassembly'

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubassemblyService {
  readonly hostname: string = this._host.getHostname();
  readonly subassemblyUrl: string = `http://localhost:3000/api/v1/subassembly/`
  // readonly _header = {
  //   headers: new HttpHeaders({
  //     'Content-Type': 'application/json',
  //   })
  // }

  constructor(
    readonly http: HttpClient,
    readonly _host: HostProviderService
  ) { }

  public getSubassemblies (): Observable<HttpResponse<any>> {
    return this.http.get<Subassembly>(`${this.subassemblyUrl}`, { 
      headers: { 'Content-Type': 'application/json' },
      observe: 'response'
    });
  }

  public getSubassemblyByName (name: string): Observable<HttpResponse<any>> {
    console.log('NAME: ', `${this.subassemblyUrl}name`)
    return this.http.get<Subassembly>(`${this.subassemblyUrl}name`, { 
      headers: { 'Content-Type': 'application/json' },
      observe: 'response',
      params: { 'name': name }
    });
  }

  public getSubassemblyById (id: string): Observable<HttpResponse<Subassembly>> {
    return this.http.get<Subassembly>(`${this.subassemblyUrl}${id}`, { 
      headers: { 'Content-Type': 'application/json' },
      observe: 'response'
    });
  }

  public createSubassembly (value: object): Observable<Subassembly> {
    return this.http.post<Subassembly>(`${this.subassemblyUrl}`, value, { 
      headers: { 'Content-Type': 'application/json' }
    });
  }

  public updateSubassembly (id: string, value: object): Observable<Subassembly> {
    return this.http.put<Subassembly>(`${this.subassemblyUrl}${id}`, value, { 
      headers: { 'Content-Type': 'application/json' }
    });
  }

  public deleteSubassembly (id: string): Observable<Subassembly> {
    return this.http.delete<Subassembly>(`${this.subassemblyUrl}${id}`, { 
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
