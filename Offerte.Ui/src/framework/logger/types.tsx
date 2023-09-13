import { AlertColor } from '@mui/material';
import React from 'react';

export type LoggerServiceOptions = {
    key?: string
}

export type Logger = {
    debug: (text: string, title?: string) => void,
    success: (text: string, title?: string) => void,
    info: (text: string, title?: string) => void,
    warning: (text: string, title?: string) => void,
    error: (text: string, title?: string) => void
    log: (severity: AlertColor, text: string, title?: string) => void
}

export const LoggerServiceContext = React.createContext<
    (options: LoggerServiceOptions) => Logger | undefined
>(() => undefined);