import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamComponent } from './team.component';
import { RouterModule } from '@angular/router';

import { TEAM_ROUTES } from './team.routes';


@NgModule({
  declarations: [TeamComponent],
  imports: [
    CommonModule,
    RouterModule.forRoot(TEAM_ROUTES, { useHash: false })
  ],
  exports: [RouterModule]
})
export class TeamModule { }
