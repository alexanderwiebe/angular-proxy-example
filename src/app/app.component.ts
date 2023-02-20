import { Component } from '@angular/core';
import { TitleService } from './title.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  titleNG = 'angular-app';

  title1 = {};
  title2 = {};
  title3 = {};

  constructor(public title: TitleService) {}

  getTitle1() {
    this.title.getTitle1().subscribe((newTitle) => (this.title1 = newTitle));
  }

  getTitle2() {
    this.title.getTitle2().subscribe((newTitle) => (this.title2 = newTitle));
  }

  getTitle3() {
    this.title.getTitle3().subscribe((newTitle) => (this.title3 = newTitle));
  }
}
