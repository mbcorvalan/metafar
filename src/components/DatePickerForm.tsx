import React, { useState } from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import useHistoricTimeData from '../hooks/useHistoricTimeData';
import IntervalHistoric from './IntervalHistoric';
import Button from './Button';
import Skeleton from 'react-loading-skeleton';
import { Moment } from 'moment';
import { ActionRealTimeData } from '../types/api';
import ChartComponent from '../components/ChartComponent';
import NotificationMsg from '../components/Notification';

interface DatePickerFormProps {
    symbol: string;
}

/**
 * A functional component that renders a form with date and time pickers.
 * Allows users to select a start and end date/time and submit the form.
 * Shows an error if the end date/time is earlier than the start date/time.
 *
 * @returns {JSX.Element} The rendered form component.
 */
export default function DatePickerForm({ symbol }: DatePickerFormProps): JSX.Element {
    const [selectedStartDate, setSelectedStartDate] = useState<Moment | null>(null);
    const [selectedEndDate, setSelectedEndDate] = useState<Moment | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [interval, setInterval] = useState<number | null>(null);

    const { handleInterval, data, isLoading, error: graphError } = useHistoricTimeData(
        symbol,
        selectedStartDate?.format('YYYY-MM-DD HH:mm:ss') || '',
        selectedEndDate?.format('YYYY-MM-DD HH:mm:ss') || '',
        interval
    );

    const xAxis = data ? data.map((item: ActionRealTimeData) => item.datetime) : [];
    const yAxis = data ? data.map((item: ActionRealTimeData) => parseFloat(item.close)) : [];

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        if (!selectedEndDate || !selectedStartDate) {
            setError('Please enter a valid interval time.');
        } else if (selectedStartDate && selectedEndDate && selectedEndDate.isBefore(selectedStartDate)) {
            setError('End date cannot be earlier than start date.');
        } else if (!interval) {
            setError('Please select a time interval.');
        } else {
            setError(null);
            handleInterval(interval);
        }
    };

    const handleChangeStart = (newValue: Moment | null) => {
        setSelectedStartDate(newValue);
        if (selectedEndDate && newValue && selectedEndDate.isBefore(newValue)) {
            setError('End date cannot be earlier than start date.');
        } else {
            setError(null);
        }
    };

    const handleChangeEnd = (newValue: Moment | null) => {
        setSelectedEndDate(newValue);
        if (selectedStartDate && newValue && newValue.isBefore(selectedStartDate)) {
            setError('End date cannot be earlier than start date.');
        } else {
            setError(null);
        }
    };

    const handleIntervalChange = (interval: number) => {
        setInterval(interval);
    };

    return (
        <LocalizationProvider dateAdapter={AdapterMoment}>
            <form className="historical-form__wrapper" onSubmit={handleSubmit}>
                <IntervalHistoric handleIntervalChange={handleIntervalChange} />
                <div className="historical-form__dataPickers">
                    <DateTimePicker
                        label="Date & Time Start"
                        value={selectedStartDate}
                        onChange={handleChangeStart}
                    />
                    <DateTimePicker
                        label="Date & Time End"
                        value={selectedEndDate}
                        onChange={handleChangeEnd}
                    />
                </div>
                {error && <div style={{ color: 'red' }}>{error}</div>}
                <Button className="btn--primary" label="Submit" type="submit" />
            </form>
            {!isLoading && data && !graphError && (
                <ChartComponent xAxis={xAxis} yAxis={yAxis} />
            )}
            {graphError && <NotificationMsg msg={graphError} container="div" type="failed" />}
            {isLoading && <div className="loading__wrapper--table"><Skeleton count={5} /></div>}
        </LocalizationProvider>
    );
}
