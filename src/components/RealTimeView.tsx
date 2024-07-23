import React from 'react';
import { useSelector } from 'react-redux';
import Skeleton from 'react-loading-skeleton';
import { RootState } from '../redux/store/store';
import useRealTimeData from '../hooks/useRealTimeData';
import NotificationMsg from '../components/Notification';
import ChartComponent from './ChartComponent';
import Interval from './Interval';
import { ActionRealTimeData } from '../types/api';
import { TITLE_TIME_INTERVAL } from '../constants/text';

/**
 * A functional component that renders a real-time view with a title, interval selection, 
 * real-time chart, and loading/error indicators.
 *
 * @returns {JSX.Element} The rendered real-time view component.
 */
export default function RealTimeView(): JSX.Element {
    const dataSymbol = useSelector((state: RootState) => state.action.data);
    const symbol = dataSymbol.length > 0 ? dataSymbol[0].symbol : '';
    const { data, isLoading, error } = useRealTimeData(symbol);

    const xAxis = data ? data.map((item: ActionRealTimeData) => item.datetime) : [];
    const yAxis = data ? data.map((item: ActionRealTimeData) => parseFloat(item.close)) : [];

    return (
        <div className="realTimeView__wrapper">
            <h3 className="realTimeView__title">{TITLE_TIME_INTERVAL}</h3>
            <Interval />
            {error && <NotificationMsg msg={error} container="div" type="failed" />}
            {isLoading && <div className="loading__wrapper--table"><Skeleton count={5} /></div>}
            {!isLoading && !error && <ChartComponent xAxis={xAxis} yAxis={yAxis} />}
        </div>
    );
}
