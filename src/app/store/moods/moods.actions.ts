import { createAction, props } from '@ngrx/store';
import { Mood } from '@shared/models/mood.model';

export const fetchMoodsSuccess = createAction('[Moods API] Fetching Moods Succeeded', props<{ moods: Array<Mood> }>());

export const fetchMoodsFailure = createAction('[Moods API] Fetching Moods Failed');

export const upsertMood = createAction('[Tracker Page] Update / Add Mood', props<{ mood: Mood }>());
