import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { LoginData } from '@shared/models/login-data.modal';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  constructor(private authService: AuthService) {
  }

  emailControl = new FormControl('test@test.com', [Validators.required, Validators.email]);
  passwordControl = new FormControl('password123', [Validators.required]);

  loginForm = new FormGroup({
    email: this.emailControl,
    password: this.passwordControl
  })

  onSubmit() {
    if (!this.loginForm.valid) {return;
    }

    const loginData: LoginData = this.loginForm.value as LoginData;

    this.authService.login(loginData);
  }

}
