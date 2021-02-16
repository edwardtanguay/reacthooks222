import { useState, useEffect } from 'react';

function NoteBox() {
	const [name, setName] = useState('Andrea');
	const [admin] = useState(false);
	useEffect(() => {
		document.title = `Congratulations, ${name}!`;
		console.log(`name: ${name}`)
	}, [name]);
	useEffect(() => {
		console.log(`admin: ${admin ? 'we are admin' : 'we are not admin'}`);
	}, [admin]);
	return (
		<div>
			<p>Contratulations, {name}.</p>
			<p><button onClick={() => setName('Alex')}>Change winner</button></p>	
			<p>(Note with UseEffect, the document title also changes.)</p>
		</div>
	)
}

export default NoteBox;