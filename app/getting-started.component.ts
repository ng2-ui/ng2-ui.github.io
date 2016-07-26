import { Component } from '@angular/core';
@Component({
  template: `
<div class="container bg-sky title">
  <h1>Getting Started</h1>
</div>
<div class="container">
  <h4>NPM Inatall</h4>
  <pre><code class="language-bash">$ npm install ng2-ui --save</code></pre>
  
  <h4>systemjs.config.js</h4>
  <pre><code class="language-javascript">
map: {
  app: "app",
  ...
  'ng2-ui': 'https://npmcdn.com/ng2-ui' // <----- this
},

packages: {
   app: {main: './main.js', defaultExtension: 'js'},
   ...
   'ng2-ui': { main: 'dist/index.js', defaultExtension: 'js' }  // <----- this
   }
}</code></pre>
      
  <h4>Usage</h4>
  <p><b>Import and include directives for your application</b>
  <p>app.ts
  <pre><code class="language-javascript">
//our root app component
import {Component, enableProdMode} from '@angular/core'
import { NG2_DIRECTIVES } from "ng2-ui";   // <---- this
enableProdMode();

@Component({
  selector: 'my-app',
  templateUrl: 'src/app.tpl.html',
  directives: [ NG2_DIRECTIVES ]    // <---- this
})
export class App {
  arrayOfValues: any[] = ['a', 'b', 'c'];
}
</code></pre>

<p><b>src/app.tpl.html</b></p>
<pre><code class="language-markup">
&lt;input [(ngModel)]="date1" ng2-datetime-picker /> 

&lt;ng2-map center="Brampton, Canada">&lt;/ng2-map> 
</code></pre>
</div>
  `
})
export class GettingStartedComponent { }

