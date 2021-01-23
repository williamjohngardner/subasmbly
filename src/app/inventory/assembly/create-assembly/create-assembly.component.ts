import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AbstractControl, FormBuilder, FormControl, FormGroup, FormArray, Validators } from '@angular/forms';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { AssemblyService } from '../../../_services/assembly.service';
import { SubassemblyService } from '../../../_services/subassembly.service';
import { PartService } from '../../../_services/part.service';

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
    readonly _subAssemblyService: SubassemblyService,
    readonly _partService: PartService,
    readonly _modalService: NgbActiveModal
  ) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.createAssemblyForm = this._formBuilder.group({
      name: [{ value: '', disabled: false }],
      assemblyNumber: [{ value: '', disabled: false }],
      description: [{ value: '', disabled: false }],
      category: [{ value: '', disabled: false }],
      subCategory: [{ value: '', disabled: false }],
      partName: [{ value: '', disabled: false }],
      parts: this._formBuilder.array([]),
      subassemblyName: [{ value: '', disabled: false }],
      subassemblies: this._formBuilder.array([]),
      uom: [{ value: '', disabled: false }],
      unitCost: [{ value: '', disabled: false }],
      unitCostCurrency: [{ value: '', disabled: false }],
      unitPriceMarkup: [{ value: '', disabled: false }],
      unitPrice: [{ value: '', disabled: false }]
    });
  }

  addPart () {
    const formValue: string = this.createAssemblyForm.controls.partName.value;
    console.log('PART NAME: ', formValue);
    const control: FormArray = this.createAssemblyForm.get('parts') as FormArray;
    this._partService.getPartByName(formValue).subscribe(val => {
      console.log('VAL: ', val);
      control.push(this.createPartFormGroup(val.body));
    });
  }

  createPartFormGroup (part: object) {
    return new FormGroup({
      name: new FormControl(part['name']),
      _id: new FormControl(part['_id']),
    });
  }

  addSubassembly () {
    const formValue: string = this.createAssemblyForm.controls.subassemblyName.value;
    const control: FormArray = this.createAssemblyForm.get('subassemblies') as FormArray;
    this._subAssemblyService.getSubassemblyByName(formValue).subscribe(val => {
      control.push(this.createSubassemblyFormGroup(val.body));
    });
  }

  createSubassemblyFormGroup (subAssembly: object) {
    return new FormGroup({
      name: new FormControl(subAssembly['name']),
      _id: new FormControl(subAssembly['_id']),
    });
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

  closeModal () {
    this._modalService.close();
  }
}
