import { Component } from '@angular/core';

let code: any = {title:[], html: [], js: [], css: []};
code.title[0] = "Parallax Scroll 1";
code.html[0] = `
  <div ng2-parallax style="height: 400px">
    <img src="http://materializecss.com/images/parallax1.jpg" />
  </div>
`;
code.js[0] = `
  import { Component } from '@angular/core';
  @Component({templateUr: 'app.html'})
  export class AppComponent{}
`;

code.title[1] = "Parallax Scroll 2";
code.html[1] = `
  <div ng2-parallax style="height: 400px">
    <img src="http://materializecss.com/images/parallax2.jpg" />
  </div>
`;
code.js[1] = `
  import { Component } from '@angular/core';
  @Component({templateUr: 'app.html'})
  export class AppComponent{}
`;

@Component({
  template: `
    <div class="container page-title">
      <h1>Parallax Scroll</h1>
    </div>
    <div class="container">
      <div> 
        <p>
          <b>Parallax scrolling</b> is a scrolling technique used computer graphics
          in which background images move more slowly than images in the foreground, 
          creating the illusion of depth and immersion.
        </p>
        <p>
          scroll up/down and see how image changes.
          To see the proper parallax effect, the container window
          should be smaller than the image behind.
        </p>
      </div>
      
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
      
      <div style="height: 400px">
         This space is intentionally added for scrolling
      </div>
      
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
      
      <div style="height: 400px">
         This space is intentionally added for scrolling
      </div>
      
    </div>`
})
export class ParallaxScrollComponent {
  code: any = code;

  ngAfterViewInit(): void {
    window.scroll(0,0);
  }
}
