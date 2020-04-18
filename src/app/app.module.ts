import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }   from '@angular/common/http';

import {NgsgModule} from 'ng-sortgrid';//перетягивание
import { ColorChromeModule } from 'ngx-color/chrome';//выбор цвета
 
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './components/home/home.component';
import {NavModule } from'./moduls/nav/nav.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [ 
    
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgsgModule,
    ColorChromeModule,
    BrowserAnimationsModule,
    NavModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
