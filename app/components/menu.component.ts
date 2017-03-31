import { Component } from '@angular/core';

let code: any = {title:[], html: [], js: [], css: []};
code.title[0] = "Dropdown Menu";
code.html[0] =`
  <div>
    <ul class="horizontal-menu">
      <li> Item 1
        <ul ngui-menu="bottom">
          <li> Menu Item 1-1 </li>
          <li> Menu Item 1-2 </li>
          <li> Menu Item 1-3 </li>
        </ul>
      </li>
      
      <li> Item 2
        <ul ngui-menu="bottom">
          <li> Menu Item 2-1 </li>
          <li> Item 2-2 
            <ul ngui-menu="right">
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
`;
code.js[0] =`
  import { Component } from '@angular/core';

  @Component({
    templateUr: 'app.html',
    styleUrls: ['app.css']
  })
  export class AppComponent{
  }
`;
code.css[0] = `ul.horizontal-menu,
  .has-ngui-menu ul[ngui-menu]
  {
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
  }
  ul.horizontal-menu > li {
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
  }
  ul.horizontal-menu > li:hover,
  .has-ngui-menu li:hover {
    color: #ccc;
  }
  ul.horizontal-menu > li:hover ul,
  .has-ngui-menu li:hover ul {
    color: #fff;
  }
  .dropdown-menu, .right-side-menu, .bottom-menu {
    display: inline-block;
  }
  ul.horizontal-menu li, 
  ul.dropdown-menu li,
  ul.bottom-menu li {
    z-index: 100;
  
  .has-ngui-menu.active {
    color: #fff;
  }
  .has-ngui-menu::after {
    content: '\25bc';
    display: inline-block;
    padding: 6px 12px;
    text-align: center;
    float: right;
    font-size: 8px;
    line-height: 13px;
  }
  .has-ngui-menu.active::after {
    color: #333;
  }

  .has-ngui-menu ul[ngui-menu] {
    background-color: #fff;
    display: none;
    list-style: none;
    margin: 0;
    padding: 0
  }
  .has-ngui-menu.active > ul[ngui-menu] {
    display: inline-block;
  }
  .has-ngui-menu > ul[ngui-menu] > li {
    display: block;
    margin: 0;
    padding: 10px;
    white-space: nowrap;
  }
`;

code.title[1] = "Right-Side Menu";
code.html[1] =`
  <div class="right-side-menu">
    Menu
    <ul ngui-menu="right">
      <li> Menu Item 1 
        <ul ngui-menu="right">
          <li> Menu Item 1-1
          <li> Menu Item 1-2 
          <li> Menu Item 1-3
        </ul>
      <li> Menu Item 2
        <ul ngui-menu="right">
          <li> Menu Item 2-1 &nbsp; &nbsp; &nbsp;
          <li> Menu Item 2-2 
            <ul ngui-menu="right">
              <li> Menu Item 2-2-1 
              <li> Menu Item 2-2-2 
              <li> Menu Item 2-2-3 
            </ul>
          
          <li> Menu Item 2-3 
        </ul>
      <li>Menu Item 3 &nbsp; &nbsp; &nbsp;
    </ul>
  </div>
`;
code.js[1] =`
  import { Component } from '@angular/core';

  @Component({
    templateUr: 'app.html',
    styleUrls: ['app.css']
  })
  export class AppComponent{
  }
`;

code.title[2] = "Bottom-Side Menu";
code.html[2] =`
  <div class="spacer x8"></div>
  <div class="bottom-menu">
    <ul class="horizontal-menu">
      <li> Menu Item 1
        <ul ngui-menu="top">
          <li> Menu Item 1-1
          <li> Menu Item 1-2 
          <li> Menu Item 1-3
        </ul>
      <li> Menu Item 2
        <ul ngui-menu="top">
          <li> Menu Item 2-1 
          <li> Menu Item 2-2
          <li> Menu Item 2-3
        </ul>
      <li> Menu Item 3
        <ul ngui-menu="top">
          <li> Menu Item 3-1
          <li> Menu Item 3-2
          <li> Menu Item 3-3
        </ul>
    </ul>
  </div>
`;
code.js[2] =`
  import { Component } from '@angular/core';

  @Component({
    templateUr: 'app.html',
    styleUrls: ['app.css']
  })
  export class AppComponent{
  }
`;
@Component({
  template: `
    <div class="container page-title">
      <h1>Menu</h1>
    </div>
    <div class="container">
    
      <h2> {{code.title[0]}} </h2>
      <div class="spacer x3"></div>
      <div class="container round-border">
        <p>${code.html[0]}
        <ngui-tab>
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
        </ngui-tab>
      </div>
      <div class="spacer x4"></div>
      
      <h2> {{code.title[1]}} </h2>
      <div class="spacer x3"></div>
      <div class="container round-border">
        <p>${code.html[1]}
        <ngui-tab>
          <div class="tabs">
             <div index="html">HTML</div>
             <div index="js">Javascript</div>
             <div index="css">Css</div>
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
        </ngui-tab>
      </div>
      <div class="spacer x4"></div>
      
      
      <h2> {{code.title[2]}} </h2>
      <div class="spacer x3"></div>
      <div class="container round-border">
        <p>${code.html[2]}
        <ngui-tab>
          <div class="tabs">
             <div index="html">HTML</div>
             <div index="js">Javascript</div>
             <div index="css">Css</div>
           </div> 
           <div class="tab-contents">
             <div contents="html">
               <pre><code>{{code.html[2]}}</code></pre>
             </div>
             <div contents="js">
               <pre><code>{{code.js[2]}}</code></pre>
             </div>
             <div contents="css">
               <pre><code>{{code.css[0]}}</code></pre>
             </div>
           </div>
        </ngui-tab>
      </div>
      <div class="spacer x4"></div>
    </div>`
})
export class MenuComponent {
  code: any = code;
  ngAfterViewInit(): void {
    window.scroll(0,0);
  }
}

