import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { CORE_ROUTES } from './core.routes';

import { DevicesModule } from './devices/devices.module';
import { LogSessionsModule } from './log-sessions/log-sessions.module';
import { NotificationsModule } from './notifications/notifications.module';
import { ProjectsModule } from './projects/projects.module';
import { ReportsModule } from './reports/reports.module';
import { UsersModule } from './users/users.module';

import { SharedModule } from '../shared/shared.module';

import { CoreComponent } from './core.component';

const COMPONENTS =  [CoreComponent];
const MODULES = [ SharedModule, DevicesModule, LogSessionsModule , NotificationsModule, ProjectsModule, ReportsModule, UsersModule];

@NgModule({

  imports: [
    CommonModule,
    RouterModule.forRoot(CORE_ROUTES, { useHash: false }),
    ... MODULES
  ],

  declarations: [ ... COMPONENTS],
  exports: [ ... COMPONENTS, RouterModule],
})
export class CoreModule { }
