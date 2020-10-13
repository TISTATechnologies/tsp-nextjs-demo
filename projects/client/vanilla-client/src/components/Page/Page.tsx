import * as React from 'react';

export function Page(
	props: React.PropsWithChildren<{
		title?: string;
	}>
) {
	const { children, title } = props;

	return <>{children}</>;
}
