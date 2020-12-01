import { CoreComponent } from '../core.component';

import { LogSessionsListComponent } from './views/log-sessions-list/log-sessions-list.component';
import { LogSessionEditComponent } from './views/log-sessions-edit/log-sessions-edit.component';
import { LogSessionShowComponent } from './views/log-sessions-show/log-sessions-show.component';

export const LOGSESSIONS_ROUTES = [

  {
    path: 'core/log-sessions',
    component:  CoreComponent,
    children: [
      { path: '', component: LogSessionsListComponent, data: {animation: 'DeviceListPage'} },
      { path: 'edit/:logSessionId', component: LogSessionEditComponent, data: {animation: 'DeviceEditPage'} },
      { path: 'show/:logSessionId', component: LogSessionShowComponent, data: {animation: 'DeviceEditPage'} },

      /*
      { path: 'show/:deviceID', component: DeviceShowComponent, data: {animation: 'DeviceIdPage'} },
      { path: 'add', component: DeviceAddComponent , data: {animation: 'DeviceAddPage'} },
      
      { path: 'delete/:deviceId', component: DeviceDeleteComponent , data: {animation: 'DeviceDeletePage'} }
      */
    ]
  },

];

