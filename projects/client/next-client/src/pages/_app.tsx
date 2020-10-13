import Head from 'next/head';
import { Provider } from 'react-redux';
import { configureStore } from '../store/configure-store';

import type { AppProps } from 'next/app';

import '../assets/common.css';

const store = configureStore();

export default function ApplicationContainer({ Component, pageProps }: AppProps) {
	return (
		<Provider store={store}>
			<Head>
				<link
					href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400;600&display=swap"
					rel="stylesheet"
				/>
			</Head>
			<div className="application-container">
				<Component {...pageProps} />
			</div>
		</Provider>
	);
}
