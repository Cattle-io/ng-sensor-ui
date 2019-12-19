import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatsComponent } from './stats.component';
import { RouterModule } from '@angular/router';

import { STATS_ROUTES } from './stats.routes';

@NgModule({
  declarations: [StatsComponent],
  imports: [
    CommonModule,
    RouterModule.forRoot(STATS_ROUTES, { useHash: false })
  ],
  exports: [RouterModule]
})
export class StatsModule { }
