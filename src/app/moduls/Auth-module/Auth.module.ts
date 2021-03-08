import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './Auth-routing.module';
import { RegisterComponent } from '../../components/register/register.component';
import { LoginComponent } from '../../components/login/login.component';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';



@NgModule({
  declarations: [
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    FormsModule, 
    ReactiveFormsModule,
    CommonModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
