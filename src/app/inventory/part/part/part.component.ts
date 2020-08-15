import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, FormArray, Validators } from '@angular/forms';

import { PartService } from '../../_services/part.service'

import { Observable } from 'rxjs';

@Component({
  selector: 'app-part',
  templateUrl: './part.component.html',
  styleUrls: ['./part.component.css']
})
export class PartComponent implements OnInit {
  public _part: Observable<object> = this._route.data['_value']['part']['body'];
  public partForm: FormGroup;

  constructor(
    readonly _formBuilder: FormBuilder,
    readonly _partService: PartService,
    readonly _router: Router,
    readonly _route: ActivatedRoute,
  ) {}

  ngOnInit () {
    this.createPartForm();
  }

  createPartForm () {
    this.partForm = this._formBuilder.group({
      partName: [{ value: this._part['partName'], disabled: false }],
      partNumber: [{ value: this._part['partNumber'], disabled: false }],
      description: [{ value: this._part['description'], disabled: false }],
      category: [{ value: this._part['category'], disabled: false }],
      subCategory: [{ value: this._part['subCategory'], disabled: false }],
      material: [{ value: this._part['material'], disabled: false }],
      finish: [{ value: this._part['finish'], disabled: false }],
      plating: [{ value: this._part['plating'], disabled: false }],
      uom: [{ value: this._part['uom'], disabled: false }],
      unitCost: [{ value: this._part['unitCost'], disabled: false }],
      unitPrice: [{ value: this._part['unitPrice'], disabled: false }],
      dateCreated: [{ value: this._part['_dateCreated'], disabled: false }],
      dateUpdated: [{ value: this._part['_dateUpdated'], disabled: false }]
    })
  }

  updatePart () {
    const values: object = this.partForm.value;
    this._partService.updatePart(this._part['_id'], values).subscribe(() => {
      alert('Part Successfully Updated');
      this._router.navigate(['part']);
    }, Error => {
      alert(Error);
    });
  }

  deletePart () {
    const result = confirm('Please Confirm That You Want To Delete This Part.');
    if (result) {
      this._partService.deletePart(this._part['_id']).subscribe(() => {
        alert('Part Successfully Deleted');
        this._router.navigate(['part']);
      }, Error => {
        alert(Error);
      });
    }
  }
}
