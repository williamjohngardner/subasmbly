import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, FormArray, Validators } from '@angular/forms';

import { AssemblyService } from '../../../_services/assembly.service';

import { Observable } from 'rxjs';

@Component({
  selector: 'app-assembly',
  templateUrl: './assembly.component.html',
  styleUrls: ['./assembly.component.css']
})
export class AssemblyComponent implements OnInit {
  public _assembly: Observable<object> = this._route.data['_value']['assembly']['body'];
  public assemblyForm: FormGroup;

  constructor(
    readonly _formBuilder: FormBuilder,
    readonly _assemblyService: AssemblyService,
    readonly _router: Router,
    readonly _route: ActivatedRoute,
  ) { }

  ngOnInit() {
    console.log('ASSEMBLY: ', this._assembly);
    this.createassemblyForm();
  }

  createassemblyForm() {
    this.assemblyForm = this._formBuilder.group({
      assemblyName: [{ value: this._assembly['assemblyName'], disabled: false }],
      assemblyNumber: [{ value: this._assembly['assemblyNumber'], disabled: false }],
      description: [{ value: this._assembly['description'], disabled: false }],
      category: [{ value: this._assembly['category'], disabled: false }],
      subCategory: [{ value: this._assembly['Category'], disabled: false }],
      parts: this._formBuilder.array([]),
      subassemblies: this._formBuilder.array([]),
      uom: [{ value: this._assembly['uom'], disabled: false }],
      unitCost: [{ value: this._assembly['unitCost'], disabled: false }],
      unitPrice: [{ value: this._assembly['unitPrice'], disabled: false }],
      dateCreated: [{ value: this._assembly['_dateCreated'], disabled: false }],
      dateUpdated: [{ value: this._assembly['_dateUpdated'], disabled: false }]
    })
  }

  createPartsArray () {
    const control: FormArray = this.assemblyForm.get('parts') as FormArray;
    for (let item = 0; item < this._assembly['parts'].length; item++) {
      control.push(this.createPartsFormGroup(this._assembly['parts'][item]));
    }
  }

  createSubassemblyArray () {
    const control: FormArray = this.assemblyForm.get('subassemblies') as FormArray;
    for (let item = 0; item < this._assembly['subassemblies'].length; item++) {
      control.push(this.createSubassemblyFormGroup(this._assembly['subassemblies'][item]));
    }
  }

  createPartsFormGroup (part: any) {
    return new FormGroup({
      partName: new FormControl(part.partName),
      _id: new FormControl(part._id),
    });
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
}
