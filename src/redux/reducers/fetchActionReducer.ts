import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getAction } from '../../api/api';
import { ApiResponse } from '../../types/api';
import { ActionsState } from '../../types/states';

const initialState: ActionsState = {
	data: [],
	filteredData: [],
	isLoading: false,
	error: null,
};

export const fetchAction = createAsyncThunk<
	ApiResponse,
	{ symbol: string; exchange: string }
>('action/fetchAction', async ({ symbol, exchange }) => {
	return await getAction(symbol, exchange);
});

const actionSlice = createSlice({
	name: 'action',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchAction.pending, (state) => {
				state.isLoading = true;
				state.error = null;
			})
			.addCase(
				fetchAction.fulfilled,
				(state, action: PayloadAction<ApiResponse>) => {
					state.data = action.payload.data;
					state.filteredData = action.payload.data;
					state.isLoading = false;
					state.error = null;
				}
			)
			.addCase(fetchAction.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.error.message || 'Failed to fetch action';
			});
	},
});

export default actionSlice.reducer;
