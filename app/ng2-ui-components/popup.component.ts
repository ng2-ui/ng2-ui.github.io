import {Component, ViewChild} from '@angular/core';
import { Ng2PopupComponent, Ng2MessagePopupComponent } from 'ng2-ui';

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
    
      <ng2-popup #popup></ng2-popup>
      <br/>
      {{message}}
      <br/>
      
      <button (click)="openPopup('small', 'Hello Small Popup')">open small message popup</button>
      <br/>
      <button (click)="openPopup('medium', 'Hello Medium Popup')">open medium message popup</button>
      <br/>
      <div class="spacer"></div>
      <ng2-tab>
        <div class="tabs">
           <div index="html">HTML</div>
           <div index="js">Javascript</div>
         </div> 
         <div class="tab-contents">
           <div contents="html">
<pre><code class="language-markup"
>&lt;button (click)="openPopup('small', 'Hello Small Popup')">open small message popup&lt;/button>
&lt;br/>
&lt;button (click)="openPopup('medium', 'Hello Medium Popup')">open medium message popup&lt;/button>
&lt;br/>
&lt;ng2-popup #popup>&lt;/ng2-popup></code></pre>
          </div>
          <div contents="js">
<pre><code class="language-javascript"
>import &123;Component, ViewChild&125; from '@angular/core';
import &123; Ng2PopupComponent, Ng2MessagePopupComponent &125; from 'ng2-ui';

export class popupcomponent &123;
  @ViewChild(Ng2PopupComponent) popup: Ng2PopupComponent;
  message: string;

  openPopup(size, title) &123;
    this.popup.open(Ng2MessagePopupComponent, &123;
      classNames: size,
      title: title,
      message: "This is message given using popup.open()",
      buttons: &123;
        OK: () => &123;
          this.message = "Ok button is pressed";
        &125;,
        CANCEL: () => &123;
          this.message = "Cancel button is pressed";
          this.popup.close();
        &125;
      &125;
    &125;);
  &125;
&125;</code></pre>
          </div>
         </div>
      </ng2-tab>
      
      <div class="spacer"></div>
      <button (click)="openCustomPopup()">open custom popup</button>
      <br/>
      <div class="spacer"></div>
      <ng2-tab>
        <div class="tabs">
           <div index="html">HTML</div>
           <div index="js">Javascript</div>
         </div> 
         <div class="tab-contents">
           <div contents="html">
<pre><code class="language-markup"
>&lt;button (click)="openCustomPopup()">open custom popup&lt;/button>
&lt;br/>
&lt;ng2-popup #popup>&lt;/ng2-popup></code></pre>
          </div>
          <div contents="js">
<pre><code class="language-javascript"
>import &123;Component, ViewChild&125; from '@angular/core';
import &123; Ng2PopupComponent &125; from 'ng2-ui';

@Component(&123;
  template: \`
  &lt;p>This is custom popup&lt;/p>
  \\&123;\\&123;number\\&125;\\&125; &lt;button (click)="number = number+1">increase number&lt;/button>&lt;br/>
  &lt;button (click)="popup.close()">close&lt;/button>
  \`
&125;)
class CustomPopupComponent &123;
  number: number = 0;
&125;

export class popupcomponent &123;
  @ViewChild(Ng2PopupComponent) popup: Ng2PopupComponent;
  message: string;

  openCustomPopup() &123;
    this.popup.open(CustomPopupComponent, &123;
      classNames: 'custom',
      closeButton: false
    &125;);
  &125;
&125;</code></pre>
          </div>
         </div>
      </ng2-tab>
      
    </div>`
})
export class PopupComponent {
  @ViewChild(Ng2PopupComponent) popup: Ng2PopupComponent;
  message: string;

  ngafterviewinit(): void {
    window.scroll(0,0);
  }

  openPopup(size: string, title: string) {
    this.popup.open(Ng2MessagePopupComponent, {
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
