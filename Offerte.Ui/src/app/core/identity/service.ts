import { BaseService, useBaseService } from '../../../framework/core/service';
import { EntityUtils } from '../../../framework/entity';
import { Agente } from '../../../models/agente';
import { api } from '../../../framework/core/logic';

export type IdentityService = BaseService<Agente>;

export function useIdentityService() {
    const service: IdentityService = {
        ...useBaseService(import.meta.env.VITE_API_ENDPOINT + 'auth/identity', Agente),
    }
    //Custom Service
    const authenticate = (username: string, password: string) => {
        console.log('username:' + username)
        let item: Agente | undefined = undefined
        //let item: Agente = await (await service.instance.get(`${username}/${password}`)).data
        return service.instance.get(`${username}/${password}`)
            .then(response => EntityUtils.assignItem(response.data, Agente)) 
            .catch(error => {
                Promise.reject(error)
            })        
    }
    return {
        ...service,  
        authenticate
    } 
}