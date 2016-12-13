import { Component } from '@angular/core';

@Component({
  template: `
    <div class="container page-title">
      <h1>Tab</h1>
    </div>
    <div class="container">
     <h2> Simple Tab </h2>
     <div ng2-tab>
       <div class="tabs">
          <div index="html">HTML</div>
          <div index="js">Javascript</div>
        </div>
        <div class="tab-contents">
          <div contents="html">
<pre><code class="langage-markup"
>&lt;div ng2-tab> 
 &lt;div class="tabs">
    &lt;div index="html">HTML&lt;/div>
    &lt;div index="js">Javascript&lt;/div>
  &lt;/div>
  &lt;div class="tab-contents">
    &lt;div contents="html">HTML  &lt;/div>
    &lt;div contents="js">Javascript  &lt;/div>
  &lt;/div>
&lt;/div></code></pre>
          </div>
          <div contents="js">
<pre><code class="langage-javascript"
>import {{ '{' }} Component {{ '}' }} from '@angular/core';

@Component({{ '{' }}
  templateUr: 'app.html'
{{ '}' }})
export class AppComponent{{ '{' }}
{{ '}' }}</code></pre>
          </div>
        </div>
      </div>
      
      <br/><br/>
      <h2> Tab with animation </h2>
      <ng2-tab
        selected="js"
        selected-index-class="selected"
        selected-contents-class="fadeIn animated">
        <div class="tabs">
          <div index="html">HTML</div>
          <div index="js">Javascript</div>
        </div>
        <div class="tab-contents">
          <div contents="html">
<pre><code class="language-markup"
>&lt;ng2-tab selected="js" 
  selected-contents-class="fadeIn animated" 
  selected-index-class="selected">
  &lt;div class="tabs">
    &lt;div index="html">HTML&lt;/div>
    &lt;div index="js">Javascript&lt;/div>
  &lt;/div>
  &lt;div class="tab-contents">
    &lt;div contents="html">HTML&lt;/div>
    &lt;div contents="js">Javascript&lt;/div>
  &lt;/div>
&lt;/ng2-tab></code></pre>
          </div>
          <div contents="js">
<pre><code class="langage-javascript"
>import {{ '{' }} Component {{ '}' }} from '@angular/core';

@Component({{ '{' }}
  templateUr: 'app.html'
{{ '}' }})
export class AppComponent{{ '{' }}
{{ '}' }}</code></pre>
        </div>
        </div>
      </ng2-tab> 
      NOTE: There is a default css given by component, but a user can override the tab style.
    </div>
`
})
export class TabComponent {
  ngAfterViewInit(): void {
    window.scroll(0,0);
  }
}
