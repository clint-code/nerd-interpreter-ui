import { Component } from '@angular/core';
import { Router, NavigationEnd, RouterOutlet } from '@angular/router';
import { ViewportScroller } from '@angular/common';
import { filter } from 'rxjs/operators';
import { HeaderComponent } from './components/header/header.component';
import { FooterAltComponent } from './components/footer-alt/footer-alt.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    imports: [
        HeaderComponent,
        FooterComponent,
        RouterOutlet
    ],
    styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'nerd-interpreter-ui';

  constructor(
    private router: Router,
    private viewportScroller: ViewportScroller,
  ) {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.viewportScroller.scrollToPosition([0, 0]);
    });
  }
}
