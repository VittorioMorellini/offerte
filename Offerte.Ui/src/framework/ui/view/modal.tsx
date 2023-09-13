import React from 'react';
import { useTranslation } from 'react-i18next';
import { Theme, useTheme, useMediaQuery, Dialog, DialogActions, Button } from '@mui/material';
import { Form, useFormItem } from '../form';
import { YupValidator } from '../../entity';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    root: { 

    }
});

type Props<T extends object> = {
    open: boolean,
    currentItem: T,
    onCancel: () => void,
    onConfirm: (item: T) => void,
    fields: any | ((props: ModalItemProps<T>) => any),
    fullScreen?: boolean,
    maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | false, 
    content?: any | ((props: ModalItemProps<T>) => any),
    validator?: YupValidator
}

export type ModalItemProps<T extends object> = {
    item: T;
    setItem: (obj: T) => void;
}

function ModalView<T extends object>({
    open,
    currentItem,
    onCancel,
    onConfirm,
    fields,
    fullScreen,
    maxWidth,
    content,
    validator
}: Props<T>) {

    const { t } = useTranslation();
    const theme: Theme = useTheme();
    const classes = useStyles();
    
    maxWidth = maxWidth || 'sm';
    let full = useMediaQuery(theme.breakpoints.down('sm'));
    full = fullScreen !== undefined ? fullScreen : full; 

    const { Form, formSubmit, item, setItem } = useFormItem(currentItem);
    // TODO: sistemare
    
    if (typeof fields === 'function')
        fields = fields({item, setItem});
    if (typeof content === 'function')
        content = content({item, setItem});

    // const submit = () => {
    //     methods.handleSubmit(
    //         data => setItem(data as any), // onConfirm(item)
    //         data => console.error(data)
    //     )()
    // }

    return (
        <Dialog 
            className={classes.root}
            open={open}
            fullScreen={full}
            fullWidth={true}
            maxWidth={maxWidth}
        >
            <Form style={{padding: '1rem'}} validator={validator}>
                {fields}
            </Form>
            {content}
            <DialogActions>
                <Button 
                    onClick={(e: any) => { onCancel(); }} 
                    style={{marginRight: '4px'}}
                    color="primary"
                >{t('common:cancel')}</Button>
                <Button 
                    onClick={(e: any) => { formSubmit().then(x => onConfirm(x)) }} 
                    style={{marginRight: '4px'}}
                    color="primary"
                >{t('common:save')}</Button>
            </DialogActions>
        </Dialog>
    );
};

export default ModalView;