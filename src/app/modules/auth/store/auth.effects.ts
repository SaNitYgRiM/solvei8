import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import * as AuthActions from './auth.actions';
import { AuthService } from '../../../services/auth.service';

@Injectable()
export class AuthEffects {
    constructor(private actions$: Actions, private mockDataService: AuthService) {}

    validateUser$ = createEffect(() =>
        this.actions$.pipe(
            ofType(AuthActions.validateUser),
            mergeMap(action => {
                console.log('Effect received validateUser action with identifier:', action.identifier); // Debug log
                const userExists = this.mockDataService.validateUser(action.identifier);
                return of({ exists: userExists }).pipe(
                    map(result => {
                        console.log('Dispatching validateUserSuccess action with result:', result.exists); // Debug log
                        return AuthActions.validateUserSuccess({ exists: result.exists });
                    }),
                    catchError(() => {
                        console.log('Error occurred, dispatching validateUserSuccess with exists: false'); // Debug log
                        return of(AuthActions.validateUserSuccess({ exists: false }));
                    })
                );
            })
        )
    );
}