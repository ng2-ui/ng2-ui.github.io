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
        <p><b>model1</b>: {{ model1 | json }}
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
>import {{ '{' }} Component {{ '}' }} from '@angular/core';

@Component({{ '{' }}
  templateUr: 'app.html'
{{ '}' }})
export class AppComponent{{ '{' }}
  model1: any;
  arrayOfStrings: string[] =
    ["this", "is", "array", "of", "text"];
{{ '}' }}</code></pre>
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
        <p><b>model2</b>: {{model2 | json }}
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
>import {{ '{' }} Component {{ '}' }} from '@angular/core';

@Component({{ '{' }}
  templateUr: 'app.html'
{{ '}' }})
export class AppComponent{{ '{' }}
  model2: any;
  arrayOfKeyValues: any[] =
    [{{ '{' }}id:1, value:'One'{{ '}' }}, {{ '{' }}id:2, value:'Two'{{ '}' }}, {{ '{' }}id:3, value:'Three'{{ '}' }}, {{ '{' }}id:4, value:'Four'{{ '}' }}];
{{ '}' }}</code></pre>
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
        <p><b>model3:</b> {{ model3 | json }}<br/></p>
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
>import {{ '{' }} Component {{ '}' }} from '@angular/core';

@Component({{ '{' }}
  templateUr: 'app.html'
{{ '}' }})
export class AppComponent{{ '{' }}
  model3: any;
  arrayOfKeyValues2: any[] =
    [{{ '{' }}key:1, name:'Key One'{{ '}' }}, {{ '{' }}key:2, name:'Key Two'{{ '}' }}, {{ '{' }}key:3, name:'Key Three'{{ '}' }}, {{ '{' }}key:4, name:'Key Four'{{ '}' }}];
{{ '}' }}</code></pre>
             </div>
           </div>
        </ng2-tab>
      </div>
        
      <h2> Autocomplete From Remote Source </h2>
      
      <div class="spacer x3"></div>
      <div class="container round-border">
        <div class="title">Google geocode API as source</div>
        <p><b>source:</b> {{ googleGeoCode }}
        <p><input ng2-auto-complete
          [(ngModel)]="model4"
          placeholder="Enter Address(min. 2 chars)"
          [source]="googleGeoCode" 
          display-property-name="formatted_address"
          path-to-data="results"
          min-chars="2" />
        <p><b>model4</b>: {{ model4 | json }}<br/></p>
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
>import {{ '{' }} Component {{ '}' }} from '@angular/core';

@Component({{ '{' }}
  templateUr: 'app.html'
{{ '}' }})
export class AppComponent{{ '{' }}
  model4: any;

  googleGeoCode: string = "https://maps.googleapis.com/maps/api/geocode/json?address=:keyword";
{{ '}' }}</code></pre>
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
