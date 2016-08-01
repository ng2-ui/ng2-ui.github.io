import { Component } from '@angular/core';
import { NG2_DIRECTIVES, NG2_PROVIDERS } from 'ng2-ui';

@Component({
  directives: [ NG2_DIRECTIVES ],
  providers: [ NG2_PROVIDERS ],
  template: `
    <div class="container bg-sky title">
      <h1>Menu</h1>
    </div>
    <div class="container">
    
      <h4>Dropdown Menu</h4>
      <div>
        <ul class="horizontal-menu">
          <li> Item 1
            <ul ng2-menu="bottom">
              <li> Menu Item 1-1 </li>
              <li> Menu Item 1-2 </li>
              <li> Menu Item 1-3 </li>
            </ul>
          </li>
          
          <li> Item 2
            <ul ng2-menu="bottom">
              <li> Menu Item 2-1 </li>
              <li> Item 2-2 
                <ul ng2-menu="right">
                  <li> Menu Item 2-2-1 </li> 
                  <li> Menu Item 2-2-2 </li>
                  <li> Menu Item 2-2-3 </li>
                </ul>
              </li>
              <li> Menu Item 2-3 </li>
            </ul>
          </li>
          <li>Menu Item 3</li>
        </ul>
      </div>
      
      <div class="spacer x8"></div>
      <div class="spacer x8"></div>
      <div>
        <ul class="horizontal-menu">
          <li> Menu Item 1
            <ul ng2-menu="top">
              <li> Menu Item 1-1
              <li> Menu Item 1-2 
              <li> Menu Item 1-3
            </ul>
          <li> Menu Item 2
            <ul ng2-menu="top">
              <li> Menu Item 2-1 
              <li> Menu Item 2-2
              <li> Menu Item 2-3
            </ul>
          <li> Menu Item 3
            <ul ng2-menu="top">
              <li> Menu Item 3-1
              <li> Menu Item 3-2
              <li> Menu Item 3-3
            </ul>
        </ul>
      </div>
      <ng2-tab>
        <div class="tabs">
           <div index="html">HTML</div>
           <div index="js">Javascript</div>
           <div index="css">Stylesheet</div>
         </div> 
         <div class="tab-contents">
           <div contents="html">
<pre><code class="language-markup"
>&lt;ul class="horizontal-menu">
  &lt;li> Menu Item 1
    &lt;ul ng2-menu="top">
      &lt;li> Menu Item 1-1
      &lt;li> Menu Item 1-2 
      &lt;li> Menu Item 1-3
    &lt;/ul>
  &lt;li> Menu Item 2
    &lt;ul ng2-menu="top">
      &lt;li> Menu Item 2-1 
      &lt;li> Menu Item 2-2
      &lt;li> Menu Item 2-3
    &lt;/ul>
  &lt;li> Menu Item 3
    &lt;ul ng2-menu="top">
      &lt;li> Menu Item 3-1
      &lt;li> Menu Item 3-2
      &lt;li> Menu Item 3-3
    &lt;/ul>
&lt;/ul></code></pre>
          </div>
          <div contents="js">
<pre><code class="language-javascript"
>import { Component } from '@angular/core';
import { NG2_DIRECTIVES } from 'ng2-ui';

@Component({
  directives: [ NG2_DIRECTIVES ],
  templateUr: 'app.html',
  styleUrls: ['app.css']
})
export class AppComponent{
}</code></pre>
          </div>
          <div contents="css">
<pre><code class="language-stylesheet"
>ul.horizontal-menu {
  display: inline-block;
  width: 600px;
}
ul.horizontal-menu > li {
  border: 1px solid #ccc;
  display: inline-block !important;
}
.dropdown-menu, .right-side-menu, .bottom-menu {
  display: inline-block;
}

.has-ng2-menu.active {
  color: #fff;
  background-color: #333;
}
.has-ng2-menu::after {
  content: '\2630';
  display: 'inline-block';
  border: 1px solid #eee;
  width: 1em;
  height: 1em;
  text-align: center;
  float: right;
  line-height: 1em;
}
.has-ng2-menu.active::after {
  content: '-';
  border: 1px solid #eee;
  width: 1em;
  height: 1em;
  text-align: center;
  display: 'inline-block';
  float: right;
}
.has-ng2-menu ul[ng2-menu] {
  color: #333;
  background-color: #fff;
  display: none;
  list-style: none;
  margin: 0;
  padding: 0
}
.has-ng2-menu.active > ul[ng2-menu] {
  display: inline-block;
}
.has-ng2-menu > ul[ng2-menu] > li {
  box-sizing: border-box;
  display: block;
  margin: 0;
  padding: 5px;
  border: 1px solid #ccc;
  white-space: nowrap;
}
</code></pre>
           </div>
         </div>
      </ng2-tab>
     
    
      <h4>Right-Side Menu</h4>
      
      <div class="right-side-menu">
        <ul ng2-menu="right">
          <li> Menu Item 1 
            <ul ng2-menu="right">
              <li> Menu Item 1-1
              <li> Menu Item 1-2 
              <li> Menu Item 1-3
            </ul>
          <li> Menu Item 2
            <ul ng2-menu="right">
              <li> Menu Item 2-1 &nbsp; &nbsp; &nbsp;
              <li> Menu Item 2-2 
                <ul ng2-menu="right">
                  <li> Menu Item 2-2-1 
                  <li> Menu Item 2-2-2 
                  <li> Menu Item 2-2-3 
                </ul>
              
              <li> Menu Item 2-3 
            </ul>
          <li>Menu Item 3 &nbsp; &nbsp; &nbsp;
        </ul>
      </div>
      
      <div class="spacer x8"></div>
      <div class="spacer x8"></div>
      <ng2-tab>
        <div class="tabs">
           <div index="html">HTML</div>
           <div index="js">Javascript</div>
           <div index="css">Stylesheet</div>
         </div> 
         <div class="tab-contents">
           <div contents="html">
<pre><code class="language-markup"
>&lt;ul ng2-menu="right">
  &lt;li> Menu Item 1 
    &lt;ul ng2-menu="right">
      &lt;li> Menu Item 1-1
      &lt;li> Menu Item 1-2 
      &lt;li> Menu Item 1-3
    &lt;/ul>
  &lt;li> Menu Item 2
    &lt;ul ng2-menu="right">
      &lt;li> Menu Item 2-1 &nbsp; &nbsp; &nbsp;
      &lt;li> Menu Item 2-2 
        &lt;ul ng2-menu="right">
          &lt;li> Menu Item 2-2-1 
          &lt;li> Menu Item 2-2-2 
          &lt;li> Menu Item 2-2-3 
        &lt;/ul>
      
      &lt;li> Menu Item 2-3 
    &lt;/ul>
  &lt;li>Menu Item 3 &nbsp; &nbsp; &nbsp;
&lt;/ul></code></pre>
          </div>
          <div contents="js">
<pre><code class="language-javascript"
>import { Component } from '@angular/core';
import { NG2_DIRECTIVES } from 'ng2-ui';

@Component({
  directives: [ NG2_DIRECTIVES ],
  templateUr: 'app.html',
  styleUrls: ['app.css']
})
export class AppComponent{
}</code></pre>
          </div>
          <div contents="css">
<pre><code class="language-stylesheet">
The same as the above. .... Omitted Intentionally
</code></pre>
           </div>
         </div>
      </ng2-tab>
      
      
      <h4>Bottom-Side Menu</h4>
      
      <div class="spacer x8"></div>
      <div class="spacer x8"></div>
      <div class="bottom-menu">
        <ul class="horizontal-menu">
          <li> Menu Item 1
            <ul ng2-menu="top">
              <li> Menu Item 1-1
              <li> Menu Item 1-2 
              <li> Menu Item 1-3
            </ul>
          <li> Menu Item 2
            <ul ng2-menu="top">
              <li> Menu Item 2-1 
              <li> Menu Item 2-2
              <li> Menu Item 2-3
            </ul>
          <li> Menu Item 3
            <ul ng2-menu="top">
              <li> Menu Item 3-1
              <li> Menu Item 3-2
              <li> Menu Item 3-3
            </ul>
        </ul>
      </div>
      
      <ng2-tab>
        <div class="tabs">
           <div index="html">HTML</div>
           <div index="js">Javascript</div>
           <div index="css">Stylesheet</div>
         </div> 
         <div class="tab-contents">
          <div contents="html">
<pre><code class="language-markup"
>&lt;ul class="horizontal-menu">
  &lt;li> Menu Item 1
    &lt;ul ng2-menu="top">
      &lt;li> Menu Item 1-1
      &lt;li> Menu Item 1-2 
      &lt;li> Menu Item 1-3
    &lt;/ul>
  &lt;li> Menu Item 2
    &lt;ul ng2-menu="top">
      &lt;li> Menu Item 2-1 
      &lt;li> Menu Item 2-2
      &lt;li> Menu Item 2-3
    &lt;/ul>
  &lt;li> Menu Item 3
    &lt;ul ng2-menu="top">
      &lt;li> Menu Item 3-1
      &lt;li> Menu Item 3-2
      &lt;li> Menu Item 3-3
    &lt;/ul>
&lt;/ul></code></pre>
          </div>
          <div contents="js">
<pre><code class="language-javascript"
>import { Component } from '@angular/core';
import { NG2_DIRECTIVES } from 'ng2-ui';

@Component({
  directives: [ NG2_DIRECTIVES ],
  templateUr: 'app.html',
  styleUrls: ['app.css']
})
export class AppComponent{
}</code></pre>
          </div>
          <div contents="css">
<pre><code class="language-stylesheet">
The same as the above. .... Omitted Intentionally
</code></pre>
           </div>
         </div>
      </ng2-tab>
      
      
      Plunker Example: https://plnkr.co/edit/wTu6EB?p=preview
    </div>`
})
export class MenuComponent {
  ngAfterViewInit(): void {
    window.scroll(0,0);
  }
}

