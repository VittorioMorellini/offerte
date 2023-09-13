import React, { useEffect, useMemo, useState } from 'react';
// import yup from 'yup';
import { Entity, EntityUtils, YupValidator } from '../../../entity';
import { EntityConstructor } from '../../../entity/types';
import { useYupValidation } from '../../../entity/yup';

type FormProps = {

    validator?: YupValidator;
    translationResource?: string;
    
    className?: any;
    style?: any;
    as?: any;

    labelWidth?: number;
    children?: any;
}

type InnerFormProps<T> = FormProps & {

    item: T;
    setItem: React.Dispatch<React.SetStateAction<T>>;
    methods?: any;
}

export type FormContext<T> = {
    item: T;
    setItem: React.Dispatch<React.SetStateAction<T>>;
    labelWidth: number;
    validator?: YupValidator;
    translationResource?: string;   
}

export const FormContext = React.createContext<FormContext<any>>({} as any);

export function Form<T>({ item, setItem, methods, translationResource, validator, as, labelWidth, children, className, style }: InnerFormProps<T>) {

    let Container = as !== undefined ? as : BasicForm;
    let baseValidator = useYupValidation();

    return (
        <FormContext.Provider
            value={{
                item,
                setItem,
                validator: validator ?? baseValidator,
                labelWidth: labelWidth || 100,
                translationResource
            }}
        >
            <Container className={className} children={children} style={style} />
        </FormContext.Provider>
    );
}

function BasicForm(props: any) {

    return (
        <form className={props.className} style={props.style} autoComplete="off">
            {/* <input id="username" style={{display:'none'}} type="text" name="fakeusernameremembered" />
            <input id="password" style={{display:'none'}} type="password" name="fakepasswordremembered" /> */}
            {/* <input type="text" name="fakeUsername" id="fakeUsername" value="" style={{position: 'absolute', top: -5000, left: -5000}} />
            <input type="password" name="fakePassword" id="fakePassword" value="" style={{position: 'absolute', top: -5000, left: -5000}} /> */}
            {props.children}
        </form>
    );
}

// export type FieldProps<T> = {
//     Input: (props: InputProps<T>) => JSX.Element;
// }

export type FormItemProps<T> = {

    // formMethods: UseFormReturn<T, object>,
    formSubmit: () => Promise<T>, // | DeepMap<DeepPartial<UnionLike<T>>, FieldError>>
    Form: (props: FormProps) => JSX.Element,// React.Component<FormProps<T>>,
    // Field: FieldProps<T>
    item?: T,
    setItem?: React.Dispatch<React.SetStateAction<T>>
}

// TODO: aggiungere input Validator
export function useFormItem<T extends object>(obj: T) {

    const [item, setItem] = useState(obj);
    useEffect(() => {
        setItem(obj)
    }, [obj]);
    
    const submit = () => {
        // return new Promise<T | /*DeepMap<DeepPartial<UnionLike<T>>, FieldError*/>((resolve, reject) => {
        //     methods.handleSubmit(
        //         data => {
        //             let ctor = EntityUtils.isEntity(obj) ? obj.constructor as EntityConstructor<T> : undefined;
        //             resolve(ctor ? new ctor(data) : data as T);
        //         },
        //         error => {
        //             console.error(error);
        //             reject(error);
        //         }
        //     )()
        // })
        return Promise.resolve(item);
    }

    const form = (props: FormProps) => <Form item={item} setItem={setItem} /*methods={methods}*/ {...props} />

    return useMemo(() => ({
        // formMethods: methods,
        formSubmit: submit, // inserisco qui dentro la parte di validazione e la tolgo dalla actions.save
        Form: form,
        item,
        setItem
    } as FormItemProps<T>), [obj]);
}