// src/types/action.ts
export interface Action {
	symbol: string;
	name: string;
	currency: string;
	exchange: string;
	mic_code: string;
	country: string;
	type: string;
}

export interface ActionRowProps {
	action: Action;
}

export interface UseSortActionsReturn {
	symbolValue: string;
	actionValue: string;
	handleChange: (
		event: React.ChangeEvent<HTMLInputElement>,
		type: string
	) => void;
}
