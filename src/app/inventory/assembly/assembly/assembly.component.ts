import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, FormArray } from '@angular/forms';

import { AssemblyService } from '../../../_services/assembly.service';
import { SubassemblyService } from '../../../_services/subassembly.service';
import { PartService } from '../../../_services/part.service';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-assembly',
  templateUrl: './assembly.component.html',
  styleUrls: ['./assembly.component.css']
})
export class AssemblyComponent implements OnInit {
  @Input() _assembly: any;
  public assemblyForm: FormGroup;
  public structuredTree: object = {
    subassemblies: [],
    parts: []
  };

  constructor(
    readonly _formBuilder: FormBuilder,
    readonly _assemblyService: AssemblyService,
    readonly _subassemblyService: SubassemblyService,
    readonly _partService: PartService,
    readonly _router: Router,
    readonly _route: ActivatedRoute,
    readonly _modalService: NgbActiveModal
  ) {}

  ngOnInit() {
    this.createassemblyForm();
    this.structuredTree = {
      subassemblies: this._assembly.subassemblies,
      parts: this._assembly.parts
    };
  }

  createassemblyForm() {
    this.assemblyForm = this._formBuilder.group({
      assemblyName: [{ value: this._assembly['assemblyName'], disabled: false }],
      assemblyNumber: [{ value: this._assembly['assemblyNumber'], disabled: false }],
      description: [{ value: this._assembly['description'], disabled: false }],
      category: [{ value: this._assembly['category'], disabled: false }],
      subCategory: [{ value: this._assembly['Category'], disabled: false }],
      projects: this._formBuilder.array([]),
      parts: this._formBuilder.array([]),
      subassemblies: this._formBuilder.array([]),
      uom: [{ value: this._assembly['uom'], disabled: false }],
      unitCost: [{ value: this._assembly['unitCost'], disabled: false }],
      unitCostCurrency: [{ value: this._assembly['unitCostCurrency'], disabled: false }],
      unitMarkup: [{ value: this._assembly['unitMarkup'], disabled: false }],
      unitPrice: [{ value: this._assembly['unitPrice'], disabled: false }],
      unitPriceCurrency: [{ value: this._assembly['unitPriceCurrency'], disabled: false }],
      dateCreated: [{ value: this._assembly['_dateCreated'], disabled: false }],
      dateUpdated: [{ value: this._assembly['_dateUpdated'], disabled: false }]
    })
  }

  createProjectsArray () {
    const control: FormArray = this.assemblyForm.get('projects') as FormArray;
    for (let item = 0; item < this._assembly['projects'].length; item++) {
      control.push(this.createProjectsFormGroup(this._assembly['projects'][item]));
    }
  }

  createProjectsFormGroup (project: any) {
    return new FormGroup({
      projectName: new FormControl(project.projectName),
      _id: new FormControl(project._id),
    });
  }

  createPartsArray () {
    const control: FormArray = this.assemblyForm.get('parts') as FormArray;
    for (let item = 0; item < this._assembly['parts'].length; item++) {
      control.push(this.createPartsFormGroup(this._assembly['parts'][item]));
    }
  }

  createPartsFormGroup (part: any) {
    return new FormGroup({
      partName: new FormControl(part.partName),
      _id: new FormControl(part._id),
    });
  }

  createSubassemblyArray () {
    const control: FormArray = this.assemblyForm.get('subassemblies') as FormArray;
    for (let item = 0; item < this._assembly['subassemblies'].length; item++) {
      control.push(this.createSubassemblyFormGroup(this._assembly['subassemblies'][item]));
    }
  }

  createSubassemblyFormGroup (subassembly: any) {
    return new FormGroup({
      subassemblyName: new FormControl(subassembly.subassemblyName),
      _id: new FormControl(subassembly._id),
    });
  }

  updateAssembly() {
    const values: object = this.assemblyForm.value;
    this._assemblyService.updateAssembly(this._assembly['_id'], values).subscribe(() => {
      alert('assembly Successfully Updated');
      this._router.navigate(['assembly']);
    }, Error => {
      alert(Error);
    });
  }

  deleteAssembly() {
    const result = confirm('Please Confirm That You Want To Delete This assembly.');
    if (result) {
      this._assemblyService.deleteAssembly(this._assembly['_id']).subscribe(() => {
        alert('assembly Successfully Deleted');
        this._router.navigate(['assembly']);
      }, Error => {
        alert(Error);
      });
    }
  }

  closeModal () {
    this._modalService.close();
  }
}
