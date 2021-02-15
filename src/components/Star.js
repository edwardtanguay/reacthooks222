import { FaStar } from 'react-icons/fa';

function Star({ selected = false }) {
	return (
		<FaStar color={selected ? 'yellow' : '#888'} />
	)
}

export default Star;