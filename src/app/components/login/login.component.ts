import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/api/auth.service';
import { FormBuilder,FormGroup } from '@angular/forms';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;
  constructor(private fb: FormBuilder, 
    private authService: AuthService,
    private app: AppComponent
    ) { }

  ngOnInit() {
    this.initForm();
  }
  initForm() {
    this.loginForm = this.fb.group({
      "email": [null],
      "password": [null]
    })
  }
  onSubmit() {
    console.log(this.loginForm.value);
    
    this.authService.login(this.loginForm.value).subscribe((data: any) => {
      localStorage.setItem('access_token', data.access_token);
      localStorage.setItem('username', data.username);
      this.app.router.navigateByUrl('/user');
     });
    }

}
