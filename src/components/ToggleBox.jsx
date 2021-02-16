import { useReducer } from 'react';

function ToggleBox() {
	const [checked, toggle] = useReducer(
		(checked) => !checked,
		false
	);
	return (
		<div>
			<h1>Toggle Box</h1>
			<p>
				<input type="checkbox" onClick={toggle} checked={checked ? 'checked' : ''} />
				{checked ? 'It is checked.' : 'It is not checked.'}
			</p>
		</div>
	)
}

export default ToggleBox;