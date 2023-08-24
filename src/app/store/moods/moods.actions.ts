import { createAction, props } from '@ngrx/store';
import { Mood } from '@shared/models/mood.model';
import { Update } from '@ngrx/entity';

export const fetchMoodsSuccess = createAction('[Moods API] Fetching Moods Succeeded', props<{ moods: Array<Mood> }>());

export const fetchMoodsFailure = createAction('[Moods API] Fetching Moods Failed');

export const addMood = createAction('[Tracker Page] Add Mood', props<{ mood: Mood }>());

export const updateMood = createAction('[Tracker Page] Update Mood', props<{ update: Update<Mood> }>());
