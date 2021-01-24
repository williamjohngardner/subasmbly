import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

import { NestedTreeControl } from '@angular/cdk/tree';
import { MatTreeNestedDataSource } from '@angular/material/tree';

import { PartService } from '../../../../_services/part.service';
import { SubassemblyService } from '../../../../_services/subassembly.service';

/**
 * Food data with nested structure.
 * Each node has a name and an optional list of children.
 */

interface assemblyNode {
  name: string;
  partNumber: string;
  // _id: string;
  children?: assemblyNode[];
}

@Component({
  selector: 'app-assembly-bom',
  templateUrl: './assembly-bom.component.html',
  styleUrls: ['./assembly-bom.component.css']
})
export class AssemblyBomComponent {
  @Input() _assemblyData: object;
  treeControl = new NestedTreeControl<assemblyNode>(node => node.children);
  dataSource = new MatTreeNestedDataSource<assemblyNode>();
  private structuredData: assemblyNode[] = [
    {
      name: '',
      partNumber: '',
      children: []
    }
  ];

  constructor(
    readonly _router: Router,
    readonly _subassemblyService: SubassemblyService,
    readonly _partService: PartService
  ) { }

  ngAfterViewInit() {
    console.log('ASSEMBLY DATA IN BOM COMPONENT: ', this._assemblyData);
    this.structuredData[0].name = this._assemblyData['name'];
    this.structuredData[0].partNumber = this._assemblyData['assemblyNumber'];
    for(const part of this._assemblyData['parts']){
      this.structuredData[0].children.push(part);
    }
    // Subassemblies can have child subassemblies and parts.  This call gets children 1 level down.
    for(const sub of this._assemblyData['subassemblies']) {
      const localSubassembly: any = {
        name: '',
        partNumber: '',
      };
      this._subassemblyService.getSubassemblyById(sub['_id']).subscribe(data => {
        console.log('DATA CALL: ', data);
        localSubassembly['name'] = data['body']['name'];
        localSubassembly['_id'] = data['body']['_id'];
        localSubassembly['partNumber'] = data['body']['subassemblyNumber'];
        localSubassembly['children'] = data['body']['subassemblies'];
        for(const part of data['body']['parts'])
        {
          localSubassembly['children'].push(part);
        }
        this.structuredData[0].children.push(localSubassembly);
        console.log('STRUCTURED DATA: ', this.structuredData);
        this.dataSource.data = this.structuredData;
      })
    }
  }

  hasChild = (_: number, node: assemblyNode) => !!node.children && node.children.length > 0;

  openNode(id: string) {
    this._router.navigate(['inventory', 'subassembly', id]);
  }
}
