import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAction } from '../redux/reducers/fetchActionReducer';
import { RootState, AppDispatch } from '../redux/store/store';

const useFetchAction = (symbol: string, exchange: string) => {
	const dispatch = useDispatch<AppDispatch>();
	const { data, isLoading, error } = useSelector(
		(state: RootState) => state.action
	);

	useEffect(() => {
		if (symbol && exchange) {
			dispatch(fetchAction({ symbol, exchange }));
		}
	}, [dispatch, symbol, exchange]);

	return { data, isLoading, error };
};

export default useFetchAction;
