import { promiseTimeout } from '../utils/promise-timeout';
import { REST_API } from './backend-host';

export type FetchModifyUserResult = void;

export async function fetchModifyUser(
	id: string,
	name: string,
	dob: string,
	address: string,
	description: string
): Promise<FetchModifyUserResult> {
	try {
		const userResult = await promiseTimeout(
			fetch(`${REST_API}/users/${id}`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					name,
					dob,
					address,
					description
				})
			}),
			6000
		);
		return;
	} catch (e) {
		// TODO:
		return;
	}
}
