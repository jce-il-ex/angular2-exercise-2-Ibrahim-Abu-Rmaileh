import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cmpnt-nav-menu',
  templateUrl: './cmpnt-nav-menu.component.html',
  styleUrls: ['./cmpnt-nav-menu.component.css']
})
export class CmpntNavMenuComponent implements OnInit {
 
 buttons=[ 
   { id:"homepage",txt:"homepage"},
   {id:"website",txt:"website"},
   {id:"contactus",txt:"contact us"},
   {id:"location",txt:"location"}

 ]
  constructor() { }

  ngOnInit() {
  }

}
