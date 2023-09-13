import React, { useContext } from 'react';
import { FieldContext, FieldProps, FieldWithImplementationControl } from '../core/field';
import { MaterialFieldImplementation, OutlinedFieldImplementation } from '../field';
import { Autocomplete, TextField } from '@mui/material';

function AutocompleteControl<T>(props: InnerAutocompleteProps<T>) {

    let { onChange, value } = useContext(FieldContext);
    value = value || { value: '', label: '' };
    const onGet = (value: unknown) => props.options.find((x: any) => x.value === value)

    return (
        <Autocomplete 
            {...props}             
            size="small"
            value={onGet(value)}
            onChange={(e: React.ChangeEvent<{}>, option: AutocompleteOption | null) => onChange(option?.value)}
            getOptionLabel={(options: AutocompleteOption) => options.label}
            // getOptionSelected={(option: any, value: any) => option.value === value.value}
            // isOptionEqualToValue={(option: any, value: any) => option.value === value.value}
            renderInput={(params) => <TextField {...params} variant="outlined" />}
            // renderOption={(option) => <Typography noWrap={true}>{option}</Typography>}
        />
    );
}

type InnerAutocompleteProps<T> = {    
    style?: any;
    blank?: any;
    options: any;
    readonly?: boolean;
    renderOption?: (option: any) => any
};

type AutocompleteProps<T> = FieldProps<T> & InnerAutocompleteProps<T>;

type AutocompleteOption = {
    value: any;
    label: string;
}

function handleProps<T>(props: AutocompleteProps<T>) {

    let p = { ...props };
    p.ControlProps = p.ControlProps || {};
    p.ControlProps.blank = p.ControlProps.blank || props.blank;
    p.ControlProps.options = p.ControlProps.options || props.options || [];

    if (p.ControlProps.blank === true) {
        p.ControlProps.blank = { value: '', label: '' };
    }
    if (p.ControlProps.blank !== undefined && p.ControlProps.blank !== false) {
        p.ControlProps.options.unshift(p.ControlProps.blank);
    }

    p.ControlProps.style = p.ControlProps.style || {};
    p.ControlProps.style = {
        ...p.ControlProps.style,
        width: p.ControlProps.style.width || '100%'
    };

    if (p.renderOption)
        p.ControlProps.renderOption = p.renderOption;

    // è necessario poichè la property value del react-select è in realtà l'intera option ({ value: '<some value>', label: <some label>'})
    // p.ControlProps.onGetValue = (value: unknown) => p.ControlProps.options.find((x: any) => x.value === value);

    return p;
}

export function autocompleteOptions<T>(list: T[], value: (item: T) => any, label: (item: T) => any): AutocompleteOption[] {
    return list.map((item) => { 
        return { 
            value: value(item), 
            label: label(item)
        };
    });
}

export function AutocompleteOutlinedField<T>(props: AutocompleteProps<T>) {

    let p = handleProps(props);

    return FieldWithImplementationControl(p, OutlinedFieldImplementation, AutocompleteControl);
}

export function AutocompleteField<T>(props: AutocompleteProps<T>) {

    let p = handleProps(props);

    return FieldWithImplementationControl(p, MaterialFieldImplementation, AutocompleteControl);
}