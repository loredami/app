import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, exhaustMap, map } from 'rxjs/operators';
import { AuthActionTypes, AuthLoginSuccess, AuthLoginFail, AuthLogin } from '../actions';
import { AuthService } from '../../services';
import { User } from '../../models';

@Injectable()
export class AuthEffects {

  @Effect()
  authLogin$ = this.actions$.pipe(
    ofType(AuthActionTypes.AuthLogin),
    exhaustMap(({payload}: AuthLogin) => {
      return this.authService.login(payload.username, payload.password).pipe(
        map((user: User) => new AuthLoginSuccess(user)),
        catchError((error) => of(new AuthLoginFail(error))),
      );
    })
  );

  constructor(
    private actions$: Actions,
    private authService: AuthService,
  ) {
  }
}
