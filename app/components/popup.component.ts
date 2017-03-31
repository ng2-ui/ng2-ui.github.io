import {Component, ViewChild} from '@angular/core';
import { NguiPopupComponent, NguiMessagePopupComponent } from '@ngui/ngui';

let code: any = {title:[], html: [], js: [], css: []};
code.title[0] = "Popup 1";
code.html[0] = `
  <ngui-popup #popup></ngui-popup>
  <br/>
  {{message}}
  <br/>
  
  <button (click)="openPopup('small', 'Hello Small Popup')">open small message popup</button>
  <br/>
  <button (click)="openPopup('medium', 'Hello Medium Popup')">open medium message popup</button>
  <br/>
`;
code.js[0] = `
  import { Component, ViewChild } from '@angular/core';
  import { NguiPopupComponent, NguiMessagePopupComponent } from 'ngui-ui';

  export class popupComponent {
    @ViewChild(NguiPopupComponent) popup: NguiPopupComponent;
    message: string;

    openPopup(size, title) {
      this.popup.open(NguiMessagePopupComponent, {
        classNames: size,
        title: title,
        message: "This is message given using popup.open()",
        buttons: {
          OK: () => {
            this.message = "Ok button is pressed";
          },
          CANCEL: () => {
            this.message = "Cancel button is pressed";
            this.popup.close();
          }
        }
      });
    }
  }
`;

code.title[1] = "Custom Popup";
code.html[1] = `
  <div class="spacer"></div>
  <button (click)="openCustomPopup()">open custom popup</button>
  <br/>
  <div class="spacer"></div>
`;
code.js[1] = `
  import {Component, ViewChild} from '@angular/core';
  import { NguiPopupComponent } from 'ngui-ui';

  @Component({
    template: \`
    &lt;p>This is custom popup&lt;/p>
    {{number}} &lt;button (click)="number = number+1">increase number&lt;/button>&lt;br/>
    &lt;button (click)="popup.close()">close&lt;/button>
    \`
  })
  class CustomPopupComponent {
    number: number = 0;
  }

  export class popupComponent {
    @ViewChild(NguiPopupComponent) popup: NguiPopupComponent;
    message: string;

    openCustomPopup() {
      this.popup.open(CustomPopupComponent, {
        classNames: 'custom',
        closeButton: false
      });
    }
  }
`;

@Component({
  template: `
    <p>This is custom popup</p>
    {{number}} <button (click)="number = number+1">increase number</button><br/>
    <button (click)="popup.close()">close</button>`
})
class CustomPopupComponent {
  number: number = 0;
}

@Component({
  template: `
    <div class="container page-title">
      <h1>Popup</h1>
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
      
      <h2> {{code.title[1]}} </h2>
      <div class="spacer x3"></div>
      <div class="container round-border">
        <p>${code.html[1]}
        <ngui-tab>
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
        </ngui-tab>
      </div>
      <div class="spacer x4"></div>
    </div>`
})
export class PopupComponent {
  code: any = code;

  @ViewChild(NguiPopupComponent) popup: NguiPopupComponent;
  message: string;

  ngafterviewinit(): void {
    window.scroll(0,0);
  }

  openPopup(size: string, title: string) {
    this.popup.open(NguiMessagePopupComponent, {
      classNames: size,
      title: title,
      message: "This is message given using popup.open()",
      buttons: {
        OK: () => {
          this.message = "Ok button is pressed";
        },
        CANCEL: () => {
          this.message = "Cancel button is pressed";
          this.popup.close();
        }
      }
    });
  }

  openCustomPopup() {
    this.popup.open(CustomPopupComponent, {
      classNames: 'custom',
      closeButton: false,
    });
  }
}
