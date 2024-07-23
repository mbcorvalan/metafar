import { Action } from './action';

export interface SearchProps {
	label: string;
	handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
	id?: string;
	name?: string;
	value?: string;
	placeholder?: string;
	ariaLabel?: string;
}

export interface ButtonLayoutProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	label?: string;
	icon?: JSX.Element;
}

export interface HeaderProp {
	label?: string;
}

export interface NotificationMsgProps {
	msg: string;
	container: keyof JSX.IntrinsicElements;
	type: string;
}

export interface ActionDetailRowProps {
	label?: string;
	data?: string;
}

export interface ChartComponentProps {
	xAxis: string[];
	yAxis: number[];
}

export interface ActionTableProps {
	ActionData: Action[];
}

export interface TableProps {
	data: Action[];
}
