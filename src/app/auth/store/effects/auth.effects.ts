import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { AuthActionTypes } from '../actions/auth.actions';

@Injectable()
export class AuthEffects {

  @Effect()
  authLogin$ = this.actions$.pipe(ofType(AuthActionTypes.AuthLogin));

  constructor(private actions$: Actions) {}
}
