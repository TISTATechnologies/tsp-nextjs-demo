import { useDispatch } from 'react-redux';
import { UsersListActions } from '../redux/users-list.actions';
import { TextInput } from '../../../components/TextInput/TextInput';
import { useSelectUsersListFilter } from '../redux/users-list.selectors';

import styles from './users-list-body.module.css';

export function UsersListSearch() {
	const dispatch = useDispatch();
	const value = useSelectUsersListFilter();

	return (
		<TextInput
			id="search-input"
			onChange={(e) => {
				dispatch(UsersListActions.setFilter(e.target.value));
			}}
			className={styles['search-input']}
			style={{ margin: '32px 8px' }}
			placeholder="Search..."
			type="text"
			value={value}
		/>
	);
}
