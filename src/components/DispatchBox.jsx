import { useReducer } from 'react';

function reducer(state, action) {
	switch (action) {
		case 'addBrackets':
			state = `[${state}]`;
			return state;
		case 'addBraces':
			state = `{${state}}`;
			return state;
		default:
			return state;
	}
}

function DispatchBox({ message }) {
	const [text, dispatch] = useReducer(
		reducer,
		'initial text'
	);
	return (
		<div>
			<h1>Dispatch Box</h1>
			<p>message: {message}</p>
			<p>text: {text}</p>
			<button onClick={() => dispatch('addBrackets')}>Add brackets</button>
			<button onClick={() => dispatch('addBraces')}>Add braces</button>
		</div>
	);
}

export default DispatchBox;