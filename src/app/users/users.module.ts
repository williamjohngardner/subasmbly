import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

const USERS_ROUTES: Routes = [

]

@NgModule({
    imports: [
      CommonModule,
      HttpClientModule,
      RouterModule.forChild(USERS_ROUTES),],
    declarations: [],
    providers: [],
    entryComponents: [],
    exports: []
  })
  export class UsersModule { }
  