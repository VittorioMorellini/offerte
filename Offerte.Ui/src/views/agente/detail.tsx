import React, { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { DetailView, Panel } from '../../framework/ui';
import { useFormItem, Field } from '../../framework/ui/form';
import { useDetailMode } from '../../framework/hooks';
import { RootState } from '../../app/reducers';
import { useAgenteActions } from '../../core/agente';
import { Agente } from '../../models';
import Fields from './fields';

const Detail = (props: any) => {

    const navigate = useNavigate();
    const { t } = useTranslation();
    const isBusy = useSelector((root: RootState) => root.agente.isBusy);
    const item = useSelector((root: RootState) => root.agente.currentItem!);
    const { Form, formSubmit } = useFormItem(item);
    const { id, isUpdate } = useDetailMode(item); 
    const { actions } = useAgenteActions();

    useEffect(() => {
        if (isUpdate) {
            actions.find(id).catch(() => { });
        }
    }, [id]);

    const handler = {
        navigateBack: () => {
            navigate(-1);
        },
        save: () => {
            formSubmit()
                .then(actions.save)
                .then(handler.navigateBack)
                .catch(() => { })
        },
        delete: () => {
            actions.delete(item.id)
                .then(handler.navigateBack)
                .catch(() => { });
        }
    };

    const content = (
        <Panel>
            <Form>
                <Fields item={item}/>
            </Form>
        </Panel>
    );

    return (
        <DetailView 
            title={t('views:agente.detail.title')}
            isBusy={isBusy}
            content={content}
            isUpdate={isUpdate}
            onBack={handler.navigateBack}
            onSave={handler.save}
            onDelete={handler.delete}
        />
    );
}

export default Detail;