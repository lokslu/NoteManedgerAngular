import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/api/auth.service';
import { FormBuilder,FormGroup } from '@angular/forms';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
  // encapsulation: ViewEncapsulation.None
})
export class RegisterComponent implements OnInit {
  public registerForm: FormGroup;
  constructor(private fb: FormBuilder, 
    private authService: AuthService,
    private app: AppComponent
    ) { }

  ngOnInit() {
    this.initForm();
  }
  initForm() {
    this.registerForm = this.fb.group({
      "firstName": [null],
      "lastName": [null],
      "email": [null],
      "password": [null]
    })
  }
  onSubmit() {
    console.log(this.registerForm.value);
    
    this.authService.register(this.registerForm.value).subscribe((data: any) => {
      localStorage.setItem('access_token', data.access_token);
      localStorage.setItem('username', data.username);
      this.app.router.navigateByUrl('/user');
     });
    }
}
