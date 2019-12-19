import { PagesComponent } from '../../pages.component';
///import { AuthenticationGuard } from '../../common/guards/authentication.guard';

import { HomeComponent } from './home.component';


export const HOME_ROUTES = [

  {
    path: 'pages/home',
    component:  PagesComponent,
    children: [
      { path: '', component: HomeComponent },
    ]
  },

];
