import { Component } from '@angular/core';
import { NguiOverlayManager } from '@ngui/ngui';

let code: any = {title:[], html: [], js: [], css: []};
code.title[0] = "Window Overlay - Modal";
code.html[0] =`
  <div id="window-loading" ngui-overlay-of="window">
    <div style="color:#fff">Loading</div>
    <button (click)="overlayManager.close('window-loading')">Close</button>
  </div>
  <button (click)="overlayManager.open('window-loading')">Show Loading For Window</button>
`;
code.js[0] =`
  import { Component } from '@angular/core';

  @Component({
    templateUr: 'app.html',
    styleUrls: ['app.css']
  })
  export class OverlayComponent{
    constructor(public overlayManager: NguiOverlayManager) {}

    ngAfterViewInit(): void {
      window.scroll(0,0);
    }
  }
`;

@Component({
  template: `
    <div class="container page-title">
      <h1>Overlay</h1>
    </div>
    <div class="container">
      <p class="page-title-description">
        Overlay is an on-the-top layer over DOM elements. Commonly this is used to have some feature to show on the top 
        of html or an element and to disappear when action is taken.
      </p>
      
      For example
      <ul>
        <li>Loading Sign</li>
        <li>Tooltip</li>
        <li>Hover Effect</li>
        <li>Etc</li>
      </ul>
      
      <h2> {{code.title[0]}} </h2>
      <div class="spacer x3"></div>
      <div class="container round-border">
        <p>${code.html[0]}
        <ngui-tab>
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
        </ngui-tab>
      </div>
      <div class="spacer x4"></div>
      
    </div>`,
  styles: [`li {list-style-position: inside}`]
})
export class OverlayComponent{
  code: any = code;
  constructor(public overlayManager: NguiOverlayManager) {}

  ngAfterViewInit(): void {
    window.scroll(0,0);
  }
}

