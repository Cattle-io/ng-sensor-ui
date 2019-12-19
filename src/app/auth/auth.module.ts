import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { AUTH_ROUTES } from './auth.routes';
import { SigninComponent } from './views/signin/signin.component';
import { SignupComponent } from './views/signup/signup.component';
import { RecoveryPasswordComponent } from './views/recovery-password/recovery-password.component';

import { SharedModule } from '../shared/shared.module';
import { AuthComponent } from './auth.component';

const COMPONENTS = [SigninComponent, SignupComponent, RecoveryPasswordComponent]

console.warn('')
console.warn(' AUTH_ROUTES  ')
console.warn(AUTH_ROUTES )
console.warn('')


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forRoot(AUTH_ROUTES, { useHash: false })
  ],

  declarations: [ ... COMPONENTS, AuthComponent],
  exports: [ ...COMPONENTS, RouterModule]
})
export class AuthModule { }
