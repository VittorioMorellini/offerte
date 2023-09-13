import { Dispatch, SetStateAction, useCallback,  useState } from 'react';
import * as yup from 'yup';
import { PropertyUtils } from '../utils';

export type YupValidator = {
    validate: (item: any, alternativeSchema?: yup.AnySchema, validationFailedCallback?: () => void) => boolean;
    validateAsync: (item: any, alternativeSchema?: yup.AnySchema, validationFailedCallback?: () => void) => Promise<any | yup.ValidationError>;
    isFieldRequired: (fieldName: string) => boolean;
    getFieldErrorMessage: (fieldName: string) => string | undefined;
    isItemInError: (item: any) => boolean;
    isFieldInError: (item: any, fieldName: string) => boolean;
    schema: yup.AnySchema;
    setSchema: Dispatch<SetStateAction<yup.ObjectSchema<any, Record<string, any>, any, any>>>;
    errors: yup.ValidationError;
}

export function useYupValidation<T>(schemaDef?: yup.ObjectSchema<any> | [(item: T) => any | string, yup.AnySchema][]) {

    if (!schemaDef)
        schemaDef = yup.object();

    if (Array.isArray(schemaDef)) {
        schemaDef = createSchema(schemaDef as [(item: T) => any | string, yup.AnySchema][]);
    }

    const [schema, setSchema] = useState<yup.ObjectSchema<any>>(schemaDef as yup.ObjectSchema<any>);
    const [errors, setErrors] = useState<yup.ValidationError>();

    const isFieldRequired = useCallback((name: string) => {

        const fieldValidationSchema = schema.describe().fields[name];
        const tests = fieldValidationSchema ? (fieldValidationSchema as any).tests : false;
        const isRequired = tests ? !!tests.find((test: { name: string; }) => test.name === 'required') : false;
    
        return isRequired;
    }, [schema]);

    const getFieldErrorMessage = useCallback((name: string) => {

        let errorMessage = undefined;
        if (errors && errors.inner) {
            let fieldError = errors.inner.find(x => x.path === name);
            errorMessage = fieldError?.message;
        }

        return errorMessage;
    }, [errors])

    const isItemInError = useCallback((item: any) => {

        return errors !== undefined;
    }, [])

    const isFieldInError = useCallback((item: any, name: string) => {

        if (errors && errors.inner) {
            let fieldError = errors.inner.find(x => x.path === name);
            return fieldError !== undefined;
        }

        return false;
    }, [])

    const validate = (item: any, alternativeSchema?: yup.AnySchema, validationFailedCallback?: () => void) => {

        let sk = alternativeSchema || schema;
        try {
            sk.validateSync(item, { abortEarly: false, context: item });
            setErrors(undefined);
            return true;
        } catch (err: any) {
            console.debug(err, err.inner);
            if (validationFailedCallback) {
                validationFailedCallback();
            }
            setErrors(err);
            return false;
        }
    }

    const validateAsync = async (item: any, alternativeSchema?: yup.AnySchema, validationFailedCallback?: () => void)=> {

        let sk = alternativeSchema || schema;
        try {
            const obj = await sk.validate(item, { abortEarly: false, context: item });
            setErrors(undefined);
            return obj;
        } catch (err: any) {
            // console.debug(err.inner);
            if (validationFailedCallback) {
                validationFailedCallback();
            }
            // TODO: ripristinare
            setErrors(err);
            return err;
        }
    }

    return {
        validate,
        validateAsync,
        isFieldRequired,
        getFieldErrorMessage,
        isItemInError,
        isFieldInError,
        schema,
        setSchema,
        errors
    } as YupValidator
}

export function createSchema<T>(fieldsSchema: [(item: T) => any | string, yup.AnySchema][]) {

    let obj: any = { }
    fieldsSchema.map(x => {
        let name = typeof x[0] === 'string' ? x[0] : PropertyUtils.propertyName<T, keyof T>(x[0]);
        obj[name] = x[1]
    })
    
    return yup.object().shape(obj);
}

export function createFieldsRequiredSchema(fields: string[]) {

    let obj: any = { }
    fields.map(x => {
        obj[x] = yup.mixed().required()
    })

    return obj;
}