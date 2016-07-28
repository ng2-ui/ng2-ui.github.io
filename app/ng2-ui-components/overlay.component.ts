import { Component } from '@angular/core';
import { NG2_DIRECTIVES } from 'ng2-ui';

@Component({
  directives: [ NG2_DIRECTIVES ],
  template: `
    <div class="container bg-sky title">
      <h1>Overlay</h1>
    </div>
    <div class="container">
      Contents Coming Soon<br/> Contents Coming Soon<br/> Contents Coming Soon<br/> Contents Coming Soon<br/> Contents Coming Soon<br/> Contents Coming Soon<br/> Contents Coming Soon<br/> Contents Coming Soon<br/> Contents Coming Soon<br/> Contents Coming Soon<br/> Contents Coming Soon<br/> Contents Coming Soon<br/> Contents Coming Soon<br/> Contents Coming Soon<br/> Contents Coming Soon<br/> Contents Coming Soon<br/> Contents Coming Soon<br/> Contents Coming Soon<br/> Contents Coming Soon<br/> Contents Coming Soon<br/> Contents Coming Soon<br/> Contents Coming Soon<br/> Contents Coming Soon<br/> Contents Coming Soon<br/> Contents Coming Soon<br/> Contents Coming Soon<br/> Contents Coming Soon<br/> Contents Coming Soon<br/> Contents Coming Soon<br/> Contents Coming Soon<br/> Contents Coming Soon<br/> Contents Coming Soon<br/> Contents Coming Soon<br/> Contents Coming Soon<br/>
    </div>`
})
export class OverlayComponent{
  ngAfterViewInit(): void {
    window.scroll(0,0);
  }
}
