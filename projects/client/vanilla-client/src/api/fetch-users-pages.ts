import { promiseTimeout } from '../utils/promise-timeout';
import { APIUserModel } from './api-types';
import { REST_API } from './backend-host';

export type FetchGetPagesResult = APIUserModel[];

export async function fetchGetPages(pageStart: number, numUsers: number, filter = ''): Promise<FetchGetPagesResult> {
	const query = new URLSearchParams();
	query.append('pageStart', pageStart.toString());
	query.append('pageSize', numUsers.toString());
	if (filter) {
		query.append('filter', filter);
	}

	try {
		const pagesResult = await promiseTimeout(
			fetch(`${REST_API}/users?${query.toString()}`, {
				method: 'GET'
			}),
			6000
		);
		return pagesResult.json();
	} catch (e) {
		// TODO:
		return;
	}
}
