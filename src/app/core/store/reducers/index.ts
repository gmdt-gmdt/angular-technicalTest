import { Data, Params, RouterStateSnapshot } from '@angular/router';

import { routerReducer, RouterReducerState, RouterStateSerializer } from '@ngrx/router-store';
import { ActionReducer, ActionReducerMap, createFeatureSelector, MetaReducer } from '@ngrx/store';
import { environment } from '@env/environment';

export interface RouterStateUrl {
  url: string;
  params: Params;
  queryParams: Params;
  data: Data;
}

export interface AppState {
  router: RouterReducerState<RouterStateUrl>;
}

export const appReducer: ActionReducerMap<AppState> = {
  router: routerReducer,
};

export const getRouterState = createFeatureSelector<RouterReducerState<RouterStateUrl>>('router');

export function logger(reducer: ActionReducer<AppState>): ActionReducer<AppState> {
  return function (state: AppState | undefined, action: any): AppState {
    return reducer(state, action);
  };
}

export const appMetaReducers: MetaReducer<AppState>[] = !environment.production
    ? [logger]
    : [];

export class CustomSerializer implements RouterStateSerializer<RouterStateUrl> {
  serialize(routerState: RouterStateSnapshot): RouterStateUrl {
    let route = routerState.root;
    while (route.firstChild) {
      route = route.firstChild;
    }

    const { url } = routerState;
    const queryParams = routerState.root.queryParams;
    const params = route.params;
    const data = route.data;

    // Only return an object including the URL, params and query params
    // instead of the entire snapshot
    return { url, params, queryParams, data };
  }
}
