export interface ActionData {
	symbol: string;
	name: string;
	currency: string;
	exchange: string;
	mic_code: string;
	country: string;
	type: string;
}

export interface ApiResponse {
	data: ActionData[];
	count: number;
	status: string;
}

export interface ApiResponseSuccess {
	meta: {
		symbol: string;
		interval: string;
		currency: string;
		exchange_timezone: string;
		exchange: string;
		mic_code: string;
		type: string;
	};
	values: Array<{
		datetime: string;
		open: string;
		high: string;
		low: string;
		close: string;
		volume: string;
	}>;
	status: 'ok';
}

export interface ApiResponseError {
	code: number;
	message: string;
	status: 'error';
}

export interface ActionRealTimeData {
	datetime: string;
	open: string;
	high: string;
	low: string;
	close: string;
	volume: string;
}

export interface ApiResponseRealTime {
	data: ActionRealTimeData[];
}

export interface ActionsState {
	data: ActionRealTimeData[];
	filteredData: ActionRealTimeData[];
	isLoading: boolean;
	error: string | null;
}
