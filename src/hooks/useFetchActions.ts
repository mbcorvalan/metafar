import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchActions } from '../redux/reducers/fetchActionsReducer';
import { RootState, AppDispatch } from '../redux/store/store';

const useFetchActions = () => {
	const dispatch = useDispatch<AppDispatch>();
	const { isLoading, error } = useSelector(
		(state: RootState) => state.allActions
	);

	useEffect(() => {
		dispatch(fetchActions());
	}, [dispatch]);

	return { isLoading, error };
};

export default useFetchActions;
