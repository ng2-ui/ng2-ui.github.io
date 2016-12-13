"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var GoogleMapComponent = (function () {
    function GoogleMapComponent() {
        this.positions = [];
        this.tab1 = 1;
        this.tab2 = 1;
        this.tab3 = 1;
        this.tab4 = 1;
    }
    GoogleMapComponent.prototype.ngAfterViewInit = function () {
        window.scroll(0, 0);
    };
    GoogleMapComponent.prototype.clicked = function (marker) {
        marker.map.mapComponent.openInfoWindow('iw', marker, {
            lat: marker.getPosition().lat(), lng: marker.getPosition().lng()
        });
    };
    GoogleMapComponent.prototype.showRandomMarkers = function () {
        var randomLat, randomLng;
        this.positions = [];
        for (var i = 0; i < 9; i++) {
            randomLat = Math.random() * (43.7399 - 43.7300) + 43.7300;
            randomLng = Math.random() * (-79.7600 - -79.7699) + -79.7699;
            this.positions.push([randomLat, randomLng]);
        }
    };
    GoogleMapComponent = __decorate([
        core_1.Component({
            template: "\n    <div class=\"container page-title\" xmlns=\"http://www.w3.org/1999/html\">\n      <h1>Google Map</h1>\n    </div>\n    <div class=\"container\">\n    \n      <div class=\"spacer x3\"></div>\n      <h2>Markers with *ngFor</h2>\n        <ng2-map zoom=\"13\" center=\"Brampton, Canada\" scrollwheel=\"false\">\n          <marker *ngFor=\"let pos of positions\" [position]=\"pos\"></marker>\n        </ng2-map>\n        <button (click)=\"showRandomMarkers()\">Show Random Markers</button>\n      <div>\n        <div class=\"tabs\">\n          <div class=\"tab\" (click)=\"tab3=1\" [class.selected]=\"tab3===1\">html</div>\n          <div class=\"tab\" (click)=\"tab3=2\" [class.selected]=\"tab3===2\">javascript</div>\n        </div>\n        <div class=\"tab-contents\">\n          <div *ngIf=\"tab3===1\">\n            <pre><code class=\"language-markup\"\n>&lt;ng2-map zoom=\"13\" center=\"Brampton, Canada\" scrollwheel=\"false\">\n  &lt;marker *ngFor=\"let pos of positions\" [position]=\"pos\">&lt;/marker>\n&lt;/ng2-map>\n&lt;button (click)=\"showRandomMarkers()\">Show Random Markers&lt;/button></code></pre>\n          </div>\n          <div *ngIf=\"tab3===2\">\n            <pre><code class=\"language-markup\"\n            >import &123; Component &125; from '@angular/core';\n\n@Component(&123;\n  templateUrl: 'app.html'\n&125;)\nclass AppCompoment &123;\n  public positions=[];\n  \n  showRandomMarkers() &123;\n    let randomLat: number, randomLng: number;\n\n    this.positions = [];\n    for (let i=0; i<9; i++) &123;\n      randomLat = Math.random() * (43.7399 - 43.7300) + 43.7300;\n      randomLng = Math.random() * (-79.7600 - -79.7699) + -79.7699;\n      this.positions.push([randomLat, randomLng]);\n    &125;\n  &125;\n&125;</code></pre>\n          </div>\n        </div>\n      </div>\n      \n      <div class=\"spacer x3\"></div>\n      <h2>Simple Map</h2>\n      <div>\n        <div class=\"tabs\">\n          <div class=\"tab\" (click)=\"tab4=1\" [class.selected]=\"tab4===1\">html</div>\n          <div class=\"tab\" (click)=\"tab4=2\" [class.selected]=\"tab4===2\">javascript</div>\n        </div>\n        <div class=\"tab-contents\">\n          <div *ngIf=\"tab4===1\">\n            <pre><code class=\"language-markup\"\n            >&lt;ng2-map center=\"Brampton, Canada\" scrollwheel=\"false\">&lt;/ng2-map></code></pre>\n          </div>\n          <div *ngIf=\"tab4===2\">\n            <pre><code class=\"language-markup\"\n            >import &123; Component &125; from '@angular/core';\n\n@Component(&123;\n  templateUrl: 'app.html'\n&125;)\nclass AppCompoment &123;&125;</code></pre>\n          </div>\n        </div>\n      </div>\n          \n      <div class=\"spacer x3\"></div>\n      <h2>Simple Marker</h2>\n      <div>\n        <div class=\"tabs\">\n          <div class=\"tab\" (click)=\"tab1=1\" [class.selected]=\"tab1===1\">html</div>\n          <div class=\"tab\" (click)=\"tab1=2\" [class.selected]=\"tab1===2\">javascript</div>\n        </div>\n        <div class=\"tab-contents\">\n          <div *ngIf=\"tab1===1\">\n            <pre><code class=\"language-markup\">&lt;ng2-map center=\"Brampton, Canada\" >\n&lt;marker position=\"Brampton, Canada\"\n  (markerDragstart)=\"log($event, 'dragstart')\"\n  (markerDragend)=\"log($event, 'dragend')\"\n  draggable=\"true\">&lt;/marker>\n&lt;/ng2-map></code></pre>\n          </div>\n          <div *ngIf=\"tab1===2\">\n            <pre><code class=\"language-markup\"\n            >import &123; Component &125; from '@angular/core';\n\n@Component(&123;\n  templateUrl: 'app.html'\n&125;)\nclass AppCompoment &123;\n  log(marker, str) &123;\n    console.log('event .... >', marker, str);\n  &125;\n&125;</code></pre>\n          </div>\n        </div>\n      </div>\n      \n      <div class=\"spacer x3\"></div>\n      <h2>Simple InfoWindow</h2>\n      <div>\n        <div class=\"tabs\">\n          <div class=\"tab\" (click)=\"tab2=1\" [class.selected]=\"tab2===1\">html</div>\n          <div class=\"tab\" (click)=\"tab2=2\" [class.selected]=\"tab2===2\">javascript</div>\n        </div>\n        <div class=\"tab-contents\">\n          <div id=\"html\" *ngIf=\"tab2===1\">\n<pre><code class=\"language-markup\"\n>&lt;ng2-map center=\"Brampton, Canada\">\n  &lt;marker position=\"Brampton, Canada\" draggable=\"true\" (markerClick)=\"clicked($event)\">&lt;/marker>\n  &lt;info-window id=\"iw\">\n    lat: [[lat]], lng: [[lng]]\n  &lt;/info-window>\n&lt;/ng2-map></code></pre>\n          </div>\n          <div id=\"javascript\" *ngIf=\"tab2===2\">\n<pre><code class=\"language-javascript\"\n>import &123; Component &125; from '@angular/core';\n\n@Component(&123;\n  templateUrl: 'app.html'\n&125;)\nclass AppCompoment &123;\n  clicked(marker) &123;\n    marker.map.mapComponent.openInfoWindow('iw', marker, &123;\n      lat: marker.getPosition().lat(), lng: marker.getPosition().lng()\n    &125;)\n  &125;\n&125;</code></pre>\n          </div>\n        </div>\n      </div>\n     \n    </div>"
        })
    ], GoogleMapComponent);
    return GoogleMapComponent;
}());
exports.GoogleMapComponent = GoogleMapComponent;
