import React from 'react';
import { useSelector } from 'react-redux';
import Skeleton from 'react-loading-skeleton';
import { RootState } from '../redux/store/store';
import NotificationMsg from '../components/Notification';
import DatePickerForm from './DatePickerForm';

/**
 * A functional component that renders a historical view with a date picker,
 * real-time chart, and loading/error indicators.
 *
 * @returns {JSX.Element} The rendered historical view component.
 */
export default function HistoricalView(): JSX.Element {
    const dataSymbol = useSelector((state: RootState) => state.action.data);
    const symbol = dataSymbol.length > 0 ? dataSymbol[0].symbol : '';

    return (
        <div className="realTimeView__wrapper">
            <DatePickerForm symbol={symbol} />
        </div>
    );
}
