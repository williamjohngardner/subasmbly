import { Component, Input } from '@angular/core';
import { NestedTreeControl } from '@angular/cdk/tree';
import { MatTreeNestedDataSource } from '@angular/material/tree';

/**
 * Food data with nested structure.
 * Each node has a name and an optional list of children.
 */

interface assemblyNode {
  name: string;
  assemblyNumber: string;
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
      assemblyNumber: '',
      children: []
    }
  ];

  constructor() {
    
  }

  ngAfterViewInit() {
    console.log('ASSEMBLY DATA IN BOM COMPONENT: ', this._assemblyData);
    this.structuredData[0].name = this._assemblyData['name'];
    this.structuredData[0].assemblyNumber = this._assemblyData['assemblyNumber'];
    for(const sub of this._assemblyData['subassemblies']) {
      this.structuredData[0].children.push(sub);
    }
    for(const part of this._assemblyData['parts']){
      this.structuredData[0].children.push(part);
    }
    console.log('STRUCTURED DATA: ', this.structuredData);
    this.dataSource.data = this.structuredData;
  }

  hasChild = (_: number, node: assemblyNode) => !!node.children && node.children.length > 0;
}
