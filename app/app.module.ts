import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from "@angular/forms";
import { HttpModule } from "@angular/http";
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

import { AppComponent }   from './app.component';
import { DrawerComponent } from "./drawer.component";
import { RepoInfoComponent } from "./repo-info.component";
import { HttpCache } from "./http-cache";
import { APP_ROUTER_PROVIDERS } from './app.routes';
import {GettingStartedComponent} from "./getting-started.component";
import {AccordionComponent} from "./components/accordion.component";
import {DatetimePickerComponent} from "./components/datetime-picker.component";
import {GoogleMapComponent} from "./components/google-map.component";
import {InfiniteListComponent} from "./components/infinite-list.component";
import {MenuComponent} from "./components/menu.component";
import {OverlayComponent} from "./components/overlay.component";
import {ParallaxScrollComponent} from "./components/parallax-scroll.component";
import {PopupComponent} from "./components/popup.component";
import {ScrollableComponent} from "./components/scrollable.component";
import {StickyComponent} from "./components/sticky.component";
import {TabComponent} from "./components/tab.component";
import {TooltipComponent} from "./components/tooltip.component";
import {AutoCompleteComponent} from "./components/auto-complete.component";
import {SortableComponent} from "./components/sortable.component";
import {
  NguiModule,
  NguiMapModule,
  Storage
} from '@ngui/ngui';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    APP_ROUTER_PROVIDERS,
    NguiModule,
    NguiMapModule['forRoot']({
      apiUrl: 'https://maps.google.com/maps/api/js?key=AIzaSyCbMGRUwcqKjlYX4h4-P6t-xcDryRYLmCM' +
      '&libraries=visualization,places,drawing',
    })
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
    Storage,
    {provide: LocationStrategy, useClass: HashLocationStrategy}
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
