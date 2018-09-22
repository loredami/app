import { reducer, initialState } from './auth.reducer';
import * as fromAuthActions from './../actions';

describe('Auth Reducer', () => {
  describe('unknown action', () => {
    it('should return the initial state', () => {
      const action = {} as any;
      const state = reducer(initialState, action);
      expect(state).toBe(initialState);
    });
  });

  describe('AuthLogin', () => {
    it('should flag as loading', () => {
      const payload = {username: 'foo', password: 'bar'};
      const action = new fromAuthActions.AuthLogin(payload);
      const state = reducer(initialState, action);
      expect(state.loading).toEqual(true);
      expect(state.loaded).toEqual(false);
      expect(state.user).toEqual(null);
    });
  });

  describe('AuthLoginSuccess', () => {
    it('should set user', () => {
      const user = {id: '1', name: 'foo', email: 'baz@bar.com'};
      const action = new fromAuthActions.AuthLoginSuccess(user);
      const state = reducer(initialState, action);
      expect(state.loading).toEqual(false);
      expect(state.loaded).toEqual(true);
      expect(state.user).toEqual(user);
    });
  });

  describe('AuthLoginFail', () => {
    it('should reset all props', () => {
      const user = {id: '1', name: 'foo', email: 'baz@bar.com'};
      const action = new fromAuthActions.AuthLoginFail(user);
      const state = reducer(initialState, action);
      expect(state).toEqual(initialState);
    });
  });
});
