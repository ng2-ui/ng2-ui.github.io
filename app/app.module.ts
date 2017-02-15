import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from "@angular/forms";
import { HttpModule } from "@angular/http";
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

import { AppComponent }   from './app.component';
import { DrawerComponent } from "./drawer.component";
import { RepoInfoComponent } from "./repo-info.component";
import { HttpCache } from "./http-cache";
import { Ng2Storage } from "./ng2-storage";
import { APP_ROUTER_PROVIDERS } from './app.routes';
import {GettingStartedComponent} from "./getting-started.component";
import {AccordionComponent} from "./ng2-ui-components/accordion.component";
import {DatetimePickerComponent} from "./ng2-ui-components/datetime-picker.component";
import {GoogleMapComponent} from "./ng2-ui-components/google-map.component";
import {InfiniteListComponent} from "./ng2-ui-components/infinite-list.component";
import {MenuComponent} from "./ng2-ui-components/menu.component";
import {OverlayComponent} from "./ng2-ui-components/overlay.component";
import {ParallaxScrollComponent} from "./ng2-ui-components/parallax-scroll.component";
import {PopupComponent} from "./ng2-ui-components/popup.component";
import {ScrollableComponent} from "./ng2-ui-components/scrollable.component";
import {StickyComponent} from "./ng2-ui-components/sticky.component";
import {TabComponent} from "./ng2-ui-components/tab.component";
import {TooltipComponent} from "./ng2-ui-components/tooltip.component";
import {AutoCompleteComponent} from "./ng2-ui-components/auto-complete.component";
import {SortableComponent} from "./ng2-ui-components/sortable.component";
import {Ng2UIModule, Ng2MapModule} from 'ng2-ui';
import {Ng2UtilsModule} from 'ng2-utils';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    APP_ROUTER_PROVIDERS,
    Ng2UIModule,
    Ng2MapModule['forRoot']({
      apiUrl: 'https://maps.google.com/maps/api/js?key=AIzaSyCbMGRUwcqKjlYX4h4-P6t-xcDryRYLmCM' +
      '&libraries=visualization,places,drawing',
    }),
    Ng2UtilsModule
  ],
  declarations: [
    AppComponent,
    DrawerComponent,
    RepoInfoComponent,
    GettingStartedComponent,
    AccordionComponent,
    AutoCompleteComponent,
    DatetimePickerComponent,
    GoogleMapComponent,
    InfiniteListComponent,
    MenuComponent,
    OverlayComponent,
    ParallaxScrollComponent,
    PopupComponent,
    ScrollableComponent,
    StickyComponent,
    TabComponent,
    TooltipComponent,
    SortableComponent
  ],
  providers: [
    HttpCache,
    Ng2Storage,
    {provide: LocationStrategy, useClass: HashLocationStrategy}
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
