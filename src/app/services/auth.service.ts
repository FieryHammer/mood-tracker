import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { LoginData } from '@shared/models/login-data.model';
import { logout } from '../store/auth/auth.actions';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { User } from '@shared/models/user.model';
import { Observable, throwError } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(private store: Store, private readonly httpClient: HttpClient) {}

  login(loginData: LoginData): Observable<User> {
    if (loginData.email === 'test@test.com' && loginData.password === 'password123') {
      return this.httpClient.get<User>(`${environment.backendUrl}${environment.profilePath}/1`)
    }

    return throwError(() => new Error('Wrong email or password!'));

  }

  logout() {
    this.store.dispatch(logout());
  }
}
