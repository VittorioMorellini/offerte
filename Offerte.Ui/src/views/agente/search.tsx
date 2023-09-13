import React from 'react';
import { useSelector } from 'react-redux';
import { SearchView } from '../../framework/ui';
import { useFormItem, Field } from '../../framework/ui/form';
import { RootState } from '../../app/reducers';
import { AgenteSearchModel } from '../../models';
import { useAgenteActions } from '../../core/agente';

const Search = (props: any) => {

    const { actions } = useAgenteActions();
    const model = useSelector((root: RootState) => root.agente.searchModel);
    const { Form, formSubmit } = useFormItem(model);

    const handler = {
        search: () => {
            formSubmit()
                .then(actions.search)
                .catch(() => { })
        },
        keyPress: (event: any) => {
            if (event.key === 'Enter') {
                event.preventDefault();
                handler.search()
            }
        }
    }

    return (
        <SearchView 
            handleSearch={handler.search}
        >
            <Form>
            <Field.Input model={(x: AgenteSearchModel) => x.ragioneSociale} ControlProps={{onKeyPress: handler.keyPress}} />
            <Field.Input model={(x: AgenteSearchModel) => x.indirizzo} ControlProps={{onKeyPress: handler.keyPress}} />
            <Field.Input model={(x: AgenteSearchModel) => x.cap} ControlProps={{onKeyPress: handler.keyPress}} />
            <Field.Input model={(x: AgenteSearchModel) => x.localita} ControlProps={{onKeyPress: handler.keyPress}} />
            <Field.Input model={(x: AgenteSearchModel) => x.codiceFiscale} ControlProps={{onKeyPress: handler.keyPress}} />
            <Field.Input model={(x: AgenteSearchModel) => x.partitaIVA} ControlProps={{onKeyPress: handler.keyPress}} />
            <Field.Input model={(x: AgenteSearchModel) => x.telefono} ControlProps={{onKeyPress: handler.keyPress}} />
            <Field.Input model={(x: AgenteSearchModel) => x.numeroFax} ControlProps={{onKeyPress: handler.keyPress}} />
            <Field.Input model={(x: AgenteSearchModel) => x.budget} ControlProps={{onKeyPress: handler.keyPress}} />
            <Field.Input model={(x: AgenteSearchModel) => x.fattProg} ControlProps={{onKeyPress: handler.keyPress}} />
            <Field.Input model={(x: AgenteSearchModel) => x.agenteOmega} ControlProps={{onKeyPress: handler.keyPress}} />
            </Form>
        </SearchView>
    )
}

export default Search;