import { Component } from '@angular/core';
@Component({
  template: `
<div class="container page-title">
  <h1>Getting Started</h1>
</div>
<div class="container">
  <p class="page-title-description">
    ngui is a collection of quality Angular2 directives.
    To make ngui available to your project, you need to install a npm package "@ngui/ngui"
  </p>
  
  <h2>NPM Install</h2>
  <pre><code class="language-bash">$ npm install @ngui/ngui --save</code></pre>
  
  <h2>systemjs.config.js</h2>
  <pre><code class="language-javascript">
map: {{ '{' }}
  app: "app",
  ...
  '@ngui/ngui': 'https://npmcdn.com/ng2-ui/ngui/dist/ngui.umd.js' // <----- this
{{ '}' }},

}</code></pre>
      
  <h2>Usage</h2>
  <p><b>Import and include directives for your application</b>
  <p>app.component.ts
  <pre><code class="language-javascript">
//our root app component
import {{ '{' }}Component, enableProdMode{{ '}' }} from '@angular/core'
enableProdMode();

@Component({{ '{' }}
  selector: 'my-app',
  templateUrl: 'src/app.tpl.html',
{{ '}' }})
export class AppComponent {{ '{' }} ... {{ '}' }}
</code></pre>

<p><b>src/app.tpl.html</b></p>
<pre><code class="language-markup">
&lt;input [(ngModel)]="date1" ngui-datetime-picker /> 

&lt;ngui-map center="Brampton, Canada">&lt;/ngui-map> 
</code></pre>
</div>
  `
})
export class GettingStartedComponent {
  ngAfterViewInit(): void {
    window.scroll(0,0);
  }
}

