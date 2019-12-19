import { PagesComponent } from '../../pages.component';
///import { AuthenticationGuard } from '../../common/guards/authentication.guard';

import { TeamComponent } from './team.component';


export const TEAM_ROUTES = [

  {
    path: 'pages/team',
    component:  PagesComponent,
    children: [
      { path: '', component: TeamComponent },
    ]
  },

];
