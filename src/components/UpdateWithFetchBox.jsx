import { useState, useRef, useEffect } from 'react';
import '../styles/UpdateWithFetchBox.scss';

function UpdateWithFetchBox() {
	const newQuery = useRef();
	const [query, setQuery] = useState('');
	const [cleanHits, setCleanHits] = useState([]);

	useEffect(() => {
		if (!query) return;

		const convertHitsToCleanHits = (hits) => {
			let newCleanHits = [];
			hits.forEach(hit => {
				if (hit.title) {
					newCleanHits.push({
						date: hit.created_at.substring(0, 10),
						title: hit.title,
						url: hit.url
					});
				}
			});
			newCleanHits.sort((a, b) => (a.date < b.date) ? 1 : -1);
			setCleanHits(newCleanHits);
		};
		const fetchData = async () => {
			const response = await fetch(
				`https://hn.algolia.com/api/v1/search?query=${query}`
			);
			const data = await response.json();
			convertHitsToCleanHits(data.hits);
		};
		fetchData();
	}, [query]);

	return (
		<div className="component_updateWithFetchBox">
			<h1>Update with Fetch Box</h1>
			<p>Query is currently: {query}</p>
			<p>
				Search: <input type="text" ref={newQuery} /><button type="button" onClick={() => setQuery(newQuery.current.value)}>Update</button>
			</p>
			<ul>
				{cleanHits.map((cleanHit, index) => (
					<li key={index}>{cleanHit.date}: <a href={cleanHit.url}>{cleanHit.title}</a></li>
				))}
			</ul>
		</div>
	)
}

export default UpdateWithFetchBox;