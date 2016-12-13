import { Component } from '@angular/core';

@Component({
  template: `
    <div class="container page-title">
      <h1>Menu</h1>
    </div>
    <div class="container">
    
      <h2>Dropdown Menu</h2>
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
>import {{ '{' }} Component {{ '}' }} from '@angular/core';

@Component({{ '{' }}
  templateUr: 'app.html',
  styleUrls: ['app.css']
{{ '}' }})
export class AppComponent{{ '{' }}
{{ '}' }}</code></pre>
          </div>
          <div contents="css">
<pre><code class="language-stylesheet"
>ul.horizontal-menu,
.has-ng2-menu ul[ng2-menu]
{{ '{' }}
  background: #3db2e1;
  background: -moz-linear-gradient(top, #69c4e8, #21a1d4);
  background: -ms-linear-gradient(top, #69c4e8, #21a1d4);
  background: -o-linear-gradient(top, #69c4e8, #21a1d4);
  background: -webkit-linear-gradient(top, #69c4e8, #21a1d4);
  background: linear-gradient(to bottom, #69c4e8, #21a1d4);
  border-radius: 2px;
  box-shadow: inset 0 -3px 0 #1f97c7, inset 0 -3px 3px #1f9acc, inset 0 2px 2px #9ad7ef, inset 1px 0 2px #22a4d9, inset -1px 0 2px #22a4d9, 0 1px 1px rgba(0, 0, 0, 0.1), 0 2px 2px rgba(0, 0, 0, 0.06), 0 3px 3px rgba(0, 0, 0, 0.17), 2px 1px 2px rgba(0, 0, 0, 0.05), -2px 1px 2px rgba(0, 0, 0, 0.05);
  display: inline-block;
  font-family: 'Open Sans', Helvetica, sans-serif;
  width: auto;
{{ '}' }}
ul.horizontal-menu > li {{ '{' }}
  -moz-transition: color .2s ease;
  -ms-transition: color .2s ease;
  -o-transition: color .2s ease;
  -webkit-transition: color .2s ease;
  color: #ffffff;
  display: inline-block !important;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 1px;
  padding: 20px 25px;
  text-decoration: none;
  text-shadow: 0 1px 0 rgba(0, 0, 0, 0.25);
  text-transform: uppercase;
  transition: color .2s ease;
{{ '}' }}
ul.horizontal-menu > li:hover,
.has-ng2-menu li:hover {{ '{' }}
  color: #ccc;
{{ '}' }}
ul.horizontal-menu > li:hover ul,
.has-ng2-menu li:hover ul {{ '{' }}
  color: #fff;
{{ '}' }}

.dropdown-menu, .right-side-menu, .bottom-menu {{ '{' }}
  display: inline-block;
{{ '}' }}

.has-ng2-menu.active {{ '{' }}
  color: #fff;
{{ '}' }}
.has-ng2-menu::after {{ '{' }}
  content: '\25bc';
  display: inline-block;
  padding: 6px 12px;
  text-align: center;
  float: right;
  font-size: 8px;
  line-height: 13px;
{{ '}' }}
.has-ng2-menu.active::after {{ '{' }}
  color: #333;
{{ '}' }}

.has-ng2-menu ul[ng2-menu] {{ '{' }}
  background-color: #fff;
  display: none;
  list-style: none;
  margin: 0;
  padding: 0
{{ '}' }}
.has-ng2-menu.active > ul[ng2-menu] {{ '{' }}
  display: inline-block;
{{ '}' }}
.has-ng2-menu > ul[ng2-menu] > li {{ '{' }}
  display: block;
  margin: 0;
  padding: 10px;
  white-space: nowrap;
{{ '}' }}

</code></pre>
           </div>
         </div>
      </ng2-tab>
     
    
      <h2>Right-Side Menu</h2>
      
      <div class="right-side-menu">
        Menu
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
>import {{ '{' }} Component {{ '}' }} from '@angular/core';

@Component({{ '{' }}
  templateUr: 'app.html',
  styleUrls: ['app.css']
{{ '}' }})
export class AppComponent{{ '{' }}
{{ '}' }}</code></pre>
          </div>
          <div contents="css">
<pre><code class="language-stylesheet">
The same as the above. .... Omitted Intentionally
</code></pre>
           </div>
         </div>
      </ng2-tab>
      
      
      <h2>Bottom-Side Menu</h2>
      
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
>import {{ '{' }} Component {{ '}' }} from '@angular/core';

@Component({{ '{' }}
  templateUr: 'app.html',
  styleUrls: ['app.css']
{{ '}' }})
export class AppComponent{{ '{' }}
{{ '}' }}</code></pre>
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

