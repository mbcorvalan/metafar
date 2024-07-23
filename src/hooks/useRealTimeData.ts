import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useRef } from 'react';
import { fetchRealTimeAction } from '../redux/reducers/fetchActionRealTimeReducer';
import { RootState, AppDispatch } from '../redux/store/store';

const useRealTimeData = (symbol: string) => {
	const dispatch = useDispatch<AppDispatch>();
	const { data, isLoading, error } = useSelector(
		(state: RootState) => state.actionRealTime
	);
	const intervalRef = useRef<NodeJS.Timeout | null>(null);

	const handleInterval = (interval: number) => {
		if (intervalRef.current) {
			clearInterval(intervalRef.current);
		}
		dispatch(fetchRealTimeAction({ time: interval / (60 * 1000), symbol }));
		intervalRef.current = setInterval(() => {
			dispatch(fetchRealTimeAction({ time: interval / (60 * 1000), symbol }));
		}, interval);
	};

	const handleOneMinute = () => {
		handleInterval(1 * 60 * 1000);
	};

	const handleFiveMinute = () => {
		handleInterval(5 * 60 * 1000);
	};

	const handleFifteen = () => {
		handleInterval(15 * 60 * 1000);
	};

	useEffect(() => {
		return () => {
			if (intervalRef.current) {
				clearInterval(intervalRef.current);
			}
		};
	}, []);

	return {
		data,
		isLoading,
		error,
		handleOneMinute,
		handleFiveMinute,
		handleFifteen,
	};
};

export default useRealTimeData;
