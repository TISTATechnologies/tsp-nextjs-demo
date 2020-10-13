import { createSlice } from '@reduxjs/toolkit';
import { UsersListSlice } from './users-list.types';
import { UsersListActions } from './users-list.actions';

export const initialUsersListSlice: UsersListSlice = {
	users: {},
	isLoadingUsers: false,
	isLoadMoreAvailable: true,
	filter: ''
};

export const usersListSlice = createSlice({
	name: 'usersList',
	initialState: initialUsersListSlice,
	// Ignore this field for typed reducers
	reducers: {},
	extraReducers: (builder) =>
		builder
			.addCase(UsersListActions.getPages.pending, (slice, action) => {
				slice.isLoadingUsers = true;
			})
			.addCase(UsersListActions.getPages.rejected, (slice, action) => {
				slice.isLoadMoreAvailable = false;
				slice.isLoadingUsers = false;
			})
			.addCase(UsersListActions.getPages.fulfilled, (slice, action) => {
				const newUsers = action.payload.users;
				for (let newUser of newUsers) {
					slice.users[newUser.userId] = newUser;
				}

				slice.nextToken = action.payload.nextToken.toString();
				slice.isLoadingUsers = false;

				if (!slice.filter) {
					slice.isLoadMoreAvailable = newUsers.length > 0;
				}
			})
			.addCase(UsersListActions.getNextPage.pending, (slice, action) => {
				slice.isLoadingUsers = true;
			})
			.addCase(UsersListActions.getNextPage.rejected, (slice, action) => {
				slice.isLoadMoreAvailable = false;
				slice.isLoadingUsers = false;
			})
			.addCase(UsersListActions.getNextPage.fulfilled, (slice, action) => {
				const newUsers = action.payload.users;
				for (let newUser of newUsers) {
					slice.users[newUser.userId] = newUser;
				}

				slice.nextToken = action.payload.nextToken.toString();
				slice.isLoadingUsers = false;

				if (!slice.filter) {
					slice.isLoadMoreAvailable = newUsers.length > 0;
				}
			})
			.addCase(UsersListActions.setFilter, (slice, action) => {
				const newFilter = action.payload;
				slice.filter = newFilter;
			})
			.addCase(UsersListActions.editCachedUser, (slice, action) => {
				const modifiedUser = action.payload;
				const currentUser = slice.users[modifiedUser.userId];

				const newUserState = {
					...currentUser,
					...modifiedUser
				};

				slice.users[modifiedUser.userId] = newUserState;
			})
});
