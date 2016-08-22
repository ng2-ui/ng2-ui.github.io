import { Component } from '@angular/core';

@Component({
  template: `
    <div class="container page-title" xmlns="http://www.w3.org/1999/html">
      <h1>Infinite List</h1>
    </div>
    <div class="container">
    
      <h2>Vertically</h2>
      <ul ng2-infinite-list  class="infinite-list"
          (endVisible)="loadMore(set1)">
        <li *ngFor="let item of set1.list">{{item+1}}</li>
        <div ng2-infinite-list-end>
          <div *ngIf="set1.loadingInProgress">Loading</div>
          <div *ngIf="set1.endOfList">End Of List</div>
        </div>
      </ul>
      loading in progress : {{set1.loadingInProgress}};
      <ng2-tab>
        <div class="tabs">
           <div index="html">HTML</div>
           <div index="js">Javascript</div>
         </div> 
         <div class="tab-contents">
           <div contents="html">
<pre><code class="language-markup"
>&lt;ul ng2-infinite-list  class="infinite-list"
          (endVisible)="loadMore(set1)">
        &lt;li *ngFor="let item of set1.list">&123;&123;item+1&125;&125;&lt;/li>
        &lt;div ng2-infinite-list-end>
          &lt;div *ngIf="set1.loadingInProgress">Loading&lt;/div>
          &lt;div *ngIf="set1.endOfList">End Of List&lt;/div>
        &lt;/div>
      &lt;/ul></code></pre>
           </div>
           <div contents="js">
<pre><code class="language-javascript"
>import &123; Component &125; from '@angular/core';

@Component(&123;
  templates: 'app.tpl.html'
&125;)  
export class AppComponent &123;

  set1: any = &123;
    limit: 10, offset: 0, endOfList: false, loadingInProgress: false, list: []
  &125;;

  loadMore(data: any): void &123;
    if (!data.loadingInProgress) &123;
      if (data.offset > 99) &123;    // detect the end of list
        data.endOfList = true;
      &125; else &123;
        setTimeout(() => data.loadingInProgress = true);
        setTimeout(() => &123;      // mimics http call delay
          let max = data.offset + data.limit;
          for (let i = data.offset; i < max; i++) &123;
            data.list.push(i);
          &125;
          data.offset = max;
          data.loadingInProgress = false;
        &125;, 1000);
      &125;
    &125;
  &125;
&125;</code></pre>
           </div>
         </div>
      </ng2-tab>
    
      <div class="spacer x3"></div>
      <h2>Horizontally</h2>
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
      <ng2-tab>
        <div class="tabs">
           <div index="html">HTML</div>
           <div index="js">Javascript</div>
         </div> 
         <div class="tab-contents">
           <div contents="html">
<pre><code class="language-markup"
>&lt;div ng2-infinite-list horizontal="true"
           class="infinite-list horizontal"
           (endVisible)="loadMore(set2)">
        &lt;div *ngFor="let item of set2.list">&123;&123;item+1&125;&125;&lt;/div>
        &lt;div ng2-infinite-list-end>
        &nbsp;
        &lt;div *ngIf="set2.loadingInProgress">Loading&lt;/div>
        &lt;div *ngIf="set2.endOfList">End Of List&lt;/div>
        &lt;/div>
      &lt;/div>
</code></pre>
           </div>
           <div contents="js">
<pre><code class="language-javascript"
>import &123; Component &125; from '@angular/core';

@Component(&123;
  templates: 'app.tpl.html'
&125;)  
export class AppComponent &123;

  set2: any = &123;
    limit: 10, offset: 0, endOfList: false, loadingInProgress: false, list: []
  &125;;

  loadMore(data: any): void &123;
    if (!data.loadingInProgress) &123;
      if (data.offset > 99) &123;    // detect the end of list
        data.endOfList = true;
      &125; else &123;
        setTimeout(() => data.loadingInProgress = true);
        setTimeout(() => &123;      // mimics http call delay
          let max = data.offset + data.limit;
          for (let i = data.offset; i < max; i++) &123;
            data.list.push(i);
          &125;
          data.offset = max;
          data.loadingInProgress = false;
        &125;, 1000);
      &125;
    &125;
  &125;
&125;</code></pre>
           </div>
         </div>
      </ng2-tab>
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



