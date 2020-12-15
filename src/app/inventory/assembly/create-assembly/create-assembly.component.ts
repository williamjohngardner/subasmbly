import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AbstractControl, FormBuilder, FormControl, FormGroup, FormArray, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { AssemblyService } from '../../../_services/assembly.service';
import { SubassemblyService } from '../../../_services/subassembly.service'

@Component({
  selector: 'app-create-assembly',
  templateUrl: './create-assembly.component.html',
  styleUrls: ['./create-assembly.component.css']
})
export class CreateAssemblyComponent implements OnInit {

  public createAssemblyForm: FormGroup;
  public categories: Array<object> = [
    { n: 'Paints', v: 'Paint' },
    { n: 'Metals', v: 'Metal' },
    { n: 'Woods', v: 'Wood' }
  ]
  public subCategories: Array<object> = [
    { n: 'Tools', v: 'Tool' },
    { n: 'Electronics', v: 'Electronic' },
    { n: 'Toys', v: 'Toy' }
  ]

  constructor(
    readonly _modal: NgbModal,
    readonly _formBuilder: FormBuilder,
    readonly _router: Router,
    readonly _assemblyService: AssemblyService,
    readonly _subAssemblyService: SubassemblyService
  ) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.createAssemblyForm = this._formBuilder.group({
      assemblyName: [{ value: '', disabled: false }],
      assemblyNumber: [{ value: '', disabled: false }],
      description: [{ value: '', disabled: false }],
      category: [{ value: '', disabled: false }],
      subCategory: [{ value: '', disabled: false }],
      parts: this._formBuilder.group({
        id: [{ value: '', disabled: false}],
        partName: [{ value: '', disabled: false }]
      }),
      // subassemblies: this._formBuilder.group({
      //   id: [{ value: '', disabled: false}],
      //   subassemblyName: [{ value: '', disabled: false }]
      // }),
      subAssemblyName: [{ value: '', disabled: false }],
      subassemblies: this._formBuilder.array([]),
      uom: [{ value: '', disabled: false }],
      unitCost: [{ value: '', disabled: false }],
      unitPrice: [{ value: '', disabled: false }]
    });
  }

  addSubassembly () {
    const formValue: string = this.createAssemblyForm.controls.subAssemblyName.value;
    console.log('SUBASSEMBLY:', formValue);
    const control: FormArray = this.createAssemblyForm.get('subassemblies') as FormArray;
    const localSubassembly: object = this._subAssemblyService.getSubassemblyByName(formValue);
    console.log('LOCAL SUBASSEMBLY: ', localSubassembly);
    // control.push(this.createSubassemblyFormGroup(this._assembly['subassemblies'][item]));

  }

  onSubmit() {
    const value: object = this.createAssemblyForm.value;
    this._assemblyService.createAssembly(value).subscribe(() => {
      alert('Assembly was created successfully');
      this._router.navigate(['assembly']);
    },
      Error => {
        alert(Error);
      });
  }
}
