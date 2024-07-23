import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { resetData } from '../redux/reducers/fetchActionRealTimeReducer';

const useViewToggle = () => {
	const dispatch = useDispatch();

	const [viewHistorical, setViewHistorical] = useState(false);
	const [viewRealTime, setRealTime] = useState(false);

	const handleHistorical = () => {
		setRealTime(false);
		setViewHistorical(true);
	};

	const handleRealTime = () => {
		setViewHistorical(false);
		setRealTime(true);
		dispatch(resetData());
	};

	return {
		viewHistorical,
		viewRealTime,
		handleHistorical,
		handleRealTime,
	};
};

export default useViewToggle;
