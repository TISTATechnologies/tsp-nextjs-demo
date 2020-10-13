import * as React from 'react';
import { useEffect, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { UsersListCard } from './UsersListCard';
import {
	useSelectUsersListUsers,
	useSelectUsersListIsLoadMoreAvailable,
	useSelectUsersListFilter
} from '../redux/users-list.selectors';
import { UsersListActions } from '../redux/users-list.actions';

import styles from './users-list-body.module.css';

export function UsersListBody() {
	const dispatch = useDispatch();

	const isLoadMoreAvailable = useSelectUsersListIsLoadMoreAvailable();
	const filter = useSelectUsersListFilter();
	const users = useSelectUsersListUsers();

	useEffect(() => {
		if (Object.keys(users).length === 0 && isLoadMoreAvailable) {
			dispatch(UsersListActions.getPages({ pageCount: 1 }));
		}
	}, []);

	const filteredUsers = useMemo(() => {
		const altFilter = filter.toLowerCase();
		return Object.keys(users)
			.filter((id) => {
				const user = users[id];
				return !filter || user.name.toLowerCase().startsWith(altFilter);
			})
			.map((id) => users[id]);
	}, [users, filter]);

	return (
		<div className={styles['users-list-body']}>
			{filteredUsers.map((user) => {
				return <UsersListCard key={user.userId} user={user} />;
			})}
		</div>
	);
}
