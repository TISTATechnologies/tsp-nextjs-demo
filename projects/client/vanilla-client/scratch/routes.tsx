import * as React from 'react';
import { Suspense, lazy } from 'react';
import { BrowserRouter, Switch, Route, useParams } from 'react-router-dom';
import { LoadingIndicator } from '../src/components/LoadingIndicator';

const UsersList = lazy(() => import(/* webpackChunkName: "users-list" */ '../src/views/UsersList'));
const UserProfile = lazy(() => import(/* webpackChunkName: "user-profile" */ '../src/views/UserProfile'));

function LoadingSuspense(props: React.PropsWithChildren<{}>) {
	const { children } = props;
	return (
		<Suspense
			fallback={
				<LoadingIndicator
					style={{
						margin: 'auto',
						height: '32px',
						width: '32px'
					}}
				/>
			}
		>
			{children}
		</Suspense>
	);
}

function WrappedUserProfile() {
	const { id } = useParams() as any;

	return <UserProfile id={id} />;
}

function AnyComponent() {
	return <div></div>;
}

export function Routes() {
	return (
		<BrowserRouter>
			<LoadingSuspense>
				<Switch>
					<Route path="/" exact>
						<UsersList />
					</Route>
					<Route path="/user/:id">
						<WrappedUserProfile />
					</Route>
					<Route path="/about">
						<AnyComponent />
					</Route>
					<Route path="/home">
						<AnyComponent />
					</Route>
					<Route path="/contact">
						<AnyComponent />
					</Route>
					<Route path="/contact/careers">
						<AnyComponent />
					</Route>
					<Route path="/contact/email">
						<AnyComponent />
					</Route>
					<Route path="/access/users">
						<AnyComponent />
					</Route>
					<Route path="/access/roles">
						<AnyComponent />
					</Route>
				</Switch>
			</LoadingSuspense>
		</BrowserRouter>
	);
}
