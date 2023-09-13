import React, { useContext, useState } from 'react';
import { i18n } from '../../../i18n';
import { Entity, EntityUtils } from '../../../entity';
import { PropertyUtils, StringUtils } from '../../../utils';
import { FormContext } from './form';
import { useTranslation } from 'react-i18next';

export interface LabelProps {
    style?: any;
    static?: boolean;
    hidden?: boolean;
    width?: number;
}

export interface FieldProps<T> {

    name?: string;
    model?: (x: T) => any;

    className?: any;
    style?: any;
    hidden?: boolean;

    helper?: string;
    required?: boolean;
    regex?: RegExp;
    disabled?: boolean;

    label?: string;
    LabelProps?: LabelProps;

    ControlProps?: any;
    onGetValue?: (valueFromModel: any) => any;
    onSetValue?: (valueToModel: any) => any;
    // utile per gestire eventuali eventi aggiuntivi (es. Select in cascata)
    onValueChanged?: (value: any, event?: any) => void;

    control?: React.ReactElement<any> | ((context: FieldContext) => React.ReactElement<any>);
    children?: any;
}

export interface FieldContext {
    name: string;
    // onGetValue: (valueFromModel: any) => any;
    // onSetValue: (valueToModel: any) => any;
    onChange: any;
    value: any;
    error: any;
    // onValueChanged: (value: unknown, event: any) => any;
    // control: any;
    // value: any;
    // error: boolean;
}

export const FieldContext = React.createContext<FieldContext>({} as any);

type FormFieldProps<T> = FieldProps<T> & {
    // form: FormContext<T>,
    implementation: any
};

export function Field<T>(props: FormFieldProps<T>) {

    // TODO passare validazione dal form
    // const { control: formControl } = useFormContext();
    const { control, className, helper, hidden, style, disabled, onValueChanged } = props;
    const { item, setItem, labelWidth, translationResource, validator } = useContext(FormContext);
    const { t } = useTranslation();
    
    if (hidden) {
        return null;
    }
    
    if (StringUtils.isUndefinedOrEmpty(props.name) && props.model === undefined) {
        throw new Error('Define field name or model!');
    }

    let name = props.name || PropertyUtils.propertyName<T, keyof T>(props.model!);
    let isEntity = EntityUtils.isEntity(item);
    let resource = translationResource;
    let required = false;
    let regex = undefined;
    let label = '';

    if (isEntity) {
        resource = EntityUtils.resource(item)
        required = EntityUtils.metadata(item)?.fields.get(name)?.required || false;
        regex =  EntityUtils.metadata(item)?.fields.get(name)?.regex || undefined;
        label = t(`entities:${resource}.${name}`) || '';
    }

    label = props.label || label;
    required = props.required || required;
    regex = props.regex || regex;

    // const [validation, setValidation] = useState(false);
    // if (!validation) {

    // }

    let onGetValue = props.onGetValue || ((val) => { return val; });
    let onSetValue = props.onSetValue || ((val) => { return val; });
    
    let val = onGetValue(getter(item, name));
    // questo mi serve affinchè l'input sia di tipo 'controlled', se lasciassi undefined avrei un warning a runtime
    // if (val === undefined || val === null) {
    //     val = '';
    // }

    let error = false;

    let fieldContext: FieldContext = {
        name,
        value: val,
        onChange: (value: unknown, event: any) => {
            let v = onSetValue(value);
            setter(item, name, v);
            // onChange(val);
            if (onValueChanged) {
                onValueChanged(v, event)
            }
            setItem({...item});
        },
        error
    };

    let child = props.children !== undefined ? props.children : control !== undefined ? control : null;
    if (typeof child === 'function') {
        child = child(fieldContext);
    }

    let labelProps = props.LabelProps || {};
    labelProps.width = labelProps.width || labelWidth;
    labelProps.style = labelProps.style || {
        fontSize: '1em',
        // color: error ? 'red' : 'rgba(0, 0, 0, 0.6)'
    };

    let implementationProps: FieldImplementationProps<T> = {
        className,
        style,
        label,
        LabelProps: labelProps,
        required,
        disabled: disabled || false,
        error,
        // errorMessage,
        helper,
        fieldContext,
        child
    };                

    return props.implementation(implementationProps);
}

export interface FieldImplementationProps<T> {
    className: string;
    style: any;
    label: string;
    LabelProps: LabelProps;
    required: boolean;
    disabled: boolean;
    error: any;
    errorMessage?: string;
    helper?: string;
    fieldContext: FieldContext;
    child: any;
}

export function FieldWithImplementationControl<T>(props: FieldProps<T>, Implementation: any, Component: any) {

    let p = { ...props };
    p.ControlProps = {}; // al field non interessano le ControlProps

    return (
        <Field
            {...p}
            implementation={Implementation}
            control={<Component {...props.ControlProps} />}
        />
    );
}

export function FieldWithImplementation<T>(props: FieldProps<T>, Implementation: any) {
    
    return (
        <Field
            {...props}
            implementation={Implementation}
        />
    );
}

function getter(object: any, field: string) {

    let token = field.split('.');
    let length = token.length;

    let property = object;

    for (let i = 0; i < length; i++) {
        property = property[token[i]];
    }

    return property;
}

function setter(object: any, field: string, value: any) {

    let token = field.split('.');
    let length = token.length;

    let property = object;

    let i = 0;
    for (i = 0; i < length - 1; i++) {
        property = property[token[i]];
    }

    property[token[i]] = value;
}