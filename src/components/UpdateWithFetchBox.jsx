import { useState, useRef } from 'react';
import '../styles/UpdateWithFetchBox.scss';

function UpdateWithFetchBox() {
	const searchText = useRef();
	const [query, setQuery] = useState('');
	return (
		<div className="component_updateWithFetchBox">
			<h1>Update with Fetch Box</h1>
			<p>Query is currently: {query}</p>
			<p>
				Search: <input type="text" ref={searchText} /><button type="button" onClick={() => setQuery(searchText.current.value)}>Update</button>
			</p>
		</div>
	)
}

export default UpdateWithFetchBox;