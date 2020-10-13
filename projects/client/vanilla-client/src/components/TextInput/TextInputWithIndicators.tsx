import * as React from 'react';
import { TextInput, TextInputProps } from './TextInput';
import { LoadingIndicator } from '../LoadingIndicator';
import AlertIcon from '../icons/AlertIcon';

import styles from './text-input.module.css';

type TextInputWithIndicatorsProps = TextInputProps & {
	indicator?: 'alert' | 'loading';
};

export function TextInputWithIndicators(props: TextInputWithIndicatorsProps) {
	const { indicator, ...inputProps } = props;
	let indicatorJsx = null;
	if (indicator === 'loading') {
		indicatorJsx = (
			<div
				className={styles['input-indicator']}
				style={{
					width: '24px',
					height: '24px',
					display: 'flex'
				}}
			>
				<LoadingIndicator
					style={{
						flexGrow: 1
					}}
				/>
			</div>
		);
	} else if (indicator === 'alert') {
		indicatorJsx = (
			<AlertIcon
				className={styles['input-indicator']}
				style={{
					width: '24px',
					height: '24px'
				}}
			/>
		);
	}

	return (
		<div className={styles['input-container']}>
			{indicatorJsx}
			<TextInput {...inputProps} />
		</div>
	);
}
