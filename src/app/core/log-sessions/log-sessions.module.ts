import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ChartModule } from 'angular-highcharts';

import { NgxsModule } from '@ngxs/store';

import { SwiperModule } from 'ngx-swiper-wrapper';
import { SWIPER_CONFIG } from 'ngx-swiper-wrapper';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';

import { SharedModule } from '../../shared/shared.module';

import { LOGSESSIONS_ROUTES } from './log-sessions.routes';

import { LogSessionsComponent } from './log-sessions.component';
import { LogSessionsListComponent } from './views/log-sessions-list/log-sessions-list.component';
import { LogSessionEditComponent } from './views/log-sessions-edit/log-sessions-edit.component';
import { LogSessionShowComponent } from './views/log-sessions-show/log-sessions-show.component';

import { LogSessionCardComponent } from './components/log-session-card/log-session-card.component';
import {LogSessionCardSlideShowComponent } from './components/log-session-card-slide-show/log-session-card-slide-show.component';
import {LogSessionCardSlideDetailsComponent } from './components/log-session-card-slide-details/log-session-card-slide-details.component';

const COMPONENTS = [LogSessionsComponent, LogSessionsListComponent, LogSessionShowComponent, LogSessionEditComponent, LogSessionCardComponent, LogSessionCardSlideShowComponent, LogSessionCardSlideDetailsComponent ]

@NgModule({
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
  imports: [
    CommonModule,
    ChartModule,
    SharedModule,
    SwiperModule,
    FormsModule,
    NgxsModule.forRoot(),
    RouterModule.forRoot(LOGSESSIONS_ROUTES, { useHash: false })
  ]
})
export class LogSessionsModule { }
