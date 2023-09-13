import { BaseService, useBaseService } from '../../framework/core/service';
import { Agente } from '../../models';

export type AgenteService = BaseService<Agente>;

export function useAgenteService() {

    const service: AgenteService = useBaseService(import.meta.env.VITE_API_ENDPOINT + 'agente', Agente);

    return {
        ...service
    }
}