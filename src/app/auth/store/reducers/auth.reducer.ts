import { AuthActions, AuthActionTypes } from '../actions';
import { User } from '../../models';

export interface AuthState {
  user: User;
  loaded: boolean;
  loading: boolean;
}

export const initialState: AuthState = {
  user: null,
  loaded: false,
  loading: false,
};

export function reducer(state = initialState, action: AuthActions): AuthState {
  switch (action.type) {

    case AuthActionTypes.AuthLogin:
      return {
        ...initialState,
        loading: true,
      };

    case AuthActionTypes.AuthLoginSuccess:
      return {
        loaded: true,
        loading: false,
        user: {
          ...action.payload
        },
      };

    case AuthActionTypes.AuthLoginFail:
      return {...initialState};

    default:
      return state;
  }
}
