import { useReducer, useState } from 'react';

function ReducerBox() {
	const [increment, setIncrement] = useState(2);
	const [count, setCount] = useReducer((count, newCount) => count + newCount, 0);
	return (
		<div>
			<h1>Reducer Box</h1>
			<p>Current count: {count}</p>
			<button onClick={() => setCount(increment)}>Increment</button> 
			<button onClick={() => setIncrement(increment + 1)}>Increase increment</button>
		</div>
	);
}

export default ReducerBox;