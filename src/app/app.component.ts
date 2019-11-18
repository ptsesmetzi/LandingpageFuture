import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'LandingPageFuturef';

  constructor() {
    this.changeTitle(' hansi');
  }
  changeTitle(title: string) {
    this.title = title;
  }
}
