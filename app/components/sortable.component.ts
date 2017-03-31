import { Component } from '@angular/core';

let code: any = {title:[], html: [], js: [], css: []};
code.title[0] = "Drag and Drop Elements To Re-order";
code.html[0] = `
  <ul ngui-sortable>
    <li id="order">Order</li>
    <li id="me">Me</li>
    <li id="right">Right</li>
    <li id="the">The</li>
    <li id="into">Into</li>
    <li id="put">Put</li>
  </ul>
`;
code.js[0] = `
  import { Component } from '@angular/core';

  @Component({
    templateUr: 'app.html'
  })
  export class AppComponent {
    order: string[] = [];
  }
`;
code.css[0] = `
  ul[ngui-sortable] }
     padding: 10px; 
     border: 1px solid #ccc;
    list-style: none; 
    display: block
  }
  ul[ngui-sortable] li {
    padding: 10px 5px;
    background: #4986e7;
    color: #fff; 
    border: 1px solid #fff;
    display: block; 
    position: relative
  }
  ul[ngui-sortable] li.drag-enter {
    border-top: 2px solid yellow;
  }
`;

@Component({
  template: `
    <h1>Sortable</h1>
    
    <div class="container">
    
      <h2> {{code.title[0]}} </h2>
      <div class="spacer x3"></div>
      <div class="container round-border">
        <p>${code.html[0]}
        <ngui-tab>
          <div class="tabs">
             <div index="html">HTML</div>
             <div index="js">Javascript</div>
             <div index="css">CSS</div>
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
    </div>`,
  styles: [`
    ul[ngui-sortable] {
       padding: 10px; 
       border: 1px solid #ccc;
      list-style: none; 
      display: block
    }
    ul[ngui-sortable] li {
      padding: 10px 5px;
      background: #4986e7;
      color: #fff; 
      border: 1px solid #fff;
      display: block; 
      position: relative
    }
    ul[ngui-sortable] li.drag-enter {
      border-top: 2px solid yellow;
    }
  `]
})
export class SortableComponent {
  code: any = code;
  ngAfterViewInit(): void {
    window.scroll(0,0);
  }
}

