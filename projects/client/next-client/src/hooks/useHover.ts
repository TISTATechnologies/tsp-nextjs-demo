import { useRef, useState, useEffect } from 'react';

export function useHover(): [React.MutableRefObject<any>, boolean] {
	const [isHovered, setIsHovered] = useState(false);

	const ref = useRef(null);

	useEffect(
		() => {
			const node = ref.current;
			if (node) {
				const handleMouseOver = () => {
					setIsHovered(true);
				};
				const handleMouseOut = () => {
					setIsHovered(false);
				};

				node.addEventListener('mouseover', handleMouseOver);
				node.addEventListener('mouseout', handleMouseOut);

				return () => {
					node.removeEventListener('mouseover', handleMouseOver);
					node.removeEventListener('mouseout', handleMouseOut);
				};
			}
		},
		[ref.current] // Recall only if ref changes
	);

	return [ref, isHovered];
}
