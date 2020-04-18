import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { CollapseModule } from 'ngx-bootstrap/collapse';



@NgModule({
  declarations: [ 
    NavbarComponent,
    FooterComponent],
  imports: [
    CommonModule,
    CollapseModule.forRoot()

  ],
  exports:[NavbarComponent,
    FooterComponent]
})
export class NavModule { }
