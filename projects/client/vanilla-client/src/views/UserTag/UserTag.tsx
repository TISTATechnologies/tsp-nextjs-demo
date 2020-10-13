import * as React from 'react';
import useSWR from 'swr';
import { useHistory } from 'react-router-dom';

import { Page } from '../../components/Page';
import { LoadingIndicator } from '../../components/LoadingIndicator';
import { IconButton } from '../../components/Button/IconButton';
import ArrowBackIcon from '../../components/icons/ArrowBackIcon';
import { fetchTag } from '../../api/fetch-tag';

import styles from './user-tag.module.css';
import { Button } from '../../components/Button/Button';
import { fetchUser } from '../../api/fetch-user';

type UserTagProps = {
	userId: string;
	tagId: string;
};

export function UserTag(props: UserTagProps) {
	const { userId, tagId } = props;

	const router = useHistory();

	const { data, error } = useSWR(`/tag/${tagId}`, async (key: string) => {
		return {
			tag: await fetchTag(tagId),
			user: await fetchUser(userId)
		};
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
		const { description } = data.tag;
		const { name } = data.user;
		body = (
			<div className={styles['user-tag-contents']}>
				<h2>
					<span>{name.toUpperCase()}</span>
				</h2>
				<div className={styles['user-tag-body']}>
					<Button>{description}</Button>
				</div>
			</div>
		);
	}

	return (
		<Page title="Tags">
			<div className={styles['user-tag']}>
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
						router.push(`/user/${userId}`);
					}}
				/>
				{body}
			</div>
		</Page>
	);
}
