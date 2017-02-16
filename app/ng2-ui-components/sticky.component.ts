import { Component } from '@angular/core';

let code: any = {title:[], html: [], js: [], css: []};
code.title[0] = "Sticky On The Right Side";
code.html[0] = `
  <div class="sticky-container">
    <div class="sticky-float-right">
      <div ng2-sticky style="float: right"> float: right </div>
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
code.css[0] =`
  .sticky-container > div {
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
  }
`;

code.title[1] = "Sticy On The Left-Side";
code.html[1] = `
  <div class="sticky-container">
    <div class="sticky-float-left">
      <div ng2-sticky style="float: left"> float: left </div>
    </div>
  </div>
`;
code.js[1] = `
  import { Component } from '@angular/core';

  @Component({
    templateUr: 'app.html'
  })
  export class AppComponent{
  }
`;
code.css[1] = `
  .sticky-container > div {
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
`;

code.title[2] = "Sticky In The Middle";
code.html[2] = `
  <div class="sticky-container">
    <div class="div-middle">
      <div>One</div>
      <div>After</div>
      <div>Another</div>
      <div ng2-sticky> &lt;div> tag in the middle </div>
      <div>One</div>
      <div>After</div>
      <div>Another</div>
    </div>
  </div>
`;
code.js[2] = `
  import { Component } from '@angular/core';

  @Component({
    templateUr: 'app.html'
  })
  export class AppComponent{
  }
`;
code.css[2] = `
  .sticky-container > div {
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
`;

@Component({
  template: `
    <div class="container page-title">
      <h1>Sticky</h1>
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
             <div index="css">Css</div>
           </div> 
           <div class="tab-contents">
             <div contents="html">
               <pre><code>{{code.html[0]}}</code></pre>
             </div>
             <div contents="js">
               <pre><code>{{code.js[0]}}</code></pre>
             </div>
             <div contents="css">
               <pre><code>{{code.css[0]}}</code></pre>
             </div>
           </div>
        </ng2-tab>
      </div>
      
      <h2> {{code.title[1]}} </h2>
      <div class="spacer x3"></div>
      <div class="container round-border">
        <p>${code.html[1]}
        <ng2-tab>
          <div class="tabs">
             <div index="html">HTML</div>
             <div index="js">Javascript</div>
             <div index="css">CSS</div>
           </div> 
           <div class="tab-contents">
             <div contents="html">
               <pre><code>{{code.html[1]}}</code></pre>
             </div>
             <div contents="js">
               <pre><code>{{code.js[1]}}</code></pre>
             </div>
             <div contents="css">
               <pre><code>{{code.css[0]}}</code></pre>
             </div>
           </div>
        </ng2-tab>
      </div>
      
      <h2> {{code.title[2]}} </h2>
      <div class="spacer x3"></div>
      <div class="container round-border">
        <p>${code.html[2]}
        <ng2-tab>
          <div class="tabs">
             <div index="html">HTML</div>
             <div index="js">Javascript</div>
             <div index="css">CSS</div>
           </div> 
           <div class="tab-contents">
             <div contents="html">
               <pre><code>{{code.html[2]}}</code></pre>
             </div>
             <div contents="js">
               <pre><code>{{code.js[2]}}</code></pre>
             </div>
             <div contents="css">
               <pre><code>{{code.css[2]}}</code></pre>
             </div>
           </div>
        </ng2-tab>
      </div>
      
      <div class="spacer x4"></div>
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
  code: any = code;

  ngAfterViewInit(): void {
    window.scroll(0,0);
  }
}
