import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { PartService } from '../../../_services/part.service';

@Component({
  selector: 'app-create-part',
  templateUrl: './create-part.component.html',
  styleUrls: ['./create-part.component.css']
})
export class CreatePartComponent implements OnInit {
  public createPartForm: FormGroup;
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
    readonly _activeModal: NgbActiveModal,
    readonly _formBuilder: FormBuilder,
    readonly _partSerivce: PartService
  ) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.createPartForm = this._formBuilder.group({
      name: [{ value: '', disabled: false }],
      partNumber: [{ value: '', disabled: false }],
      description: [{ value: '', disabled: false }],
      category: [{ value: '', disabled: false }],
      subCategory: [{ value: '', disabled: false }],
      material: [{ value: '', disabled: false }],
      finish: [{ value: '', disabled: false }],
      plating: [{ value: '', disabled: false }],
      uom: [{ value: '', disabled: false }],
      unitCost: [{ value: '', disabled: false }],
      unitPrice: [{ value: '', disabled: false }]
    });
  }

  onSubmit() {
    const value: object = this.createPartForm.value;
    this._partSerivce.createPart(value).subscribe(() => {
      alert('Part was created successfully');
    },
      Error => {
        alert(Error);
      });
  }

  closeModal () {
    this._activeModal.close();
  }
}
