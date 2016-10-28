"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var common_1 = require('@angular/common');
var app_component_1 = require('./app.component');
var drawer_component_1 = require("./drawer.component");
var repo_info_component_1 = require("./repo-info.component");
var http_cache_1 = require("./http-cache");
var ng2_storage_1 = require("./ng2-storage");
var app_routes_1 = require('./app.routes');
var getting_started_component_1 = require("./getting-started.component");
var accordion_component_1 = require("./ng2-ui-components/accordion.component");
var datetime_picker_component_1 = require("./ng2-ui-components/datetime-picker.component");
var google_map_component_1 = require("./ng2-ui-components/google-map.component");
var infinite_list_component_1 = require("./ng2-ui-components/infinite-list.component");
var menu_component_1 = require("./ng2-ui-components/menu.component");
var overlay_component_1 = require("./ng2-ui-components/overlay.component");
var parallax_scroll_component_1 = require("./ng2-ui-components/parallax-scroll.component");
var popup_component_1 = require("./ng2-ui-components/popup.component");
var scrollable_component_1 = require("./ng2-ui-components/scrollable.component");
var sticky_component_1 = require("./ng2-ui-components/sticky.component");
var tab_component_1 = require("./ng2-ui-components/tab.component");
var tooltip_component_1 = require("./ng2-ui-components/tooltip.component");
var auto_complete_component_1 = require("./ng2-ui-components/auto-complete.component");
var sortable_component_1 = require("./ng2-ui-components/sortable.component");
var ng2_ui_1 = require('ng2-ui');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                ng2_ui_1.Ng2UIModule,
                app_routes_1.APP_ROUTER_PROVIDERS
            ],
            declarations: [
                app_component_1.AppComponent,
                drawer_component_1.DrawerComponent,
                repo_info_component_1.RepoInfoComponent,
                getting_started_component_1.GettingStartedComponent,
                accordion_component_1.AccordionComponent,
                auto_complete_component_1.AutoCompleteComponent,
                datetime_picker_component_1.DatetimePickerComponent,
                google_map_component_1.GoogleMapComponent,
                infinite_list_component_1.InfiniteListComponent,
                menu_component_1.MenuComponent,
                overlay_component_1.OverlayComponent,
                parallax_scroll_component_1.ParallaxScrollComponent,
                popup_component_1.PopupComponent,
                scrollable_component_1.ScrollableComponent,
                sticky_component_1.StickyComponent,
                tab_component_1.TabComponent,
                tooltip_component_1.TooltipComponent,
                sortable_component_1.SortableComponent
            ],
            providers: [
                http_cache_1.HttpCache,
                ng2_storage_1.Ng2Storage,
                { provide: common_1.LocationStrategy, useClass: common_1.HashLocationStrategy }
            ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
