import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'
import { HttpClient } from '@angular/common/http';

import { SubassemblyService } from '../../_services/subassembly.service';
import { Observable } from 'rxjs'

@Component({
  selector: 'app-assembly-listing',
  templateUrl: './assembly-listing.component.html',
  styleUrls: ['./assembly-listing.component.css']
})
export class AssemblyListingComponent {
  public _assembly: Observable<object> = this._route.data;

  constructor(
    readonly http: HttpClient,
    readonly _router: Router,
    readonly _route: ActivatedRoute,
    readonly _assemblyService: SubassemblyService
  ) {}

  ngOnInit () {
    console.log('ASSEMBLY: ', this._assembly);
  }

  openAssembly (id: number) {
    this._router.navigate([id], {relativeTo: this._route});
  }

  createAssembly () {
    this._router.navigate(['create', 'subassembly']);
  }
}
