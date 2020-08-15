import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, FormArray, Validators } from '@angular/forms';

import { ProjectService } from '../../../_services/project.service';

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
      subCategory: [{ value: this._project['subCategory'], disabled: false }],
      parts: this._formBuilder.array([]),
      subassemblies: this._formBuilder.array([]),
      assemblies: this._formBuilder.array([]),
      projectCost: [{ value: this._project['projectCost'], disabled: false }],
      projectPrice: [{ value: this._project['projectPrice'], disabled: false }],
      dateCreated: [{ value: this._project['_dateCreated'], disabled: false }],
      dateUpdated: [{ value: this._project['_dateUpdated'], disabled: false }]
    })
  }

    createPartsArray () {
    const control: FormArray = this.projectForm.get('parts') as FormArray;
    for (let item = 0; item < this._project['parts'].length; item++) {
      control.push(this.createPartsFormGroup(this._project['parts'][item]));
    }
  }

  createSubassemblyArray () {
    const control: FormArray = this.projectForm.get('subassemblies') as FormArray;
    for (let item = 0; item < this._project['subassemblies'].length; item++) {
      control.push(this.createSubassemblyFormGroup(this._project['subassemblies'][item]));
    }
  }

  createAssemblyArray () {
    const control: FormArray = this.projectForm.get('assemblies') as FormArray;
    for (let item = 0; item < this._project['assemblies'].length; item++) {
      control.push(this.createAssemblyFormGroup(this._project['assemblies'][item]));
    }
  }

  createPartsFormGroup (part: any) {
    return new FormGroup({
      partName: new FormControl(part.partName),
      _id: new FormControl(part._id),
    });
  }

  createSubassemblyFormGroup (subassembly: any) {
    return new FormGroup({
      subassemblyName: new FormControl(subassembly.subassemblyName),
      _id: new FormControl(subassembly._id),
    });
  }

  createAssemblyFormGroup (assembly: any) {
    return new FormGroup({
      assemblyName: new FormControl(assembly.assemblyName),
      _id: new FormControl(assembly._id),
    });
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
