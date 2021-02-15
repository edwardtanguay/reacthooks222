import Star from './Star';

const createArray = (length) => [...Array(length)];

function Stars({ total }) {
	return createArray(total).map((n, index) => (
		<Star />
	));

}

export default Stars;