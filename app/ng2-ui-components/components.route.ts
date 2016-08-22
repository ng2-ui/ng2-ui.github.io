import { Routes } from '@angular/router';

import {AccordionComponent} from "./accordion.component";
import {DatetimePickerComponent} from "./datetime-picker.component";
import {GoogleMapComponent} from "./google-map.component";
import {InfiniteListComponent} from "./infinite-list.component";
import {OverlayComponent} from "./overlay.component";
import {ParallaxScrollComponent} from "./parallax-scroll.component";
import {PopupComponent} from "./popup.component";
import {ScrollableComponent} from "./scrollable.component";
import {StickyComponent} from "./sticky.component";
import {TabComponent} from "./tab.component";
import {TooltipComponent} from "./tooltip.component";
import {AutoCompleteComponent} from "./auto-complete.component";
import {MenuComponent} from "./menu.component";

export const ComponentsRoutes: Routes = [
  {path: 'auto-complete', component: AutoCompleteComponent},
  {path: 'datetime-picker', component: DatetimePickerComponent},
  {path: 'google-map', component: GoogleMapComponent},
  {path: 'infinite-list', component: InfiniteListComponent},
  {path: 'tab', component: TabComponent},
  {path: 'accordion', component: AccordionComponent},
  {path: 'tooltip', component: TooltipComponent},
  {path: 'menu', component: MenuComponent},
  {path: 'overlay', component: OverlayComponent},
  {path: 'parallax', component: ParallaxScrollComponent},
  {path: 'popup', component: PopupComponent},
  {path: 'scrollable', component: ScrollableComponent},
  {path: 'sticky', component: StickyComponent} 
];
