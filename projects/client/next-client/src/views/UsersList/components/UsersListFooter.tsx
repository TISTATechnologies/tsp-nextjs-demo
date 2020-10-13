import { UsersListLoadMoreButton } from './UsersListLoadMoreButton';

import styles from './users-list-body.module.css';

export function UsersListFooter() {
	return (
		<div className={styles['users-list-body-footer']}>
			<div className={styles['users-list-body-footer-inner']}>
				<UsersListLoadMoreButton>Load More</UsersListLoadMoreButton>
			</div>
		</div>
	);
}
