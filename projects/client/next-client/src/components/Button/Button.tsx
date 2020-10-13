import * as React from 'react';

import styles from './button.module.css';

export type ButtonProps = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

export function Button(props: React.PropsWithChildren<ButtonProps>) {
	const { children, className, ...otherProps } = props;

	let buttonClassName = styles['default-button'];
	if (className) {
		buttonClassName += ` ${className}`;
	}

	return (
		<button {...otherProps} className={buttonClassName}>
			{children}
		</button>
	);
}
