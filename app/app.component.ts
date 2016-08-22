import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { Router, NavigationEnd }  from '@angular/router';
import { Ng2MapComponent } from "ng2-ui";

@Component({
  selector: 'my-app',
  templateUrl: './app.html'
})
export class AppComponent {
  private currentRoute:string;

  constructor(
    private router: Router,
    private location: Location
  ) {
    Ng2MapComponent['apiUrl'] = "https://maps.google.com/maps/api/js?key=AIzaSyCbMGRUwcqKjlYX4h4-P6t-xcDryRYLmCM";
    router.events.subscribe( event => {
      this.sendToGoogleAnalytics(event)
    });
  }

  sendToGoogleAnalytics(event: any): any {
    if (event instanceof NavigationEnd) {
      // When the route is '/', location.path actually returns ''.
      let newRoute = this.location.path() || '/';
      if (this.currentRoute != newRoute) {
        //console.log('>>>>>>>>>>>>>>>>>>>> sending google analytics', 'send', 'pageview', newRoute);
        window['ga']('send', 'pageview', newRoute);
        this.currentRoute = newRoute;
      }
    }
  }
}
