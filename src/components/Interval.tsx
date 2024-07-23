import React from 'react';
import { useSelector } from 'react-redux';
import Button from './Button';
import { RootState } from '../redux/store/store';
import { ONE_MINUTE, FIVE_MINUTE, FIFTEEN } from '../constants/text';
import useRealTimeData from '../hooks/useRealTimeData';

/**
 * A functional component that renders buttons for selecting different time intervals.
 *
 * @returns {JSX.Element} The rendered interval buttons component.
 */
export default function Interval(): JSX.Element {
    const dataSymbol = useSelector((state: RootState) => state.action.data);
    const symbol = dataSymbol.length > 0 ? dataSymbol[0].symbol : '';
    const { handleOneMinute, handleFiveMinute, handleFifteen } = useRealTimeData(symbol);

    return (
        <div className='interval__button-wrapper'>
            <Button className="btn--secondary" label={ONE_MINUTE} onClick={handleOneMinute} />
            <Button className="btn--secondary" label={FIVE_MINUTE} onClick={handleFiveMinute} />
            <Button className="btn--secondary" label={FIFTEEN} onClick={handleFifteen} />
        </div>
    );
}
