import { combineReducers } from 'redux';
//import { reducer as oidcReducer, UserState } from 'redux-oidc';
import { appReducer, AppState } from '../app/core/reducer';
//import { serviceReducer, ServiceState } from './services';
import { agenteReducer, AgenteState } from '../core/agente';

export interface RootState {
    //oidc: UserState;    
    app: AppState;
    //service: ServiceState;
    agente: AgenteState;
}

export const root = combineReducers<RootState>({
    //oidc: oidcReducer,
    app: appReducer,
    //service: serviceReducer,
    agente: agenteReducer,
});
