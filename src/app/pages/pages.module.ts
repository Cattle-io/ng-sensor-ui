import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { PAGES_ROUTES } from './pages.routes';
import { HomeModule } from './views/home/home.module';
import { AboutModule } from './views/about/about.module';
import { TeamModule } from './views/team/team.module';
import { StatsModule } from './views/stats/stats.module';
import { ContactModule } from './views/contact/contact.module';

import { SharedModule } from '../shared/shared.module';
import { PagesComponent } from './pages.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { WrapperComponent } from './components/wrapper/wrapper.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';


const COMPONENTS =  [
  PagesComponent,
  NavbarComponent, WrapperComponent, FooterComponent, HeaderComponent
];

const MODULES = [
  SharedModule,
  HomeModule,
  AboutModule,
  TeamModule,
  StatsModule,
  ContactModule
 ];

@NgModule({

  imports: [
    CommonModule,
    RouterModule.forRoot(PAGES_ROUTES, { useHash: false }),
    ... MODULES
  ],

  declarations: [... COMPONENTS ],

  exports: [ ... COMPONENTS, RouterModule],
})
export class PagesModule { }
