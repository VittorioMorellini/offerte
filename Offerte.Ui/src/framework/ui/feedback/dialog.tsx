import * as React from 'react';
import { createStyles, makeStyles } from '@mui/styles';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, withStyles, Theme, IconButton, Breakpoint } from '@mui/material';
// import { t } from '../../i18n';
import { i18n } from '../../i18n';
// import CloseIcon from '@mui/icons-material/Close';
import InfoIcon from '@mui/icons-material/Info';
import WarningIcon from '@mui/icons-material/Warning';
import ErrorIcon from '@mui/icons-material/Error';

import cyan from '@mui/material/colors/cyan';
import amber from '@mui/material/colors/amber';
import red from '@mui/material/colors/red';

const useStyles = makeStyles((theme: Theme) => ({
    dialog: { 
        width: '80%'
    },
    icon: {
        position: 'absolute',
        right: theme.spacing(1),
        top: theme.spacing(1) + 4,
        color: theme.palette.grey[500],
    }
}));

type BaseDialogProps = {

    open: boolean;
    title?: string;
    message?: string;
    handleCancel?: () => void;
    handleConfirm: () => void;
    severity?: number;
    icon?: any;
    width?: Breakpoint;
}

function BaseDialog ({ icon, title, message, width, open, severity, handleConfirm, handleCancel }: BaseDialogProps) {

    const classes = useStyles();

    if (icon === undefined) {
        // tslint:disable-next-line: switch-default
        switch (severity) {
            case 1:
                icon = <InfoIcon style={{color: cyan[500]}} />;
                break;
            case 2:
                icon = <WarningIcon style={{color: amber[500]}} />;
                break;
            case 3:
                icon = <ErrorIcon style={{color: red[500]}} />;
                break;
        }
    }

    return (
        <Dialog
            disableEscapeKeyDown={true}
            maxWidth={width || 'xs'}
            open={open}
            classes={{paper: classes.dialog}}
        >
            <DialogTitle>                    
                {title || ''}
                {icon && 
                <IconButton className={classes.icon}>
                    {icon}
                </IconButton>          
                }                       
            </DialogTitle>
            <DialogContent>
                <p>{message || ''}</p>
            </DialogContent>
            <DialogActions>
            <Button onClick={handleConfirm} color="primary">
                {/*i18n.t('common:ok')*/}
            </Button>
            {handleCancel && 
                <Button onClick={handleCancel} color="primary">
                    {/*i18n.t('common:cancel')*/}
                </Button>
            }                
            </DialogActions>
        </Dialog>
    )
}

export default BaseDialog;