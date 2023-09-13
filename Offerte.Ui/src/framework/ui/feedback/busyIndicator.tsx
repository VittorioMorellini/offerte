import * as React from 'react';
import { LinearProgress } from '@mui/material';

export default function (props: any) {
    return props.isBusy ? <LinearProgress color="primary" style={{flex: '0 0 auto', marginLeft: '1rem', marginRight: '1rem'}} /> : null;
}