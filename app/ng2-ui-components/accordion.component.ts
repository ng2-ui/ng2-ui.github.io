import { Component } from '@angular/core';

let code: any = {};
code.html= `
  <div ng2-collapsable
    selected="js"
    selected-index-class="selected"
    selected-contents-class="selected">
    <div index="html">HTML</div>
    <div contents="html">HTML {{foo}}</div>
    
    <div index="js">Javascript</div>
    <div contents="js">Javascript {{bar}}</div>
    
    <div index="css">Css</div>
    <div contents="css">Style Sheet</div>
  </div>`;
code.js = `
  import { Component } from '@angular/core';

  @Component({
    templateUr: 'app.html'
  })
  export class AppComponent {
    foo: any = 'foo';
    bar: any = 'bar';
  }`;
@Component({
  template: `
    <div class="container page-title">
      <h1>Accordion</h1>
    </div>
    <div class="container">
      ${code.html}
      <div class="spacer x2"></div>
      <div ng2-tab> 
        <div class="tabs">
          <div index="html">HTML</div>
          <div index="js">Javascript</div>
        </div>
        <div class="tab-contents">
          <div contents="html">
            <pre>{{code.html | htmlCode}}</pre>
          </div>
          <div contents="js">
            <pre>{{code.js | htmlCode }}</pre>
          </div>
        </div>
      </div>
    </div>`
})
export class AccordionComponent {
  foo: any = 'foo';
  bar: any = 'bar';
  code: string = code;

  ngAfterViewInit(): void {
    window.scroll(0,0);
  }
}
