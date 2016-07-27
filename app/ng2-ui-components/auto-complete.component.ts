import { Component } from '@angular/core';
import { NG2_DIRECTIVES } from 'ng2-ui';
@Component({
  directives: [ NG2_DIRECTIVES ],
  template: `
    <div class="container bg-sky title">
      <h1>Auto Complete</h1>
    </div>
    <div class="container">
      <h4> Autocomplete From Local Source </h4>
      <div class="spacer x3"></div>
      <div class="container round-border">
        <div class="title">Simple string of array as source</div>
        <pre>{{arrayOfStrings | json}}</pre >
        <p><input ng2-auto-complete style="width: 400px" 
          [(ngModel)]="model1"
          [source]="arrayOfStrings"
          placeholder="enter text"/>
        <p><b>model1</b>: {{model1 | json}}
<pre><code class="language-markup"
>&lt;input ng2-auto-complete 
       [(ngModel)]="model1"
       [source]="arrayOfStrings"
       placeholder="enter text"/></code></pre>
      </div>
      <div class="spacer x4"></div>
      
      <div class="container round-border">
        <div class="title">Simple object of array as source</div>
        <pre>{{arrayOfKeyValues | json}}</pre> 
        <p><input ng2-auto-complete style="width: 400px"
          [(ngModel)]="model2"
          [source]="arrayOfKeyValues" 
          placeholder="enter text"/> 
        <p><b>model2</b>: {{model2 | json}}
<pre><code class="language-markup"
>&lt;input ng2-auto-complete
       [(ngModel)]="model2"
       [source]="arrayOfKeyValues" 
       placeholder="enter text"/> </code></pre>
      </div>
      <div class="spacer x4"></div>
      
      <div class="container round-border">
        <div class="title">Custom object of array as source</div>
        <pre>{{arrayOfKeyValues2 | json}}</pre>
        <p><input ng2-auto-complete style="width: 400px"
          [source]="arrayOfKeyValues2"
          [(ngModel)]="model3"
          placeholder="enter text"
          value-property-name="key"
          display-property-name="name"/></p>
        <p><b>model3:</b> {{model3 | json}}<br/></p>
<pre><code class="language-markup"
>&lt;input ng2-auto-complete [source]="arrayOfKeyValues2"
       [(ngModel)]="model3"
       placeholder="enter text"
       value-property-name="key"
       display-property-name="name"/></code></pre>
      </div>
        
      <h4> Autocomplete From Remote Source </h4>
      
      <div class="spacer x3"></div>
      <div class="container round-border">
        <div class="title">Google geocode API as source</div>
        <p><b>source:</b> {{googleGeoCode}}
        <p><input ng2-auto-complete style="width: 400px"
          [(ngModel)]="model4"
          placeholder="Enter Address(min. 2 chars)"
          [source]="googleGeoCode" 
          display-property-name="formatted_address"
          path-to-data="results"
          min-chars="2" />
<pre><code class="language-markup"
>&lt;input ng2-auto-complete 
       [(ngModel)]="model4"
       placeholder="Enter Address(min. 2 chars)"
       [source]="googleGeoCode" 
       display-property-name="formatted_address"
       path-to-data="results"
       min-chars="2" /></code></pre>
        <p><b>model4</b>: {{model4 | json}}<br/></p>
      </div>
      <div class="spacer x4"></div>
      <div class="spacer x4"></div>
      
    </div>`
})
export class AutoCompleteComponent {
  public arrayOfStrings: string[] =
    ["this", "is", "array", "of", "text"];

  public arrayOfKeyValues: any[] =
    [{id:1, value:'One'}, {id:2, value:'Two'}, {id:3, value:'Three'}, {id:4, value:'Four'}];

  public arrayOfKeyValues2: any[] =
    [{key:1, name:'Key One'}, {key:2, name:'Key Two'}, {key:3, name:'Key Three'}, {key:4, name:'Key Four'}];

  public googleGeoCode: string = "https://maps.googleapis.com/maps/api/geocode/json?address=:keyword";

  public model1;
  public model2;
  public model3;
  public model4;

  ngAfterViewInit(): void {
    window.scroll(0,0);
  }
}