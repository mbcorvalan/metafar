// Define the interface for the stock data
interface Stock {
	symbol: string;
	name: string;
	currency: string;
	exchange: string;
	mic_code: string;
	country: string;
	type: string;
}

// Define the props for the StockRow component
export interface StockRowProps {
	stock: Stock;
}
