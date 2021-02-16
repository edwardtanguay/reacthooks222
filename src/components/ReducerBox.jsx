import { useReducer } from 'react';

function ReducerBox() {
	const [count, setCount] = useReducer((count, newCount) => count + newCount, 0);
	return (
		<div>
			<h1>Reducer Box</h1>
			<p>Current count: {count}</p>
			<button onClick={() => setCount(1)}>Increment</button>
		</div>
	);
}

export default ReducerBox;