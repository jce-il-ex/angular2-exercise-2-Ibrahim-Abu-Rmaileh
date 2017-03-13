import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CmpntNavMenuComponent } from './cmpnt-nav-menu/cmpnt-nav-menu.component';
import { CmpntNavItemComponent } from './cmpnt-nav-item/cmpnt-nav-item.component';

@NgModule({
  declarations: [
    AppComponent,
    CmpntNavMenuComponent,
    CmpntNavItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
