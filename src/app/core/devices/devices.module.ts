import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgxsModule } from '@ngxs/store';

import { SwiperModule } from 'ngx-swiper-wrapper';
import { SWIPER_CONFIG } from 'ngx-swiper-wrapper';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';


import { SharedModule } from '../../shared/shared.module';

import { DEVICES_ROUTES } from './devices.routes';

import { DeviceAddComponent } from './views/device-add/device-add.component';
import { DeviceEditComponent } from './views/device-edit/device-edit.component';
import { DeviceListComponent } from './views/device-list/device-list.component';
import { DeviceDeleteComponent } from './views/device-delete/device-delete.component';
import { DeviceShowComponent } from './views/device-show/device-show.component';
import { DeviceCardComponent } from './components/device-card/device-card.component';


import { DeviceCardSlideShowComponent } from './components/device-card-slide-show/device-card-slide-show.component';
import { DeviceCardSlideEditComponent } from './components/device-card-slide-edit/device-card-slide-edit.component';
import { DeviceCardSlideDetailsComponent } from './components/device-card-slide-details/device-card-slide-details.component';



const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  direction: 'horizontal',
  slidesPerView: 'auto'
};


const COMPONENTS = [
  DeviceAddComponent,
  DeviceEditComponent,
  DeviceListComponent,
  DeviceDeleteComponent,
  DeviceShowComponent,
  DeviceCardComponent,
  DeviceCardSlideShowComponent, DeviceCardSlideEditComponent, DeviceCardSlideDetailsComponent
];


const PIPES = [];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    SwiperModule,
    NgxsModule.forRoot(),
    RouterModule.forRoot(DEVICES_ROUTES, { useHash: false })
  ],

  declarations: [... COMPONENTS , ...PIPES,  ],
  exports: [ ...COMPONENTS, RouterModule],

  providers: [
    {
      provide: SWIPER_CONFIG,
      useValue: DEFAULT_SWIPER_CONFIG
    }
  ],

})
export class DevicesModule { }
