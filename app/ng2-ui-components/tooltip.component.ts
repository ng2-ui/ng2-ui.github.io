import { Component } from '@angular/core';

let code: any = {title:[], html: [], js: [], css: []};
code.title[0] = "Tooltip Example";
code.html[0] = `
  <div ng2-tooltip="This is my tooltip">
    tooltip 1
    <div ng2-tooltip="this is also tootip">
      tooltip 2 
      <div ng2-tooltip="this is too tootip">
        tooltip 3
      </div>
    </div>
  </div>
`;
code.js[0] = `
  import { Component } from '@angular/core';

  @Component({
    templateUr: 'app.html'
  })
  export class AppComponent{
  }
`;
code.css[0] = `
  [ng2-tooltip] {margin: 40px; border: 1px solid #ccc }

  [ng2-tooltip] .tooltip-contents {
    border: 1px solid #ccc; padding: 5px
  }
  [ng2-tooltip] .tooltip-down-arrow {
    height: 10px;
  }
  [ng2-tooltip] .tooltip-down-arrow:before {
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
  }
`;

@Component({
  template: `
    <div class="container page-title">
      <h1>Tooltip</h1>
    </div>
    <div class="container">
      
      <h2> {{code.title[0]}} </h2>
      <div class="spacer x3"></div>
      <div class="container round-border">
        <p>${code.html[0]}
        <ng2-tab>
          <div class="tabs">
             <div index="html">HTML</div>
             <div index="js">Javascript</div>
           </div> 
           <div class="tab-contents">
             <div contents="html">
               <pre><code>{{code.html[0]}}</code></pre>
             </div>
             <div contents="js">
               <pre><code>{{code.js[0]}}</code></pre>
             </div>
           </div>
        </ng2-tab>
      </div>
      <div class="spacer x4"></div>
      
    </div>`
})
export class TooltipComponent {
  code: any = code;
  ngAfterViewInit(): void {
    window.scroll(0,0);
  }
}
