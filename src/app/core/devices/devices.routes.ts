import { CoreComponent } from '../core.component';
///import { AuthenticationGuard } from '../../common/guards/authentication.guard';

import { DeviceListComponent } from './views/device-list/device-list.component';
import { DeviceAddComponent } from './views/device-add/device-add.component';
import { DeviceEditComponent } from './views/device-edit/device-edit.component';
import { DeviceDeleteComponent } from './views/device-delete/device-delete.component';
import { DeviceShowComponent } from './views/device-show/device-show.component';

export const DEVICES_ROUTES = [

  {
    path: 'core/devices',
    component:  CoreComponent,
    children: [
      { path: '', component: DeviceListComponent, data: {animation: 'DeviceListPage'} },
      { path: ':deviceID', component: DeviceShowComponent, data: {animation: 'DeviceIdPage'} },
      { path: 'add', component: DeviceAddComponent , data: {animation: 'DeviceAddPage'} },
      { path: 'edit/:deviceId', component: DeviceEditComponent , data: {animation: 'DeviceEditPage'} },
      { path: 'delete/:deviceId', component: DeviceDeleteComponent , data: {animation: 'DeviceDeletePage'} }
    ]
  },

];
