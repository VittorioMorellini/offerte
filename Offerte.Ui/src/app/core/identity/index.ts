import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../reducers';
import { useLogger } from '../../../framework/logger';
import { api } from '../../../framework/core/logic';
import { Agente, AgenteSearchModel } from '../../../models';
import typeToReducer from 'type-to-reducer';
import { EntityActions } from '../../../framework/core/actions';
import { Logger } from '../../../framework/logger/types';
import { IdentityService, useIdentityService } from './service';

const key = 'IDENTITY';

const baseActions = (logger: Logger, dispatch: any, root: RootState) => {
    const service = useIdentityService()
    const base = EntityActions<Agente, AgenteSearchModel, RootState, IdentityService>({
        key,
        logger,
        ctor: Agente,
        dispatch,
        service,
        getState: () => root
    });

    return {
        base,
        authenticate: (username: string, password: string): Promise<Agente> => {
            console.log('sono nella Action identity')
            return api(null)(
                'APP/GET_IDENTITY', 
                logger, 
                dispatch,
                //Promise.resolve()
                service.authenticate(username, password)
            );
        },
    }
}

export const useIdentityActions = () => {
    const dispatch = useDispatch<any>();
    const logger = useLogger({ key });
    const state = useSelector((root: RootState) => root);
    //const enhanceModel = useEnhanceModel();
    const actions = baseActions(logger, dispatch, state);
    
    return {
        actions,
        logger
    };
}
export type IdentityState = {
    identity?: Agente;
}

const initialState: IdentityState = {
    identity: new Agente()
}

export const identityReducer = typeToReducer({
    ['APP/GET_IDENTITY']: {
        PENDING: (state: IdentityState) => ({
            ...state,
            identity: undefined
        }),        
        SUCCESS: (state: IdentityState, { payload }) => ({ 
            ...state, 
            identity: payload
        })
    },
    // [K.SET_MODEL]: (state: IdentityState, { payload }) => ({ 
    //     ...state,
    //     model: payload
    // })
// tslint:disable-next-line:align
}, initialState);