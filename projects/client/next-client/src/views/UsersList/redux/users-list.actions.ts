import { createAsyncThunk, createAction } from '@reduxjs/toolkit';
import { APIUserModel } from '../../../api/api-types';
import { fetchGetPages, FetchGetPagesResult } from '../../../api/fetch-users-pages';
import { RootState } from '../../../store/root-state.types';

const PAGE_SIZE = 6;

type GetPagesThunkArgs = {
	pageCount: number;
};
type GetPagesThunkResult = {
	users: FetchGetPagesResult;
	nextToken: number;
};
const getPages = createAsyncThunk<GetPagesThunkResult, GetPagesThunkArgs>(
	'usersList/getPages',
	async function getPagesThunk(args) {
		const { pageCount } = args;

		const result = await fetchGetPages(0, pageCount * PAGE_SIZE);

		return {
			users: result,
			nextToken: pageCount * PAGE_SIZE
		};
	}
);

const getNextPage = createAsyncThunk<GetPagesThunkResult, void, { state: RootState }>(
	'usersList/getNextPage',
	async (args, { getState }) => {
		const pageStart = getState().usersList.nextToken || '0';
		const result = await fetchGetPages(parseInt(pageStart), PAGE_SIZE);

		return {
			users: result,
			nextToken: parseInt(pageStart) + PAGE_SIZE
		};
	}
);

export type EditCachedUser = Partial<APIUserModel> & Pick<APIUserModel, 'userId'>;

export const UsersListActions = {
	getPages: getPages,
	getNextPage: getNextPage,
	setFilter: createAction<string>('usersList/setFilter'),
	editCachedUser: createAction<EditCachedUser>('usersList/editCachedUser'),
};
