import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getHistoricalTime } from '../../api/api';

export interface ActionsState {
	data: ActionRealTimeData[];
	isLoading: boolean;
	error: string | null;
}

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

const initialState: ActionsState = {
	data: [],
	isLoading: false,
	error: null,
};

export const fetchHistoricalTime = createAsyncThunk<
	ApiResponseRealTime,
	{ time: number; symbol: string; startDate: string; endDate: string },
	{ rejectValue: string }
>(
	'action/fetchHistoricalTime',
	async ({ time, symbol, startDate, endDate }, { rejectWithValue }) => {
		try {
			const response = await getHistoricalTime(
				time,
				symbol,
				startDate,
				endDate
			);
			if ('values' in response && 'status' in response) {
				return response as ApiResponseRealTime;
			} else {
				throw new Error('Invalid response format');
			}
		} catch (error: any) {
			return rejectWithValue(error.message || 'Failed to fetch actions');
		}
	}
);

const actionHistoricalTimeSlice = createSlice({
	name: 'actionHistoricalTime',
	initialState,
	reducers: {
		resetData: (state) => {
			state.data = [];
			state.isLoading = false;
			state.error = null;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchHistoricalTime.pending, (state) => {
				state.isLoading = true;
				state.error = null;
			})
			.addCase(
				fetchHistoricalTime.fulfilled,
				(state, action: PayloadAction<ApiResponseRealTime>) => {
					state.data = action.payload.values;
					state.isLoading = false;
					state.error = null;
				}
			)
			.addCase(fetchHistoricalTime.rejected, (state, action) => {
				state.isLoading = false;
				state.error =
					action.payload || action.error.message || 'Failed to fetch action';
			});
	},
});

export const { resetData } = actionHistoricalTimeSlice.actions;
export default actionHistoricalTimeSlice.reducer;
