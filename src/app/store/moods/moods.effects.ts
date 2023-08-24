import { Injectable } from '@angular/core';
import { MoodsService } from '../../services/moods.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { loginSuccess } from '../auth/auth.actions';
import { catchError, concatMap, map, of, switchMap, tap } from 'rxjs';
import { addMood, fetchMoodsFailure, fetchMoodsSuccess, updateMood } from './moods.actions';
import { Router } from '@angular/router';

@Injectable()
export class MoodsEffects {
  fetchMoods$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loginSuccess),
      switchMap(() => this.moodsService.fetchMoods().pipe(
        map(moods => fetchMoodsSuccess({ moods: moods })),
        catchError(error => {
          console.error('Error during fetching moods...', error);

          return of(fetchMoodsFailure());
        })
      ))
    )
  );

  addMood$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addMood),
      concatMap(action => this.moodsService.addMood(action.mood)),
      tap(() => this.router.navigate(['/home']))
    ), { dispatch: false }
  );

  updateMood$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updateMood),
      concatMap(action => this.moodsService.updateMood(action.update)),
      tap(() => this.router.navigate(['/home']))
    ), { dispatch: false }
  );

  constructor(private readonly actions$: Actions, private readonly moodsService: MoodsService, private readonly router: Router) {}
}
