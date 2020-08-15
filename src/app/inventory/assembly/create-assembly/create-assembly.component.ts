import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AbstractControl, FormBuilder, FormControl, FormGroup, FormArray, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { AssemblyService } from '../../_services/assembly.service';

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
    readonly _assemblyService: AssemblyService
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
        partName: [{ value: '', disabled: false }]
      }),
      subassemblies: this._formBuilder.group({
        subassemblyName: [{ value: '', disabled: false }]
      }),
      uom: [{ value: '', disabled: false }],
      unitCost: [{ value: '', disabled: false }],
      unitPrice: [{ value: '', disabled: false }]
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
}
