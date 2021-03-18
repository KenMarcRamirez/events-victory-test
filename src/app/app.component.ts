import { Component } from '@angular/core';
import { ActivatedRoute, Router, RoutesRecognized } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'campus-conference-registration';
  page: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private route: Router
  ) {
    this.route.events.subscribe((data) => {
      if (data instanceof RoutesRecognized) {
        this.page = data.state.root.firstChild.data.page;
      }
    });
  }
}



