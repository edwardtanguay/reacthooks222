import { useState, useEffect } from 'react';

export function useFetch(uri) {
	const [loading, setLoading] = useState(true);
	const [data, setData] = useState();
	const [error, setError] = useState();

	useEffect(() => {
		if (!uri) return;
		fetch(uri)
			.then(data => data.json())
			.then(setData)
			.then(() => setLoading(false))
			.catch(setError)
	}, [uri]);

	return { loading, data, error };
}