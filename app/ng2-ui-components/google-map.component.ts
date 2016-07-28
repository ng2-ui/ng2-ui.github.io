import { Component } from '@angular/core';
import { NG2_DIRECTIVES } from 'ng2-ui';

@Component({
  directives: [ NG2_DIRECTIVES ],
  template: `
    <div class="container bg-sky title">
      <h1>Google Map</h1>
    </div>
    <div class="container">
    
      <h4>Simple Map</h4>
      Feature is ready, Coming Soon with an example.
      
      <h4>Simple Marker</h4>
      Feature is ready, Coming Soon with an example.
      
      <h4>Simple InfoWindow</h4>
      <ng2-map center="Brampton, Canada" scrollwheel="false">
        <marker position="Brampton, Canada" draggable="true" (markerClick)="clicked($event)"></marker>
        <info-window id="iw">
          lat: [[lat]], lng: [[lng]]
        </info-window>
      </ng2-map>
      Please click a marker to see info window
      <div class="spacer x3"></div>
      <div>
        <div class="tabs">
          <div class="tab" (click)="tab=1" [class.selected]="tab===1">html</div>
          <div class="tab" (click)="tab=2" [class.selected]="tab===2">javascript</div>
        </div>
        <div class="tab-contents">
          <div id="html" *ngIf="tab===1">
<pre><code class="language-markup"
>&lt;ng2-map center="Brampton, Canada">
  &lt;marker position="Brampton, Canada" draggable="true" (markerClick)="clicked($event)">&lt;/marker>
  &lt;info-window id="iw">
    lat: [[lat]], lng: [[lng]]
  &lt;/info-window>
&lt;/ng2-map></code></pre>
          </div>
          <div id="javascript" *ngIf="tab===2">
<pre><code class="language-javascript"
>import { Component } from '@angular/core';
import { NG2_DIRECTIVES } from 'ng2-ui';

@Component({
  directives: [ NG2_DIRECTIVES ],
  templateUrl: 'app.html'
})
class AppCompoment {
  clicked(marker) {
    marker.map.mapComponent.openInfoWindow('iw', marker, {
      lat: marker.getPosition().lat(), lng: marker.getPosition().lng()
    })
  }
}</code></pre>
          </div>
        </div>
      </div>
      
      <h4>Markers with *ngFor</h4>
      Feature is ready, Coming Soon with an example.
    </div>`
})
export class GoogleMapComponent {
  tab: number = 1;
  ngAfterViewInit(): void {
    window.scroll(0,0);
  }
  clicked(marker) {
    marker.map.mapComponent.openInfoWindow('iw', marker, {
      lat: marker.getPosition().lat(), lng: marker.getPosition().lng()
    })
  }
}
