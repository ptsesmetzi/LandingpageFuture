import { Component, OnInit, HostListener } from "@angular/core";

@Component({
  selector: "app-testimonial",
  templateUrl: "./testimonial.component.html",
  styleUrls: ["./testimonial.component.css"]
})
export class TestimonialComponent implements OnInit {
  screenHeight: number;
  screenWidth: number;
  isSmal: boolean;
  constructor() {
    const getSize = this.getScreenSize();
    if (getSize <= 992) {
      this.isSmal = true;
    }
  }
  ngOnInit() {}
  @HostListener("window:resize", ["$event"])
  getScreenSize(evnt?) {
    const screenWidth = window.innerWidth;

    if (screenWidth <= 992) {
      this.isSmal = true;
    } else {
      this.isSmal = false;
    }

    return screenWidth;
  }
}
