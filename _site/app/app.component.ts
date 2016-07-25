import { Component } from '@angular/core'
import { ROUTER_DIRECTIVES, Router, NavigationStart} from '@angular/router';
import {HTTP_PROVIDERS} from "@angular/http";
import {DrawerComponent} from "./drawer.component";

@Component({
  selector: 'my-app',
  templateUrl: './app.html',
  providers: [HTTP_PROVIDERS],
  directives: [ROUTER_DIRECTIVES, DrawerComponent]
})
export class AppComponent {
  constructor(private router: Router) {
    router.events.subscribe(event => {
      if(event instanceof NavigationStart) { //..End, ..Cancel, ..Error, etc
        console.log('event', event);
      }
    });
  }
}

