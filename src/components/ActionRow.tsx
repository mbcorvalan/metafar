// src/components/ActionRow.tsx
import React from 'react';
import Button from './Button';
import { ActionRowProps } from '../types/action';

const ActionRow: React.FC<ActionRowProps> = ({ action }) => {
    const handleClick = () => console.log('ver mas');

    return (
        <tr className="markets-overview-tr__wrapper">
            <td>
                <Button className="btn btn--table" label={action.symbol} onClick={handleClick} />
            </td>
            <td>{action.name}</td>
            <td>{action.currency}</td>
            <td>{action.type}</td>
        </tr>
    );
};

export default ActionRow;
