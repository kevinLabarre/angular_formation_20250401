import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

interface loginObject {
  email: string,
  password: string
}

@Component({
  selector: 'app-login-form',
  imports: [ReactiveFormsModule],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css'
})
export class LoginFormComponent {

  loginForm: FormGroup = new FormGroup({
    email: new FormControl("", [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
  });

  onSubmit() {
    if (this.loginForm.valid) {
      const result: loginObject = this.loginForm.value;
      console.log(result);
    }
    else {
      console.log("email requis", this.emailRequired)
    }
  }

  get emailErrors() {
    return this.loginForm.get('email')?.errors
  }

  get emailRequired() {
    if (this.emailErrors) {
      return this.emailErrors['required']
    } else false
  }

  get passwordErrors() {
    return this.loginForm.get('password')?.errors
  }

  get emailTouched() {
    return this.loginForm.get('email')?.touched
  }

}
