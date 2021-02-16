import { useReducer, useState } from 'react';
import '../styles/ReducerBox.scss';

function ReducerBox() {
	const [increment, setIncrement] = useState(2);
	const [count, setCount] = useReducer((count, newCount) => count + newCount, 0);
	return (
		<div className="component_reducerBox" >
			<h1>Reducer Box</h1>
			<p>Current count: {count}</p>
			<div>
				<button onClick={() => setCount(increment)}>Increment</button>
			</div>
			<div>
				<input type="text" value={increment} />
				<button onClick={() => setIncrement(increment + 1)}>Set increment</button>
			</div>
		</div>
	);
}

export default ReducerBox;