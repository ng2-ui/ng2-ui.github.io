import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Rx";
import {Http} from "@angular/http";
import {Ng2Storage} from "./ng2-storage";

@Injectable()
export class HttpCache {
  constructor(
    private http: Http,
    private storage: Ng2Storage
  ) {}

  get(url: string): Observable<any> {
    let cached: any;
    if (cached = this.storage.getItem(url)) {
      return Observable.of(cached);
    } else {
      return this.http.get(url)
        .map(resp => {
          console.log('HTTP RESPONSE:', url, resp);
          this.storage.setItem(url, resp.text());
          return resp.json();
        });
    }
  }
}