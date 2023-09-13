import * as React from 'react';
import { makeStyles } from '@mui/styles';
import { Typography } from '@mui/material';

const useStyles = makeStyles({
    root: {
        display: 'flex',
        width: '100%'
    },
    left: {
        flex: '0 0 auto'
    },
    center: {
        flex: '1 0 auto'
    },
    right: {
        flex: '0 0 auto'
    },
    primary: {
        color: 'rgba(0, 0, 0, 0.87)'
    },
    secondary: {
        color: 'rgba(0, 0, 0, 0.54)'
    }
});

interface Props {

    primary: string;
    secondary?: string;
    left?: any;
    right?: any;
}

type InnerProps = Props & {
    classes: any
};

export function ListItem(props: InnerProps) {

    const classes = useStyles();
    let { primary, secondary, left, right } = props;

    return (
        <div className={classes.root}>
            <div className={classes.left}>
                {left}
            </div>
            <div className={classes.center}>
                <Typography variant="subtitle1" className={classes.primary}>
                    {primary}
                </Typography>
                <Typography variant="body2" className={classes.secondary}>
                    {secondary}
                </Typography>
            </div>
            <div className={classes.right}>
                {right}
            </div>
        </div>
    );
}