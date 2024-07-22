import axios from 'axios';
import { BASE_URL } from '../constants/url';
import { ApiResponse } from '../types/api';

/**
 * Fetch all actions.
 * @returns {Promise<ApiResponse>} The response containing the actions data.
 */
export const getActions = async (): Promise<ApiResponse> => {
	const url = `${BASE_URL}/stocks?source=docs&exchange=NYSE`;

	try {
		const response = await axios.get<ApiResponse>(url);
		return response.data;
	} catch (error) {
		throw new Error('Failed to fetch actions');
	}
};
