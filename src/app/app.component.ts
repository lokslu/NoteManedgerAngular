import { Component } from '@angular/core';
import { User } from './Models/user';
import { AuthService } from 'src/app/api/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public user: User;
  constructor(private authService:AuthService,public router: Router) {}
  
  public getUser() {
    if (!localStorage.getItem('username')) {return};
    this.authService.getUserInfo(localStorage.getItem('username')).subscribe((value: User) => { this.user = value });
  }
   public checkUser(): boolean {
    if (null != localStorage.getItem("username")) {
      return true;
    }else
    {
      return false;
    }
  }
  public logout() {
    this.user = null;
    localStorage.removeItem("username");
    localStorage.removeItem("access_token");
    this.router.navigateByUrl('/');

  }
  ngOnInit() {
    this.getUser();
  }


}


