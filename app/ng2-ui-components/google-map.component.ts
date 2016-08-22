import { Component } from '@angular/core';

@Component({
  template: `
    <div class="container page-title" xmlns="http://www.w3.org/1999/html">
      <h1>Google Map</h1>
    </div>
    <div class="container">
    
      <div class="spacer x3"></div>
      <h2>Markers with *ngFor</h2>
        <ng2-map zoom="13" center="Brampton, Canada" scrollwheel="false">
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
>&lt;ng2-map zoom="13" center="Brampton, Canada" scrollwheel="false">
  &lt;marker *ngFor="let pos of positions" [position]="pos">&lt;/marker>
&lt;/ng2-map>
&lt;button (click)="showRandomMarkers()">Show Random Markers&lt;/button></code></pre>
          </div>
          <div *ngIf="tab3===2">
            <pre><code class="language-markup"
            >import &123; Component &125; from '@angular/core';

@Component(&123;
  templateUrl: 'app.html'
&125;)
class AppCompoment &123;
  public positions=[];
  
  showRandomMarkers() &123;
    let randomLat: number, randomLng: number;

    this.positions = [];
    for (let i=0; i<9; i++) &123;
      randomLat = Math.random() * (43.7399 - 43.7300) + 43.7300;
      randomLng = Math.random() * (-79.7600 - -79.7699) + -79.7699;
      this.positions.push([randomLat, randomLng]);
    &125;
  &125;
&125;</code></pre>
          </div>
        </div>
      </div>
      
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
            >import &123; Component &125; from '@angular/core';

@Component(&123;
  templateUrl: 'app.html'
&125;)
class AppCompoment &123;&125;</code></pre>
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
            >import &123; Component &125; from '@angular/core';

@Component(&123;
  templateUrl: 'app.html'
&125;)
class AppCompoment &123;
  log(marker, str) &123;
    console.log('event .... >', marker, str);
  &125;
&125;</code></pre>
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
>import &123; Component &125; from '@angular/core';

@Component(&123;
  templateUrl: 'app.html'
&125;)
class AppCompoment &123;
  clicked(marker) &123;
    marker.map.mapComponent.openInfoWindow('iw', marker, &123;
      lat: marker.getPosition().lat(), lng: marker.getPosition().lng()
    &125;)
  &125;
&125;</code></pre>
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
