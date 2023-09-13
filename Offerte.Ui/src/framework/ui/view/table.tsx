import { useCallback, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Table, TableHead, TableRow, TableCell, TableBody, IconButton, Theme, Tooltip } from '@mui/material';
import { Delete as DeleteIcon, PriorityHigh as ErrorIcon } from '@mui/icons-material';
import { PageLoader } from '../../core/types';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        overflow: 'auto',
    },
    table: {
        border: '1px solid rgba(224, 224, 224, 1)',
        borderRadius: 4
    },
    tableHead: {
        backgroundColor: 'rgba(0, 0, 0, 0.03)',
        color: '#1e789f'
    },
    tableRow: {
        cursor: 'pointer',
        '&:nth-of-type(odd)': {
            backgroundColor: 'rgba(0, 0, 0, 0.02)' // theme.palette.action.hover,
        },
        '&:hover': {
            backgroundColor: 'rgba(0, 0, 0, 0.05)'
        },
    }
}))

type Props<T> = {
    items: T[];
    onItemClick: (item: T, index: number) => void;
    onItemDelete?: (id: any) => void,
    thDefs: any;
    trDefs: any;
    itemKey: (item: T) => string | number;
    itemError?: (item: T) => boolean;
    size?: "medium" | "small" | undefined;
    rowStyle?: (item: T, index: number) => any
    pageLoader?: PageLoader;
    style?: any;
};

function TableView<T>({
    items,
    onItemClick,
    onItemDelete,
    thDefs,
    trDefs,
    itemKey,
    itemError,
    size,
    rowStyle,
    pageLoader,
    style
}: Props<T>) {

    const { t } = useTranslation();
    const classes = useStyles();

    size = size || "small";
    rowStyle = rowStyle || ((item: T, index: number) => { return { }});
    let additionalCell = onItemDelete || itemError;

    const observer = useRef<any>();
    const lastElementRef = useCallback((node: any) => {

        if (!pageLoader || pageLoader.isLoading) {
            return;
        }
        if (observer && observer.current) {
            observer.current.disconnect();
        }
            
        observer!.current = new IntersectionObserver(entries => {
            // se l'ultimo elemento è visibile nel viewport ed esistono altri dati, allora li carichiamo
            if (entries[0].isIntersecting && pageLoader.hasNext) {
                pageLoader.loadNext(items.length + pageLoader.take);
            }
        });

        if (node) {
            observer.current.observe(node);
        }

    }, [pageLoader?.isLoading, pageLoader?.hasNext])
    
    const rowRenderer = (row: T, index: number, last: boolean) => (
        <TableRow
            key={index}
            onClick={e => onItemClick(row, index)}
            className={classes.tableRow}
            style={rowStyle!(row, index)}
            ref={last && pageLoader ? lastElementRef : null}
        >
            {trDefs(row)}
            {additionalCell &&
                <TableCell align="right">
                    {itemError && itemError(row) && <IconButton style={{padding: 0}}><Tooltip title={t('common:errors.validation')!}><ErrorIcon color="error" /></Tooltip></IconButton>}
                    {onItemDelete && <IconButton style={{padding: 0}} onClick={(e: any) => { e.stopPropagation(); onItemDelete(itemKey(row)); }}><DeleteIcon /></IconButton>}
                </TableCell> 
            }
        </TableRow>
    );

    return (
        <div className={classes.root} style={style}>
            <Table stickyHeader={true} className={classes.table} size={size}>
                <TableHead className={classes.tableHead}>
                    <TableRow>
                        {thDefs}
                        {additionalCell && <TableCell></TableCell>}
                    </TableRow>
                </TableHead>
                <TableBody>                        
                    {items.map((row, index) => rowRenderer(row, index, items.length == index + 1))}
                </TableBody>
            </Table>
        </div>
    );
}

export default TableView;