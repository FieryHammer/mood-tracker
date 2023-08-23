import { Actions, createEffect, ofType } from '@ngrx/effects';
import { login, loginFailure, loginSuccess, logout } from './auth.actions';
import { catchError, map, of, switchMap, tap } from 'rxjs';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Injectable()
export class AuthEffects {
  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(login),
      switchMap(action => this.authService.login(action.loginData).pipe(
        map(user => loginSuccess({ user })),
        catchError(error => {
          console.error('Error during logging in...', error);

          return of(loginFailure());
        })
      ))
    ));

  redirectAfterLogin$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loginSuccess),
      tap(() => this.router.navigateByUrl('/home'))
    ), { dispatch: false }
  );

  redirectAfterLogout$ = createEffect(() =>
      this.actions$.pipe(
        ofType(logout),
        tap(() => this.router.navigateByUrl('/login'))
      ), { dispatch: false }
  );

  constructor(private readonly actions$: Actions, private readonly router: Router, private readonly authService: AuthService) {}
}
