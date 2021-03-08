import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as auth0 from 'auth0-js';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class AuthService {

  private apiString = 'https://notemanedgerapi.somee.com/api/';
  public userProfile: any;
  public userInfo: any;
  constructor(private router: Router, private httpClient: HttpClient) {}
  public login(loginModel: any) {
    return this.httpClient.post(this.apiString + 'User/login', loginModel);
  }
  public getUserInfo(name: string) {
    return this.httpClient.get(this.apiString + 'User/' + name);
  }
  public register(registerModel: any) {
    return this.httpClient.post(this.apiString + 'User/register', registerModel);
  }
}
