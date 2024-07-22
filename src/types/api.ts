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
