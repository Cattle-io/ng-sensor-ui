import { PagesComponent } from '../../pages.component';
/// import { AuthenticationGuard } from '../../common/guards/authentication.guard';

import { StatsComponent } from './stats.component';


export const STATS_ROUTES = [

  {
    path: 'pages/stats',
    component:  PagesComponent,
    children: [
      { path: '', component: StatsComponent },
    ]
  },

];
