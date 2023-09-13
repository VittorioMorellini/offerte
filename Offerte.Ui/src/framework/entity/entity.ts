import { EntityMetadata } from './metadata';
import { Validation } from './validation';
// import i18n from '../i18n';
import { EntityManager } from './manager';

export abstract class Entity {

    constructor(data?: any) {

        let meta = EntityMetadata.forTarget(this.constructor);
        EntityManager.setMetadata(this.constructor.name, meta);       
    }

    public async init(obj: Record<string, any>, data?: any) {
    
        // let { obj } = this as { [k: string]: any };
    
        let metadata = EntityManager.getMetadata(obj.constructor.name)
    
        if (data) {
    
            Object.assign(obj, data);
    
            metadata.fields.forEach((field, propertyKey) => {
                if (field.json === true) {
                    if (!(obj[propertyKey])) {
                        obj[propertyKey] = JSON.parse(obj[propertyKey]);
                    }
                } else if (field.entity !== undefined) {
                    if (!(obj[propertyKey])) {
    
                        if (obj[propertyKey].constructor === Array) {
                            let tmp: any[] = [];
                            let j = Array.isArray(obj[propertyKey]) ? obj[propertyKey] : JSON.parse(obj[propertyKey]);
                            (j as any[]).forEach(o => tmp.push(new field.entity!(o)));
                            obj[propertyKey] = tmp;
                        } else {
                            obj[propertyKey] = new field.entity(obj[propertyKey]);
                        }
                    }
                }
            });
    
            // eseguo il cast ad Entity delle eventuali associazioni
            metadata.associations.forEach(async (association, propertyKey) => {
                try
                {
                    if ((obj[propertyKey]) && // recupero il valore dalla cache solo se l'elemento è nullo
                        association.cache !== undefined && 
                        !association.isCollection) {
        
                        obj[propertyKey] = await association.cache(obj[association.entityReferencePropertyName as string]);
                    }
        
                    if (obj[propertyKey]) {
                        
                        let associationCtor = association.entityReferenceType;
                        if (association.entityReferenceTypeFn) {
                            associationCtor = await association.entityReferenceTypeFn();
                        }
                        
                        if (association.isCollection) {
                            let tmp: any[] = [];
                            let j = Array.isArray(obj[propertyKey]) ? obj[propertyKey] : JSON.parse(obj[propertyKey]);
                            (j as any[]).forEach(o => tmp.push(new associationCtor(o)));
                            obj[propertyKey] = tmp;
                        } else {
                            obj[propertyKey] = new associationCtor(obj[propertyKey]);
                        }
                    }
                } catch (ex) {
                    console.error('EntityState - association', obj, association, propertyKey)
                    throw ex; 
                }
            });
        }
    }
}