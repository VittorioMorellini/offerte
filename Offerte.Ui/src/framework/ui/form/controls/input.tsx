import React, { memo, useContext } from 'react';
import { Entity } from '../../../entity';
import { FieldContext, FieldProps, FieldWithImplementationControl } from '../core/field';
import { ListFieldImplementation, MaterialFieldImplementation, OutlinedFieldImplementation } from '../field';
import { OutlinedInput } from '@mui/material';

function InputOutlinedControl<T>(props: InputProps<T>) {

    const { onChange, value, error } = useContext(FieldContext);

    return (
        <OutlinedInput
            {...props}
            error={error}
            onChange={e => onChange(e.target.value)}
            // onBlur={onBlur}
            value={value}
            margin="dense"
            size="small"
        />
    );
}

export type InputProps<T> = FieldProps<T> & {
    type?: 'number' | 'text' | 'password'; 
};

function handleProps<T>(props: InputProps<T>) {

    let p = { ...props };
    p.ControlProps = p.ControlProps || {};
    p.ControlProps.type = p.ControlProps.type || p.type || 'text';
    p.ControlProps.style = p.ControlProps.style || {};
    p.ControlProps.style = {
        ...p.ControlProps.style,
        width: p.ControlProps.style.width || '100%'
    };
    p.ControlProps.autocomplete = 'chrome-off';

    return p;
}

// export function InputField<T extends Entity>(props: InputProps<T>) {

//     let p = handleProps(props);
//     return FieldWithImplementationControl(p, MaterialFieldImplementation, InputControl);
// }

// export function InputListField<T extends Entity>(props: InputProps<T>) {

//     let p = handleProps(props);
//     p.ControlProps.disableUnderline = true;    

//     return FieldWithImplementationControl(p, ListFieldImplementation, InputControl);
// }

export function InputOutlinedField<T extends Entity>(props: InputProps<T>) {

    let p = handleProps(props);

    return FieldWithImplementationControl(p, OutlinedFieldImplementation, InputOutlinedControl);
}


// const typedMemo: <T extends Entity, C>(
//     c: C,
//     areEqual?: (
//         prev: InputProps<T>,
//         next: InputProps<T>
//       ) => boolean
//   ) => C = React.memo

// export const InputOutlinedField = typedMemo(InnerInputOutlinedField, (pv, np) => pv.name !== np.name)