import React, { useContext, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { UNSAFE_NavigationContext, useNavigate } from 'react-router';
import { useTranslation } from 'react-i18next';
import { IndexView, Panel } from '../../framework/ui';
import { useAgenteActions } from '../../core/agente';
import { Agente } from '../../models';
import { RootState } from '../../app/reducers';
import Search from './search';
import Table from './table';
import { BrowserHistory } from 'history';

const Index = (props: any) => {

    const navigate = useNavigate();
    const { t } = useTranslation();
    const { actions } = useAgenteActions();
    const isBusy = useSelector((root: RootState) => root.agente.isBusy);
    const model = useSelector((root: RootState) => root.agente.searchModel);
    const navigation = useContext(UNSAFE_NavigationContext).navigator as BrowserHistory;

    console.log('Agente index return')
    useEffect(() => {
        console.log('first search use effect')
        if (navigation.action !== 'POP') {
            console.log('first search use effect not POP:')
            actions.search(model).catch((err) => { console.log('Errore in search: ' + err) });
        }
    }, [model]);

    const handler = {
        add: () => {
            handler.itemClick(Agente.newItem(), 0);
        },
        itemClick: (item: Agente, index: number) => {
            actions.itemSelected(item, index);
            navigate('/agente/' + item.id);
        }
    }

    const content = (
        <Panel title={t('common:results')}>
            <Table onItemClick={handler.itemClick} />
        </Panel>
    );

    return (
        <IndexView 
            title={t('views:agente.index.title')}
            isBusy={isBusy}
            content={content} 
            search={<Search />}
            onAdd={handler.add}
        />
    );
}

export default Index;