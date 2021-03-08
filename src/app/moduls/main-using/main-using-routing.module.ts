import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotesComponent } from '../../components/notes/notes.component';
import { ProfileComponent } from 'src/app/components/profile/profile.component';
import { AboutGuard } from 'src/app/Guard/Guard';


const routes: Routes = [
  { path:"notes", component:NotesComponent},
  { path:"profile", component:ProfileComponent},
  { path:"", redirectTo: 'notes'},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers:[AboutGuard]
})
export class MainUsingRoutingModule { }
