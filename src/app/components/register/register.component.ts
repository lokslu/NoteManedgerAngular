import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/api/auth.service';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
  // encapsulation: ViewEncapsulation.None
})
export class RegisterComponent implements OnInit {
  public registerForm: FormGroup;
  public registered:boolean=false;
  public error:boolean=false;

  constructor(private fb: FormBuilder, 
    private authService: AuthService,
    private app: AppComponent
    ) { }

  ngOnInit() { 
    this.initForm();
  }
  initForm() {
    this.registerForm = this.fb.group({
      "firstName": [null,Validators.required],
      "lastName": [null],
      "email": [null,[Validators.required,Validators.email]],
      "password": [null,Validators.required]
    })
  }
  onSubmit() {
    console.log(this.registerForm.value);
    this.registered=true;
    this.error=false;

    this.authService.register(this.registerForm.value).subscribe((data: any) => {
      localStorage.setItem('access_token', data.access_token);
      localStorage.setItem('username', data.username);
      this.app.getUser();
      this.registered=false;
      this.app.router.navigateByUrl('/user');
     },(error)=>{
       
      this.registered=false;
      this.error=true;

     });
    }
}
