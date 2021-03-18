import { Component, OnInit, HostListener } from '@angular/core';
import { ActivatedRoute, Router, RoutesRecognized } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  background: any;

  menus = [
    {
      name: 'Test 1',
      url: '#'
    },
    {
      name: 'Test 2',
      url: '#'
    },
    {
      name: 'Test 3',
      url: '#'
    }
  ]

  constructor(
    private route: Router
  ) {
    this.route.events.subscribe((data) => {
      if (data instanceof RoutesRecognized) {
        this.background = data.state.root.firstChild.data.background;
        console.log(this.background);
      }
    });
   }

  ngOnInit(): void {
  }

  toggleMenu() {
    (document.querySelector('.sidemenu') as HTMLElement).classList.add('open');
    (document.querySelector('body') as HTMLElement).classList.add('dialog-open');
  }

  @HostListener('window:scroll', ['$event'])

  onWindowScroll(e) {
    let element = document.querySelector('.navbar');
    if (window.pageYOffset > element.clientHeight) {
      element.classList.add('background-header');
    } else {
      element.classList.remove('background-header');
    }
  }

}
