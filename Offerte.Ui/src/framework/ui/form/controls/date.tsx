import React, { useContext } from 'react';
import { Entity } from '../../../entity';
import { FieldContext, FieldProps, FieldWithImplementationControl } from '../core/field';
import { OutlinedFieldImplementation } from '../field';
import { OutlinedInput, TextField, TextFieldProps } from '@mui/material';
import { format, parseISO } from 'date-fns';
import { DatePicker } from '@mui/lab';

export function DatePickerControl<T extends Entity>(props: any) {

    let { onChange, value, name, error } = useContext(FieldContext);

    let type = (props.type as 'native' | 'material' | undefined) || 'native';                
    let p = {
        ...props,
        format: props.format || 'L'
    };

    p.style = p.style = {};
    p.style.margin = 0;

    if (type === 'native') {
        value = format(parseISO(props.value || value), 'yyyy-MM-dd');
        return (
            <OutlinedInput {...p}
                value={value}
                onChange={(e: any) => onChange(e.target.value)}
                margin="dense" 
                error={error}
                type="date"
                shrink={true}
            />
        )
    } else {
        value = value === '' || value === undefined ? null : value;
        return (
            <DatePicker {...p}
                value={value}
                onChange={(date: any) => onChange(date)}
                inputVariant="outlined"
                emptyLabel=""
                invalidLabel=""
                clearable={true}
                invalidDateMessage={() => { return ''; }}
                TextFieldComponent={(p: TextFieldProps) => <TextField {...p} margin="dense" />}
            />
        )
    }
}

type DateProps<T extends Entity> = FieldProps<T> & {
    format?: string,
    type?: 'native' | 'material' | undefined
};

export function DatePickerField<T extends Entity>(props: DateProps<T>) {
    
    let p = { ...props };
    p.ControlProps = p.ControlProps || { ...props };

    return FieldWithImplementationControl(p, OutlinedFieldImplementation, DatePickerControl);
}

// export function DatePickerListField<T extends Entity>(props: DateProps<T>) {
    
//     let p = { ...props };
//     p.ControlProps = p.ControlProps || {};
//     p.ControlProps.InputProps = p.ControlProps.InputProps || {};
//     p.ControlProps.InputProps.disableUnderline = true;
//     p.ControlProps.format = p.format;

//     return fieldWithImplementationControl(p, ListFieldImplementation, DatePickerControl);
// }
