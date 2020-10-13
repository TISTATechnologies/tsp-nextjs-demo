import * as React from 'react';
import { getUnsplashImage } from '../../../utils/get-unsplash-image';

import styles from '../user-profile.module.css';

type UserProfileAvatarProps = {
	id: string;
};
export function UserProfileAvatar(props: UserProfileAvatarProps) {
	const { id } = props;
	const unsplashUrl = getUnsplashImage(id);

	return (
		<div
			className={styles['user-profile-avatar']}
			style={{
				backgroundImage: `url(${unsplashUrl})`
			}}
		/>
	);
}
