import { Entity, EntityUtils } from '../entity';
import { i18n } from '../i18n';
import { EntityConstructor } from '../entity/types';
import axios, { AxiosError, AxiosInstance, AxiosResponse } from 'axios';

export type BaseService<T> = {
    instance: AxiosInstance;
    find:   (id: number | string) => Promise<T>;
    search: (model: any) => Promise<T[]>;
    // searchAsync: (model: any) => Promise<T[]>;
    save:   (item: T) => Promise<T>;
    delete: (id: number | string) => Promise<number | string>;
}

export function useGetAccessToken() {
    return '';
}

export function useBaseService<T> (endpoint: string, ctor: EntityConstructor<T>) {
    console.log({endpoint})
    let token = useGetAccessToken();
    const instance = axios.create({
        baseURL: endpoint,
        // timeout: 1000,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Authorization': `Bearer ${token}`
        },
        validateStatus: status => status <= 300,
    })

    const serializeBody = (obj: any) => EntityUtils.isEntity(obj) ? EntityUtils.asJSON(obj) : JSON.stringify(obj);
    const handleErrors = (error: AxiosError) => {
        if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);

            return Promise.reject(`${error.response.status}: ${error.response.data}`)

        } else if (error.request) {
            // The request was made but no response was received
            // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
            // http.ClientRequest in node.js
            console.log(error.request);

            return Promise.reject(`${error.request}`)
        } else {
            // Something happened in setting up the request that triggered an Error
            console.log('Error', error.message);
            return Promise.reject(`${error.message}`)
        }
        // console.log(error.config);        
        // return error.response;
    }

    const asItem = (ctor: EntityConstructor<T>) => (response: AxiosResponse<T>) => {
        return Promise.resolve(response.data)
            .then(item => EntityUtils.assignItem(item, ctor));
    }

    const asList = (ctor: EntityConstructor<T>) => (response: AxiosResponse<Array<T>>) => {
        return Promise.resolve(response.data)
            .then(list => EntityUtils.assignList(list, ctor));
    }

    const asJson = (ctor: EntityConstructor<T>) => (response: AxiosResponse<Array<T>>) => {
        if (response.status >= 300) {       
            return response.request.then((error: AxiosError) => {
                return Promise.reject(`${response.statusText}: ${error}`);
            });
        } else if (response.status === 204) {
            return Promise.resolve({ });
        } else {
            return response.data;
        }
    }
    
    return {
        instance,
        find: (id: number | string) => {
            console.log('find base service: ' + JSON.stringify(instance))
            return instance.get(`/${id}`)
                .then(asItem(ctor))
                .catch(handleErrors);
        },    
        search:(model: any) => {
            console.log('search base service: ' + JSON.stringify(instance))
            return instance.post('/search', serializeBody(model))
                .then(asList(ctor))
                .catch(handleErrors);
        },     
        // searchAsync: async (model: any) => {
    
        //     let response = await fetch(endpoint + '/search', ServiceUtils.createJsonFetchOptions('POST', model));
        //     let json = await response.json();
        //     let list = EntityUtils.assignList(json, ctor);
    
        //     return Promise.resolve(list);
        // },    
        save: (item: T) => {
            return instance.post('', serializeBody(item))
                .then(asItem(ctor))
                .catch(handleErrors);
        },    
        delete: (id: number | string) => {
            return instance.delete(`/${id}`)
                .then(response => Promise.resolve(id))
                .catch(handleErrors);
                //.then((response: Response) => Promise.resolve(id));
        }
    }
}