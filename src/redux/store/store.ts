import { configureStore } from '@reduxjs/toolkit';
import actionsReducer from '../reducers/fetchActionsReducer';
import actionReducer from '../reducers/fetchActionReducer';
import actionRealTimeReducer from '../reducers/fetchActionRealTimeReducer';
import actionHistoricalTimeReducer from '../reducers/fetchActionHistoricalTimeReducer';

const store = configureStore({
	reducer: {
		allActions: actionsReducer,
		action: actionReducer,
		actionRealTime: actionRealTimeReducer,
		actionHistoricalTime: actionHistoricalTimeReducer,
	},
});

/**
 * Type representing the root state of the store.
 */
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
