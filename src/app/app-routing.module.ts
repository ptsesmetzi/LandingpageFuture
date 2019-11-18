import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LandingepageComponent } from "./landingpage/landingpage.component";
import { UnternehmensberatungComponent } from "./unternehmensberatung/unternehmensberatung.component";
import { RecruitingComponent } from "./recruiting/recruiting.component";
import { UeberunsComponent } from "./ueberuns/ueberuns.component";
import { StandorteComponent } from "./standorte/standorte.component";
import { SearchlistComponent } from "./landingpage/search/searchlist/searchlist.component";

const routes: Routes = [
  { path: "", redirectTo: "/landingpage", pathMatch: "full" },
  { path: "landingpage", component: LandingepageComponent },
  { path: "unternehmensberatung", component: UnternehmensberatungComponent },
  { path: "recruiting", component: RecruitingComponent },
  { path: "ueberuns", component: UeberunsComponent },
  { path: "standorte", component: StandorteComponent },
  { path: "searchlist", component: SearchlistComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
