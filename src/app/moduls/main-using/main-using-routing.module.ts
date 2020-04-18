import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotesComponent } from '../../components/notes/notes.component';


const routes: Routes = [
  { path:"notes", component:NotesComponent},
  { path:"", redirectTo: 'notes'},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainUsingRoutingModule { }
