import { NgModule } from '@angular/core';
import { NgxsModule } from '@ngxs/store';
import { NgxsRouterPluginModule } from '@ngxs/router-plugin';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';




import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { PagesModule } from './pages/pages.module';
import { AuthModule } from './auth/auth.module';

import { ChartModule } from 'angular-highcharts';

 


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule ,
    NgxsModule.forRoot([]),
    NgxsRouterPluginModule.forRoot(),
    SharedModule,
    CoreModule,
    PagesModule,
    AuthModule,
    ChartModule

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
