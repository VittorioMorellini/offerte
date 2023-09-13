import { BaseService, useBaseService } from '../../framework/core/service';
import { AgenteGruppo } from '../../models';

export type AgenteGruppoService = BaseService<AgenteGruppo>;

export function useAgenteGruppoService() {

    const service: AgenteGruppoService = useBaseService(import.meta.env.VITE_API_ENDPOINT + 'agenteGruppo', AgenteGruppo);

    return {
        ...service
    }
}