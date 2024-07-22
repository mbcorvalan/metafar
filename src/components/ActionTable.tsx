// src/components/ActionTable.tsx
import React from 'react';
import ActionRow from './ActionRow';
import { Action } from '../types/action';
import { TABLES_TITLES } from '../constants/text';

interface ActionTableProps {
    ActionData: Action[];
}

const ActionTable: React.FC<ActionTableProps> = ({ ActionData }) => {

    return (
        <table>
            <thead>
                <tr>
                    {TABLES_TITLES.map((title, index) => (
                        <th key={index} className="markets-overview-ActionTable__th">
                            {title}
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {ActionData.map((action, index) => (
                    <ActionRow key={index} action={action} />
                ))}

            </tbody>
        </table>
    );
};

export default ActionTable;
