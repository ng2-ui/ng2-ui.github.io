import { Component } from '@angular/core';

@Component({
  template: `
    <div class="container page-title">
      <h1>Parallax Scroll</h1>
    </div>
    <div class="container">
      <div style="height: 400px"> 
        <p>
          <b>Parallax scrolling</b> is a scrolling technique used computer graphics
          in which background images move more slowly than images in the foreground, 
          creating the illusion of depth and immersion.
        </p>
        <p>
          scroll up/down and see how image changes.
          To see the proper parallax effect, the container window
          should be smaller than the image behind.
        </p>
      </div>
      <div ng2-parallax style="height: 400px">
        <img src="http://materializecss.com/images/parallax1.jpg" />
      </div>
      <ng2-tab>
        <div class="tabs">
           <div index="html">HTML</div>
           <div index="js">Javascript</div>
         </div> 
         <div class="tab-contents">
           <div contents="html">
<pre><code class="language-markup"
>&lt;div ng2-parallax style="height: 400px">
  &lt;img src="http://materializecss.com/images/parallax1.jpg" />
&lt;/div>
</code></pre>
          </div>
          <div contents="js">
<pre><code class="language-javascript"
>import { Component } from '@angular/core';

@Component({
  templateUr: 'app.html'
})
export class AppComponent{
}</code></pre>
          </div>
         </div>
      </ng2-tab>
      <br/>
      <br/>
      <div ng2-parallax style="height: 400px">
        <img src="http://materializecss.com/images/parallax2.jpg" />
      </div>
      <div style="height: 400px">
         This space is intentionally added for scrolling
      </div>
    </div>`
})
export class ParallaxScrollComponent {
  ngAfterViewInit(): void {
    window.scroll(0,0);
  }
}
