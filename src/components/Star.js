import { FaStar } from 'react-icons/fa';

function Star({ selected = false, onSelect }) {
	return (
		<FaStar
			color={selected ? 'yellow' : '#888'}
			onClick={onSelect}	
		/>
	)
}

export default Star;