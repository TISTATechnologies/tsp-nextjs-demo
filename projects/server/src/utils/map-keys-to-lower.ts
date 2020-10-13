export function mapKeysToLower(object: { [x: string]: any }): { [x: string]: any } {
	const newObject: { [x: string]: any } = {};

	const stringly = JSON.parse(JSON.stringify(object));
	for (const key in stringly) {
		const newKey = key[0].toLowerCase() + key.substr(1);

		if (Array.isArray(stringly[key])) {
			newObject[newKey] = stringly[key].map((item) => mapKeysToLower(item));
		} else if (stringly[key] && typeof stringly[key] === 'object') {
			newObject[newKey] = mapKeysToLower(stringly[key]);
		} else {
			newObject[newKey] = stringly[key];
		}
	}

	return newObject;
}
