import React from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { TableCell } from '@mui/material';
import { TableView } from '../../framework/ui/';
import { RootState } from '../../app/reducers';
import { Agente } from '../../models';

type Props = {
    items?: Agente[];
    onItemClick: (item: Agente, index: number) => void;
    onItemDelete?: (id: number) => void
};

const Table = ({
    items,
    onItemClick,
    onItemDelete
}: Props) => {

    const { t } = useTranslation();
    let rows = useSelector((root: RootState) => root.agente.items);
    rows = items || rows;

    return (
        <TableView
            items={rows}
            itemKey={(item: Agente) => item.id}
            onItemClick={onItemClick}
            onItemDelete={onItemDelete}            
            thDefs={<>
                <TableCell>{t('entities:agente.ragioneSociale')}</TableCell>
                <TableCell>{t('entities:agente.indirizzo')}</TableCell>
                <TableCell>{t('entities:agente.cap')}</TableCell>
                <TableCell>{t('entities:agente.localita')}</TableCell>
                <TableCell>{t('entities:agente.codiceFiscale')}</TableCell>
                <TableCell>{t('entities:agente.partitaIVA')}</TableCell>
                <TableCell>{t('entities:agente.telefono')}</TableCell>
                <TableCell>{t('entities:agente.numeroFax')}</TableCell>
                <TableCell>{t('entities:agente.budget')}</TableCell>
                <TableCell>{t('entities:agente.fattProg')}</TableCell>
                <TableCell>{t('entities:agente.agenteOmega')}</TableCell>
            </>}
            trDefs={(row: Agente) => (<>
                <TableCell>{row.ragioneSociale}</TableCell>
                <TableCell>{row.indirizzo}</TableCell>
                <TableCell>{row.cap}</TableCell>
                <TableCell>{row.localita}</TableCell>
                <TableCell>{row.codiceFiscale}</TableCell>
                <TableCell>{row.partitaIVA}</TableCell>
                <TableCell>{row.telefono}</TableCell>
                <TableCell>{row.numeroFax}</TableCell>
                <TableCell>{row.budget}</TableCell>
                <TableCell>{row.fattProg}</TableCell>
                <TableCell>{row.agenteOmega}</TableCell>
            </>)}
        />
    );
}

export default Table;