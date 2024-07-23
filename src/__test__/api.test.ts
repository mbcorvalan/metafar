import axios from 'axios';
import { getActions } from '../api/api'; // Adjust the import path as needed
import { ApiResponse } from '../types/api'; // Adjust the import path as needed

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('API Functions', () => {
	afterEach(() => {
		jest.resetAllMocks();
	});

	test('getActions should fetch actions successfully', async () => {
		const detailedData = [
			{
				symbol: 'BRX',
				name: 'Brixmor Property Group Inc',
				currency: 'USD',
				exchange: 'NYSE',
				mic_code: 'XNYS',
				country: 'United States',
				type: 'REIT',
			},
			{
				symbol: 'ZEPP',
				name: 'Zepp Health Corporation',
				currency: 'USD',
				exchange: 'NYSE',
				mic_code: 'XNYS',
				country: 'United States',
				type: 'Common Stock',
			},
			// Add more items as needed
		];

		const mockData: ApiResponse = {
			data: detailedData,
			count: 3197,
			status: 'ok',
		};
		mockedAxios.get.mockResolvedValue({ data: mockData });

		const result = await getActions();
		expect(result).toEqual(mockData);
		expect(mockedAxios.get).toHaveBeenCalledWith(
			`${process.env.REACT_APP_BASE_URL}/stocks?source=docs&exchange=NYSE`
		);
	});

	test('getActions should handle errors', async () => {
		mockedAxios.get.mockRejectedValue(new Error('Failed to fetch actions'));

		await expect(getActions()).rejects.toThrow('Failed to fetch actions');
	});
});
