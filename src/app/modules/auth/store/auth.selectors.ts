import { createSelector } from '@ngrx/store';
import { AppState } from './auth.state';
import { AuthState } from './auth.reducer';

export const selectAuthState = (state: AppState) => state.auth;

export const selectUserExists = createSelector(
  selectAuthState,
  (state: AuthState) => state.userExists
);