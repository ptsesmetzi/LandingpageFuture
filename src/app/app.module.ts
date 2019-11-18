import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";

import { LandingepageComponent } from "./landingpage/landingpage.component";
import { LandingpageModule } from "./landingpage/landingpage.module";
import { UnternehmensberatungComponent } from "./unternehmensberatung/unternehmensberatung.component";
import { RecruitingComponent } from "./recruiting/recruiting.component";
import { FormsModule } from "@angular/forms";
import { UeberunsComponent } from "./ueberuns/ueberuns.component";
import { StandorteComponent } from "./standorte/standorte.component";
import { TestimonialSService } from "./landingpage/testimonial/testimonial-s/testimonial-s.service";
import { TestimonialLService } from "./landingpage/testimonial/testimonial-l/testimonial-l.service";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LandingepageComponent,
    UnternehmensberatungComponent,
    RecruitingComponent,
    UeberunsComponent,
    StandorteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    LandingpageModule
  ],
  providers: [TestimonialSService, TestimonialLService],
  bootstrap: [AppComponent]
})
export class AppModule {}
