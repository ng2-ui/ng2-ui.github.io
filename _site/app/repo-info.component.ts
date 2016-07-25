import {Component} from "@angular/core";
import {Router, NavigationStart} from "@angular/router";
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs";

@Component({
  selector: 'repo-info',
  template: `
    <div class="first container mdl-card mdl-shadow--2dp">
      <h5>Status</h5>  
      <div *ngIf="currentRepo">
        <p>stargazers: {{currentRepo.stargazers_count}}
        <p>watchers: {{currentRepo.watchers}}
        <p>open_issues: {{currentRepo.open_issues}}
      </div>
    </div>
    <div class="spacer"></div>
    <div class="second container mdl-card mdl-shadow--2dp">
      <h5>Contributors</h5> 
      <ul>
        <li *ngFor="let user of contributors">
          <img src="{{user.avatar_url}}" height="64" />
          {{user.contributions}} {{user.login}}
        </li>
      </ul>
    </div>
  `
})
export class RepoInfoComponent {
  currentUrl: string;
  repositories: any[];
  currentRepo: any;
  contributors: any;

  constructor(private router: Router, private http: Http) {
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
    this.http.get('https://api.github.com/users/ng2-ui/repos')
      .map(resp => resp.json())
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
    return this.http.get(repoUrl + '/contributors').map(resp => resp.json());
  }

  getCurrentRepoUrl() {
    switch(this.currentUrl) {
      case '/auto-complete':   return 'https://api.github.com/repos/ng2-ui/ng2-auto-complete';
      case '/datetime-picker': return 'https://api.github.com/repos/ng2-ui/ng2-datetime-picker';
      case '/google-map':      return 'https://api.github.com/repos/ng2-ui/ng2-map';
      case '/infinite-list':   return 'https://api.github.com/repos/ng2-ui/ng2-infinite-list';
      case '/overlay':         return 'https://api.github.com/repos/ng2-ui/ng2-overlay';
      case '/parallax-scroll': return 'https://api.github.com/repos/ng2-ui/ng2-parallax-scroll';
      case '/popup':           return 'https://api.github.com/repos/ng2-ui/ng2-popup';
      case '/scrollable':      return 'https://api.github.com/repos/ng2-ui/ng2-scrollable';
      case '/sticky':          return 'https://api.github.com/repos/ng2-ui/ng2-sticky';
      case '/tooltip':         return 'https://api.github.com/repos/ng2-ui/ng2-tooltip-overlay';
      default: return 'https://api.github.com/repos/ng2-ui/ng2-ui';
    }
  }
}
