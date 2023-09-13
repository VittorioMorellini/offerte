import { Field } from '../../framework/ui/form';
import { Agente } from '../../models';

interface Props {
    item?: Agente;
    setItem?: (obj: Agente) => void
}

const Fields = ({item, setItem}: Props) => {
    return (
    <>
        <Field.Input model={(x: Agente) => x.ragioneSociale}  />
        <Field.Input model={(x: Agente) => x.indirizzo}  />
        <Field.Input model={(x: Agente) => x.cap}  />
        <Field.Input model={(x: Agente) => x.localita}  />
        <Field.Input model={(x: Agente) => x.codiceFiscale}  />
        <Field.Input model={(x: Agente) => x.partitaIVA}  />
        <Field.Input model={(x: Agente) => x.telefono}  />
        <Field.Input model={(x: Agente) => x.numeroFax}  />
        <Field.Input model={(x: Agente) => x.budget}  />
        <Field.Input model={(x: Agente) => x.fattProg}  />
        <Field.Input model={(x: Agente) => x.agenteOmega}  />
    </>
    );
}

export default Fields;