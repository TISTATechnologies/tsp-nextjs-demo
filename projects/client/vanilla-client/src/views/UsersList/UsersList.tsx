import * as React from 'react';
import { UsersListBody } from './components/UsersListBody';
import { UsersListHeader } from './components/UsersListHeader';
import { UsersListFooter } from './components/UsersListFooter';
import { Page } from '../../components/Page';

import styles from './users-list.module.css';

export function UsersList() {
	return (
		<Page title="Users">
			<div className={styles['users-list']}>
				<div className={styles['users-list-infinite-scroll-container']}>
					<UsersListHeader />
					<UsersListBody />
					<UsersListFooter />
				</div>
			</div>
		</Page>
	);
}
