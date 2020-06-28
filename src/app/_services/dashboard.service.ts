import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpResponse, HttpHeaders } from '@angular/common/http';

import { HostProviderService } from './host-provider.service';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  readonly hostname: string = this._host.getHostname();
  readonly dashboardUrl: string = `http://localhost:3000/api/v1/dashboard/`;
  // readonly _header = {
  //   headers: new HttpHeaders({
  //     'Content-Type': 'application/json',
  //   })
  // }

  constructor(
    readonly http: HttpClient,
    readonly _host: HostProviderService
  ) { }

  public getData(): Observable<HttpResponse<any>> {
    return this.http.get<any>(`${this.dashboardUrl}`, { 
      headers: { 'Content-Type': 'application/json' },
      observe: 'response'
    });
  }
}
