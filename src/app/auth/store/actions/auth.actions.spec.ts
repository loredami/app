import * as fromAuth from './auth.actions';

describe('Auth Actions', () => {

  it('AuthLogin', () => {
    const payload = {username: 'foo', password: 'bar'};
    const action = new fromAuth.AuthLogin(payload);
    expect({...action}).toEqual({
      type: fromAuth.AuthActionTypes.AuthLogin,
      payload
    });
  });

  it('AuthLoginSuccess', () => {
    const payload = {id: '1', name: 'foo', email: 'bar@baz.com'};
    const action = new fromAuth.AuthLoginSuccess(payload);
    expect({...action}).toEqual({
      type: fromAuth.AuthActionTypes.AuthLoginSuccess,
      payload,
    });
  });

  it('AuthLoginFail', () => {
    const payload = {message: 'Error'};
    const action = new fromAuth.AuthLoginFail(payload);
    expect({...action}).toEqual({
      type: fromAuth.AuthActionTypes.AuthLoginFail,
      payload,
    });
  });

});
