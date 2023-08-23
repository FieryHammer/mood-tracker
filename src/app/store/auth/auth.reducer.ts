import { createReducer, on } from '@ngrx/store';
import { User } from '@shared/models/user.model';
import { login, logout } from './auth.actions';

export interface AuthState {
  user: User | undefined;
}

export const initialState: AuthState = {
  user: undefined
}

export const authReducer = createReducer(
  initialState,
  on(login, (state, { user }) => ({ ...state, user: user })),
  on(logout, (state) => ({ ...state, user: undefined }))
)
