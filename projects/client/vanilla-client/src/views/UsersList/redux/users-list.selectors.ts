import { useSelector } from 'react-redux';
import { RootState } from '../../../store/root-state.types';

export const useSelectUsersListUsers = () => useSelector((state: RootState) => state.usersList.users);
export const useSelectUsersListFilter = () => useSelector((state: RootState) => state.usersList.filter);
export const useSelectUsersListIsLoadMoreAvailable = () =>
	useSelector((state: RootState) => state.usersList.isLoadMoreAvailable);
export const useSelectUsersListIsLoadingUsers = () => useSelector((state: RootState) => state.usersList.isLoadingUsers);
export const useSelectUsersListNextToken = () => useSelector((state: RootState) => state.usersList.nextToken);
