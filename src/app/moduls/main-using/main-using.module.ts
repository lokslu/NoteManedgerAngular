import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  MainUsingRoutingModule} from './main-using-Routing.module';
import {NavModule} from'../../moduls/nav/nav.module';

import { NoteEditComponent } from '../../components/note-edit/note-edit.component';
import { NotesComponent } from '../../components/notes/notes.component';


@NgModule({
  declarations: [ 
    NoteEditComponent,
    NotesComponent],
  imports: [
    NavModule,
    CommonModule,
    MainUsingRoutingModule
  ]
})
export class MainUsingModule { }
