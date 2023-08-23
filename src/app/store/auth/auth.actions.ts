import { createAction, props } from '@ngrx/store';
import { User } from '@shared/models/user.model';
import { LoginData } from '@shared/models/login-data.model';

export const login = createAction('[Login Page] Login', props<{ loginData: LoginData }>());

export const loginSuccess = createAction('[Login API] Login Success', props<{ user: User }>());

export const loginFailure = createAction('[Login API] Login Failure');

export const logout = createAction('[Side Menu] Logout');
