import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AbstractControl, FormBuilder, FormControl, FormGroup, FormArray, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { ProjectService } from '../../../_services/project.service';

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.css']
})
export class CreateProjectComponent implements OnInit {

  public createProjectForm: FormGroup;
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
    readonly _projectService: ProjectService
  ) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.createProjectForm = this._formBuilder.group({
      name: [{ value: '', disabled: false }],
      projectNumber: [{ value: '', disabled: false }],
      description: [{ value: '', disabled: false }],
      category: [{ value: '', disabled: false }],
      subCategory: [{ value: '', disabled: false }],
      parts: this._formBuilder.group({
        name: [{ value: '', disabled: false }]
      }),
      subassemblies: this._formBuilder.group({
        name: [{ value: '', disabled: false }]
      }),
      assemblies: this._formBuilder.group({
        name: [{ value: '', disabled: false }]
      }),
      projectCost: [{ value: '', disabled: false }],
      projectPrice: [{ value: '', disabled: false }]
    });
  }

  onSubmit() {
    const value: object = this.createProjectForm.value;
    this._projectService.createProject(value).subscribe(() => {
      alert('Project was created successfully');
      this._router.navigate(['project']);
    },
      Error => {
        alert(Error);
      });
  }
}
