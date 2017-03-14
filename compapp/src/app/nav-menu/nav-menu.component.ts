import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit {

   list = [{id:1, txt: 'Home'},{id:2, txt: 'Page 1'},{id:3, txt: 'About'},{id:4, txt: 'Contact'}];
  constructor() { }

  ngOnInit() {
  }

}
