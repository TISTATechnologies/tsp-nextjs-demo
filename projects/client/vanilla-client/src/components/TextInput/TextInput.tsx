import * as React from 'react';
import styles from './text-input.module.css';

// TODO: I should omit the 'type' attribute, but that is Typescript insanity.
export type TextInputProps = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

export function TextInput(props: TextInputProps) {
	const { className, type, ...otherProps } = props;

	let inputClassName = styles['default-input'];
	if (className) {
		inputClassName += ` ${className}`;
	}

	return <input {...otherProps} className={inputClassName} type={type || 'text'}></input>;
}
