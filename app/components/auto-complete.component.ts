import { Component } from '@angular/core';
let code: any = {title: [], html: [], js: []};

code.title[0] = "Simple Array Of String"
code.html[0]= `
  <input ngui-auto-complete
    [(ngModel)]="model1"
    [source]="arrayOfStrings"
    placeholder="enter text"/>
  <p><b>model1</b>: {{ model1 | json }}`;
code.js[0] = `
  import { Component } from '@angular/core';
  @Component({
    templaeUr: 'app.html'
  })
  export class AppComponent {
    model1: any;
    arrayOfStrings: string[] =
      ["this", "is", "array", "of", "text"];
  }`;

code.title[0] = "Simple Array Of Object(id/value)"
code.html[1] = `
  <input ngui-auto-complete
    [(ngModel)]="model2"
    [source]="arrayOfKeyValues" 
    placeholder="enter text"/> 
  <p><b>model2</b>: {{model2 | json }}
`;
code.js[1] = `
  import { Component } from '@angular/core';

  @Component({
    templateUr: 'app.html'
  })
  export class AppComponent{
    model2: any;
    arrayOfKeyValues: any[] =
      [{id:1, value:'One'}, {id:2, value:'Two'}, {id:3, value:'Three'}, {id:4, value:'Four'}];
  }
`;

code.title[0] = "Simple Array Of Object(key/name)"
code.html[2] = `
  <input ngui-auto-complete 
    [source]="arrayOfKeyValues2"
    [(ngModel)]="model3"
    placeholder="enter text"
    list-formatter="(key) name"
    display-property-name="name"/>
  <p><b>model3:</b> {{ model3 | json }}
`;
code.js[2] = `
  import { Component } from '@angular/core';
  @Component({
    templateUr: 'app.html'
  })
  export class AppComponent{
    model3: any;
    arrayOfKeyValues2: any[] =
      [{key:1, name:'Key One'}, {key:2, name:'Key Two'}, {key:3, name:'Key Three'}, {key:4, name:'Key Four'}];
  }`;

code.title[0] = "Remote Source"
code.html[3] = `
  <input ngui-auto-complete
    [(ngModel)]="model4"
    placeholder="Enter Address(min. 2 chars)"
    [source]="googleGeoCode" 
    list-formatter="formatted_address"
    path-to-data="results"
    min-chars="2" />
  <p><b>model4</b>: {{ model4 | json }}
`;
code.js[3] = `
  import { Component } from '@angular/core';

  @Component({
    templateUr: 'app.html'
  })
  export class AppComponent{
    model4: any;
    googleGeoCode: string = "https://maps.googleapis.com/maps/api/geocode/json?address=:keyword";
  }
`;
@Component({
  template: `

    <div class="container page-title">
      <h1>Auto Complete</h1>
    </div>
    
    <div class="container">
      <h2> {{code.title[0]}} </h2>
      <div class="spacer x3"></div>
      <div class="container round-border">
        <div class="title">Simple string of array as source</div>
        <p>${code.html[0]}
        <ngui-tab>
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
        </ngui-tab>
      </div>
      <div class="spacer x4"></div>
      
      <div class="container round-border">
        <div class="title">{{code.title[1]}}</div>
        <p>${code.html[1]}
        <ngui-tab>
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
        </ngui-tab>
      </div>
      <div class="spacer x4"></div>
      
      <div class="container round-border">
        <div class="title">{{code.title[2]}}</div>
        <p>${code.html[2]}
        <ngui-tab>
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
        </ngui-tab>
      </div>
        
      <h2> Autocomplete From Remote Source </h2>
      
      <div class="spacer x3"></div>
      <div class="container round-border">
        <div class="title">{{code.title[3]}}</div>
        <p>${code.html[3]}
        <ngui-tab>
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
        </ngui-tab>
      </div>
      <div class="spacer x4"></div>
      <div class="spacer x4"></div>
      
    </div>`
})
export class AutoCompleteComponent {
  code: any = code;
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
