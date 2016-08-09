import {Component, Input} from "@angular/core";
import {Router, NavigationStart} from "@angular/router";
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs";

import {HttpCache} from './http-cache';

@Component({
  selector: 'repo-info',
  template: `
    <div *ngIf="numbersSection">
      <div *ngIf="currentUrl && currentRepo">
        <span class="numbers d-inline-block">
          <button class="btn btn-sm">
            <a href="{{currentRepo.html_url}}">
              <span class="octicon octicon-repo"></span>
              {{currentUrl.replace('/','')}}
            </a>
          </button>
        </span>
        
        <span class="numbers d-inline-block">
          <button class="btn btn-sm btn-with-count">
            <a href="{{currentRepo.html_url}}">
              <span class="octicon octicon-star"></span>
              Star           
            </a>
          </button>
          <a class="social-count" 
            href="{{currentRepo.html_url}}/stargazers">
            {{currentRepo.stargazers_count}}
          </a>
        </span>
        
        <span class="numbers d-inline-block">
          <button class="btn btn-sm">
            <a href="{{currentRepo.html_url}}/issues">
              <span class="octicon octicon-issue-opened"></span>
              {{currentRepo.open_issues}}
              Issues
            </a>
          </button>
        </span>
      </div>
    </div>
    
    <div *ngIf="contributorsSection"
      class="container p-3 border">
      <h3>Contributors</h3> 
      <ul *ngIf="contributors">
        <li class="contributor" *ngFor="let user of contributors">
          <a href="{{user.html_url}}">
           <img src="{{user.avatar_url}}" height="64" /> <br/>
           <div class="name">{{user.login}}</div>
          </a>
        </li>
        <li class="contributor">
          <a href="{{currentRepo.html_url}}">
           <div class="you">You</div><br/>
           <div class="name">Your Name</div>
          </a>
        </li>
      </ul>
    </div>
  `
})
export class RepoInfoComponent {
  @Input('contributors-section') contributorsSection: string;
  @Input('numbers-section') numbersSection: string;

  currentUrl: string;
  repositories: any[];
  currentRepo: any;
  contributors: any;

  constructor(private router: Router, private httpCache: HttpCache) {
    router.events.subscribe(event => {
      if(event instanceof NavigationStart) { //..End, ..Cancel, ..Error, etc
        this.currentUrl = event.url;
        console.log('currentUrl .........', this.currentUrl);
        if (this.repositories) {
          this.update();
        }
      }
    });
  }

  ngOnInit() {
    this.httpCache.get('https://api.github.com/users/ng2-ui/repos')
      .subscribe(resp => {
        console.log('repositories', resp);
        this.repositories = <any>resp;
        this.update();
      })
  }

  update(): void {
    let currentRepoUrl = this.getCurrentRepoUrl();
    console.log('current repo url', currentRepoUrl);

    for (var i = 0; i < this.repositories.length; i++) {
      let repo = this.repositories[i];
      if (repo.url === currentRepoUrl) {
        this.currentRepo = repo;
        console.log('currentRepo', this.currentRepo);
        break;
      }
    }

    this.getContributors(currentRepoUrl).subscribe(resp => {
      console.log('resp', resp);
      this.contributors = resp;
    });
  }

  getContributors(repoUrl: string): Observable<Response>{
    return this.httpCache.get(repoUrl + '/contributors');
  }

  getCurrentRepoUrl() {
    switch(this.currentUrl) {
      case '/auto-complete':   return 'https://api.github.com/repos/ng2-ui/ng2-auto-complete';
      case '/datetime-picker': return 'https://api.github.com/repos/ng2-ui/ng2-datetime-picker';
      case '/google-map':      return 'https://api.github.com/repos/ng2-ui/ng2-map';
      case '/infinite-list':   return 'https://api.github.com/repos/ng2-ui/ng2-infinite-list';
      case '/tab':             return 'https://api.github.com/repos/ng2-ui/ng2-tab';
      case '/accordion':       return 'https://api.github.com/repos/ng2-ui/ng2-collapsable';
      case '/tooltip':         return 'https://api.github.com/repos/ng2-ui/ng2-tooltip-overlay';
      case '/menu':            return 'https://api.github.com/repos/ng2-ui/ng2-menu';
      case '/parallax':        return 'https://api.github.com/repos/ng2-ui/ng2-parallax-scroll';
      case '/popup':           return 'https://api.github.com/repos/ng2-ui/ng2-popup';
      case '/scrollable':      return 'https://api.github.com/repos/ng2-ui/ng2-scrollable';
      case '/sticky':          return 'https://api.github.com/repos/ng2-ui/ng2-sticky';
      default: return 'https://api.github.com/repos/ng2-ui/ng2-ui';
    }
  }
}
