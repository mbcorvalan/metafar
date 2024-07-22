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
