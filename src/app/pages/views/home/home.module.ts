import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';

import { HOME_ROUTES } from './home.routes';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    RouterModule.forRoot(HOME_ROUTES, { useHash: false })
  ],
  exports: [RouterModule]
})
export class HomeModule { }
