import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/api/auth.service';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;
  public loading:boolean=false;
  public error:boolean=false;

  constructor(private fb: FormBuilder, 
    private authService: AuthService,
    private app: AppComponent
    ) { }

  ngOnInit() {
    this.initForm();
  }
  initForm() {
    this.loginForm = this.fb.group({
      "email": [null,[Validators.required,Validators.email]],
      "password": [null,Validators.required]
    })
  }
  onSubmit() {
    console.log(this.loginForm.value);
    this.loading=true;
    this.error=false;

    
    this.authService.login(this.loginForm.value).subscribe((data: any) => {
      localStorage.setItem('access_token', data.access_token);
      localStorage.setItem('username', data.username);
      this.app.getUser();
      this.app.router.navigateByUrl('/user');
     },
     (error:Response)=>{
      this.error=true;
      this.loading=false;
      
     });
    }

}
