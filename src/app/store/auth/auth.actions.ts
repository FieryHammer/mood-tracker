import { createAction, props } from '@ngrx/store';
import { User } from '@shared/models/user.model';

export const login = createAction('[Login Page] Login', props<{ user: User }>());

export const logout = createAction('[Side Menu] Logout');