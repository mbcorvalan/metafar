import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getRealTime } from '../../api/api';

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

export const fetchRealTimeAction = createAsyncThunk<
	ApiResponseRealTime,
	{ time: number; symbol: string },
	{ rejectValue: string }
>(
	'action/fetchRealTimeAction',
	async ({ time, symbol }, { rejectWithValue }) => {
		try {
			const response = await getRealTime(time, symbol);
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

const actionRealTimeSlice = createSlice({
	name: 'actionRealTime',
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
			.addCase(fetchRealTimeAction.pending, (state) => {
				state.isLoading = true;
				state.error = null;
			})
			.addCase(
				fetchRealTimeAction.fulfilled,
				(state, action: PayloadAction<ApiResponseRealTime>) => {
					state.data = action.payload.values;
					state.isLoading = false;
					state.error = null;
				}
			)
			.addCase(fetchRealTimeAction.rejected, (state, action) => {
				state.isLoading = false;
				state.error =
					action.payload || action.error.message || 'Failed to fetch action';
			});
	},
});

export const { resetData } = actionRealTimeSlice.actions;
export default actionRealTimeSlice.reducer;
