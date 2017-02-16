import { Component } from '@angular/core';

let code: any = {title:[], html: [], js: []};
code.title[0] = "Vertically";
code.html[0] =`
  <ul ng2-infinite-list  class="infinite-list"
      (endVisible)="loadMore(set1)">
    <li *ngFor="let item of set1.list">{{item+1}}</li>
    <div ng2-infinite-list-end>
      <div *ngIf="set1.loadingInProgress">Loading</div>
      <div *ngIf="set1.endOfList">End Of List</div>
    </div>
  </ul>
  loading in progress : {{set1.loadingInProgress}};
`;
code.js[0] =`
  import { Component } from '@angular/core';

  @Component({
    templates: 'app.tpl.html'
  })  
  export class AppComponent {

    set1: any = {
      limit: 10, offset: 0, endOfList: false, loadingInProgress: false, list: []
    };

    loadMore(data: any): void {
      if (!data.loadingInProgress) {
        if (data.offset > 99) {    // detect the end of list
          data.endOfList = true;
        } else {
          setTimeout(() => data.loadingInProgress = true);
          setTimeout(() => {      // mimics http call delay
            let max = data.offset + data.limit;
            for (let i = data.offset; i < max; i++) {
              data.list.push(i);
            }
            data.offset = max;
            data.loadingInProgress = false;
          }, 1000);
        }
      }
    }
  }
`;

code.title[1] = "Horizontally";
code.html[1] =`
  <div ng2-infinite-list horizontal="true"
       class="infinite-list horizontal"
       (endVisible)="loadMore(set2)">
    <div *ngFor="let item of set2.list">{{item+1}}</div>
      <div ng2-infinite-list-end>
      &nbsp;
      <div *ngIf="set2.loadingInProgress">Loading</div>
      <div *ngIf="set2.endOfList">End Of List</div>
    </div>
  </div>
  loading in progress : {{set2.loadingInProgress}}      
`;
code.js[1] =`
  import { Component } from '@angular/core';

  @Component({
    templates: 'app.tpl.html'
  })  
  export class AppComponent {

    set2: any = {
      limit: 10, offset: 0, endOfList: false, loadingInProgress: false, list: []
    };

    loadMore(data: any): void {
      if (!data.loadingInProgress) {
        if (data.offset > 99) {    // detect the end of list
          data.endOfList = true;
        } else {
          setTimeout(() => data.loadingInProgress = true);
          setTimeout(() => {      // mimics http call delay
            let max = data.offset + data.limit;
            for (let i = data.offset; i < max; i++) {
              data.list.push(i);
            }
            data.offset = max;
            data.loadingInProgress = false;
          }, 1000);
        }
      }
    }
  }
`;

@Component({
  template: `
    <div class="container page-title" xmlns="http://www.w3.org/1999/html">
      <h1>Infinite List</h1>
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
      
   </div> 
`,
  styles: [`
    .infinite-list {
      overflow: auto;
      border: 5px solid #999;
      height: 200px;
      position: relative;
    }
    .infinite-list > * {
      min-height: 20px
    }

    .infinite-list > *:nth-child(odd) {
      background-color: #eee
    }

    .infinite-list.horizontal {
      height: 120px;
      white-space: nowrap;
      overflow-y: hidden;
    }
    .infinite-list.horizontal > div {
      border: 1px solid #666;
      width: 50px;
      height: 80px;
      display: inline-block;
      margin: 10px;
      vertical-align: top;
    }`]
})
export class InfiniteListComponent {
  code: any = code;

  set1: any = {
    limit: 10, offset: 0, endOfList: false, loadingInProgress: false, list: []
  };

  set2: any = {
    limit: 10, offset: 0, endOfList: false, loadingInProgress: false, list: []
  };

  ngAfterViewInit(): void {
    window.scroll(0,0);
  }

  loadMore(data: any): void {
    if (!data.loadingInProgress) {
      if (data.offset > 99) {    // detect the end of list
        data.endOfList = true;
      } else {
        setTimeout(() => data.loadingInProgress = true);
        setTimeout(() => {      // mimics http call delay
          let max = data.offset + data.limit;
          for (let i = data.offset; i < max; i++) {
            data.list.push(i);
          }
          data.offset = max;
          data.loadingInProgress = false;
        }, 1000);
      }
    }
  }
}



