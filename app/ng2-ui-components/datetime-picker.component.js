"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var DatetimePickerComponent = (function () {
    function DatetimePickerComponent() {
        this.date3 = '2015-01-01T00:00:00-0400';
        this.date4 = '2015-01-01';
        this.gmtDate = '2015-01-01T00:00:00.000Z';
    }
    DatetimePickerComponent.prototype.ngAfterViewInit = function () {
        window.scroll(0, 0);
    };
    DatetimePickerComponent = __decorate([
        core_1.Component({
            styles: ["input[ng2-datetime-picker] {width: 300px; height: 24px}"],
            template: "\n    <div class=\"container page-title\">\n      <h1>Datetime Picker</h1>\n    </div>\n    \n    <div class=\"container\">\n      <p>\n        Datetime picker converts input field into datetime selector by simply adding \"ng2-datetime-picker\" as an attribute.\n      </p> \n    \n      <div class=\"spacer x2\"></div>\n      <p><b>myDate</b>: &123;&123;myDate&125;&125;</p>\n      <input [(ngModel)]=\"myDate\" ng2-datetime-picker />\n      <ng2-tab>\n        <div class=\"tabs\">\n           <div index=\"html\">HTML</div>\n           <div index=\"js\">Javascript</div>\n         </div> \n         <div class=\"tab-contents\">\n           <div contents=\"html\">\n<pre><code class=\"language-markup\"\n>&lt;input [(ngModel)]=\"myDate\" ng2-datetime-picker /&gt;</code></pre>\n           </div>\n           <div contents=\"js\">\n<pre><code class=\"language-javascript\"\n>import &123; Component &125; from '@angular/core';\n\n@Component(&123;\n  templateUr: 'app.html'\n&125;)\nexport class AppComponent&123;\n  myDate: string;\n&125;</code></pre>\n           </div>\n         </div>\n      </ng2-tab>\n        \n      <div class=\"spacer x2\"></div>\n      <p><b>date1</b>: &123;&123;date1&125;&125;</p>\n      <input [(ngModel)]=\"date1\" ng2-datetime-picker date-only=\"true\" />\n      <ng2-tab>\n        <div class=\"tabs\">\n           <div index=\"html\">HTML</div>\n           <div index=\"js\">Javascript</div>\n         </div> \n         <div class=\"tab-contents\">\n           <div contents=\"html\">\n<pre><code class=\"language-markup\"\n>&lt;input [(ngModel)]=\"date1\"  ng2-datetime-picker\n       date-only=\"true\" /&gt;</code></pre>\n           </div>\n           <div contents=\"js\">\n<pre><code class=\"language-javascript\"\n>import &123; Component &125; from '@angular/core';\n\n@Component(&123;\n  templateUr: 'app.html'\n&125;)\nexport class AppComponent&123;\n  date1 = new Date(\"2015-01-01\");\n&125;</code></pre>\n           </div>\n         </div>\n      </ng2-tab>\n        \n      <div class=\"spacer x2\"></div>\n      <p><b>date2</b>: &123;&123;date2&125;&125;</p>\n      <input [(ngModel)]=\"date2\" ng2-datetime-picker date-only=\"true\" />\n      <ng2-tab>\n        <div class=\"tabs\">\n           <div index=\"html\">HTML</div>\n           <div index=\"js\">Javascript</div>\n         </div> \n         <div class=\"tab-contents\">\n           <div contents=\"html\">\n<pre><code class=\"language-markup\"\n>&lt;input [(ngModel)]=\"date2\" ng2-datetime-picker\n       date-only=\"true\" /&gt;</code></pre>\n           </div>\n           <div contents=\"js\">\n<pre><code class=\"language-javascript\"\n>import &123; Component &125; from '@angular/core';\n\n@Component(&123;\n  templateUr: 'app.html'\n&125;)\nexport class AppComponent&123;\n  date2 = new Date(\"Thu Jan 01 2015 00:00:00 GMT-0500 (EST)\");\n&125;</code></pre>\n           </div>\n         </div>\n      </ng2-tab>\n        \n      <div class=\"spacer x2\"></div>\n      <p><b>date3</b>: &123;&123;date3&125;&125;</p>\n      <input [(ngModel)]=\"date3\" ng2-datetime-picker close-on-select=\"false\" />\n      <ng2-tab>\n        <div class=\"tabs\">\n           <div index=\"html\">HTML</div>\n           <div index=\"js\">Javascript</div>\n         </div> \n         <div class=\"tab-contents\">\n           <div contents=\"html\">\n<pre><code class=\"language-markup\"\n>&lt;input  [(ngModel)]=\"date3\" ng2-datetime-picker\n       close-on-select=\"false\" /&gt;</code></pre>\n           </div>\n           <div contents=\"js\">\n<pre><code class=\"language-javascript\"\n>import &123; Component &125; from '@angular/core';\n\n@Component(&123;\n  templateUr: 'app.html'\n&125;)\nexport class AppComponent&123;\n  date3 = '2015-01-01T00:00:00-0400';\n&125;</code></pre>\n           </div>\n         </div>\n      </ng2-tab>\n        \n      <div class=\"spacer x2\"></div>\n      <p><b>date4</b>: &123;&123;date4&125;&125;</p>\n      <input [(ngModel)]=\"date4\" ng2-datetime-picker hour=\"23\" minute='59'/>\n      <ng2-tab>\n        <div class=\"tabs\">\n           <div index=\"html\">HTML</div>\n           <div index=\"js\">Javascript</div>\n         </div> \n         <div class=\"tab-contents\">\n           <div contents=\"html\">\n<pre><code class=\"language-markup\"\n>&lt;input ng-model=\"date4\" ng2-datetime-picker\n       hour=\"23\"\n       minute='59'/&gt; </code></pre>\n           </div>\n           <div contents=\"js\">\n<pre><code class=\"language-javascript\"\n>import &123; Component &125; from '@angular/core';\n\n@Component(&123;\n  templateUr: 'app.html'\n&125;)\nexport class AppComponent&123;\n  date4 = '2015-01-01';\n&125;</code></pre>\n           </div>\n         </div>\n      </ng2-tab>\n        \n      <div class=\"spacer x2\"></div>\n      <p><b>gmtDate</b>: &123;&123;gmtDate&125;&125;</p>\n      <input [(ngModel)]=\"gmtDate\" ng2-datetime-picker />\n      <ng2-tab>\n        <div class=\"tabs\">\n           <div index=\"html\">HTML</div>\n           <div index=\"js\">Javascript</div>\n         </div> \n         <div class=\"tab-contents\">\n           <div contents=\"html\">\n<pre><code class=\"language-markup\"\n>&lt;input [(ngModel)]=\"gmtDate\" ng2-datetime-picker /&gt; </code></pre>\n           </div>\n           <div contents=\"js\">\n<pre><code class=\"language-javascript\"\n>import &123; Component &125; from '@angular/core';\n\n@Component(&123;\n  templateUr: 'app.html'\n&125;)\nexport class AppComponent&123;\n  gmtDate = '2015-01-01T00:00:00.000Z';\n&125;</code></pre>\n           </div>\n         </div>\n      </ng2-tab>\n        \n    </div>"
        })
    ], DatetimePickerComponent);
    return DatetimePickerComponent;
}());
exports.DatetimePickerComponent = DatetimePickerComponent;