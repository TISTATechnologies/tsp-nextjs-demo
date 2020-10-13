import * as React from 'react';
import { Button, ButtonProps } from './Button';
import IconTemplate from '../icons/IconTemplate';

type IconButtonProps = ButtonProps & {
	icon: ReturnType<typeof IconTemplate>;
};

export function IconButton(props: IconButtonProps) {
	const { icon: Icon, ...otherProps } = props;
	return (
		<Button {...otherProps}>
			<Icon />
		</Button>
	);
}
