import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  first: number = 15;
  second: number = Math.floor(Math.random() * 1000);
  sum: number = this.first + this.second;
  bigBoy() {
    if(this.first > this.second) {
      return this.first;
    } else {
      return this.second;
    }
  }
}
