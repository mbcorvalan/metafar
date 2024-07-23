import React from 'react';
import { useNavigate } from 'react-router-dom';

import Button from './Button';
import { ActionRowProps } from '../types/action';

/**
 * A functional component that represents a row in the action table.
 *
 * @param {ActionRowProps} props - The props for the component.
 * @param {Object} props.action - The action data to display.
 * @param {string} props.action.symbol - The symbol for the action.
 * @param {string} props.action.name - The name of the action.
 * @param {string} props.action.currency - The currency of the action.
 * @param {string} props.action.type - The type of the action.
 * @returns {JSX.Element} The rendered component.
 */
const ActionRow: React.FC<ActionRowProps> = ({ action }: ActionRowProps): JSX.Element => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate(`/action/${action.symbol}/${action.exchange}`);
    };


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
