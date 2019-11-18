import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";

import { TestimonialLComponent } from "./testimonial/testimonial-l/testimonial-l.component";
import { TestimonialSComponent } from "./testimonial/testimonial-s/testimonial-s.component";
import { SliderComponent } from "./slider/slider.component";
import { SearchComponent } from "./search/search.component";
import { PortfolioComponent } from "./portfolio/portfolio.component";
import { TestimonialComponent } from "./testimonial/testimonial.component";
import { SearchlistComponent } from "./search/searchlist/searchlist.component";
import { SearchdetailComponent } from "./search/searchdetail/searchdetail.component";

@NgModule({
  declarations: [
    SliderComponent,
    SearchComponent,
    PortfolioComponent,
    TestimonialComponent,
    TestimonialLComponent,
    TestimonialSComponent,
    SearchlistComponent,
    SearchdetailComponent
  ],
  imports: [BrowserModule, HttpClientModule, FormsModule],
  exports: [
    SliderComponent,
    SearchComponent,
    PortfolioComponent,
    TestimonialComponent,
    TestimonialLComponent,
    TestimonialSComponent
  ]
})
export class LandingpageModule {}
