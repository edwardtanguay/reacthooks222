import { useFetch } from '../hooks/useFetch';
import '../styles/HookFetchBox.scss';
import moment from 'moment';

const formatDate = (dateString) => {
	const d = moment(dateString);
	return d.format('MMMM do, YYYY');
}

function HookFetchBox({login = 'edwardtanguay'}) {
	const { loading, data, error } = useFetch(`https://api.github.com/users/${login}`);
	if (loading) return (
		<div>Loading...</div>
	);
	if (error) return (
		<pre>{JSON.stringify(error, null, 2)}</pre>
	)
	return (
		<div className="component_hookFetchBox">
			<h1>Hook Fetch Example</h1>
			<div className="container">
				<div className="imageArea"><img className="avatar" src={data.avatar_url} alt="avatar" /></div>
				<div className="dataArea">
					<div><p>{data.name}</p></div>
					<div><p><a href={data.html_url}>{data.html_url}</a></p></div>
					<div><p><a href={data.blog}>{data.blog}</a></p></div>
					<div><p>Public repos: {data.public_repos}</p></div>
					<div><p>Account Created: {formatDate(data.created_at)}</p></div>
				</div>
			</div>
		</div>
	)
}

export default HookFetchBox;