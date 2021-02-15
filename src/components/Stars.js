import { FaStar } from 'react-icons/fa';

const createArray = (length) => [...Array(length)];

function Stars({ total }) {
	return createArray(total).map((n, index) => (
			<FaStar color="green" key={index} />
	));
}

export default Stars;