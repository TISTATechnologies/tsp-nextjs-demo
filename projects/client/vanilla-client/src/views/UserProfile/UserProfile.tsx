import * as React from 'react';
import useSWR from 'swr';
import { useHistory } from 'react-router-dom';

import { LoadingIndicator } from '../../components/LoadingIndicator';
import { fetchUser } from '../../api/fetch-user';
import { Page } from '../../components/Page';
import ArrowBackIcon from '../../components/icons/ArrowBackIcon';
import { IconButton } from '../../components/Button/IconButton';
import { UserProfileBody } from './components/UserProfileBody';
import { UserProfileAvatar } from './components/UserProfileAvatar';

import styles from './user-profile.module.css';

type UserProfileProps = {
	id: string;
};

export function UserProfile(props: UserProfileProps) {
	const { id } = props;
	const router = useHistory();
	const { data, error } = useSWR(`/users/${id}`, async (key: string) => {
		return await fetchUser(id);
	});

	let body;
	if (!data) {
		body = (
			<LoadingIndicator
				style={{
					width: '32px',
					height: '32px',
					margin: 'auto'
				}}
			/>
		);
	} else if (!error) {
		const { name, description, address, tags } = data;
		body = (
			<UserProfileBody
				userId={id}
				name={name}
				description={description || ''}
				address={address || ''}
				tags={tags}
			/>
		);
	}
	return (
		<Page title="Profile">
			<div className={styles['user-profile']}>
				<IconButton
					icon={ArrowBackIcon}
					style={{
						borderRadius: '50%',
						width: '64px',
						height: '64px',
						border: 'none',
						position: 'absolute'
					}}
					onClick={() => {
						router.push('/');
					}}
				/>

				<UserProfileAvatar id={data?.userId.toString() || ''} />
				{body}
			</div>
		</Page>
	);
}
