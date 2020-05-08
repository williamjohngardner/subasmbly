import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, FormArray, Validators } from '@angular/forms';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-create-part',
  templateUrl: './create-part.component.html',
  styleUrls: ['./create-part.component.css']
})
export class CreatePartComponent implements OnInit {
  public createPartForm: FormGroup;

  constructor(
    readonly _modal: NgbModal,
    readonly _formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm () {
    this.createPartForm = this._formBuilder.group({
      partName: [{ value: '', disabled: false }],
    })
  }

  onSubmit () {
    return
  }

}
