import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';

import { hot, cold } from 'jasmine-marbles';
import { TestHotObservable } from 'jasmine-marbles/src/test-observables';
import { of } from 'rxjs';

import { AuthService } from '../../services';
import { AuthEffects } from './auth.effects';
import { AuthLogin, AuthLoginFail, AuthLoginSuccess } from '../actions';
import { User } from '../../models';

describe('AuthEffects', () => {
  let actions$: TestHotObservable;
  let service: AuthService;
  let effects: AuthEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        AuthService,
        AuthEffects,
        provideMockActions(() => actions$),
      ],
    });

    service = TestBed.get(AuthService);
    effects = TestBed.get(AuthEffects);
  });

  describe('authLogin$', () => {
    it('should return logged user', () => {
      const user: User = {id: '232a', name: 'foo', email: 'bar'};
      spyOn(service, 'login').and.returnValue(of(user));

      const action = new AuthLogin({username: 'foo', password: 'bar'});
      const completion = new AuthLoginSuccess(user);

      actions$ = hot('-a', {a: action});
      const expected = cold('-b', {b: completion});

      expect(effects.authLogin$).toBeObservable(expected);
    });

    it('should return a login error', () => {
      const errorMessage = 'Marbles error auth test';
      spyOn(service, 'login').and.throwError(errorMessage);

      const action = new AuthLogin({username: 'foo', password: 'bar'});
      const completion = new AuthLoginFail({error: errorMessage});

      actions$ = hot('-a', {a: action});
      const expected = cold('-#', {b: completion}, new Error(errorMessage));

      expect(effects.authLogin$).toBeObservable(expected);
    });
  });
});
