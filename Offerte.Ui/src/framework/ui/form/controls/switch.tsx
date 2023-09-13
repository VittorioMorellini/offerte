import React, {useContext } from 'react';
import { FieldContext, FieldProps, FieldWithImplementationControl } from '../core/field';
import { ListFieldImplementation, OutlinedFieldImplementation } from '../field';
import { Switch } from '@mui/material';

function SwitchControl<T>(props: any) {

    const { onChange, value } = useContext(FieldContext);

    return (
        <Switch
            {...props} 
            checked={value}
            onChange={(e: any) => onChange(e.target.checked)}
        />
    );
}

export function SwitchListField<T>(props: FieldProps<T>) {

    return FieldWithImplementationControl(props, ListFieldImplementation, SwitchControl);
}

export function SwitchField<T>(props: FieldProps<T>) {

    return FieldWithImplementationControl(props, OutlinedFieldImplementation, SwitchControl);
}

