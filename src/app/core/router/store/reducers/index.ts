import * as fromRouter from '@ngrx/router-store';
import { RouterStateUrl } from './router.serializer';

export * from './router.serializer'

export interface State {
  router: fromRouter.RouterReducerState<RouterStateUrl>;
}
