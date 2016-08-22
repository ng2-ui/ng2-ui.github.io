import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { ComponentsRoutes }            from "./ng2-ui-components/components.route";
import { GettingStartedComponent }     from "./getting-started.component";


export const routes: Routes = [
  { path: 'getting-started', component: GettingStartedComponent},
  ...ComponentsRoutes,
  { path: '',  redirectTo: '/getting-started', pathMatch: 'full'}
];

export const APP_ROUTER_PROVIDERS: ModuleWithProviders = RouterModule.forRoot(routes);


