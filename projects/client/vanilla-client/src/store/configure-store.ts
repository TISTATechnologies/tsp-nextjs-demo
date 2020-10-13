import { configureStore as configureStoreToolkit, getDefaultMiddleware } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

import type { RootState } from './root-state.types';
import { usersListSlice } from '../views/UsersList/redux/users-list.slice';

const rootReducer = combineReducers<RootState>({
	[usersListSlice.name]: usersListSlice.reducer
});

export function configureStore() {
	return configureStoreToolkit({
		reducer: rootReducer,
		middleware: getDefaultMiddleware()
	});
}
