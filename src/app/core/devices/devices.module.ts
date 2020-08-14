import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgxsModule } from '@ngxs/store';



import { SharedModule } from '../../shared/shared.module';

import { DEVICES_ROUTES } from './devices.routes';

import { DeviceAddComponent } from './views/device-add/device-add.component';
import { DeviceEditComponent } from './views/device-edit/device-edit.component';
import { DeviceListComponent } from './views/device-list/device-list.component';
import { DeviceDeleteComponent } from './views/device-delete/device-delete.component';
import { DeviceShowComponent } from './views/device-show/device-show.component';
import { DeviceCardComponent } from './components/device-card/device-card.component';
import { SearchByKeywordPipe } from './pipes/searchByKeyword.pipe';
import { DeviceCardSlideComponent } from './components/device-card-slide/device-card-slide.component';

const COMPONENTS = [
  DeviceAddComponent,
  DeviceEditComponent,
  DeviceListComponent,
  DeviceDeleteComponent,
  DeviceShowComponent,

  DeviceCardComponent
];


const PIPES = [SearchByKeywordPipe];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    NgxsModule.forRoot(),
    RouterModule.forRoot(DEVICES_ROUTES, { useHash: false })
  ],

  declarations: [... COMPONENTS , ...PIPES, DeviceCardSlideComponent],
  exports: [ ...COMPONENTS, RouterModule],
  providers: []

})
export class DevicesModule { }
