import { Component, OnInit } from "@angular/core";
import { SearchService } from "../search.service";

@Component({
  selector: "app-searchlist",
  templateUrl: "./searchlist.component.html",
  styleUrls: ["./searchlist.component.css"]
})
export class SearchlistComponent implements OnInit {
  public workshops = [];
  constructor(private _searchService: SearchService) {}

  ngOnInit() {
    this._searchService
      .getWorkshops()
      .subscribe(data => (this.workshops = data));
  }
}
