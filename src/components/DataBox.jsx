import { useEffect, useState } from 'react';
import '../styles/DataBox.scss';

function removeUser(data) {
	return data.slice(0, -1);
}

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
				<button onClick={() => setData(removeUser(data))}>Delete one user</button>
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