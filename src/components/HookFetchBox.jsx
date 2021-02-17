import { useFetch } from '../hooks/useFetch';
import '../styles/HookFetchBox.scss';

function HookFetchBox() {
	const { loading, data, error } = useFetch('https://api.github.com/users/edwardtanguay');
	if (loading) return (
		<div>Loading...</div>
	);
	if (error) return (
		<pre>{JSON.stringify(error, null, 2)}</pre>
	)
	return (
		<div className="component_hookFetchBox">
			<h1>Hook Fetch Box</h1>
			<div><img className="avatar" src={data.avatar_url} alt="avatar"/></div>
			<div><p>{data.name}</p></div>
			<div><p>{data.html_url}</p></div>
			<div><p>{data.blog}</p></div>
			<div><p>Public repos: {data.public_repos}</p></div>
			<div><p>Account Created: {data.created_at}</p></div>
			{/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
		</div>
	)
}

export default HookFetchBox;