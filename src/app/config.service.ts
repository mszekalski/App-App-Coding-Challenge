import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class ConfigService {
  constructor(private http: HttpClient) {}

  post(url: string, data: object): Observable<any> {
    let requestUrl: string = this.apiUrl + url;
    return this.http.post(requestUrl, params).map(response => response.json());
  }

  get(url: string, data: object): Observable<any> {}
}
