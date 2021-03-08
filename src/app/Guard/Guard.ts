import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs";
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
 
@Injectable()
export class AboutGuard implements CanActivate{
    constructor(
        private router:Router
    ){}

    checkUser(): boolean {
        if (null != localStorage.getItem("username")) {
          return true;
        }else
        {
          return false;
        }
      }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : Observable<boolean> | boolean{
         let check=this.checkUser();
         if(!check){this.router.navigateByUrl('/Auth/login')}
        return check;
        
    }
}