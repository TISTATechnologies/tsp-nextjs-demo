import Head from 'next/head';

export function Page(
	props: React.PropsWithChildren<{
		title?: string;
	}>
) {
	const { children, title } = props;
	const displayTitle = title || 'My App';
	return (
		<>
			<Head>
				<title>{displayTitle}</title>
			</Head>
			{children}
		</>
	);
}
