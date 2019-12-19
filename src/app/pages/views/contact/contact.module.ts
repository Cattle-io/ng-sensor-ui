import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ContactComponent } from './contact.component';

import { CONTACT_ROUTES } from './contact.routes';


@NgModule({
  declarations: [ContactComponent],
  imports: [
    CommonModule,
    RouterModule.forRoot(CONTACT_ROUTES, { useHash: false })
  ],
  exports: [RouterModule]
})
export class ContactModule { }
