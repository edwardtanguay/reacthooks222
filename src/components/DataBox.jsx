import { useEffect, useState } from 'react';
import '../styles/DataBox.scss';

function DataBox() {
	const apiUrl = 'https://api.github.com/users';
	const [data, setData] = useState([]);
	useEffect(() => {
		fetch(apiUrl)
			.then((response) => response.json())
			.then(setData);
	}, []);
	if (data) {
		return (
			<div className="component_dataBox">
				<h1>DataBox</h1>
				<p>Data source: <a href={apiUrl}>{apiUrl}</a></p>
				<ul>
					{data.map((user) => (
						<li key={user.id}>{user.login}</li>
					))}
				</ul>
			</div>
		)
	}
}

export default DataBox;