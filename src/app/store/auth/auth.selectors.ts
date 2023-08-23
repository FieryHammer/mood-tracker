import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AuthState } from './auth.reducer';

export const selectAuthState = createFeatureSelector<AuthState>('auth');

export const selectIsLoggedIn = createSelector(selectAuthState, (authState) => Boolean(authState.user));

export const selectIsLoggedOut = createSelector(selectIsLoggedIn, (isLoggedIn) => !isLoggedIn);

export const selectUsername = createSelector(selectAuthState, (authState) => authState.user?.username);
