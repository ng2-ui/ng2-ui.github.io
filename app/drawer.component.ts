import {Component} from "@angular/core";
import {ROUTER_DIRECTIVES} from "@angular/router";

@Component({
  selector: 'drawer-component',
  directives: [ROUTER_DIRECTIVES],
  template: `
    <div class="logo">
      <img src="https://avatars1.githubusercontent.com/u/20460529?v=3&s=200" />
    </div>
    <ul>
      <a routerLink="/getting-started">Getting Started</a>
      <a href="javascript:void(0)"><span>Components</span></a>
      <ul>
        <li><a routerLink="/auto-complete"><i class="material-icons">mouse</i>Auto Complete</a>
        <li><a routerLink="/datetime-picker"><i class="material-icons">mouse</i>Datetime Picker</a>
        <li><a routerLink="/google-map"><i class="material-icons">mouse</i>Google Map</a>
        <li><a routerLink="/infinite-list"><i class="material-icons">mouse</i>Infinite List</a>
        <li><a routerLink="/tab"><i class="material-icons">mouse</i>Tab</a>
        <li><a routerLink="/accordion"><i class="material-icons">mouse</i>Accordion </a>
        <li><a routerLink="/overlay"><i class="material-icons">mouse</i>Overlay</a>
        <li><a routerLink="/parallax"><i class="material-icons">mouse</i>Parallax Scroll</a>
        <li><a routerLink="/popup"><i class="material-icons">mouse</i>Popup</a>
        <li><a routerLink="/scrollable"><i class="material-icons">mouse</i>Scrollable</a>
        <li><a routerLink="/sticky"><i class="material-icons">mouse</i>Sticky Section</a>
        <li><a routerLink="/tooltip"><i class="material-icons">mouse</i>Tooltip</a>
      </ul>
      <a href="/help">Help</a>
    </ul>
  `
})
export class DrawerComponent {
}
