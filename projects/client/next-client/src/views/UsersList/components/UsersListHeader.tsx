import { UsersListSearch } from './UsersListSearch';
import { concatClassNames } from '../../../utils/concat-classnames';

import styles from './users-list-body.module.css';
import iconStyles from './users-list-card-icon.module.css';

export function UsersListHeader() {
	return (
		<div className={styles['users-list-body-header']}>
			<div className={iconStyles['user-card-grid-element']}>
				<h1 className={styles['users-list-body-header-title']}>Users list</h1>
			</div>
			<div
				className={concatClassNames(iconStyles['user-card-grid-element'], styles['users-list-header-spacer'])}
			/>
			<div className={concatClassNames(iconStyles['user-card-grid-element'], styles['users-list-header-search'])}>
				<div className={styles['users-list-header-search-center']}>
					<UsersListSearch />
				</div>
			</div>
		</div>
	);
}
