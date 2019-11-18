import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { ISearch } from "./searchlist/search";

@Injectable({
  providedIn: "root"
})
export class SearchService {
  //simulation of a HTTP Request
  private _url: string = "assets/data/workshop.json";
  constructor(private http: HttpClient) {}

  getWorkshops(): Observable<ISearch[]> {
    return this.http.get<ISearch[]>(this._url);
  }
}
