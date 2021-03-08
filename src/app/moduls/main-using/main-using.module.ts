import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';

import {  MainUsingRoutingModule} from './main-using-Routing.module';
import {NavModule} from'../../moduls/nav/nav.module';
import { ModalModule } from 'ngx-bootstrap/modal';
import { PopoverModule } from 'ngx-bootstrap/popover';
import { NotesComponent } from '../../components/notes/notes.component';

import {NgsgModule} from 'ng-sortgrid';//перетягивание
import { ColorChromeModule } from 'ngx-color/chrome';//выбор цвета
import { ProfileComponent } from 'src/app/components/profile/profile.component';
 

@NgModule({
  declarations: [ 
    NotesComponent,
    ProfileComponent
    ],
  imports: [
    CommonModule,
    MainUsingRoutingModule,
    ModalModule.forRoot(),
    PopoverModule.forRoot(), 
    FormsModule,
    ReactiveFormsModule,
    NavModule,
    NgsgModule,
    ColorChromeModule
  ],
})
export class MainUsingModule { }
