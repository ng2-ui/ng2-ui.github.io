import { Component } from '@angular/core';
@Component({
  template: `
    <div class="container page-title">
      <h1>Auto Complete</h1>
    </div>
    <div class="container">
      <h2> Autocomplete From Local Source </h2>
      <div class="spacer x3"></div>
      <div class="container round-border">
        <div class="title">Simple string of array as source</div>
        <p><input ng2-auto-complete
          [(ngModel)]="model1"
          [source]="arrayOfStrings"
          placeholder="enter text"/>
        <p><b>model1</b>: &123;&123;model1 | json&125;&125;
        <ng2-tab>
          <div class="tabs">
             <div index="html">HTML</div>
             <div index="js">Javascript</div>
           </div> 
           <div class="tab-contents">
             <div contents="html">
<pre><code class="language-markup"
>&lt;input ng2-auto-complete
          [(ngModel)]="model1"
          [source]="arrayOfStrings"
          placeholder="enter text"/></code></pre>
             </div>
             <div contents="js">
<pre><code class="language-javascript"
>import &123; Component &125; from '@angular/core';

@Component(&123;
  templateUr: 'app.html'
&125;)
export class AppComponent&123;
  model1: any;
  arrayOfStrings: string[] =
    ["this", "is", "array", "of", "text"];
&125;</code></pre>
             </div>
           </div>
        </ng2-tab>
      </div>
      <div class="spacer x4"></div>
      
      <div class="container round-border">
        <div class="title">Simple object of array as source</div>
        <p><input ng2-auto-complete
          [(ngModel)]="model2"
          [source]="arrayOfKeyValues" 
          placeholder="enter text"/> 
        <p><b>model2</b>: &123;&123;model2 | json&125;&125;
        <ng2-tab>
          <div class="tabs">
             <div index="html">HTML</div>
             <div index="js">Javascript</div>
           </div> 
           <div class="tab-contents">
             <div contents="html">
<pre><code class="language-markup"
>&lt;input ng2-auto-complete
        [(ngModel)]="model2"
        [source]="arrayOfKeyValues" 
        placeholder="enter text"/></code></pre>
             </div>
             <div contents="js">
<pre><code class="language-javascript"
>import &123; Component &125; from '@angular/core';

@Component(&123;
  templateUr: 'app.html'
&125;)
export class AppComponent&123;
  model2: any;
  arrayOfKeyValues: any[] =
    [&123;id:1, value:'One'&125;, &123;id:2, value:'Two'&125;, &123;id:3, value:'Three'&125;, &123;id:4, value:'Four'&125;];
&125;</code></pre>
             </div>
           </div>
        </ng2-tab>
      </div>
      <div class="spacer x4"></div>
      
      <div class="container round-border">
        <div class="title">Custom object of array as source</div>
        <p><input ng2-auto-complete 
          [source]="arrayOfKeyValues2"
          [(ngModel)]="model3"
          placeholder="enter text"
          value-property-name="key"
          display-property-name="name"/></p>
        <p><b>model3:</b> &123;&123;model3 | json&125;&125;<br/></p>
        <ng2-tab>
          <div class="tabs">
             <div index="html">HTML</div>
             <div index="js">Javascript</div>
           </div> 
           <div class="tab-contents">
             <div contents="html">
<pre><code class="language-markup"
>&lt;input ng2-auto-complete 
          [source]="arrayOfKeyValues2"
          [(ngModel)]="model3"
          placeholder="enter text"
          value-property-name="key"
          display-property-name="name"/></code></pre>
             </div>
             <div contents="js">
<pre><code class="language-javascript"
>import &123; Component &125; from '@angular/core';

@Component(&123;
  templateUr: 'app.html'
&125;)
export class AppComponent&123;
  model3: any;
  arrayOfKeyValues2: any[] =
    [&123;key:1, name:'Key One'&125;, &123;key:2, name:'Key Two'&125;, &123;key:3, name:'Key Three'&125;, &123;key:4, name:'Key Four'&125;];
&125;</code></pre>
             </div>
           </div>
        </ng2-tab>
      </div>
        
      <h2> Autocomplete From Remote Source </h2>
      
      <div class="spacer x3"></div>
      <div class="container round-border">
        <div class="title">Google geocode API as source</div>
        <p><b>source:</b> &123;&123;googleGeoCode&125;&125;
        <p><input ng2-auto-complete
          [(ngModel)]="model4"
          placeholder="Enter Address(min. 2 chars)"
          [source]="googleGeoCode" 
          display-property-name="formatted_address"
          path-to-data="results"
          min-chars="2" />
        <p><b>model4</b>: &123;&123;model4 | json&125;&125;<br/></p>
        <ng2-tab>
          <div class="tabs">
             <div index="html">HTML</div>
             <div index="js">Javascript</div>
           </div> 
           <div class="tab-contents">
             <div contents="html">
<pre><code class="language-markup"
>&lt;input ng2-auto-complete
          [(ngModel)]="model4"
          placeholder="Enter Address(min. 2 chars)"
          [source]="googleGeoCode" 
          display-property-name="formatted_address"
          path-to-data="results"
          min-chars="2" /></code></pre>
             </div>
             <div contents="js">
<pre><code class="language-javascript"
>import &123; Component &125; from '@angular/core';

@Component(&123;
  templateUr: 'app.html'
&125;)
export class AppComponent&123;
  model4: any;

  googleGeoCode: string = "https://maps.googleapis.com/maps/api/geocode/json?address=:keyword";
&125;</code></pre>
             </div>
           </div>
        </ng2-tab>
      </div>
      <div class="spacer x4"></div>
      <div class="spacer x4"></div>
      
    </div>`
})
export class AutoCompleteComponent {
  arrayOfStrings: string[] =
    ["this", "is", "array", "of", "text"];

  arrayOfKeyValues: any[] =
    [{id:1, value:'One'}, {id:2, value:'Two'}, {id:3, value:'Three'}, {id:4, value:'Four'}];

  arrayOfKeyValues2: any[] =
    [{key:1, name:'Key One'}, {key:2, name:'Key Two'}, {key:3, name:'Key Three'}, {key:4, name:'Key Four'}];

  googleGeoCode: string = "https://maps.googleapis.com/maps/api/geocode/json?address=:keyword";

  model1: any;
  model2: any;
  model3: any;
  model4: any;

  ngAfterViewInit(): void {
    window.scroll(0,0);
  }
}
