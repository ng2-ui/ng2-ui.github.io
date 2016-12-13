import { Component } from '@angular/core';
import { Ng2ScrollableDirective } from 'ng2-ui';

@Component({
  template: `
    <div class="container page-title">
      <h1>Scrollable</h1>
    </div>
    <div class="container">
      <h2>Scroll Within a Section Vertically</h2>
      <ul>
        <li *ngFor="let num of [1,2,3,4,5,6,7,8,9,10]"
            [class.current]="id == 's'+ num "
            (click)="scrollTo('#s'+num, '#v-scrollable')">{{num}}
      </ul>

      scrolled to: {{id}}
      <div id="v-scrollable" class="scrollable section"
           ng2-scrollable (elementVisible)="id = $event.id">
        <div id="s1">Section 1  (scroll to here)</div>
        <div id="s2">Section 2  (scroll to here)</div>
        <div id="s3">Section 3  (scroll to here)</div>
        <div id="s4">Section 4  (scroll to here)</div>
        <div id="s5">Section 5  (scroll to here)</div>
        <div id="s6">Section 6  (scroll to here)</div>
        <div id="s7">Section 7  (scroll to here)</div>
        <div id="s8">Section 8  (scroll to here)</div>
        <div id="s9">Section 9  (scroll to here)</div>
        <div id="s10">Section 10  (scroll to here)</div>
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
>&lt;ul>
  &lt;li *ngFor="let num of [1,2,3,4,5,6,7,8,9,10]"
      [class.current]="id == 's'+ num "
      (click)="scrollTo('#s'+num, '#v-scrollable')">num
&lt;/ul>

scrolled to: id
&lt;div id="v-scrollable" class="scrollable section"
     ng2-scrollable (elementVisible)="id = $event.id">
  &lt;div id="s1">Section 1  (scroll to here)&lt;/div>
  &lt;div id="s2">Section 2  (scroll to here)&lt;/div>
  &lt;div id="s3">Section 3  (scroll to here)&lt;/div>
  &lt;div id="s4">Section 4  (scroll to here)&lt;/div>
  &lt;div id="s5">Section 5  (scroll to here)&lt;/div>
  &lt;div id="s6">Section 6  (scroll to here)&lt;/div>
  &lt;div id="s7">Section 7  (scroll to here)&lt;/div>
  &lt;div id="s8">Section 8  (scroll to here)&lt;/div>
  &lt;div id="s9">Section 9  (scroll to here)&lt;/div>
  &lt;div id="s10">Section 10  (scroll to here)&lt;/div>
&lt;/div>
</code></pre>
          </div>
          <div contents="js">
<pre><code class="language-javascript"
>import {{ '{' }} Component {{ '}' }} from '@angular/core';
import {{ '{' }} Ng2ScrollableDirective {{ '}' }} from 'ng2-ui';

@Component({{ '{' }}
  templateUr: 'app.html'
{{ '}' }})
export class AppComponent{{ '{' }}
  id: string = 's1';
  scrollTo(selector, parentSelector, horizontal) {{ '{' }}
    Ng2ScrollableDirective.scrollTo(
      selector,       // scroll to this
      parentSelector, // scroll within (null if window scrolling)
      horizontal,     // is it horizontal scrolling
      10              // distance from top or left
    );
  {{ '}' }}
{{ '}' }}</code></pre>
          </div>
          <div contents="css">
<pre><code class="language-stylesheet"
>ul {{ '{' }}list-style: none{{ '}' }}
ul li {{ '{' }}display: inline-block; border: 1px solid #999; padding: 10px; cursor: pointer;{{ '}' }}
ul li.current {{ '{' }} background: #333; color: #fff{{ '}' }}
.scrollable {{ '{' }} height: 200px; border: 1px solid #999; position: relative;{{ '}' }}
.scrollable.window {{ '{' }} height: auto;{{ '}' }}
.scrollable > div {{ '{' }}height: 110px{{ '}' }}
.scrollable > div:nth-child(odd) {{ '{' }} background-color: #ccc{{ '}' }}
.scrollable.section {{ '{' }}overflow:auto;{{ '}' }}
</code></pre>
           </div>
         </div>
      </ng2-tab>
      
      <div class="spacer"></div>
      <h2>Scroll Within a Section Horizontally</h2>
      <ul>
        <br/>
        <li *ngFor="let num of [1,2,3,4,5,6,7,8,9,10]"
            [class.current]="hid == 'h'+ num "
            (click)="scrollTo('#h'+num, '#h-scrollable', true)">{{num}}
      </ul>

      scrolled to: {{hid}}
      <div id="h-scrollable" class="scrollable section horizontal"
           ng2-scrollable
           [horizontal]="true"
           (elementVisible)="hid = $event.id">
        <div id="h1">Section 1</div>
        <div id="h2">Section 2</div>
        <div id="h3">Section 3</div>
        <div id="h4">Section 4</div>
        <div id="h5">Section 5</div>
        <div id="h6">Section 6</div>
        <div id="h7">Section 7</div>
        <div id="h8">Section 8</div>
        <div id="h9">Section 9</div>
        <div id="h10">Section 10</div>
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
>&lt;h2>Scroll Within a Section Horizontally&lt;/h2>
&lt;ul>
  &lt;br/>
  &lt;li *ngFor="let num of [1,2,3,4,5,6,7,8,9,10]"
      [class.current]="hid == 'h'+ num "
      (click)="scrollTo('#h'+num, '#h-scrollable', true)">num
&lt;/ul>

scrolled to: hid
&lt;div id="h-scrollable" class="scrollable section horizontal"
     ng2-scrollable
     [horizontal]="true"
     (elementVisible)="hid = $event.id">
  &lt;div id="h1">Section 1&lt;/div>
  &lt;div id="h2">Section 2&lt;/div>
  &lt;div id="h3">Section 3&lt;/div>
  &lt;div id="h4">Section 4&lt;/div>
  &lt;div id="h5">Section 5&lt;/div>
  &lt;div id="h6">Section 6&lt;/div>
  &lt;div id="h7">Section 7&lt;/div>
  &lt;div id="h8">Section 8&lt;/div>
  &lt;div id="h9">Section 9&lt;/div>
  &lt;div id="h10">Section 10&lt;/div>
&lt;/div></code></pre>
          </div>
          <div contents="js">
<pre><code class="language-javascript"
>import {{ '{' }} Component {{ '}' }} from '@angular/core';
import {{ '{' }} Ng2ScrollableDirective {{ '}' }} from 'ng2-ui';

@Component({{ '{' }}
  templateUr: 'app.html'
{{ '}' }})
export class AppComponent{{ '{' }}
  hid: string = 'h1';
  scrollTo(selector, parentSelector, horizontal) {{ '{' }}
    Ng2ScrollableDirective.scrollTo(
      selector,       // scroll to this
      parentSelector, // scroll within (null if window scrolling)
      horizontal,     // is it horizontal scrolling
      10              // distance from top or left
    );
  {{ '}' }}
{{ '}' }}</code></pre>
          </div>
          <div contents="css">
<pre><code class="language-stylesheet"
>ul {{ '{' }}list-style: none{{ '}' }}
ul li {{ '{' }}display: inline-block; border: 1px solid #999; padding: 10px; cursor: pointer;{{ '}' }}
ul li.current {{ '{' }} background: #333; color: #fff{{ '}' }}
.scrollable {{ '{' }} height: 200px; border: 1px solid #999; position: relative;{{ '}' }}
.scrollable > div {{ '{' }}height: 110px{{ '}' }}
.scrollable > div:nth-child(odd) {{ '{' }} background-color: #ccc{{ '}' }}
.scrollable.section {{ '{' }}overflow:auto;{{ '}' }}

.horizontal {{ '{' }}
  height: 100px;
  width: 100%;
  max-width: 450px;
  white-space: nowrap;
  overflow-y: hidden !important;
{{ '}' }}
.horizontal > div {{ '{' }}
  border: 1px solid #666;
  width: 200px;
  height: 80px;
  display: inline-block;
  text-align: center;
{{ '}' }}</code></pre>
           </div>
         </div>
      </ng2-tab>
      
      <div class="spacer"></div>
      <h2>Scroll Within Window</h2>
      <div class="scrollable window"
           (elementVisible)="wid = $event.id"
           (elementHidden)="whid = $event.id"
           ng2-scrollable>
        <div id="w1">One</div>
        <div id="w2">Two</div>
        <div id="w3">Three</div>
        <div id="w4">Four</div>
        <div id="w5">Five</div>
        <div id="w6">Six</div>
        <div id="w7">Seven</div>
        <div id="w8">Eight</div>
        <div id="w9">Nine</div>
        <div id="w10">Ten</div>
      </div>

      <ul style="position: fixed; bottom: 0; z-index: 1; background-color: #999">
        id: {{wid}}
        <li *ngFor="let num of [1,2,3,4,5,6,7,8,9,10]"
            [class.current]="wid == 'w'+ num "
            (click)="scrollTo('#w'+num)">{{num}}</li>
      </ul> 
      <div class="spacer x4"></div>
    </div>`,
  styles: [`
    ul {list-style: none}
    ul li {display: inline-block; border: 1px solid #999; padding: 10px; cursor: pointer;}
    ul li.current { background: #333; color: #fff}
    .scrollable { height: 200px; border: 1px solid #999; position: relative;}
    .scrollable.window { height: auto;}
    .scrollable > div {height: 110px}
    .scrollable > div:nth-child(odd) { background-color: #ccc}

    ul.window {position: fixed; top: 0; left: 0; background: yellow; z-index: 1;}
    ul.window li {display: block; }
    .scrollable.section {overflow:auto;}
    
    .horizontal {
      height: 100px;
      width: 100%;
      max-width: 450px;
      white-space: nowrap;
      overflow-y: hidden !important;
    }
    .horizontal > div {
      border: 1px solid #666;
      width: 200px;
      height: 80px;
      display: inline-block;
      text-align: center;
    }
  `]
})
export class ScrollableComponent {
  ngAfterViewInit(): void {
    window.scroll(0,0);
  }

  id: string = 's1';
  hid: string = 'h1';
  wid: string = 'w1';
  scrollTo(selector: string, parentSelector: string, horizontal: boolean) {
    Ng2ScrollableDirective.scrollTo(
      selector,       // scroll to this
      parentSelector, // scroll within (null if window scrolling)
      horizontal,     // is it horizontal scrolling
      10              // distance from top or left
    );
  }
}

