import { Component } from '@angular/core';

@Component({
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
  &lt;div contents="html">HTML &123;&123;foo&125;&125;&lt;/div>
  
  &lt;div index="js">Javascript&lt;/div>
  &lt;div contents="js">Javascript &123;&123;bar&125;&125;&lt;/div>
  
  &lt;div index="css">Css&lt;/div>
  &lt;div contents="css">Style Sheet&lt;/div>
&lt;/div></code></pre>
          </div>
          <div contents="js">
<pre><code class="language-javascript"
>import &123; Component &125; from '@angular/core';

@Component(&123;
  templateUr: 'app.html'
&125;)
export class AppComponent &123;
  foo: any = 'foo';
  bar: any = 'bar';
&125;</code></pre>
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
