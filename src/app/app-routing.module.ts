import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { AboutGuard } from './Guard/Guard';
 
const routes: Routes = [ 
  { path: "", component:HomeComponent},
  {path: "Auth",
  loadChildren: () => import('./moduls/Auth-module/Auth.module').then(m => m.AuthModule)},
  {path: "user",
  loadChildren: () => import('./moduls/main-using/main-using.module').then(m => m.MainUsingModule),canActivate:[AboutGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  providers:[AboutGuard],
  exports: [RouterModule]
})
export class AppRoutingModule { }
