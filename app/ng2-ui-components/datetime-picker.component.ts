import { Component } from '@angular/core';
import { NG2_DIRECTIVES } from 'ng2-ui';

@Component({
  directives: [ NG2_DIRECTIVES ],
  styles: [`input[ng2-datetime-picker] {width: 300px; height: 24px}`],
  template: `
    <div class="container page-title">
      <h1>Datetime Picker</h1>
    </div>
    
    <div class="container">
      <p>
        Datetime picker converts input field into datetime selector by simply adding "ng2-datetime-picker" as an attribute.
      </p> 
    
      <div class="spacer x2"></div>
      <p><b>myDate</b>: {{myDate}}</p>
      <input [(ngModel)]="myDate" ng2-datetime-picker />
<pre><code class="language-markup"
>&lt;input [(ngModel)]="myDate" ng2-datetime-picker /&gt;</code></pre>
        
      <div class="spacer x2"></div>
      <p><b>date1</b>: {{date1}}</p>
      <input [(ngModel)]="date1" ng2-datetime-picker date-only="true" />
<pre><code class="language-markup"
>&lt;input [(ngModel)]="date1" ng2-datetime-picker
       date-only="true" /&gt;</code></pre>
        
      <div class="spacer x2"></div>
      <p><b>date2</b>: {{date2}}</p>
      <input [(ngModel)]="date2" ng2-datetime-picker date-only="true" />
<pre><code class="language-markup"
>&lt;input [(ngModel)]="date2" ng2-datetime-picker 
       date-only="true" /&gt;</code></pre>
        
      <div class="spacer x2"></div>
      <p><b>date3</b>: {{date3}}</p>
      <input [(ngModel)]="date3" ng2-datetime-picker close-on-select="false" />
<pre><code class="language-markup"
> &lt;input  [(ngModel)]="date3" ng2-datetime-picker
       close-on-select="false" /&gt;</code></pre>
        
      <div class="spacer x2"></div>
      <p><b>date4</b>: {{date4}}</p>
      <input [(ngModel)]="date4" ng2-datetime-picker hour="23" minute='59'/>
<pre><code class="language-markup"
>&lt;input ng-model="date4" ng2-datetime-picker
       hour="23"
       minute='59'/&gt;
    </code></pre>
        
      <div class="spacer x2"></div>
      <p><b>gmtDate</b>: {{gmtDate}}</p>
      <input [(ngModel)]="gmtDate" ng2-datetime-picker />
<pre><code class="language-markup"
>&lt;input [(ngModel)]="gmtDate" ng2-datetime-picker /&gt; </code></pre>
        
    </div>`
})
export class DatetimePickerComponent {
  date1 = new Date("2015-01-01");
  date2 = new Date("Thu Jan 01 2015 00:00:00 GMT-0500 (EST)");
  date3 = '2015-01-01T00:00:00-0400';
  date4 = '2015-01-01';
  gmtDate = '2015-01-01T00:00:00.000Z';

  ngAfterViewInit(): void {
    window.scroll(0,0);
  }
}