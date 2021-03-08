import { Component, OnInit, TemplateRef } from '@angular/core';
import { AppComponent } from "../../app.component";
import { BsModalService, BsModalRef } from "ngx-bootstrap/modal";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    public app: AppComponent,
    private modalService: BsModalService,
    ) { }
    logoutModalRef: BsModalRef;
    public isCollapsed = false;
  ngOnInit(): void {
    
  } 
  Qlogout(template: TemplateRef<any>){
    this.logoutModalRef = this.modalService.show(template);
}
logout(){
  this.logoutModalRef.hide();
  this.app.logout();
}
}
