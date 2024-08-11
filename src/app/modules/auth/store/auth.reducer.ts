import { createReducer, on } from '@ngrx/store';
import * as AuthActions from './auth.actions';

export interface AuthState {
  userExists: boolean;
}

export const initialState: AuthState = {
  userExists: false
};

export const authReducer = createReducer(
  initialState,
  on(AuthActions.validateUserSuccess, (state, { exists }) => ({
	...state,
	userExists: exists
  }))
);