import {Component} from "@angular/core";

@Component({
  selector: 'drawer-component',
  template: `
    <ul class="menu">
      <li class="menu-item" routerLinkActive="selected"><a routerLink="/getting-started">Getting Started</a>
      <li class="menu-item components">
        <div class="pb-3">Components</div>
        <ul class="menu ">
          <li class="menu-item" routerLinkActive="selected"><a routerLink="/auto-complete">Auto Complete</a>
          <li class="menu-item" routerLinkActive="selected"><a routerLink="/datetime-picker">Datetime Picker</a>
          <li class="menu-item" routerLinkActive="selected"><a routerLink="/google-map">Google Map</a>
          <li class="menu-item" routerLinkActive="selected"><a routerLink="/infinite-list">Infinite List</a>
          <li class="menu-item" routerLinkActive="selected"><a routerLink="/tab">Tab</a>
          <li class="menu-item" routerLinkActive="selected"><a routerLink="/accordion">Accordion </a>
          <li class="menu-item" routerLinkActive="selected"><a routerLink="/tooltip">Tooltip</a>
          <li class="menu-item" routerLinkActive="selected"><a routerLink="/menu">Menu</a>
          <li class="menu-item" routerLinkActive="selected"><a routerLink="/parallax">Parallax Scroll</a>
          <li class="menu-item" routerLinkActive="selected"><a routerLink="/overlay">Overlay</a>
          <li class="menu-item" routerLinkActive="selected"><a routerLink="/popup">Popup</a>
          <li class="menu-item" routerLinkActive="selected"><a routerLink="/scrollable">Scrollable</a>
          <li class="menu-item" routerLinkActive="selected"><a routerLink="/sortable">Sortable</a>
          <li class="menu-item" routerLinkActive="selected"><a routerLink="/sticky">Sticky Section</a>
        </ul>
      <li class="menu-item"><a href="https://github.com/ng2-ui/ngui/issues">Help</a>
    </ul>
  `
})
export class DrawerComponent {
}
