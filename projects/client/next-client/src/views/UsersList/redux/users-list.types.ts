import { APINextToken, APIUserModel } from "../../../api/api-types";

export type UsersListStateUserMap = {
	[x: number]: APIUserModel;
};

export type UsersListSlice = {
	users: UsersListStateUserMap; // Keep user in hash-map so we can quickly look them up.
	nextToken?: APINextToken;
	isLoadingUsers: boolean;
	isLoadMoreAvailable: boolean;
	filter: string;
};
