import {Component, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>',
  styleUrls: [
    './css/bootstrap.min.css',
    './css/style.css',
    './css/responsive.css'
  ],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'app works!';
}
