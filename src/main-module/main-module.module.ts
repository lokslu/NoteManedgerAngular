import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from '../app/components/register/register.component';

import { MainModuleRoutingModule } from './main-module-routing.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MainModuleRoutingModule
  ]
})
export class MainModuleModule { }
