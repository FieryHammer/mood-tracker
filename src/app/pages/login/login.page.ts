import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

import { LoginData } from '@shared/models/login-data.model';

import { login } from '../../store/auth/auth.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  constructor(private store: Store) {
  }

  emailControl = new FormControl('test@test.com', [Validators.required, Validators.email]);
  passwordControl = new FormControl('password123', [Validators.required]);

  loginForm = new FormGroup({
    email: this.emailControl,
    password: this.passwordControl
  })

  onSubmit() {
    if (!this.loginForm.valid) {
      return;
    }

    const loginData: LoginData = this.loginForm.value as LoginData;

    this.store.dispatch(login({ loginData }));
  }

}
