import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AuthState, State } from '../reducers';

export const selectAuthState = createFeatureSelector<State, AuthState>('auth');
export const selectAuthUser = createSelector(selectAuthState, (state: AuthState) => state.user);
export const selectAuthLoading = createSelector(selectAuthState, (state: AuthState) => state.loading);
export const selectAuthLoaded = createSelector(selectAuthState, (state: AuthState) => state.loaded);
