// src/components/ActionTable.tsx
import React from 'react';
import ActionRow from './ActionRow';
import { ActionTableProps } from '../types/props';
import { TABLES_TITLES } from '../constants/text';

/**
 * A functional component that renders a table of actions.
 *
 * @param {ActionTableProps} props - The props for the component.
 * @param {Action[]} props.ActionData - The array of action data to display in the table.
 * @returns {JSX.Element} The rendered table component.
 */

const ActionTable: React.FC<ActionTableProps> = ({ ActionData }: ActionTableProps): JSX.Element => {

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
