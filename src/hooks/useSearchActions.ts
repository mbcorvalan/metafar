import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
	sortActionsBy,
	resetActions,
} from '../redux/reducers/fetchActionsReducer';

const useSearchActions = () => {
	const dispatch = useDispatch();
	const [searchParam, setSearchParam] = useState('');

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		let value = event.target.value;
		setSearchParam(value);
		if (value.trim() === '') {
			dispatch(resetActions());
		}
	};

	const handleReset = (
		event:
			| React.MouseEvent<HTMLButtonElement>
			| React.ChangeEvent<HTMLInputElement>
	) => {
		event.preventDefault();
		setSearchParam('');
		dispatch(resetActions());
	};

	const handleSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
		event.preventDefault();
		if (searchParam.trim() !== '') {
			dispatch(
				sortActionsBy({ symbol: searchParam.trim(), name: searchParam.trim() })
			);
		}
	};

	return {
		searchParam,
		handleChange,
		handleReset,
		handleSubmit,
	};
};

export default useSearchActions;
