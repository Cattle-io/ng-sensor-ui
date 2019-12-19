import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';
import { RouterModule } from '@angular/router';

import { ABOUT_ROUTES } from './about.routes';

@NgModule({
  declarations: [AboutComponent],
  imports: [
    CommonModule,
    RouterModule.forRoot(ABOUT_ROUTES, { useHash: false })
  ],
  exports: [RouterModule]
})
export class AboutModule { }
