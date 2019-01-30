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
    var formData = new FormData();
    for (var key in data) {
      formData.append(key, data[key]);
    }
    return this.http
      .post(requestUrl, formData)
      .pipe(map((res: Response) => res.json()));
  }

  get(url: string, data: object): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/x-www-form-urlencoded"
      })
    };
    for (var key in data) {
      url += data[key];
    }
    var encoded = encodeURI(url);
    return this.http
      .get(encoded, httpOptions)
      .pipe(map((res: Response) => res.json()));
  }
}
