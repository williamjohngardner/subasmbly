import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AbstractControl, FormBuilder, FormControl, FormGroup, FormArray, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { SubassemblyService } from '../../../_services/subassembly.service';

@Component({
  selector: 'app-create-subassembly',
  templateUrl: './create-subassembly.component.html',
  styleUrls: ['./create-subassembly.component.css']
})
export class CreateSubassemblyComponent implements OnInit {
  public createSubassemblyForm: FormGroup;
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
    readonly _subassemblyService: SubassemblyService
  ) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.createSubassemblyForm = this._formBuilder.group({
      subassemblyName: [{ value: '', disabled: false }],
      subassemblyNumber: [{ value: '', disabled: false }],
      description: [{ value: '', disabled: false }],
      category: [{ value: '', disabled: false }],
      subCategory: [{ value: '', disabled: false }],
      parts: this._formBuilder.group({
        partName: [{ value: '', disabled: false }]
      }),
      uom: [{ value: '', disabled: false }],
      unitCost: [{ value: '', disabled: false }],
      unitPrice: [{ value: '', disabled: false }]
    });
  }

  onSubmit() {
    const value: object = this.createSubassemblyForm.value;
    this._subassemblyService.createSubassembly(value).subscribe(() => {
      alert('Subassembly was created successfully');
      this._router.navigate(['subassembly']);
    },
      Error => {
        alert(Error);
      });
  }
}
