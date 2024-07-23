import React from 'react';
import Button from './Button';

interface IntervalProps {
    handleIntervalChange: (interval: number) => void;
}

/**
 * A functional component that renders buttons for selecting different time intervals.
 *
 * @returns {JSX.Element} The rendered interval buttons component.
 */
export default function IntervalHistoric({ handleIntervalChange }: IntervalProps): JSX.Element {
    return (
        <div className="interval__button-wrapper">
            <Button className="btn--secondary" label="1 Minute" onClick={() => handleIntervalChange(1 * 60 * 1000)} />
            <Button className="btn--secondary" label="5 Minutes" onClick={() => handleIntervalChange(5 * 60 * 1000)} />
            <Button className="btn--secondary" label="15 Minutes" onClick={() => handleIntervalChange(15 * 60 * 1000)} />
        </div>
    );
}
