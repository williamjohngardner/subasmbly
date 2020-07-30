import { Component, OnInit } from '@angular/core';

import { ProjectService } from '../_services/project.service';
import { AssemblyService } from '../_services/assembly.service';
import { SubassemblyService } from '../_services/subassembly.service';
import { PartService } from '../_services/part.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  public totalProjects: number;
  public totalAssemblies: number;
  public totalSubassemblies: number;
  public totalParts: number;

  constructor(
    readonly _projectService: ProjectService,
    readonly _assemblyService: AssemblyService,
    readonly _subassemblyService: SubassemblyService,
    readonly _partService: PartService
  ) { }

  ngOnInit() {
    this._projectService.getProjects()
      .subscribe(projects => {
        this.totalProjects = projects['body'].length;
      })
    this._assemblyService.getAssemblies()
      .subscribe(assemblies => {
        this.totalAssemblies = assemblies['body'].length;
      })
    this._subassemblyService.getSubassemblies()
      .subscribe(subassemblies => {
        this.totalSubassemblies = subassemblies['body'].length;
      })
    this._partService.getParts()
      .subscribe(parts => {
        this.totalParts = parts['body'].length;
    })
  }

}
