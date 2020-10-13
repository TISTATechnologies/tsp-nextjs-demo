import * as React from 'react';

import styles from './text-input.module.css';

// TODO: I should omit the 'type' attribute, but that is Typescript insanity.
type TextInputLabelProps = React.DetailedHTMLProps<React.LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement>;

export function InputLabel(props: React.PropsWithChildren<TextInputLabelProps>) {
	const { className, children, ...otherProps } = props;

	let inputClassName = styles['default-input-label'];
	if (className) {
		inputClassName += ` ${inputClassName}`;
	}

	return (
		<label {...otherProps} className={inputClassName}>
			{children}
		</label>
	);
}
