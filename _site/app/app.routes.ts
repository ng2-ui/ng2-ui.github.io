import { provideRouter, RouterConfig } from '@angular/router';

import { ComponentsRoutes }            from "./ng2-ui-components/components.route";
import { GettingStartedComponent }     from "./getting-started.component";


export const routes: RouterConfig = [
  { path: 'getting-started',  component: GettingStartedComponent },
  ...ComponentsRoutes,
  { path: '',  redirectTo: '/getting-started', pathMatch: 'full'}
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];


