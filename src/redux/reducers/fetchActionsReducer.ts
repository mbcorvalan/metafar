import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getActions } from '../../api/api';
import { ApiResponse } from '../../types/api';
import { ActionsState } from '../../types/states';

const initialState: ActionsState = {
	data: [],
	filteredData: [],
	isLoading: false,
	error: null,
};

interface FilterPayload {
	symbol?: string;
	name?: string;
}

export const fetchActions = createAsyncThunk<ApiResponse>(
	'actions/fetchActions',
	async () => {
		const response = await getActions();
		return response;
	}
);

const actionsSlice = createSlice({
	name: 'actions',
	initialState,
	reducers: {
		sortActionsBy: (state, action: PayloadAction<FilterPayload>) => {
			const { symbol, name } = action.payload;
			const searchTermSymbol = symbol?.toLowerCase() || '';
			const searchTermName = name?.toLowerCase() || '';
			const filtered = state.data.filter(
				(item) =>
					item.symbol.toLowerCase().includes(searchTermSymbol) ||
					item.name.toLowerCase().includes(searchTermName)
			);
			if (filtered.length > 0) {
				state.filteredData = filtered;
				state.error = null;
			} else {
				state.filteredData = [];
				state.error = 'No results found';
			}
		},
		resetActions(state) {
			state.filteredData = state.data;
			state.error = null;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchActions.pending, (state) => {
				state.isLoading = true;
				state.error = null;
			})
			.addCase(
				fetchActions.fulfilled,
				(state, action: PayloadAction<ApiResponse>) => {
					state.data = action.payload.data;
					state.filteredData = action.payload.data;
					state.isLoading = false;
					state.error = null;
				}
			)
			.addCase(fetchActions.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.error.message || 'Failed to fetch actions';
			});
	},
});

export const { sortActionsBy, resetActions } = actionsSlice.actions;
export default actionsSlice.reducer;
