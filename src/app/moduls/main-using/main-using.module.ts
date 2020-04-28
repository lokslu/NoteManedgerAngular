import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';

import {  MainUsingRoutingModule} from './main-using-Routing.module';
import {NavModule} from'../../moduls/nav/nav.module';
import { ModalModule } from 'ngx-bootstrap/modal';

import { NoteEditComponent } from '../../components/note-edit/note-edit.component';
import { NotesComponent } from '../../components/notes/notes.component';

import {NgsgModule} from 'ng-sortgrid';//перетягивание
import { ColorChromeModule } from 'ngx-color/chrome';//выбор цвета
 

@NgModule({
  declarations: [ 
    NoteEditComponent,
    NotesComponent],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    NavModule,
    NgsgModule,
    ColorChromeModule,
    CommonModule,
    MainUsingRoutingModule,
    ModalModule.forRoot()
  ],
  entryComponents: [NoteEditComponent]
})
export class MainUsingModule { }
