import React from 'react';
import { useTranslation } from 'react-i18next';
import { Panel, Button } from '..';

type Props = {
    title?: string;
    children: any;
    handleSearch: () => void;
    handleExport?: () => void;
}

function SearchView({
    title,
    children,
    handleSearch,
    handleExport
}: Props) {

    const { t } = useTranslation();

    return (
        <Panel
            title={title || t('common:search')}
            actions={
                <>
                    <Button.Search onClick={() => handleSearch()} />
                    {handleExport ? <Button.Export variant="condensed" onClick={() => handleExport()} /> : null}
                </>
            }
        >
            {children}
        </Panel>
    )
}

export default SearchView;