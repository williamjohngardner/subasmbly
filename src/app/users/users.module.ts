import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { UserProfileComponent } from './user-profile/user-profile.component';
import { CreateUserComponent } from './create-user/create-user.component';

const USERS_ROUTES: Routes = [

]

@NgModule({
    imports: [
      CommonModule,
      HttpClientModule,
      RouterModule.forChild(USERS_ROUTES),],
    declarations: [
      UserProfileComponent,
      CreateUserComponent
    ],
    providers: [],
    entryComponents: [],
    exports: []
  })
  export class UsersModule { }
  