import * as fromRouter from '@ngrx/router-store';
import { RouterStateUrl } from './router.serializer';
import * as fromRoot from 'core/store/reducers';

export * from './router.serializer'

export type RouterState = fromRouter.RouterReducerState<RouterStateUrl>;

export interface State extends fromRoot.State {
  router: RouterState;
}
