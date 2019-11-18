import { Component, OnInit } from "@angular/core";

import { TestimonialSService } from "./testimonial-s.service";

@Component({
  selector: "app-testimonial-s",
  templateUrl: "./testimonial-s.component.html",
  styleUrls: ["./testimonial-s.component.css"]
})
export class TestimonialSComponent implements OnInit {
  students = [];

  constructor(private _testimonialSService: TestimonialSService) {}

  ngOnInit() {
    this.students = this._testimonialSService.getStudents();
  }
}
