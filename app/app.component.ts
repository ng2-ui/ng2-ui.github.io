import { Component } from '@angular/core'
import { ROUTER_DIRECTIVES} from '@angular/router';
import { HTTP_PROVIDERS } from "@angular/http";
import { DrawerComponent } from "./drawer.component";
import { RepoInfoComponent } from "./repo-info.component";
import { HttpCache } from './http-cache';

@Component({
  selector: 'my-app',
  templateUrl: './app.html',
  providers: [HTTP_PROVIDERS, HttpCache],
  directives: [
    ROUTER_DIRECTIVES,
    DrawerComponent,
    RepoInfoComponent
  ]
})
export class AppComponent {
}

