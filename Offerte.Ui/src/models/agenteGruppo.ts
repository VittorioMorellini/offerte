import { Entity, resource, field, required } from '../framework/entity';
import { Pagination, Pager } from '../framework/core/actions';

@resource('agenteGruppo')
export class AgenteGruppo extends Entity {

    @field()
    id: number;
    @field()
    idAgente: number;
    @field()
    idGruppo: number;
    @field()
    ausilio: number;

    constructor(data?: any) {
        super()
        super.init(this, data);      
    }

    static newItem(): AgenteGruppo {

        let item = new AgenteGruppo();
        return item;
    }
}

@resource('agenteGruppo')
export class AgenteGruppoSearchModel extends Entity implements Pagination {
    
    @field()
    idAgente?: number;
    @field()
    idGruppo?: number;
    @field()
    ausilio?: number;
    @field()
    pager: Pager = <Pager> {
        take: 100,
        orderBy: 'id'
    };
}