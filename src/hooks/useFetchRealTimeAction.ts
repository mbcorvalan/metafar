import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRealTimeAction } from '../redux/reducers/fetchActionRealTimeReducer';
import { RootState, AppDispatch } from '../redux/store/store';

const useFetchAction = (time: number, symbol: string) => {
	const dispatch = useDispatch<AppDispatch>();
	const { data, isLoading, error } = useSelector(
		(state: RootState) => state.action
	);

	useEffect(() => {
		if (symbol && time) {
			dispatch(fetchRealTimeAction({ time, symbol }));
		}
	}, [dispatch, time, symbol]);

	return { data, isLoading, error };
};

export default useFetchAction;
