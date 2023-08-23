import { createFeatureSelector, createSelector } from '@ngrx/store';
import { adapter, MoodsState } from './mood.reducer';
import { selectQueryParam } from '../router/router.selectors';

const { selectAll } = adapter.getSelectors();

export const selectMoodsState = createFeatureSelector<MoodsState>('moods');

export const selectMoods = createSelector(selectMoodsState, selectAll);

export const selectMood = createSelector(selectMoods, selectQueryParam('date'), (moods, date) => moods.find(mood => mood.id === date));

export const selectMoodDates = createSelector(selectMoods, (moods) => moods.map(mood => ({
  date: mood.id,
  textColor: 'var(--ion-color-tertiary-contrast)',
  backgroundColor: 'var(--ion-color-tertiary)',
})))
