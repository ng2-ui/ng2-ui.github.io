import { Component } from '@angular/core';

@Component({
  template: `
    <div class="container page-title">
      <h1>Tooltip</h1>
    </div>
    <div class="container">
      
      <div ng2-tooltip="This is my tooltip">
        tooltip 1
        <div ng2-tooltip="this is also tootip">
          tooltip 2 
          <div ng2-tooltip="this is too tootip">
            tooltip 3
          </div>
        </div>
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
>&lt;div ng2-tooltip="This is my tooltip">
  tooltip 1
  &lt;div ng2-tooltip="this is also tootip">
    tooltip 2 
    &lt;div ng2-tooltip="this is too tootip">
      tooltip 3
    &lt;/div>
  &lt;/div>
&lt;/div></code></pre>
          </div>
          <div contents="js">
<pre><code class="language-javascript"
>import &123; Component &125; from '@angular/core';

@Component(&123;
  templateUr: 'app.html'
&125;)
export class AppComponent&123;
&125;</code></pre>
          </div>
          <div contents="css">
<pre><code class="language-css"
>[ng2-tooltip] &123;margin: 40px; border: 1px solid #ccc &125;

[ng2-tooltip] .tooltip-contents &123;
  border: 1px solid #ccc; padding: 5px
&125;
[ng2-tooltip] .tooltip-down-arrow &123;
  height: 10px;
&125;
[ng2-tooltip] .tooltip-down-arrow:before &123;
  content: '';
  display: block;
  position: absolute;
  width: 10px;
  height: 10px;
  left: 45%;
  bottom: 5px;
  background: #FFFFFF;
  border-left:1px solid #ccc;
  border-bottom:1px solid #ccc;
  transform:rotate(-45deg);
&125;</code></pre>
          </div>
        </div>
      </ng2-tab>
      
      Plunker Example: https://plnkr.co/edit/keOHIe?p=preview
    </div>`
})
export class TooltipComponent {
  ngAfterViewInit(): void {
    window.scroll(0,0);
  }
}
