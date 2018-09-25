import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../../../environments/environment';
import { AuthState } from 'core/auth';
import { RouterState } from 'core/router';

export interface AppState {
  auth: AuthState,
  router: RouterState
}

export interface State {

}

export const reducers: ActionReducerMap<State> = {};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
