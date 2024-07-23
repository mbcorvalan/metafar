// src/components/Table.tsx
import React from 'react';
import ActionTable from './ActionTable';
import { TableProps } from '../types/props';


const Table: React.FC<TableProps> = ({ data }) => {

    return (
        <div className="markets-overview-table">
            <ActionTable ActionData={data} />
        </div>
    );
};

export default Table;
