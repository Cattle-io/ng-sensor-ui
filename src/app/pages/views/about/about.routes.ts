import { PagesComponent } from '../../pages.component';
/// import { AuthenticationGuard } from '../../common/guards/authentication.guard';

import { AboutComponent } from './about.component';


export const ABOUT_ROUTES = [

  {
    path: 'pages/about',
    component:  PagesComponent,
    children: [
      { path: '', component: AboutComponent },
    ]
  },

];
