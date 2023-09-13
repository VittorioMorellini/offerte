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
import { AgenteGruppo, AgenteGruppoSearchModel } from '../../models/agenteGruppo';
import { useAgenteGruppoService, AgenteGruppoService } from './service';

const key = 'AGENTE_GRUPPO';

const baseActions = (logger: Logger, dispatch: any, root: RootState, service: AgenteGruppoService) => {
    const base = EntityActions<AgenteGruppo, AgenteGruppoSearchModel, RootState, AgenteGruppoService>({
        key,
        logger,
        ctor: AgenteGruppo,
        dispatch,
        service,
        getState: () => root
    });

    return base;
}

export const useAgenteGruppoActions = () => {

    const dispatch = useDispatch<any>();
    const logger = useLogger({ key });
    const state = useSelector((root: RootState) => root);
    const service = useAgenteGruppoService();
    
    return {
        actions: baseActions(logger, dispatch, state, service),
        logger
    };
}

export const useLocalAgenteGruppoActions = (initialState?: Partial<AgenteGruppoState>) => {

    const { state, dispatch } = useLocalReducer(agenteGruppoReducer, initialState);
    const logger = useLogger({ key });
    const rootState = useSelector((root: RootState) => root);
    const service = useAgenteGruppoService();

    return {
        actions: baseActions(logger, dispatch, rootState, service),
        logger,
        state
    };
}

export type AgenteGruppoState = EntityLoaderState<AgenteGruppo, AgenteGruppoSearchModel>;

export const agenteGruppoReducer: Reducer<AgenteGruppoState, any> = typeToReducer({
    ...EntityReducer(key)
}, EntityLoaderInitialState({ searchModel: new AgenteGruppoSearchModel() }));