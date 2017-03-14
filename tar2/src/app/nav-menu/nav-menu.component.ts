import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit {

    buttons =[ 

          {id:"home"},
          {id:"about"},
          {id:"location"},
          {id:"contact"}
    ]


  constructor() { }

  ngOnInit() {
  }


}
