import { Component } from '@angular/core';

let code: any = {title:[], html: [], js: [], css: []};
code.title[0] = "Simple Tab";
code.html[0] = `
<div ng2-tab> 
 <div class="tabs">
    <div index="html">HTML</div>
    <div index="js">Javascript</div>
  </div>
  <div class="tab-contents">
    <div contents="html">HTML  </div>
    <div contents="js">Javascript  </div>
  </div>
</div>
`;
code.js[0] = `
  import { Component } from '@angular/core';
  @Component({ templateUr: 'app.html' })
  export class AppComponent{ }
`;

code.title[1] = "Tab With Animation";
code.html[1] = `
  <ng2-tab selected="js" 
    selected-contents-class="fadeIn animated" 
    selected-index-class="selected">
    <div class="tabs">
      <div index="html">HTML</div>
      <div index="js">Javascript</div>
    </div>
    <div class="tab-contents">
      <div contents="html">HTML</div>
      <div contents="js">Javascript</div>
    </div>
  </ng2-tab>
`;
code.js[1] = `
  import { Component } from '@angular/core';
  @Component({ templateUr: 'app.html' })
  export class AppComponent{ }
`;

@Component({
  template: `
    <div class="container page-title">
      <h1>Tab</h1>
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
      
      
      <h2> {{code.title[1]}} </h2>
      <div class="spacer x3"></div>
      <div class="container round-border">
        <p>${code.html[1]}
        <ng2-tab>
          <div class="tabs">
             <div index="html">HTML</div>
             <div index="js">Javascript</div>
           </div> 
           <div class="tab-contents">
             <div contents="html">
               <pre><code>{{code.html[1]}}</code></pre>
             </div>
             <div contents="js">
               <pre><code>{{code.js[1]}}</code></pre>
             </div>
           </div>
        </ng2-tab>
      </div>
      <div class="spacer x4"></div>
      NOTE: There is a default css given by component, but a user can override the tab style.
    </div>
`
})
export class TabComponent {
  code: any = code;
  ngAfterViewInit(): void {
    window.scroll(0,0);
  }
}
