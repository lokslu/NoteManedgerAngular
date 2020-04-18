import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
 
const routes: Routes = [ 
  { path: "", component:HomeComponent},
  {path: "Auth",
  loadChildren: () => import('./moduls/Auth-module/Auth.module').then(m => m.AuthModule)},
  {path: "user",
  loadChildren: () => import('./moduls/main-using/main-using.module').then(m => m.MainUsingModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
