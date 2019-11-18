import { Component, OnInit, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.css"]
})
export class SearchComponent implements OnInit {
  @ViewChild("f", { static: false }) signupForm: NgForm;
  constructor(private router: Router) {}

  ngOnInit() {}
  onSubmit(forms: NgForm) {
    //Under Construction
    console.log(this.signupForm.value.searchterm);
    this.router.navigate(["/searchlist"]);
  }
}
