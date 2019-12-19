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
      { path: '', component: DeviceListComponent },
      { path: ':deviceID', component: DeviceShowComponent },
      { path: 'add', component: DeviceAddComponent },
      { path: 'edit/:deviceId', component: DeviceEditComponent },
      { path: 'delete/:deviceId', component: DeviceDeleteComponent }
    ]
  },

];
