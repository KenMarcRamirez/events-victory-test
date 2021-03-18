import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {

  menus = [
    {
      name: 'Test 1',
      url: '/'
    },
    {
      name: 'Test 2',
      url: '/'
    },
    {
      name: 'Test 3',
      url: '/'
    }
  ]
  
  constructor() { }

  ngOnInit(): void {
  }

  closeMenu() {
    (document.querySelector('.sidemenu') as HTMLElement).classList.remove('open');
    (document.querySelector('body') as HTMLElement).classList.remove('dialog-open');
  }

}
