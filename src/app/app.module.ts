import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule,HTTP_INTERCEPTORS }   from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './components/home/home.component';
import {NavModule } from'./moduls/nav/nav.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderInterceptor } from './HaederInterceptor';

import { AuthService } from 'src/app/api/auth.service';
import {NoteService } from 'src/app/api/note.service';


import { FormsModule,ReactiveFormsModule  } from '@angular/forms';

@NgModule({
  declarations: [ 
    
    AppComponent,
    HomeComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NavModule// модульнавигации
    ],
  providers: [ 
    AuthService,
    NoteService, 
    { provide: HTTP_INTERCEPTORS, useClass: HeaderInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
