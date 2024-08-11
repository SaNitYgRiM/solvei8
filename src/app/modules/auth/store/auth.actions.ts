import { createAction, props } from '@ngrx/store';

export const validateUser = createAction(
  '[Auth] Validate User',
  props<{ identifier: string }>()
);

export const validateUserSuccess = createAction(
  '[Auth] Validate User Success',
  props<{ exists: boolean }>()
);

export const validatePasswordSuccess = createAction(
  '[Auth] Validate Password Success',
  props<{ valid: boolean }>()
);

export function validatePassword(validatePassword: any): import("rxjs").OperatorFunction<import("@ngrx/store").Action, any> {
    throw new Error('Function not implemented.');
}
