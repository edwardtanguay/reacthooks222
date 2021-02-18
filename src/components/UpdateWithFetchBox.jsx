import { useState, useRef, useEffect } from 'react';
import '../styles/UpdateWithFetchBox.scss';

function UpdateWithFetchBox() {
	const newQuery = useRef();
	const [query, setQuery] = useState('');
	const [hits, setHits] = useState([]);

	useEffect(() => {
		if (!query) return;

		const convertHitsTohits = (rawHits) => {
			let newhits = [];
			rawHits.forEach(rawHit => {
				if (rawHit.title) {
					newhits.push({
						date: rawHit.created_at.substring(0, 10),
						title: rawHit.title,
						url: rawHit.url
					});
				}
			});
			newhits.sort((a, b) => (a.date < b.date) ? 1 : -1);
			setHits(newhits);
		};
		const fetchData = async () => {
			const response = await fetch(
				`https://hn.algolia.com/api/v1/search?query=${query}`
			);
			const data = await response.json();
			convertHitsTohits(data.hits);
		};
		fetchData();
	}, [query]);

	return (
		<div className="component_updateWithFetchBox">
			<h1>Update with Fetch Box</h1>
			<p>
				<input type="text" ref={newQuery} />&nbsp;<button type="button" onClick={() => setQuery(newQuery.current.value)}>Search</button>
			</p>
			<ul>
				{hits.map((hit, index) => (
					<li key={index}>{hit.date}: <a href={hit.url}>{hit.title}</a></li>
				))}
			</ul>
		</div>
	)
}

export default UpdateWithFetchBox;