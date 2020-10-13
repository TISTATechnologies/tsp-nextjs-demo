import { useRef, useState, useEffect } from 'react';

export function useFocus(): [React.MutableRefObject<any>, boolean] {
	const [isFocussed, setIsFocussed] = useState(false);

	const ref = useRef(null);

	useEffect(
		() => {
			const node = ref.current;
			if (node) {
				const handleFocusIn = () => {
					setIsFocussed(true);
				};
				const handleFocusOut = () => {
					setIsFocussed(false);
				};

				node.addEventListener('focus', handleFocusIn);
				node.addEventListener('blur', handleFocusOut);

				return () => {
					node.removeEventListener('focus', handleFocusIn);
					node.removeEventListener('blur', handleFocusOut);
				};
			}
		},
		[ref.current] // Recall only if ref changes
	);

	return [ref, isFocussed];
}
