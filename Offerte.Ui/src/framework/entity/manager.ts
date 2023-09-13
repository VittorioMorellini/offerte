import { EntityMetadata } from './metadata';
import { Validation } from './validation';

class EntityManagerClass {
    private metadata: Record<string, EntityMetadata> = {}
    private state: any = {}
    private validation: any = {}

    constructor() {

        // setInterval(() => {
        //     // console.debug(sizeof(this));
        //     console.debug({
        //         all: sizeof(this),
        //         metadata: sizeof(this.metadata),
        //         state: sizeof(this.state),
        //         validation: sizeof(this.validation),
        //         s: this.state,
        //         v: this.validation
        //     })
        // }, 10000);
        
    }

    public setMetadata(name: string, meta: EntityMetadata) {
        if (!this.metadata[name]) {
            this.metadata[name] = meta;
            // console.debug(this.metadata);
        }
    }

    public setValidation<T>(guid: string, v: Validation<T>) {
        this.validation[guid] = v;
    }

    public getMetadata(name: string) {
        return this.metadata[name];
    }

    public getState(guid: string) {
        return this.state[guid];
    }

    public getValidation(guid: string) {
        return this.validation[guid];
    }
}

export const EntityManager: EntityManagerClass = new EntityManagerClass();