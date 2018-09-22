import { TestBed } from '@angular/core/testing';
import { StoreModule, Store, select } from '@ngrx/store';

import * as fromRoot from 'core/store/reducers';
import * as fromReducers from '../reducers';
import * as fromActions from '../actions';
import * as fromSelectors from './auth.selectors';
import { User } from 'core/auth';

describe('Auth Selectors', () => {
  let store: Store<fromReducers.State>;
  const user: User = {id: '1', name: 'foo', email: 'bar@baz.com'};
  const payload = {username: 'foo', password: 'bar'};

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [StoreModule.forRoot({...fromRoot.reducers, auth: fromReducers.reducer})],
    });
    store = TestBed.get(Store);
    spyOn(store, 'dispatch').and.callThrough();
  });

  describe('selectAuthState', () => {
    it('should return auth state', () => {
      store.pipe(select(fromSelectors.selectAuthState)).subscribe(value => {
        expect(value).toEqual(fromReducers.initialState);
      });
    });
  });

  describe('selectAuthUser', () => {
    it('should return logged user', () => {
      let result;
      store.pipe(select(fromSelectors.selectAuthUser)).subscribe(value => {
        result = value;
      });
      expect(result).toEqual(null);
      store.dispatch(new fromActions.AuthLoginSuccess(user));
      expect(result).toEqual(user);
    });
  });

  describe('selectAuthLoading', () => {
    it('should return loading value', () => {
      let result;
      store.pipe(select(fromSelectors.selectAuthLoading)).subscribe(value => {
        result = value;
      });
      expect(result).toEqual(false);
      store.dispatch(new fromActions.AuthLogin(payload));
      expect(result).toEqual(true);
      store.dispatch(new fromActions.AuthLoginSuccess(user));
      expect(result).toEqual(false);
      store.dispatch(new fromActions.AuthLogin(payload));
      expect(result).toEqual(true);
      store.dispatch(new fromActions.AuthLoginFail({}));
      expect(result).toEqual(false);
    });
  });

  describe('selectAuthLoaded', () => {
    it('should return loaded value', () => {
      let result;
      store.pipe(select(fromSelectors.selectAuthLoaded)).subscribe(value => {
        result = value;
      });
      expect(result).toEqual(false);
      store.dispatch(new fromActions.AuthLogin(payload));
      expect(result).toEqual(false);
      store.dispatch(new fromActions.AuthLoginSuccess(user));
      expect(result).toEqual(true);
      store.dispatch(new fromActions.AuthLogin(payload));
      expect(result).toEqual(false);
      store.dispatch(new fromActions.AuthLoginFail({}));
      expect(result).toEqual(false);
    });
  });
});
