import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class ConfigService {
  constructor(private http: HttpClient) {}

  post(url: string, data: object): Observable<any> {
    let requestUrl: string = url;
    return this.http.post(requestUrl, FormData);
    // .pipe(map((response: any) => response.json()));
  }

  get(url: string, data: object): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/x-www-form-urlencoded"
      })
    };
    return this.http.get(url, httpOptions);
    // .pipe(map((response: any) => response.json()));
  }
}
