import React, { useContext } from 'react';
import { FieldContext, FieldProps, FieldWithImplementationControl } from '../core/field';
import { ListFieldImplementation, OutlinedFieldImplementation } from '../field';
import { Checkbox } from '@mui/material';

export function CheckboxControl<T>(props: any) {

    const { onChange, value } = useContext(FieldContext);

    return (
        <Checkbox
            {...props} 
            checked={value}
            onChange={(e: any) => onChange(e.target.checked)}
        />
    );
}

export function CheckboxListField<T>(props: FieldProps<T>) {
    
    return FieldWithImplementationControl(props, ListFieldImplementation, CheckboxControl);
}

export function CheckboxField<T>(props: FieldProps<T>) {
    
    return FieldWithImplementationControl(props, OutlinedFieldImplementation, CheckboxControl);
}
