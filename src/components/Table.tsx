// src/components/Table.tsx
import React from 'react';
import ActionTable from './ActionTable';
import { Action } from '../types/action';

interface TableProps {
    data: Action[];
}

const Table: React.FC<TableProps> = ({ data }) => {
    return (
        <div className="markets-overview-table">
            <ActionTable ActionData={data} />
        </div>
    );
};

export default Table;
