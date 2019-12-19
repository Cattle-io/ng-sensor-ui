import { Routes, RouterModule } from '@angular/router';

import { SigninComponent } from './views/signin/signin.component';
import { SignupComponent } from './views/signup/signup.component';
import { RecoveryPasswordComponent } from './views/recovery-password/recovery-password.component';

export const AUTH_ROUTES: Routes = [
  {
    path: 'auth/signin',
    component: SigninComponent,
  },
  {
    path: 'auth/signup',
    component: SignupComponent
  },
  {
    path: 'auth/recovery-password',
    component: RecoveryPasswordComponent
  }
];
