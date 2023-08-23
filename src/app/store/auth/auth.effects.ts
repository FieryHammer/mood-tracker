import { Actions, createEffect, ofType } from '@ngrx/effects';
import { login, logout } from './auth.actions';
import { tap } from 'rxjs';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthEffects {
  redirectAfterLogin$ = createEffect(() =>
    this.actions$.pipe(
      ofType(login),
      tap(() => this.router.navigateByUrl('/home'))
    ), { dispatch: false }
  );

  redirectAfterLogout$ = createEffect(() =>
      this.actions$.pipe(
        ofType(logout),
        tap(() => this.router.navigateByUrl('/login'))
      ), { dispatch: false }
  );

  constructor(private readonly actions$: Actions, private readonly router: Router) {}
}
