import { useState, useRef } from 'react';
import '../styles/UpdateWithFetchBox.scss';

function UpdateWithFetchBox() {
	const newQuery = useRef();
	const [query, setQuery] = useState('');
	return (
		<div className="component_updateWithFetchBox">
			<h1>Update with Fetch Box</h1>
			<p>Query is currently: [{query}]</p>
			<p>
				New query: <input type="text" ref={newQuery} /><button type="button" onClick={() => setQuery('nnn')}>Update</button>
			</p>
		</div>
	)
}

export default UpdateWithFetchBox;