import {routerReducer} from '@ngrx/router-store';
import {ActionReducerMap} from '@ngrx/store';
import {AppState} from './app.store';

export const AppReducers: ActionReducerMap<AppState> = {
  router: routerReducer,
};
