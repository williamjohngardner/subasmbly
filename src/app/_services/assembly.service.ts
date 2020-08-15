import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpResponse, HttpHeaders } from '@angular/common/http';

import { HostProviderService } from './host-provider.service';

import { Assembly } from '../assembly/assembly'

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AssemblyService {
  readonly hostname: string = this._host.getHostname();
  readonly assemblyUrl: string = `http://localhost:3000/api/v1/assembly/`
  // readonly _header = {
  //   headers: new HttpHeaders({
  //     'Content-Type': 'application/json',
  //   })
  // }

  constructor(
    readonly http: HttpClient,
    readonly _host: HostProviderService
  ) { }

  public getAssemblies (): Observable<HttpResponse<any>> {
    return this.http.get<Assembly>(`${this.assemblyUrl}`, { 
      headers: { 'Content-Type': 'application/json' },
      observe: 'response'
    });
  }

  public getAssemblyById (id: string): Observable<HttpResponse<Assembly>> {
    return this.http.get<Assembly>(`${this.assemblyUrl}${id}`, { 
      headers: { 'Content-Type': 'application/json' },
      observe: 'response'
    });
  }

  public createAssembly (value: object): Observable<Assembly> {
    return this.http.post<Assembly>(`${this.assemblyUrl}`, value, { 
      headers: { 'Content-Type': 'application/json' }
    });
  }

  public updateAssembly (id: string, value: object): Observable<Assembly> {
    return this.http.put<Assembly>(`${this.assemblyUrl}${id}`, value, { 
      headers: { 'Content-Type': 'application/json' }
    });
  }

  public deleteAssembly (id: string): Observable<Assembly> {
    return this.http.delete<Assembly>(`${this.assemblyUrl}${id}`, { 
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
