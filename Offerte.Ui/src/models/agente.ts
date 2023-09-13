import { Entity, resource, field, required } from '../framework/entity';
import { Pagination, Pager } from '../framework/core/actions';

@resource('agente')
export class Agente extends Entity {

    @field()
    id: number;
    @field()
    ragioneSociale: string;
    @field()
    indirizzo: string;
    @field()
    cap: string;
    @field()
    localita: string;
    @field()
    codiceFiscale: string;
    @field()
    partitaIVA: string;
    @field()
    telefono: string;
    @field()
    numeroFax: string;
    @field()
    budget: number;
    @field()
    fattProg: number;
    @field()
    agenteOmega: number;
    @field()
    name: string;
    @field()
    surname: string;
    @field()
    password: string;
    @field()
    supervisore: boolean;

    role: string
    token: string
    disabled: boolean
    
    constructor(data?: any) {
        super()
        super.init(this, data);      
    }

    static newItem(): Agente {
        let item = new Agente();
        return item;
    }
}

@resource('agente')
export class AgenteSearchModel extends Entity implements Pagination {
    
    @field()
    ragioneSociale?: string;
    @field()
    indirizzo?: string;
    @field()
    cap?: string;
    @field()
    localita?: string;
    @field()
    codiceFiscale?: string;
    @field()
    partitaIVA?: string;
    @field()
    telefono?: string;
    @field()
    numeroFax?: string;
    @field()
    budget?: number;
    @field()
    fattProg?: number;
    @field()
    agenteOmega?: number;

    @field()
    pager: Pager = <Pager> {
        take: 100,
        orderBy: 'id'
    };
}