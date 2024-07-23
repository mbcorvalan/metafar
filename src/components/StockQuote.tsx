import React from 'react';
import Button from './Button';
import RealTimeView from './RealTimeView';
import HistoricalView from './HistoricalView';
import { HISTORICAL, REAL_TIME } from '../constants/text';
import useViewToggle from '../hooks/useViewToggle';

/**
 * A functional component that renders a stock quote view with buttons to toggle between
 * real-time and historical views.
 *
 * @returns {JSX.Element} The rendered stock quote component.
 */
export default function StockQuote(): JSX.Element {
    const { viewHistorical, viewRealTime, handleHistorical, handleRealTime } = useViewToggle();

    return (
        <div className="markets-overview-table">
            <div className="stockQuote__wrapper">
                <h2>StockQuote</h2>
                <div className='stockQuote__buttons-wrapper'>
                    <Button className="btn--primary" label={HISTORICAL} onClick={handleHistorical} />
                    <Button className="btn--primary" label={REAL_TIME} onClick={handleRealTime} />
                </div>
            </div>
            {viewRealTime && <RealTimeView />}
            {viewHistorical && <HistoricalView />}
        </div>
    );
}
