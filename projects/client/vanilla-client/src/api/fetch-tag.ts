import { promiseTimeout } from '../utils/promise-timeout';
import { APIUserModel } from './api-types';
import { REST_API } from './backend-host';

export type FetchTagResult = APIUserModel['tags'][0];

export async function fetchTag(tagId: string): Promise<FetchTagResult> {
	try {
		const userResult = await promiseTimeout(
			fetch(`${REST_API}/tags/${tagId}`, {
				method: 'GET'
			}),
			6000
		);
		return userResult.json();
	} catch (e) {
		// TODO:
		return;
	}
}
