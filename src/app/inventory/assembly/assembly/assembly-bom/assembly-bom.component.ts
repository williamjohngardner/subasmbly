import { Component, Input } from '@angular/core';
import {FlatTreeControl} from '@angular/cdk/tree';
import {MatTreeFlatDataSource, MatTreeFlattener} from '@angular/material/tree';

/**
 * Food data with nested structure.
 * Each node has a name and an optional list of children.
 */

interface assemblyNode {
  name: string;
  // _id: string;
  children?: assemblyNode[];
}

const TREE_DATA: assemblyNode[] = [
  {
    name: 'subassemblies',
    children: []
  }, 
  {
    name: 'parts',
    children: []
  },
];

/** Flat node with expandable and level information */
interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  level: number;
}

@Component({
  selector: 'app-assembly-bom',
  templateUrl: './assembly-bom.component.html',
  styleUrls: ['./assembly-bom.component.css']
})
export class AssemblyBomComponent {
  @Input() _assemblyData: object;
  private _transformer = (node: assemblyNode, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      level: level,
    };
  }

  treeControl = new FlatTreeControl<ExampleFlatNode>(node => node.level, node => node.expandable);

  treeFlattener = new MatTreeFlattener(this._transformer, node => node.level, node => node.expandable, node => node.children);

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  constructor() {
    this.dataSource.data = TREE_DATA;
  }

  ngAfterViewInit() {
    console.log('ASSEMBLY DATA IN BOM COMPONENT: ', this._assemblyData);
  }

  hasChild = (_: number, node: ExampleFlatNode) => node.expandable;
}
