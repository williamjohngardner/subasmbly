import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, FormArray, Validators } from '@angular/forms';

import { SubassemblyService } from '../../../_services/subassembly.service';

import { Observable } from 'rxjs';

@Component({
  selector: 'app-subassembly',
  templateUrl: './subassembly.component.html',
  styleUrls: ['./subassembly.component.css']
})
export class SubassemblyComponent implements OnInit {
  public _subassembly: Observable<object> = this._route.data['_value']['subassembly']['body'];
  public subassemblyForm: FormGroup;

  constructor(
    readonly _formBuilder: FormBuilder,
    readonly _subassemblyService: SubassemblyService,
    readonly _router: Router,
    readonly _route: ActivatedRoute,
  ) {}

  ngOnInit () {
    console.log('SUBASSEMBLY: ', this._subassembly);
    this.createSubassemblyForm();
  }

  createSubassemblyForm () {
    this.subassemblyForm = this._formBuilder.group({
      name: [{ value: this._subassembly['name'], disabled: false }],
      subassemblyNumber: [{ value: this._subassembly['subassemblyNumber'], disabled: false }],
      description: [{ value: this._subassembly['description'], disabled: false }],
      category: [{ value: this._subassembly['category'], disabled: false }],
      subCategory: [{ value: this._subassembly['subCategory'], disabled: false }],
      parts: this._formBuilder.array([]),
      uom: [{ value: this._subassembly['uom'], disabled: false }],
      unitCost: [{ value: this._subassembly['unitCost'], disabled: false }],
      unitPrice: [{ value: this._subassembly['unitPrice'], disabled: false }],
      dateCreated: [{ value: this._subassembly['_dateCreated'], disabled: false }],
      dateUpdated: [{ value: this._subassembly['_dateUpdated'], disabled: false }]
    })
  }

  createPartsArray () {
    const control: FormArray = this.subassemblyForm.get('parts') as FormArray;
    for (let item = 0; item < this._subassembly['parts'].length; item++) {
      control.push(this.createPartsFormGroup(this._subassembly['parts'][item]));
    }
  }

  createPartsFormGroup (part: any) {
    return new FormGroup({
      nme: new FormControl(part.name),
      _id: new FormControl(part._id),
    });
  }

  updateSubassembly () {
    const values: object = this.subassemblyForm.value;
    this._subassemblyService.updateSubassembly(this._subassembly['_id'], values).subscribe(() => {
      alert('Subassembly Successfully Updated');
      this._router.navigate(['subassembly']);
    }, Error => {
      alert(Error);
    });
  }

  deleteSubassembly () {
    const result = confirm('Please Confirm That You Want To Delete This Subassembly.');
    if (result) {
      this._subassemblyService.deleteSubassembly(this._subassembly['_id']).subscribe(() => {
        alert('Subassembly Successfully Deleted');
        this._router.navigate(['subassembly']);
      }, Error => {
        alert(Error);
      });
    }
  }
}
