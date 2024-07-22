import { configureStore } from '@reduxjs/toolkit';
import actionsSlice from '../reducers/fetchActionsReducer';
import actionsReducer from '../reducers/fetchActionsReducer';

const store = configureStore({
	reducer: {
		allActions: actionsSlice,
		actions: actionsReducer,
	},
});

/**
 * Type representing the root state of the store.
 */
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
