import { Component } from '@angular/core'
import { ROUTER_DIRECTIVES} from '@angular/router';
import { HTTP_PROVIDERS } from "@angular/http";
import { DrawerComponent } from "./drawer.component";
import { RepoInfoComponent } from "./repo-info.component";
import { HttpCache } from './http-cache';
import { NG2_DIRECTIVES, Ng2MapComponent } from 'ng2-ui';

@Component({
  selector: 'my-app',
  templateUrl: './app.html',
  providers: [HTTP_PROVIDERS, HttpCache],
  directives: [
    ROUTER_DIRECTIVES,
    NG2_DIRECTIVES,
    DrawerComponent,
    RepoInfoComponent
  ]
})
export class AppComponent {
  constructor() {
    Ng2MapComponent.apiUrl = "https://maps.google.com/maps/api/js?key=AIzaSyCbMGRUwcqKjlYX4h4-P6t-xcDryRYLmCM";
  }
}

