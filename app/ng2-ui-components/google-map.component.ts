import { Component } from '@angular/core';
import { NG2_DIRECTIVES } from 'ng2-ui';

@Component({
  directives: [ NG2_DIRECTIVES ],
  template: `
    <div class="container bg-sky title" xmlns="http://www.w3.org/1999/html">
      <h1>Google Map</h1>
    </div>
    <div class="container">
    
      <div class="spacer x3"></div>
      <h2>Simple Map</h2>
      <div>
        <div class="tabs">
          <div class="tab" (click)="tab4=1" [class.selected]="tab4===1">html</div>
          <div class="tab" (click)="tab4=2" [class.selected]="tab4===2">javascript</div>
        </div>
        <div class="tab-contents">
          <div *ngIf="tab4===1">
            <pre><code class="language-markup"
            >&lt;ng2-map center="Brampton, Canada" scrollwheel="false">&lt;/ng2-map></code></pre>
          </div>
          <div *ngIf="tab4===2">
            <pre><code class="language-markup"
            >import { Component } from '@angular/core';
import { NG2_DIRECTIVES } from 'ng2-ui';

@Component({
  directives: [ NG2_DIRECTIVES ],
  templateUrl: 'app.html'
})
class AppCompoment {}</code></pre>
          </div>
        </div>
      </div>
          
      <div class="spacer x3"></div>
      <h2>Simple Marker</h2>
      <div>
        <div class="tabs">
          <div class="tab" (click)="tab1=1" [class.selected]="tab1===1">html</div>
          <div class="tab" (click)="tab1=2" [class.selected]="tab1===2">javascript</div>
        </div>
        <div class="tab-contents">
          <div *ngIf="tab1===1">
            <pre><code class="language-markup">&lt;ng2-map center="Brampton, Canada" >
&lt;marker position="Brampton, Canada"
  (markerDragstart)="log($event, 'dragstart')"
  (markerDragend)="log($event, 'dragend')"
  draggable="true">&lt;/marker>
&lt;/ng2-map></code></pre>
          </div>
          <div *ngIf="tab1===2">
            <pre><code class="language-markup"
            >import { Component } from '@angular/core';
import { NG2_DIRECTIVES } from 'ng2-ui';

@Component({
  directives: [ NG2_DIRECTIVES ],
  templateUrl: 'app.html'
})
class AppCompoment {
  log(marker, str) {
    console.log('event .... >', marker, str);
  }
}</code></pre>
          </div>
        </div>
      </div>
      
      <div class="spacer x3"></div>
      <h2>Simple InfoWindow</h2>
      <div>
        <div class="tabs">
          <div class="tab" (click)="tab2=1" [class.selected]="tab2===1">html</div>
          <div class="tab" (click)="tab2=2" [class.selected]="tab2===2">javascript</div>
        </div>
        <div class="tab-contents">
          <div id="html" *ngIf="tab2===1">
<pre><code class="language-markup"
>&lt;ng2-map center="Brampton, Canada">
  &lt;marker position="Brampton, Canada" draggable="true" (markerClick)="clicked($event)">&lt;/marker>
  &lt;info-window id="iw">
    lat: [[lat]], lng: [[lng]]
  &lt;/info-window>
&lt;/ng2-map></code></pre>
          </div>
          <div id="javascript" *ngIf="tab2===2">
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
     
      <div class="spacer x3"></div>
      <h2>Markers with *ngFor</h2>
        <ng2-map zoom="13" center="Brampton, Canada">
          <marker *ngFor="let pos of positions" [position]="pos"></marker>
        </ng2-map>
        <button (click)="showRandomMarkers()">Show Random Markers</button>
      <div>
        <div class="tabs">
          <div class="tab" (click)="tab3=1" [class.selected]="tab3===1">html</div>
          <div class="tab" (click)="tab3=2" [class.selected]="tab3===2">javascript</div>
        </div>
        <div class="tab-contents">
          <div *ngIf="tab3===1">
            <pre><code class="language-markup"
>&lt;ng2-map zoom="13" center="Brampton, Canada">
  &lt;marker *ngFor="let pos of positions" [position]="pos">&lt;/marker>
&lt;/ng2-map>
&lt;button (click)="showRandomMarkers()">Show Random Markers&lt;/button></code></pre>
          </div>
          <div *ngIf="tab3===2">
            <pre><code class="language-markup"
            >import { Component } from '@angular/core';
import { NG2_DIRECTIVES } from 'ng2-ui';

@Component({
  directives: [ NG2_DIRECTIVES ],
  templateUrl: 'app.html'
})
class AppCompoment {
  public positions=[];
  
  showRandomMarkers() {
    let randomLat: number, randomLng: number;

    this.positions = [];
    for (let i=0; i<9; i++) {
      randomLat = Math.random() * (43.7399 - 43.7300) + 43.7300;
      randomLng = Math.random() * (-79.7600 - -79.7699) + -79.7699;
      this.positions.push([randomLat, randomLng]);
    }
  }
}</code></pre>
          </div>
        </div>
      </div>
    </div>`
})
export class GoogleMapComponent {
  positions: any[] =[];
  tab1: number = 1;
  tab2: number = 1;
  tab3: number = 1;
  tab4: number = 1;
  ngAfterViewInit(): void {
    window.scroll(0,0);
  }
  clicked(marker: any): void {
    marker.map.mapComponent.openInfoWindow('iw', marker, {
      lat: marker.getPosition().lat(), lng: marker.getPosition().lng()
    })
  }

  showRandomMarkers() {
    let randomLat: number, randomLng: number;

    this.positions = [];
    for (let i=0; i<9; i++) {
      randomLat = Math.random() * (43.7399 - 43.7300) + 43.7300;
      randomLng = Math.random() * (-79.7600 - -79.7699) + -79.7699;
      this.positions.push([randomLat, randomLng]);
    }
  }
}
