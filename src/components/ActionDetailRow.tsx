import React from 'react';
import { ActionDetailRowProps } from '../types/props';

/**
 * A functional component that displays a row in the action detail view.
 *
 * @param {ActionDetailRowProps} props - The props for the component.
 * @param {string} props.label - The label text to display.
 * @param {string | React.ReactNode} props.data - The data to display, can be a string or a React node.
 * @returns {JSX.Element} The rendered component.
 */
const ActionDetailRow: React.FC<ActionDetailRowProps> = ({ label, data }) => {
  return (
    <div className="markets-overview-details__wrapper">
      <div className="markets-overview-details__label">
        <label>{label}</label>
      </div>
      <div className="markets-overview-details__data">
        <p>{data}</p>
      </div>
    </div>
  );
};

export default ActionDetailRow;
