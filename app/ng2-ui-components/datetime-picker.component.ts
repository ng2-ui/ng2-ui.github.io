import { Component } from '@angular/core';

let code: any = {title:[], html: [], js: []};
code.title[0] = "Date/Time Both"
code.html[0] =`
  <input
    [(ngModel)]="date1" 
    ng2-datetime-picker />
  date2: {{date2}}
`;
code.js[0] =`
  import { Component } from '@angular/core';
  @Component({
    selector: 'my-app',
    templateUrl: 'myapp.html',
  })
  export classAppComponent {
    date1 = null;
  }
`;

code.title[1] = "Min Date, Max Date, and Disabled Dates"
code.html[1] =`
  <input
    [(ngModel)]="date2" 
    ng2-datetime-picker
    [disabled-dates]="date2DisabledDates"
    [min-date]="date2MinDate"
    [max-date]="date2MaxDate"
    date-only="true" />
  date2: {{date2}}
`;
code.js[1] =`
  import { Component } from '@angular/core';
  @Component({
    selector: 'my-app',
    templateUrl: 'myapp.html',
  })
  export classAppComponent {
    date2 = new Date(2017, 0, 28);
    date2DisabledDates = [new Date(2017, 0, 10), new Date(2017, 0, 20)];
    date2MinDate = new Date(2017, 0, 1);
    date2MaxDate = new Date(2017, 11, 31);
  }
`;

//timeonly
code.title[2] = "Time Only";
code.html[2] =`
  <input [(ngModel)]="date3"
    ng2-datetime-picker 
    date-format="DD-MM-YYYY hh:mm"
    time-only="true"
    minute-step="5"
    close-on-select="false" />`;
code.js[2] =`
  import { Component } from '@angular/core';
  @Component({
    selector: 'my-app',
    templateUrl: 'myapp.html',
  })
  export classAppComponent {
    date3 = new Date("Thu Jan 01 2015 00:00:00 GMT-0500 (EST)");
  }
`;

@Component({
  template: `
    <div class="container page-title">
      <h1>Datetime Picker</h1>
    </div>
    
    <div class="container">
      <p>
        Datetime picker converts input field into datetime selector by simply adding "ng2-datetime-picker" as an attribute.
      </p> 
    
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
        
    </div>`
})
export class DatetimePickerComponent {
  code: any = code;

  date1 = null;
  date1DefaultValue = new Date(2014, 11, 31, 21, 45, 59);

  date2 = new Date(2017, 0, 28);
  date2DisabledDates = [new Date(2017, 0, 10), new Date(2017, 0, 20)];
  date2MinDate = new Date(2017, 0, 1);
  date2MaxDate = new Date(2017, 11, 31);

  date3 = new Date("Thu Jan 01 2015 00:00:00 GMT-0500 (EST)");

  ngAfterViewInit(): void {
    window.scroll(0,0);
  }
}
