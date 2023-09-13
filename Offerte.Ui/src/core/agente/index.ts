import typeToReducer from 'type-to-reducer';
import { Reducer } from 'redux';
import { useDispatch, useSelector } from 'react-redux';
import { EntityActions } from '../../framework/core/actions';
import { EntityLoaderInitialState, EntityReducer } from '../../framework/core/reducer';
import { EntityLoaderState } from '../../framework/core/types';
import { useLocalReducer } from '../../framework/hooks';
import { useLogger } from '../../framework/logger';
import { Logger } from '../../framework/logger/types';
import { RootState } from '../../app/reducers';
import { Agente, AgenteSearchModel } from '../../models/agente';
import { useAgenteService, AgenteService } from './service';

const key = 'AGENTE';

const baseActions = (logger: Logger, dispatch: any, root: RootState, service: AgenteService) => {
    const base = EntityActions<Agente, AgenteSearchModel, RootState, AgenteService>({
        key,
        logger,
        ctor: Agente,
        dispatch,
        service,
        getState: () => root
    });

    return base;
}

export const useAgenteActions = () => {

    const dispatch = useDispatch<any>();
    const logger = useLogger({ key });
    const state = useSelector((root: RootState) => root);
    const service = useAgenteService();
    
    return {
        actions: baseActions(logger, dispatch, state, service),
        logger
    };
}

export const useLocalAgenteActions = (initialState?: Partial<AgenteState>) => {

    const { state, dispatch } = useLocalReducer(agenteReducer, initialState);
    const logger = useLogger({ key });
    const rootState = useSelector((root: RootState) => root);
    const service = useAgenteService();

    return {
        actions: baseActions(logger, dispatch, rootState, service),
        logger,
        state
    };
}

export type AgenteState = EntityLoaderState<Agente, AgenteSearchModel>;

export const agenteReducer: Reducer<AgenteState, any> = typeToReducer({
    ...EntityReducer(key)
}, EntityLoaderInitialState({ searchModel: new AgenteSearchModel() }));