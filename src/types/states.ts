import { ActionData } from './api';

export interface ActionsState {
	data: ActionData[];
	filteredData: ActionData[];
	isLoading: boolean;
	error: string | null;
}
