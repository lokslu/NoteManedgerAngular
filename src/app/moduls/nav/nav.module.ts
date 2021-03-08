import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { RouterModule } from '@angular/router';
import { ModalModule } from 'ngx-bootstrap/modal';



@NgModule({
  declarations: [ 
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    ModalModule.forRoot(),
    CollapseModule.forRoot(),
    RouterModule

  ],
  exports:[NavbarComponent,
    FooterComponent]
})
export class NavModule { }
