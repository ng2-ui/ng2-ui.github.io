import { Component } from '@angular/core';
import { NG2_DIRECTIVES } from 'ng2-ui';
console.log('NG2_DIRECTIVES', NG2_DIRECTIVES);

@Component({
  directives: [ NG2_DIRECTIVES ],
  template: `
    <div class="container page-title">
      <h1>Sticky</h1>
    </div>
    <div class="container">
    
      <div class="sticky-container">
        <div class="sticky-float-right">
          <div ng2-sticky style="float: right"> float: right </div>
        </div>
      </div>
      <div class="spacer"></div>
      <ng2-tab>
        <div class="tabs">
           <div index="html">HTML</div>
           <div index="js">Javascript</div>
           <div index="css">Stylesheet</div>
         </div> 
         <div class="tab-contents">
           <div contents="html">
<pre><code class="language-markup"
>&lt;div class="sticky-container">
  &lt;div class="float-right">
    &lt;div ng2-sticky style="float: right"> float: right &lt;/div>
  &lt;/div>
&lt;/div>
</code></pre>
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
}</code></pre>
          </div>
          <div contents="css">
<pre><code class="language-stylesheet"
>.sticky-container > div {
  border: 1px solid #333;
  background-image: linear-gradient(rgba(255, 255, 255, 1) 50%, transparent 50%, transparent);
  background-size: 50px 50px;
  height: 300px;
}
.sticky-float-right {
  background-color: rgba(0,255,0, .2);
}
div[ng2-sticky] {
  min-width: 400px;
  text-align: center;
  background: #333;
  color: #fff;
  border: 1px solid #333;
  padding: 10px;
}</code></pre>
           </div>
         </div>
      </ng2-tab>
      <div class="spacer"></div>
      <div class="sticky-container">
        <div class="sticky-float-left">
          <div ng2-sticky style="float: left"> float: left </div>
        </div>
      </div>
      <div class="spacer"></div>
      <ng2-tab>
        <div class="tabs">
           <div index="html">HTML</div>
           <div index="js">Javascript</div>
           <div index="css">Stylesheet</div>
         </div> 
         <div class="tab-contents">
           <div contents="html">
<pre><code class="language-markup"
>&lt;div class="sticky-container">
  &lt;div class="float-left">
    &lt;div ng2-sticky style="float: left"> float: left &lt;/div>
  &lt;/div>
&lt;/div>
</code></pre>
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
}</code></pre>
          </div>
          <div contents="css">
<pre><code class="language-stylesheet"
>.sticky-container > div {
  border: 1px solid #333;
  background-image: linear-gradient(rgba(255, 255, 255, 1) 50%, transparent 50%, transparent);
  background-size: 50px 50px;
  height: 300px;
}
.sticky-float-left {
  background-color: rgba(255,0,0, .2);
}
div[ng2-sticky] {
  min-width: 400px;
  text-align: center;
  background: #333;
  color: #fff;
  border: 1px solid #333;
  padding: 10px;
}
</code></pre>
           </div>
         </div>
      </ng2-tab>
      <div class="spacer"></div>
        
      <div class="sticky-container">
        <div class="div-middle">
          <div>One</div> <div>After</div> <div>Another</div>
          <div ng2-sticky> &lt;div> tag in the middle </div>
          <div>One</div> <div>After</div> <div>Another</div>
        </div>
      </div>
      <div class="spacer"></div>
      
      <ng2-tab>
        <div class="tabs">
           <div index="html">HTML</div>
           <div index="js">Javascript</div>
           <div index="css">Stylesheet</div>
         </div> 
         <div class="tab-contents">
           <div contents="html">
<pre><code class="language-markup"
>&lt;div class="sticky-container">
  &lt;div class="div-middle">
    &lt;div>One&lt;/div> &lt;div>After&lt;/div> &lt;div>Another&lt;/div>
    &lt;div ng2-sticky> &lt;div> tag in the middle &lt;/div>
    &lt;div>One&lt;/div> &lt;div>After&lt;/div> &lt;div>Another&lt;/div>
  &lt;/div>
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
}</code></pre>
          </div>
          <div contents="css">
<pre><code class="language-stylesheet"
>.sticky-container > div {
  border: 1px solid #333;
  background-image: linear-gradient(rgba(255, 255, 255, 1) 50%, transparent 50%, transparent);
  background-size: 50px 50px;
  height: 300px;
}
.div-middle {
  background-color: rgba(0,0,255, .2);
}
div[ng2-sticky] {
  min-width: 400px;
  text-align: center;
  background: #333;
  color: #fff;
  border: 1px solid #333;
  padding: 10px;
}
.div-middle div[ng2-sticky] {
  margin: 0;
}
</code></pre>
           </div>
         </div>
      </ng2-tab>
      <div class="spacer"></div>
      <div style="height:300px">
        This space is left-blank intentionally to see scroll effect
      </div>
      
    </div>`,
  styles: [`
    .sticky-container > div {
      /*margin: 20px;*/
      border: 1px solid #333;
      background-image: linear-gradient(rgba(255, 255, 255, 1) 50%, transparent 50%, transparent);
      background-size: 50px 50px;
      height: 300px;
    }
    .sticky-float-left {
      background-color: rgba(255,0,0, .2);
    }
    .sticky-float-right {
      background-color: rgba(0,255,0, .2);
    }
    .div-middle {
      background-color: rgba(0,0,255, .2);
    }
    div[ng2-sticky] {
      /*margin: 30px 10px 10px 10px;*/
      min-width: 400px;
      text-align: center;
      background: #333;
      color: #fff;
      border: 1px solid #333;
      padding: 10px;
    }
    .div-middle div[ng2-sticky] {
      margin: 0;
    }
  `]
})
export class StickyComponent {
  ngAfterViewInit(): void {
    window.scroll(0,0);
  }
}
