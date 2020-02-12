import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Routing/home/home.component';
import { AboutComponent } from './Routing/about/about.component';
import { ContactComponent } from './Routing/contact/contact.component';
import { LoginComponent } from './login/login.component';

import { User2Component } from './user2/user2.component';
import { from } from 'rxjs';
import { About2Component } from './about2/about2.component';
import { About1Component } from './about1/about1.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    LoginComponent,
    User2Component,
    About2Component,
    About1Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
