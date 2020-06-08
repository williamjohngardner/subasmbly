import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpResponse, HttpHeaders } from '@angular/common/http';

import { HostProviderService } from './host-provider.service';

import { Project } from '../project/project'

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  readonly hostname: string = this._host.getHostname();
  readonly projectUrl: string = `http://localhost:3000/api/v1/project/`
  // readonly _header = {
  //   headers: new HttpHeaders({
  //     'Content-Type': 'application/json',
  //   })
  // }

  constructor(
    readonly http: HttpClient,
    readonly _host: HostProviderService
  ) { }

  public getProjects (): Observable<HttpResponse<Project>> {
    return this.http.get<Project>(`${this.projectUrl}`, { 
      headers: { 'Content-Type': 'application/json' },
      observe: 'response'
    });
  }

  public getProjectById (id: string): Observable<HttpResponse<Project>> {
    return this.http.get<Project>(`${this.projectUrl}${id}`, { 
      headers: { 'Content-Type': 'application/json' },
      observe: 'response'
    });
  }

  public createProject (value: object): Observable<Project> {
    return this.http.post<Project>(`${this.projectUrl}`, value, { 
      headers: { 'Content-Type': 'application/json' }
    });
  }

  public updateProject (id: string, value: object): Observable<Project> {
    return this.http.put<Project>(`${this.projectUrl}${id}`, value, { 
      headers: { 'Content-Type': 'application/json' }
    });
  }

  public deleteProject (id: string): Observable<Project> {
    return this.http.delete<Project>(`${this.projectUrl}${id}`, { 
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
