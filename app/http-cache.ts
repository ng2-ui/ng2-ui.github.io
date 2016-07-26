import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Rx";
import {Http} from "@angular/http";

@Injectable()
export class HttpCache {
  constructor(private http: Http) {}

  get(url: string): Observable<any> {
    let cached: any;
    if (cached = sessionStorage.getItem(url)) {
      return Observable.of(JSON.parse(cached));
    } else {
      return this.http.get(url)
        .map(resp => {
          console.log('HTTP RESPONSE:', url, resp);
          sessionStorage.setItem(url, resp.text());
          return resp.json();
        });
    }
  }
}