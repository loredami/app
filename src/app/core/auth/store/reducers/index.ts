export * from './auth.reducer';

import * as fromAuth from './auth.reducer';
import * as fromRoot from '../../../store/reducers'

export interface State extends fromRoot.State {
  auth: fromAuth.AuthState
}
