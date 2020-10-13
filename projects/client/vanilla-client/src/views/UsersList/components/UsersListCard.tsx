import * as React from 'react';
import { useHover } from '../../../hooks/useHover';
import { useFocus } from '../../../hooks/useFocus';
import EditIcon from '../../../components/icons/EditIcon';
import { concatClassNames } from '../../../utils/concat-classnames';
import { UserCard } from '../../../components/UserCard/UserCard';
import { useHistory } from 'react-router-dom';
import { APIUserModel } from '../../../api/api-types';

import bodyStyles from './users-list-body.module.css';
import iconStyles from './users-list-card-icon.module.css';

interface UsersListCardProps {
	user: APIUserModel;
}

const KEY = {
	BACKSPACE: 8,
	COMMA: 188,
	DELETE: 46,
	DOWN: 40,
	END: 35,
	ENTER: 13,
	ESCAPE: 27,
	HOME: 36,
	LEFT: 37,
	NUMPAD_ADD: 107,
	NUMPAD_DECIMAL: 110,
	NUMPAD_DIVIDE: 111,
	NUMPAD_ENTER: 108,
	NUMPAD_MULTIPLY: 106,
	NUMPAD_SUBTRACT: 109,
	PAGE_DOWN: 34,
	PAGE_UP: 33,
	PERIOD: 190,
	RIGHT: 39,
	SPACE: 32,
	TAB: 9,
	UP: 38
};

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

function toDateDisplayFormat(timestamp: number | string): string {
	if (!timestamp) {
		return '';
	}
	let date;
	if (typeof timestamp === 'string') {
		date = new Date(timestamp);
	} else {
		date = new Date(timestamp * 1000);
	}
	return `${date.getDate().toString().padStart(2, '0')} ${MONTHS[date.getMonth()]} ${date.getFullYear().toString()} `;
}

export function UsersListCard(props: UsersListCardProps) {
	const { user } = props;

	const [hoverRef, isHovered] = useHover();
	const [focusRef, isFocussed] = useFocus();

	const router = useHistory();

	let flareClassName = bodyStyles['users-list-card-flare'];
	if ((isHovered || isFocussed) && user.createdAt) {
		flareClassName += ` ${bodyStyles['users-list-card-flare-hover']}`;
	}

	let userFlare = (
		<span className={flareClassName} style={{ float: 'right' }}>
			<span style={{ paddingRight: '6px' }}>created</span>
			<span className={bodyStyles['user-card-emphasis']}>{toDateDisplayFormat(user.createdAt)}</span>
		</span>
	);
	const onCardSelected = () => router.push(`/user/${user.userId}`);
	return (
		<div
			tabIndex={0}
			ref={focusRef}
			className={iconStyles['user-card-grid-element']}
			onKeyDown={(e) => {
				if (e.which === KEY.ENTER || e.which === KEY.SPACE) {
					onCardSelected();
				}
			}}
		>
			<EditIcon
				className={
					isHovered || isFocussed
						? concatClassNames(
								iconStyles['users-list-card-edit'],
								iconStyles['users-list-card-edit-visible']
						  )
						: iconStyles['users-list-card-edit']
				}
			/>
			<UserCard
				cardRef={hoverRef}
				flare={userFlare}
				name={user.name}
				description={user.description}
				id={user.userId.toString()}
				onClick={(e) => {
					onCardSelected();
				}}
			/>
		</div>
	);
}
