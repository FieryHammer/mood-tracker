import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { LoginData } from '@shared/models/login-data.modal';
import { login, logout } from '../store/auth/auth.actions';

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(private store: Store) {}

  login(data: LoginData) {
    console.log(data);
    if (data.email === 'test@test.com' && data.password === 'password123') {
      this.store.dispatch(
        login(
          { user: { username: 'John' } }
        )
      );
    }
  }

  logout() {
    this.store.dispatch(logout());
  }
}
