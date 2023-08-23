import { Injectable } from '@angular/core';
import { MoodsService } from '../../services/moods.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { loginSuccess } from '../auth/auth.actions';
import { catchError, map, of, switchMap } from 'rxjs';
import { fetchMoodsFailure, fetchMoodsSuccess } from './moods.actions';

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

  constructor(private readonly actions$: Actions, private readonly moodsService: MoodsService) {}
}
