import { Component } from '@angular/core';

let code: any = {title:[], html: [], js: []};
code.title[0] = "Map With Dynamic Markers";
code.html[0] =`
  <ng2-map zoom="13" center="Brampton, Canada" scrollwheel="false">
    <marker *ngFor="let pos of positions" [position]="pos"></marker>
  </ng2-map>
`;
code.js[0] =`
  import { Component } from '@angular/core';

  @Component({
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
  }
`;

code.title[1] = "Simple Map";
code.html[1] =`
  <ng2-map center="Brampton, Canada" scrollwheel="false">
  </ng2-map>
`;
code.js[1] =`
  import { Component } from '@angular/core';

  @Component({
    templateUrl: 'app.html'
  })
  class AppCompoment {}
`;

code.title[2] = "Simple Marker";
code.html[2] =`
  <ng2-map center="Brampton, Canada" >
    <marker position="Brampton, Canada"
      draggable="true"></marker>
  </ng2-map>
`;
code.js[2] =`
  import { Component } from '@angular/core';

  @Component({
    templateUrl: 'app.html'
  })
  class AppCompoment {}
`;

code.title[3] = "Simple InfoWindow";
code.html[3] =`
  <ng2-map center="Brampton, Canada">
    <marker position="Brampton, Canada" 
      draggable="true" 
      (click)="clicked($event)">
    </marker>
    <info-window id="iw">
      lat: [[lat]], lng: [[lng]]
    </info-window>
  </ng2-map>
`;
code.js[3] =`
  import { Component } from '@angular/core';

  @Component({
    templateUrl: 'app.html'
  })
  class AppCompoment {
    clicked(event) {
      let marker = event.target;
      marker.ng2MapComponent.openInfoWindow('iw', marker, {
        lat: marker.getPosition().lat(), 
        lng: marker.getPosition().lng(),
      });
    }
  }
`;

@Component({
  template: `
    <div class="container page-title" xmlns="http://www.w3.org/1999/html">
      <h1>Google Map</h1>
    </div>
    <div class="container">
    
      <h2> {{code.title[0]}} </h2>
      <div class="spacer x3"></div>
      <div class="container round-border">
        <p>${code.html[0]}
        <ng2-tab>
          <div class="tabs">
             <div index="html">HTML</div>
             <div index="js">Javascript</div>
           </div> 
           <div class="tab-contents">
             <div contents="html">
               <pre><code>{{code.html[0]}}</code></pre>
             </div>
             <div contents="js">
               <pre><code>{{code.js[0]}}</code></pre>
             </div>
           </div>
        </ng2-tab>
      </div>
      <div class="spacer x4"></div>
     
      <h2> {{code.title[1]}} </h2>
      <div class="spacer x3"></div>
      <div class="container round-border">
        <p>${code.html[1]}
        <ng2-tab>
          <div class="tabs">
             <div index="html">HTML</div>
             <div index="js">Javascript</div>
           </div> 
           <div class="tab-contents">
             <div contents="html">
               <pre><code>{{code.html[1]}}</code></pre>
             </div>
             <div contents="js">
               <pre><code>{{code.js[1]}}</code></pre>
             </div>
           </div>
        </ng2-tab>
      </div>
      <div class="spacer x4"></div>
     
      <h2> {{code.title[2]}} </h2>
      <div class="spacer x3"></div>
      <div class="container round-border">
        <p>${code.html[2]}
        <ng2-tab>
          <div class="tabs">
             <div index="html">HTML</div>
             <div index="js">Javascript</div>
           </div> 
           <div class="tab-contents">
             <div contents="html">
               <pre><code>{{code.html[2]}}</code></pre>
             </div>
             <div contents="js">
               <pre><code>{{code.js[2]}}</code></pre>
             </div>
           </div>
        </ng2-tab>
      </div>
      <div class="spacer x4"></div>
     
      <h2> {{code.title[3]}} </h2>
      <div class="spacer x3"></div>
      <div class="container round-border">
        <p>${code.html[3]}
        <ng2-tab>
          <div class="tabs">
             <div index="html">HTML</div>
             <div index="js">Javascript</div>
           </div> 
           <div class="tab-contents">
             <div contents="html">
               <pre><code>{{code.html[3]}}</code></pre>
             </div>
             <div contents="js">
               <pre><code>{{code.js[3]}}</code></pre>
             </div>
           </div>
        </ng2-tab>
      </div>
      <div class="spacer x4"></div>
    </div>`
})
export class GoogleMapComponent {
  positions: any[] =[];
  code: any = code;

  ngAfterViewInit(): void {
    window.scroll(0,0);
  }

  clicked(event) {
    let marker = event.target;
    marker.ng2MapComponent.openInfoWindow('iw', marker, {
      lat: marker.getPosition().lat(),
      lng: marker.getPosition().lng(),
    });
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
