
import React, { useEffect } from 'react';
import { ThemeProvider } from '@mui/styles';
import { createTheme } from '@mui/material/styles';
import { BrowserRouter as Router } from 'react-router-dom';
import { LoggerServiceProvider } from './framework/logger';
import './App.css';
import { RootView } from './views/root';
import ErrorBoundary from './views/errorBoundary';
import DateUtils from '@date-io/date-fns';
import { useColor } from './app/core/hooks';
import { useTranslation } from 'react-i18next';
import { setLocale } from 'yup';

//import AdapterDateFns from '@mui/';
//import LocalizationProvider from '@mui/x-date-pickers/LocalizationProvider';
import itLocale from "date-fns/locale/it";

function App() {

    const { t } = useTranslation();
    const colors = useColor();

    const theme = createTheme({
        typography: {
            fontFamily: [
                '"Roboto Condensed"',
                'sans-serif'
            ].join(','),
        },
        palette: {
            ...colors
        },
        components: {
            MuiTableCell: {
                styleOverrides: {                
                    head: {
                        color: colors.primary.main
                    }
                }
            }
        }
    });

    useEffect(() => {
        // setup localizzazione yup
        setLocale({
            string: {
                //required: (t('common:required')),
                matches: (t('common:regex')),
                email: (t('common:invalidMail')),
            },
            mixed: {
                required: (t('common:required')),
                //matches: (t('common:regex')),
            },
            number: {
                //required: (t('common:required')),
                //matches: (t('common:regex')),
            },
            date: {
                //required: (t('common:required')),
                //matches: (t('common:regex')),
            }
        })
    }, [])

    console.log('app return');
    return (
        <ThemeProvider theme={theme}>
            <LoggerServiceProvider>
                {/* <LocalizationProvider dateAdapter={AdapterDateFns} locale={itLocale}> */}
                    <Router basename={import.meta.env.PUBLIC_URL}>
                        <ErrorBoundary>
                            <RootView />
                            {/* <MyComponent user={{name: 'vitto'}}/> */}
                        </ErrorBoundary>
                    </Router>
                {/* </LocalizationProvider> */}
            </LoggerServiceProvider>
        </ThemeProvider>
    );
}

export default App;

