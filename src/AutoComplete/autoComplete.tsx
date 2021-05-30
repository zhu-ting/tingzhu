import React, { FC } from 'react';
import classNames from 'classnames';

interface DataSourceObject {
    value: string;
}

export type DataSourceType<T = {}> = T & DataSourceObject;
export interface AutoCompleteProps {
    fetchSuggections: (str: string) => DataSourceType[] | Promise<DataSourceType[]>;
    renderOption?: (item: DataSourceType) => React.ReactElement;
}

export const AutoComplete: FC<AutoCompleteProps> = (props) => {

    return (
        <div>
            input 
        </div>
    )

};

export default AutoComplete;
