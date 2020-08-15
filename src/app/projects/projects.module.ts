import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

const PROJECT_ROUTES: Routes = [

]

@NgModule({
    imports: [
      CommonModule,
      HttpClientModule,
      RouterModule.forChild(PROJECT_ROUTES),],
    declarations: [],
    providers: [],
    entryComponents: [],
    exports: []
  })
  export class ProjectModule { }
  