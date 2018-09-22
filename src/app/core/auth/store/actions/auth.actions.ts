import { Action } from '@ngrx/store';
import { User } from '../../models';

export enum AuthActionTypes {
  AuthLogin = '[Auth] login',
  AuthLoginSuccess = '[Auth] login success',
  AuthLoginFail = '[Auth] login fail',
}

export class AuthLogin implements Action {
  readonly type = AuthActionTypes.AuthLogin;

  constructor(public payload: { username: string, password: string }) {
  }
}

export class AuthLoginSuccess implements Action {
  readonly type = AuthActionTypes.AuthLoginSuccess;

  constructor(public payload: User) {
  }
}

export class AuthLoginFail implements Action {
  readonly type = AuthActionTypes.AuthLoginFail;

  constructor(public payload: any) {
  }
}

export type AuthActions = AuthLogin | AuthLoginSuccess | AuthLoginFail;
