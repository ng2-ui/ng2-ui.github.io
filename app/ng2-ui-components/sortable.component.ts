import { Component } from '@angular/core';

@Component({
  template: `
    <div>
      <div class="spacer"></div>
      <ul ng2-sortable>
        <li id="order">Order</li>
        <li id="me">Me</li>
        <li id="right">Right</li>
        <li id="the">The</li>
        <li id="into">Into</li>
        <li id="put">Put</li>
      </ul>
      <ng2-tab>
        <div class="tabs">
           <div index="html">HTML</div>
           <div index="js">Javascript</div>
           <div index="css">Stylesheet</div>
         </div> 
         <div class="tab-contents">
           <div contents="html">
<pre><code class="language-markup">
&lt;ul ng2-sortable>
  &lt;li id="order">Order&lt;/li>
  &lt;li id="me">Me&lt;/li>
  &lt;li id="right">Right&lt;/li>
  &lt;li id="the">The&lt;/li>
  &lt;li id="into">Into&lt;/li>
  &lt;li id="put">Put&lt;/li>
&lt;/ul>
</code></pre>
          </div>
          <div contents="js">
<pre><code class="language-javascript">
import {{'{'}} Component {{'}'}} from '@angular/core';

@Component({{'{'}}
  templateUr: 'app.html'
{{'}'}})
export class AppComponent {{'{'}}
  order: string[] = [];
{{'}'}}</code></pre>
          </div>
          <div contents="css">
<pre><code class="language-stylesheet">
ul[ng2-sortable] {{'}'}}
   padding: 10px; 
   border: 1px solid #ccc;
  list-style: none; 
  display: block
{{'}'}}
ul[ng2-sortable] li {{'{'}}
  padding: 10px 5px;
  background: #4986e7;
  color: #fff; 
  border: 1px solid #fff;
  display: block; 
  position: relative
{{'}'}}
ul[ng2-sortable] li.drag-enter {{'{'}}
  border-top: 2px solid yellow;
{{'}'}}
</code></pre>
           </div>
         </div>
      </ng2-tab>
      
    </div>`,
  styles: [`
    ul[ng2-sortable] {
       padding: 10px; 
       border: 1px solid #ccc;
      list-style: none; 
      display: block
    }
    ul[ng2-sortable] li {
      padding: 10px 5px;
      background: #4986e7;
      color: #fff; 
      border: 1px solid #fff;
      display: block; 
      position: relative
    }
    ul[ng2-sortable] li.drag-enter {
      border-top: 2px solid yellow;
    }
  `]
})
export class SortableComponent {
  ngAfterViewInit(): void {
    window.scroll(0,0);
  }
}

