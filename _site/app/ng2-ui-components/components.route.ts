import { RouterConfig }          from '@angular/router';

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

export const ComponentsRoutes: RouterConfig = [
  {path: 'auto-complete', component: AutoCompleteComponent},
  {path: 'accordion', component: AccordionComponent},
  {path: 'datetime-picker', component: DatetimePickerComponent},
  {path: 'google-map', component: GoogleMapComponent},
  {path: 'infinite-list', component: InfiniteListComponent},
  {path: 'overlay', component: OverlayComponent},
  {path: 'parallax', component: ParallaxScrollComponent},
  {path: 'popup', component: PopupComponent},
  {path: 'scrollable', component: ScrollableComponent},
  {path: 'sticky', component: StickyComponent},
  {path: 'tab', component: TabComponent},
  {path: 'tooltip', component: TooltipComponent}
];
