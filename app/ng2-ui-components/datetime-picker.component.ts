import { Component } from '@angular/core';

@Component({
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
      <p><b>myDate</b>: &123;&123;myDate&125;&125;</p>
      <input [(ngModel)]="myDate" ng2-datetime-picker />
      <ng2-tab>
        <div class="tabs">
           <div index="html">HTML</div>
           <div index="js">Javascript</div>
         </div> 
         <div class="tab-contents">
           <div contents="html">
<pre><code class="language-markup"
>&lt;input [(ngModel)]="myDate" ng2-datetime-picker /&gt;</code></pre>
           </div>
           <div contents="js">
<pre><code class="language-javascript"
>import &123; Component &125; from '@angular/core';

@Component(&123;
  templateUr: 'app.html'
&125;)
export class AppComponent&123;
  myDate: string;
&125;</code></pre>
           </div>
         </div>
      </ng2-tab>
        
      <div class="spacer x2"></div>
      <p><b>date1</b>: &123;&123;date1&125;&125;</p>
      <input [(ngModel)]="date1" ng2-datetime-picker date-only="true" />
      <ng2-tab>
        <div class="tabs">
           <div index="html">HTML</div>
           <div index="js">Javascript</div>
         </div> 
         <div class="tab-contents">
           <div contents="html">
<pre><code class="language-markup"
>&lt;input [(ngModel)]="date1" ng2-datetime-picker
       date-only="true" /&gt;</code></pre>
           </div>
           <div contents="js">
<pre><code class="language-javascript"
>import &123; Component &125; from '@angular/core';

@Component(&123;
  templateUr: 'app.html'
&125;)
export class AppComponent&123;
  date1 = new Date("2015-01-01");
&125;</code></pre>
           </div>
         </div>
      </ng2-tab>
        
      <div class="spacer x2"></div>
      <p><b>date2</b>: &123;&123;date2&125;&125;</p>
      <input [(ngModel)]="date2" ng2-datetime-picker date-only="true" />
      <ng2-tab>
        <div class="tabs">
           <div index="html">HTML</div>
           <div index="js">Javascript</div>
         </div> 
         <div class="tab-contents">
           <div contents="html">
<pre><code class="language-markup"
>&lt;input [(ngModel)]="date2" ng2-datetime-picker
       date-only="true" /&gt;</code></pre>
           </div>
           <div contents="js">
<pre><code class="language-javascript"
>import &123; Component &125; from '@angular/core';

@Component(&123;
  templateUr: 'app.html'
&125;)
export class AppComponent&123;
  date2 = new Date("Thu Jan 01 2015 00:00:00 GMT-0500 (EST)");
&125;</code></pre>
           </div>
         </div>
      </ng2-tab>
        
      <div class="spacer x2"></div>
      <p><b>date3</b>: &123;&123;date3&125;&125;</p>
      <input [(ngModel)]="date3" ng2-datetime-picker close-on-select="false" />
      <ng2-tab>
        <div class="tabs">
           <div index="html">HTML</div>
           <div index="js">Javascript</div>
         </div> 
         <div class="tab-contents">
           <div contents="html">
<pre><code class="language-markup"
>&lt;input  [(ngModel)]="date3" ng2-datetime-picker
       close-on-select="false" /&gt;</code></pre>
           </div>
           <div contents="js">
<pre><code class="language-javascript"
>import &123; Component &125; from '@angular/core';

@Component(&123;
  templateUr: 'app.html'
&125;)
export class AppComponent&123;
  date3 = '2015-01-01T00:00:00-0400';
&125;</code></pre>
           </div>
         </div>
      </ng2-tab>
        
      <div class="spacer x2"></div>
      <p><b>date4</b>: &123;&123;date4&125;&125;</p>
      <input [(ngModel)]="date4" ng2-datetime-picker hour="23" minute='59'/>
      <ng2-tab>
        <div class="tabs">
           <div index="html">HTML</div>
           <div index="js">Javascript</div>
         </div> 
         <div class="tab-contents">
           <div contents="html">
<pre><code class="language-markup"
>&lt;input ng-model="date4" ng2-datetime-picker
       hour="23"
       minute='59'/&gt; </code></pre>
           </div>
           <div contents="js">
<pre><code class="language-javascript"
>import &123; Component &125; from '@angular/core';

@Component(&123;
  templateUr: 'app.html'
&125;)
export class AppComponent&123;
  date4 = '2015-01-01';
&125;</code></pre>
           </div>
         </div>
      </ng2-tab>
        
      <div class="spacer x2"></div>
      <p><b>gmtDate</b>: &123;&123;gmtDate&125;&125;</p>
      <input [(ngModel)]="gmtDate" ng2-datetime-picker />
      <ng2-tab>
        <div class="tabs">
           <div index="html">HTML</div>
           <div index="js">Javascript</div>
         </div> 
         <div class="tab-contents">
           <div contents="html">
<pre><code class="language-markup"
>&lt;input [(ngModel)]="gmtDate" ng2-datetime-picker /&gt; </code></pre>
           </div>
           <div contents="js">
<pre><code class="language-javascript"
>import &123; Component &125; from '@angular/core';

@Component(&123;
  templateUr: 'app.html'
&125;)
export class AppComponent&123;
  gmtDate = '2015-01-01T00:00:00.000Z';
&125;</code></pre>
           </div>
         </div>
      </ng2-tab>
        
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
