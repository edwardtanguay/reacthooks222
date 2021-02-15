import Star from './Star';
import { useState } from 'react';

const createArray = (length) => [...Array(length)];

function Stars({ total }) {
	const [selectedStars, setSelectedStars] = useState(0);
	return createArray(total).map((n, index) => (
		<Star
			key={index}
			selected= {selectedStars > index}
			onSelect={() => setSelectedStars(index + 1)}
		/>
	));

}

export default Stars;