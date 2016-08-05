import { Component } from '@angular/core';
import { NG2_DIRECTIVES } from 'ng2-ui';

@Component({
  directives: [ NG2_DIRECTIVES ],
  template: `
    <div class="container page-title">
      <h1>Accordion</h1>
    </div>
    <div class="container">
      <div ng2-collapsable
        selected="js"
        selected-index-class="selected"
        selected-contents-class="selected">
        <div index="html">HTML</div>
        <div contents="html">HTML {{foo}}</div>
        
        <div index="js">Javascript</div>
        <div contents="js">Javascript {{bar}}</div>
        
        <div index="css">Css</div>
        <div contents="css">Style Sheet</div>
      </div>
      <div class="spacer x2"></div>
      <div ng2-tab> 
        <div class="tabs">
          <div index="html">HTML</div>
          <div index="js">Javascript</div>
        </div>
        <div class="tab-contents">
          <div contents="html">
<pre><code class="language-markup"
>&lt;div ng2-collapsable
  selected="js"
  selected-index-class="selected"
  selected-contents-class="selected">
  &lt;div index="html">HTML&lt;/div>
  &lt;div contents="html">HTML {{foo}}&lt;/div>
  
  &lt;div index="js">Javascript&lt;/div>
  &lt;div contents="js">Javascript {{bar}}&lt;/div>
  
  &lt;div index="css">Css&lt;/div>
  &lt;div contents="css">Style Sheet&lt;/div>
&lt;/div></code></pre>
          </div>
          <div contents="js">
<pre><code class="language-javascript"
>import { Component } from '@angular/core';
import { NG2_DIRECTIVES } from 'ng2-ui';

@Component({
  directives: [ NG2_DIRECTIVES ],
  templateUr: 'app.html'
})
export class AppComponent{
  foo: any = 'foo';
  bar: any = 'bar';
}</code></pre>
          </div>
        </div>
      </div>
    </div>`
})
export class AccordionComponent {
  foo: any = 'foo';
  bar: any = 'bar';

  ngAfterViewInit(): void {
    window.scroll(0,0);
  }
}