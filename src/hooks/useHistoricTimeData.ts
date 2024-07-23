import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useRef } from 'react';
import { fetchHistoricalTime } from '../redux/reducers/fetchActionHistoricalTimeReducer';
import { RootState, AppDispatch } from '../redux/store/store';

const useHistoricTimeData = (
	symbol: string,
	selectedStartDate: string,
	selectedEndDate: string,
	interval: number | null
) => {
	const dispatch = useDispatch<AppDispatch>();
	const { data, isLoading, error } = useSelector(
		(state: RootState) => state.actionHistoricalTime
	);
	const intervalRef = useRef<NodeJS.Timeout | null>(null);

	const handleInterval = (interval: number) => {
		if (intervalRef.current) {
			clearInterval(intervalRef.current);
		}
		dispatch(
			fetchHistoricalTime({
				time: interval / (60 * 1000),
				symbol,
				startDate: selectedStartDate,
				endDate: selectedEndDate,
			})
		);
		intervalRef.current = setInterval(() => {
			dispatch(
				fetchHistoricalTime({
					time: interval / (60 * 1000),
					symbol,
					startDate: selectedStartDate,
					endDate: selectedEndDate,
				})
			);
		}, interval);
	};

	useEffect(() => {
		return () => {
			if (intervalRef.current) {
				clearInterval(intervalRef.current);
			}
		};
	}, [symbol, selectedStartDate, selectedEndDate]);

	return {
		data,
		isLoading,
		error,
		handleInterval,
	};
};

export default useHistoricTimeData;
