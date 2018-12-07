import { Injectable } from '@angular/core';
import {Item} from "./item";
import { Http } from '@angular/http';
import { Observable } from "rxjs";
import { map } from 'rxjs/operators';
// Note : for latest version of rxjs no need of deep import ,
//       so never import like this for operators >> import 'rxjs/add/operator/map'

@Injectable({
  providedIn: 'root'
})
export class AppService {
  results: Object[];
  private url: string = 'https://api.github.com/search/repositories?q=';

  constructor(private http: Http) {
    this.results = [];
  }

  getData(term: String) {
  //   Note: For versions of RxJS 6.x.x and above,
  //  you will have to use pipeable operators as shown in the code snippet below:
  //  (if we use map() directly on get() it will not work)
    let api = `${this.url}/${term}`;
    return this.http.get(api).pipe(map(res => {
      let results = res.json();
      return results;
    }))
 }

//doubt : how and where to use observable
}
