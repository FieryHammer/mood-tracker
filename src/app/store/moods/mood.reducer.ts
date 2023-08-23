import { createReducer, on } from '@ngrx/store';
import { Mood } from '@shared/models/mood.model';
import { fetchMoodsSuccess, upsertMood } from './moods.actions';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';

export interface MoodsState extends  EntityState<Mood>{}

export const adapter: EntityAdapter<Mood> = createEntityAdapter<Mood>();

export const initialState: MoodsState = adapter.getInitialState();

export const moodsReducer = createReducer(initialState,
  on(fetchMoodsSuccess, (state, { moods }) => adapter.setAll(moods, state)),
  on(upsertMood, (state, { mood }) => {
    console.log(mood);

    return adapter.upsertOne(mood, state)
  })
);
