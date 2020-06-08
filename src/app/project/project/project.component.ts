import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, FormArray, Validators } from '@angular/forms';

import { ProjectService } from '../../_services/project.service';

import { Observable } from 'rxjs';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  public _project: Observable<object> = this._route.data['_value']['project']['body'];
  public projectForm: FormGroup;

  constructor(
    readonly _formBuilder: FormBuilder,
    readonly _projectService: ProjectService,
    readonly _router: Router,
    readonly _route: ActivatedRoute,
  ) { }

  ngOnInit() {
    console.log('project: ', this._project, this._route.data);
    this.createProjectForm();
  }

  createProjectForm() {
    this.projectForm = this._formBuilder.group({
      projectName: [{ value: this._project['projectName'], disabled: false }],
      projectNumber: [{ value: this._project['projectNumber'], disabled: false }],
      description: [{ value: this._project['description'], disabled: false }],
      category: [{ value: this._project['category'], disabled: false }],
      subCategory: [{ value: this._project['Category'], disabled: false }],
      parts: this._formBuilder.group({
        partName: [{ value: this._project['parts'], disabled: false }]
      }),
      subassemblies: this._formBuilder.group({
        subprojectName: [{ value: this._project['subassemblies'], disabled: false }]
      }),
      uom: [{ value: this._project['uom'], disabled: false }],
      unitCost: [{ value: this._project['unitCost'], disabled: false }],
      unitPrice: [{ value: this._project['unitPrice'], disabled: false }],
      dateCreated: [{ value: this._project['_dateCreated'], disabled: false }],
      dateUpdated: [{ value: this._project['_dateUpdated'], disabled: false }]
    })
  }

  updateProject() {
    const values: object = this.projectForm.value;
    this._projectService.updateProject(this._project['_id'], values).subscribe(() => {
      alert('Project Successfully Updated');
      this._router.navigate(['project']);
    }, Error => {
      alert(Error);
    });
  }

  deleteProject() {
    const result = confirm('Please Confirm That You Want To Delete This Project.');
    if (result) {
      this._projectService.deleteProject(this._project['_id']).subscribe(() => {
        alert('Project Successfully Deleted');
        this._router.navigate(['project']);
      }, Error => {
        alert(Error);
      });
    }
  }
}
