import { Component } from '@angular/core';
@Component({
  template: `
    <div class="container bg-sky title">
      <h1>Infinite List</h1>
    </div>
    <div class="container">
      Contents Coming Soon<br/> Contents Coming Soon<br/> Contents Coming Soon<br/> Contents Coming Soon<br/> Contents Coming Soon<br/> Contents Coming Soon<br/> Contents Coming Soon<br/> Contents Coming Soon<br/> Contents Coming Soon<br/> Contents Coming Soon<br/> Contents Coming Soon<br/> Contents Coming Soon<br/> Contents Coming Soon<br/> Contents Coming Soon<br/> Contents Coming Soon<br/> Contents Coming Soon<br/> Contents Coming Soon<br/> Contents Coming Soon<br/> Contents Coming Soon<br/> Contents Coming Soon<br/> Contents Coming Soon<br/> Contents Coming Soon<br/> Contents Coming Soon<br/> Contents Coming Soon<br/> Contents Coming Soon<br/> Contents Coming Soon<br/> Contents Coming Soon<br/> Contents Coming Soon<br/> Contents Coming Soon<br/> Contents Coming Soon<br/> Contents Coming Soon<br/> Contents Coming Soon<br/> Contents Coming Soon<br/> Contents Coming Soon<br/>
    </div>`
})
export class InfiniteListComponent {
  ngAfterViewInit(): void {
    window.scroll(0,0);
  }
}
