const UNSPLASH_COLLECTION = '148984';

export function getUnsplashImage(nonce: string) {
	return `https://source.unsplash.com/collection/${UNSPLASH_COLLECTION}/144x144?${nonce}`;
}
