import { Component, OnInit } from "@angular/core";
import { TestimonialLService } from "./testimonial-l.service";

@Component({
  selector: "app-testimonial-l",
  templateUrl: "./testimonial-l.component.html",
  styleUrls: ["./testimonial-l.component.css"]
})
export class TestimonialLComponent implements OnInit {
  pages: Object;

  constructor(private _testimonialLService: TestimonialLService) {}

  ngOnInit() {
    this.pages = this._testimonialLService.getPages();
  }
}
