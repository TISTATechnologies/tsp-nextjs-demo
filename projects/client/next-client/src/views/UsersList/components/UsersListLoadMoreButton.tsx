import { useDispatch } from 'react-redux';
import {
	useSelectUsersListFilter,
	useSelectUsersListIsLoadMoreAvailable,
	useSelectUsersListNextToken,
	useSelectUsersListIsLoadingUsers
} from '../redux/users-list.selectors';
import { LoadingIndicator } from '../../../components/LoadingIndicator/LoadingIndicator';
import { Button } from '../../../components/Button/Button';

import styles from './users-list-body.module.css';
import { UsersListActions } from '../redux/users-list.actions';

export function UsersListLoadMoreButton(props: React.PropsWithChildren<{}>) {
	const { children } = props;

	const dispatch = useDispatch();

	const isLoadMoreAvailable = useSelectUsersListIsLoadMoreAvailable();
	const filter = useSelectUsersListFilter();
	const nextToken = useSelectUsersListNextToken();
	const isLoadingUsers = useSelectUsersListIsLoadingUsers();

	return (
		<Button
			id={styles['load-more-button']}
			disabled={!isLoadMoreAvailable || isLoadingUsers || !!filter}
			onClick={(e) => {
				dispatch(UsersListActions.getNextPage());
			}}
		>
			{!isLoadingUsers ? (
				children
			) : (
				<LoadingIndicator style={{ width: '24px', height: '24px', margin: 'auto' }} />
			)}
		</Button>
	);
}
