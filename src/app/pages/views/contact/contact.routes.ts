import { PagesComponent } from '../../pages.component';
///import { AuthenticationGuard } from '../../common/guards/authentication.guard';

import { ContactComponent } from './contact.component';


export const CONTACT_ROUTES = [

  {
    path: 'pages/contact',
    component:  PagesComponent,
    children: [
      { path: '', component: ContactComponent },
    ]
  },

];

