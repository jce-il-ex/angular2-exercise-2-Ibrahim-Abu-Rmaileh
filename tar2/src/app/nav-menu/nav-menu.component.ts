import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit {

    buttons =[ 

          {id:"home",txt:"HOME PAGE"},
          {id:"about",txt:"ABOUT US"},
          {id:"location",txt:"LOCATION"},
          {id:"contact",txt:"CONTACT US"}
    ]


  constructor() { }

  ngOnInit() {
  }


}
