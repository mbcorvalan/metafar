import axios from 'axios';

export interface ActionRealTimeData {
	datetime: string;
	open: string;
	high: string;
	low: string;
	close: string;
	volume: string;
}

export interface ApiResponseRealTime {
	values: ActionRealTimeData[];
	status: string;
}

export interface ApiResponseGetActions {
	data: {
		symbol: string;
		name: string;
		currency: string;
		exchange: string;
		mic_code: string;
		country: string;
		type: string;
	}[];
	count: number;
	status: string;
}

export interface ApiResponseGetRealTime {
	meta: {
		symbol: string;
		interval: string;
		currency: string;
		exchange_timezone: string;
		exchange: string;
		mic_code: string;
		type: string;
	};
	values: {
		datetime: string;
		open: string;
		high: string;
		low: string;
		close: string;
		volume: string;
	}[];
	status: string;
}

export const getActions = async (): Promise<ApiResponseGetActions> => {
	const url = `${process.env.REACT_APP_BASE_URL}/stocks?source=docs&exchange=NYSE`;

	try {
		const response = await axios.get<ApiResponseGetActions>(url);
		return response.data;
	} catch (error) {
		console.error('API Error:', error);
		throw new Error('Failed to fetch actions');
	}
};

export const getAction = async (
	symbol: string,
	exchange: string
): Promise<ApiResponseGetActions> => {
	const url = `${process.env.REACT_APP_BASE_URL}/stocks?symbol=${symbol}&exchange=${exchange}`;

	try {
		const response = await axios.get<ApiResponseGetActions>(url);
		return response.data;
	} catch (error) {
		console.error('API Error:', error);
		throw new Error('Failed to fetch actions');
	}
};

export const getRealTime = async (
	time: number,
	symbol: string
): Promise<ApiResponseGetRealTime> => {
	const url = `${process.env.REACT_APP_BASE_URL}/time_series?symbol=${symbol}&interval=${time}min&outputsize=10&apikey=${process.env.REACT_APP_API_KEY}`;

	try {
		const response = await axios.get(url);

		if (response.data.status === 'error') {
			throw new Error(response.data.message);
		}

		if (!response.data.meta || !response.data.values) {
			throw new Error('Invalid response from API');
		}

		return response.data;
	} catch (error: any) {
		console.error('API Error:', error);
		throw new Error(error.response?.data?.message || 'Failed to fetch actions');
	}
};

export const getHistoricalTime = async (
	time: number,
	symbol: string,
	startDate: string,
	endDate: string
): Promise<ApiResponseGetRealTime> => {
	const url = `${process.env.REACT_APP_BASE_URL}/time_series?symbol=${symbol}&interval=${time}min&start_date=${startDate}&end_date=${endDate}&apikey=${process.env.REACT_APP_API_KEY}`;

	try {
		const response = await axios.get(url);

		if (response.data.status === 'error') {
			throw new Error(response.data.message);
		}

		if (!response.data.meta || !response.data.values) {
			throw new Error('Invalid response from API');
		}

		return response.data;
	} catch (error: any) {
		console.error('API Error:', error);
		throw new Error(error.response?.data?.message || 'Failed to fetch actions');
	}
};
