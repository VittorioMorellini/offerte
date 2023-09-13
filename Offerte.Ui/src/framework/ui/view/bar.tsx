import React, { useState } from 'react';
import { makeStyles } from '@mui/styles';
import { Theme, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

const useStyles = makeStyles((theme: Theme) => ({
    root: {        
        display: 'flex',
        padding: '1rem 1rem 0 1rem',
        color: 'rgba(0, 0, 0, 0.7)',
        alignItems: 'center'
        // backgroundColor: '#fafafa'
    },
    icon: {
        flex: '0 1 auto',
        marginRight: '0.5rem'
    },
    title: {        
        // fontWeight: 500,
        // fontSize: '1.25em',
        flex: 1
    },
    actions: {
        flex: '0 1 auto'
    }
}));

export const ViewBar = ({icon, title, actions}: any) => {

    const classes = useStyles();
    const { t } = useTranslation();

    return (
        <div className={classes.root}>
            {icon ? <div className={classes.icon}>{icon}</div> : null}
            <div className={classes.title}><Typography variant="h5">{t(title)}</Typography></div>
            <div className={classes.actions}>{actions}</div>
        </div>
    )
}